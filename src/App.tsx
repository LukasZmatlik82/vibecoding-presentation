import { useState } from 'react'
import { PresentationLanding } from './components/PresentationLanding'
import { Sidebar } from './components/Sidebar'
import { SlideViewport } from './components/SlideViewport'
import { SLIDES } from './data/slides'

function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const current = SLIDES[activeSlide]

  if (!hasEntered) {
    return (
      <div className="min-h-screen">
        <PresentationLanding onEnter={() => setHasEntered(true)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen min-h-full bg-slate-950 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(34,211,238,0.12),transparent),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(217,70,239,0.08),transparent)] text-slate-200">
      <Sidebar
        slides={SLIDES}
        activeIndex={activeSlide}
        onSelect={setActiveSlide}
      />
      <main className="min-h-screen pl-64 sm:pl-72">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 sm:px-10 lg:px-12">
          <SlideViewport
            key={current.id}
            slideId={current.id}
            title={current.title}
            index={activeSlide}
          />
        </div>
      </main>
    </div>
  )
}

export default App
