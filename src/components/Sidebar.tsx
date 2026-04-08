import { Gamepad2 } from 'lucide-react'
import { cn } from '../lib/cn'
import type { SlideMeta } from '../data/slides'

type SidebarProps = {
  slides: SlideMeta[]
  activeIndex: number
  onSelect: (index: number) => void
}

function slideIndex(slides: SlideMeta[], slide: SlideMeta) {
  return slides.indexOf(slide)
}

export function Sidebar({ slides, activeIndex, onSelect }: SidebarProps) {
  const deckSlides = slides.filter((s) => (s.section ?? 'deck') === 'deck')
  const toolSlides = slides.filter((s) => (s.section ?? 'deck') === 'tools')
  const escapeSlides = slides.filter((s) => s.section === 'escape')

  return (
    <aside className="fixed left-0 top-0 z-20 flex h-full w-64 flex-col border-r border-white/10 bg-slate-950/90 backdrop-blur-md sm:w-72">
      <div className="shrink-0 border-b border-white/10 px-4 py-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Workshop
        </p>
        <h1 className="mt-1 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 bg-clip-text text-lg font-semibold leading-tight text-transparent">
          Vibe Coding
        </h1>
      </div>
      <nav
        className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 py-4"
        aria-label="Presentation and tools"
      >
        <ul className="flex shrink-0 flex-col gap-1">
          {deckSlides.map((slide) => {
            const index = slideIndex(slides, slide)
            const active = index === activeIndex
            return (
              <li key={slide.id}>
                <button
                  type="button"
                  onClick={() => onSelect(index)}
                  className={cn(
                    'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                    active
                      ? 'border-white/20 bg-white/10 text-slate-100 shadow-[0_0_20px_-4px_rgba(255,255,255,0.08)]'
                      : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white',
                  )}
                >
                  <span className="mr-2 font-mono text-xs text-slate-500">
                    {String(index).padStart(2, '0')}
                  </span>
                  {slide.title}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Escape Room — between deck and Tools */}
        {escapeSlides.length > 0 && (
          <div className="shrink-0 border-t border-white/5 pt-3 mt-2">
            {escapeSlides.map((slide) => {
              const index = slideIndex(slides, slide)
              const active = index === activeIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => onSelect(index)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                    active
                      ? 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_-6px_rgba(34,211,238,0.3)]'
                      : 'border-transparent text-slate-600 hover:border-white/10 hover:bg-white/5 hover:text-slate-400',
                  )}
                >
                  <Gamepad2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="italic">{slide.title}</span>
                </button>
              )
            })}
          </div>
        )}

        {toolSlides.length > 0 && (
          <div className="flex min-h-0 flex-1 flex-col justify-center py-6">
            <ul className="flex shrink-0 flex-col gap-1">
              <li>
                <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Tools
                </p>
              </li>
              {toolSlides.map((slide) => {
                const index = slideIndex(slides, slide)
                const active = index === activeIndex
                return (
                  <li key={slide.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(index)}
                      className={cn(
                        'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                        active
                          ? 'border-white/20 bg-white/10 text-slate-100 shadow-[0_0_20px_-4px_rgba(255,255,255,0.08)]'
                          : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white',
                        !active && 'text-slate-400',
                      )}
                    >
                      <span className="mr-2 font-mono text-xs text-slate-500">
                        ·
                      </span>
                      {slide.title}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>
    </aside>
  )
}
