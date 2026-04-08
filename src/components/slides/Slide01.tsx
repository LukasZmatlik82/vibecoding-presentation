import { MessageSquare, Terminal } from 'lucide-react'
import heroImage from '../../assets/slide01-hero.png'
import { cn } from '../../lib/cn'

type Slide01Props = {
  /** Zero-based index in deck (used for corner badge). */
  slideIndex: number
}

export function Slide01({ slideIndex }: Slide01Props) {
  const n = String(slideIndex + 1).padStart(2, '0')

  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col',
        'bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]',
        'bg-[length:40px_40px]',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]" />

      <header className="relative z-[1] mb-6 flex shrink-0 items-start justify-between gap-4">
        <div className="animate-fade-in flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 backdrop-blur-md">
          Logo
        </div>
      </header>

      <div className="relative z-[1] mx-auto mb-8 max-w-4xl text-center">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400/90">
          What is &quot;Vibe Coding&quot;?
        </p>
        <h2 className="animate-fade-in-delay-2 mt-3 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-[2rem]">
          From Code Typist to Process Architect.
        </h2>
        <p className="animate-fade-in-delay-3 mt-4 text-left text-sm leading-relaxed text-slate-300 sm:text-center sm:text-[0.95rem]">
          <span className="font-medium text-white">The Definition: </span>
          Vibe coding (named Collins Dictionary&apos;s 2025 Word of the Year) is
          the practice of building software, scripts, or automations entirely
          through natural language. Instead of writing syntax line-by-line, you
          converse with an AI agent in plain English, and the AI writes and
          executes the code.
        </p>
      </div>

      <p className="relative z-[1] mb-5 text-center text-sm font-medium text-slate-400">
        The Mindset Shift:{' '}
        <span className="text-slate-300">
          To succeed with vibe coding, you must change how you view automation.
        </span>
      </p>

      <div className="relative z-[1] grid min-h-0 flex-1 grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          className={cn(
            'animate-fade-in-delay-1 flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md',
            'lg:col-span-4',
          )}
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-pink-500/40 bg-pink-500/10">
            <Terminal className="h-5 w-5 text-pink-400" aria-hidden />
          </div>
          <p className="font-mono text-3xl font-bold tracking-tight text-pink-400 sm:text-4xl">
            SYNTAX
          </p>
          <h3 className="mt-2 text-base font-semibold text-white">
            The Old Way (Syntax-Driven)
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
            &ldquo;What exact formula or code do I need to type to make this
            system move data from A to B?&rdquo;
          </p>
          <p className="mt-3 text-xs text-slate-500">
            (Requires deep technical training).
          </p>
        </article>

        <div className="animate-fade-in-delay-2 flex min-h-[220px] items-center justify-center lg:col-span-4 lg:min-h-0">
          <div className="relative w-full overflow-hidden rounded-3xl border border-cyan-500/40 shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]">
            <img
              src={heroImage}
              alt="Futuristic portrait with neon lighting representing human–AI collaboration"
              className="aspect-[4/5] w-full object-cover object-center sm:aspect-[3/4] lg:aspect-[4/5] lg:max-h-[min(52vh,520px)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        <article
          className={cn(
            'animate-fade-in-delay-3 flex flex-col rounded-2xl border border-cyan-500/50 p-5 text-white shadow-[0_0_32px_-10px_rgba(217,70,239,0.45)] backdrop-blur-md',
            'bg-gradient-to-b from-slate-950 via-indigo-950/90 to-fuchsia-700/95',
            'lg:col-span-4',
          )}
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/50 bg-white/10">
            <MessageSquare className="h-5 w-5 text-cyan-300" aria-hidden />
          </div>
          <p className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            INTENT
          </p>
          <h3 className="mt-2 text-base font-semibold">
            The New Way (Intent-Driven)
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
            &ldquo;Here is the business rule. When an invoice arrives, extract
            the total, check it against the PO in the ERP, and flag it if
            it&apos;s over $10k.&rdquo;
          </p>
          <p className="mt-3 text-xs text-white/65">
            (Requires clear communication and process knowledge).
          </p>
        </article>
      </div>

      <footer className="relative z-[1] mt-8 rounded-2xl border border-fuchsia-500/30 bg-white/5 p-5 backdrop-blur-md sm:p-6">
        <h4 className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
          The Core Principle: &ldquo;Abductive&rdquo; Problem Solving
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          You no longer micro-manage the steps of a process; you manage the
          outcome. Your job is to provide the AI with a clear goal, sharp
          business logic, and the right boundaries. The AI figures out the
          &ldquo;how.&rdquo;
        </p>
      </footer>

      <div
        className="pointer-events-none absolute bottom-2 right-0 z-[2] flex items-center justify-center rounded-lg border border-fuchsia-500/60 bg-fuchsia-950/70 px-3 py-1.5 text-lg font-bold tabular-nums text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.45)] backdrop-blur-sm sm:bottom-4 sm:text-2xl"
        aria-label={`Slide ${slideIndex + 1}`}
      >
        {n}
      </div>
    </div>
  )
}
