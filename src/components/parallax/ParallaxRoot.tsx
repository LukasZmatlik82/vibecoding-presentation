import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type MutableRefObject,
  type ReactNode,
} from 'react'

import { cn } from '../../lib/cn'

/** Max extra scale at full proximity & depth 1 (~+0.7% size) */
const SCALE_GAIN = 0.007
/** Almost no slide — scale does the work */
const MAX_SHIFT_PX = 0.65

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return reduced
}

type ParallaxLayerProps = {
  as?: ElementType
  depth?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
} & HTMLAttributes<HTMLElement>

function smoothstep(t: number): number {
  const x = Math.max(0, Math.min(1, t))
  return x * x * (3 - 2 * x)
}

/**
 * Subtle scale toward the pointer (slightly “bigger” when the cursor nears the box center)
 * plus a very small shift. Each element uses its own bounds.
 */
export const ParallaxLayer = forwardRef<HTMLElement, ParallaxLayerProps>(
  function ParallaxLayer(
    {
      as: Component = 'div',
      className,
      depth = 1,
      style,
      children,
      ...rest
    },
    forwardedRef,
  ) {
    const localRef = useRef<HTMLElement | null>(null)
    const reduced = usePrefersReducedMotion()

    const [transform, setTransform] = useState(
      'translate3d(0,0,0) scale(1)',
    )

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        localRef.current = node
        if (typeof forwardedRef === 'function') forwardedRef(node)
        else if (forwardedRef) {
          ;(forwardedRef as MutableRefObject<HTMLElement | null>).current = node
        }
      },
      [forwardedRef],
    )

    useEffect(() => {
      if (reduced) return

      const el = localRef.current
      if (!el) return

      const apply = (clientX: number, clientY: number) => {
        const r = el.getBoundingClientRect()
        if (r.width < 1 || r.height < 1) return

        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const halfW = Math.max(r.width * 0.5, 40)
        const halfH = Math.max(r.height * 0.5, 40)
        const refR = Math.max(halfW, halfH) * 1.35
        const dist = Math.hypot(clientX - cx, clientY - cy)
        const proximity = smoothstep(1 - dist / refR)

        const mag = Math.min(Math.abs(depth), 1.15)

        let scale = 1
        if (depth >= 0) {
          scale = 1 + SCALE_GAIN * proximity * mag
        } else {
          // Backdrops: barely breathe (slightly smaller when pointer is near)
          scale = 1 + 0.35 * SCALE_GAIN * proximity * depth * mag
        }

        const nx = Math.max(-1, Math.min(1, (clientX - cx) / halfW))
        const ny = Math.max(-1, Math.min(1, (clientY - cy) / halfH))
        const k = MAX_SHIFT_PX * mag * (depth >= 0 ? 1 : 0.45)
        const tx = nx * k * (depth >= 0 ? 1 : -1)
        const ty = ny * k * (depth >= 0 ? 1 : -1)

        setTransform(
          `translate3d(${tx}px, ${ty}px, 0) scale(${scale.toFixed(5)})`,
        )
      }

      const reset = () => {
        setTransform('translate3d(0,0,0) scale(1)')
      }

      const onMove = (e: PointerEvent) => {
        apply(e.clientX, e.clientY)
      }

      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('blur', reset)
      const onWinLeave = (e: MouseEvent) => {
        if (e.relatedTarget === null) reset()
      }
      document.documentElement.addEventListener('mouseleave', onWinLeave)

      return () => {
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('blur', reset)
        document.documentElement.removeEventListener('mouseleave', onWinLeave)
      }
    }, [reduced, depth])

    return (
      <Component
        ref={setRefs}
        className={cn('will-change-transform', className)}
        style={{
          ...style,
          transform,
          transformOrigin: 'center center',
        }}
        {...rest}
      >
        {children}
      </Component>
    )
  },
)

/** Default depth tuned for subtle “card” response */
export function ParallaxBox(
  props: Omit<ParallaxLayerProps, 'depth'> & { depth?: number },
) {
  const { depth = 0.75, ...rest } = props
  return <ParallaxLayer depth={depth} {...rest} />
}
