import { SLIDES } from '../data/slides'
import { Slide01 } from './slides/Slide01'
import { Slide02 } from './slides/Slide02'
import { Slide03 } from './slides/Slide03'
import { Slide04 } from './slides/Slide04'
import { Slide05 } from './slides/Slide05'
import { Slide06 } from './slides/Slide06'
import { LiveFeedback } from './slides/LiveFeedback'
import { SlidePrompts } from './slides/SlidePrompts'

type SlideViewportProps = {
  slideId: string
  title: string
  index: number
}

export function SlideViewport({ slideId, title, index }: SlideViewportProps) {
  if (slideId === 'basics') {
    return <Slide01 slideIndex={index} />
  }

  if (slideId === 'ecosystem') {
    return <Slide02 slideIndex={index} />
  }

  if (slideId === 'workflow') {
    return <Slide03 slideIndex={index} />
  }

  if (slideId === 'security') {
    return <Slide04 slideIndex={index} />
  }

  if (slideId === 'use-cases') {
    return <Slide05 slideIndex={index} />
  }

  if (slideId === 'industry-reality') {
    return <Slide06 slideIndex={index} />
  }

  if (slideId === 'prompts') {
    return <SlidePrompts />
  }

  if (slideId === 'live-feedback') {
    return <LiveFeedback />
  }

  return (
    <div className="animate-slide-fade-in flex min-h-0 flex-1 flex-col">
      <header className="mb-8 shrink-0">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-fuchsia-400/80">
          Slide {index + 1} of {SLIDES.length}
        </p>
        <h2 className="mt-2 bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-pink-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          {title}
        </h2>
      </header>
      <div className="min-h-0 flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md">
        <p className="text-slate-400">
          Content for this slide will be added in the next iteration.
        </p>
      </div>
    </div>
  )
}
