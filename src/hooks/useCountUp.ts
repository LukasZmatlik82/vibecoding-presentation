import { useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Animates from 0 toward `end` on mount. Resets when `end` or timing deps change.
 * Respects `prefers-reduced-motion: reduce`.
 */
export function useCountUp(
  end: number,
  options?: { durationMs?: number; delayMs?: number },
) {
  const { durationMs = 1400, delayMs = 0 } = options ?? {}
  const [value, setValue] = useState(() =>
    prefersReducedMotion() ? end : 0,
  )

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(end)
      return
    }

    setValue(0)
    let raf = 0
    const startAt = performance.now() + delayMs

    const tick = (now: number) => {
      if (now < startAt) {
        raf = requestAnimationFrame(tick)
        return
      }
      const elapsed = now - startAt
      const t = Math.min(1, elapsed / durationMs)
      const eased = easeOutCubic(t)
      setValue(Math.round(end * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setValue(end)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, durationMs, delayMs])

  return value
}
