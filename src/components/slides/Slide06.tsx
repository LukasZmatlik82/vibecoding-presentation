import {
  Activity,
  Building2,
  Code2,
  LineChart,
  Rocket,
  Zap,
} from 'lucide-react'
import { cn } from '../../lib/cn'

type Slide06Props = {
  slideIndex: number
}

const glass =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'

export function Slide06({ slideIndex }: Slide06Props) {
  const n = String(slideIndex + 1).padStart(2, '0')

  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col',
        'bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]',
        'bg-[length:40px_40px]',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-35 [mask-image:radial-gradient(ellipse_85%_65%_at_40%_0%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.07),transparent_60%)]" />

      <header className="relative z-[1] mb-4 flex shrink-0 items-start justify-between gap-4 lg:mb-5">
        <div className="animate-fade-in flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 backdrop-blur-md">
          Logo
        </div>
      </header>

      <div className="relative z-[1] mb-5 max-w-5xl lg:mb-6">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.28em] text-fuchsia-400/90">
          Slide 6 · 2026
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
          The Industry Reality —{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            By the Numbers
          </span>
        </h2>
        <p className="animate-fade-in-delay-3 mt-2 max-w-3xl bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-sm font-medium text-transparent sm:text-base">
          Why the world&apos;s top companies are abandoning traditional
          development.
        </p>
      </div>

      <div className="relative z-[1] grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        {/* Adoption + Enterprise */}
        <article
          className={cn(
            glass,
            'animate-fade-in-delay-1 flex flex-col justify-between border-cyan-500/35 p-5 sm:p-6 lg:col-span-4',
          )}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              <Activity className="h-4 w-4 text-cyan-400" aria-hidden />
              The Adoption Explosion
            </div>
            <p className="mt-4 font-mono text-5xl font-bold tabular-nums tracking-tight text-white drop-shadow-[0_0_28px_rgba(34,211,238,0.35)] sm:text-6xl lg:text-[3.25rem]">
              92%
            </p>
            <p className="mt-2 text-sm font-medium text-cyan-200/90">
              Daily usage
            </p>
          </div>
          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
            As of 2026,{' '}
            <span className="font-medium text-white">
              92% of US developers and tech-forward professionals
            </span>{' '}
            use AI coding tools on a daily basis.
          </p>
        </article>

        <article
          className={cn(
            glass,
            'animate-fade-in-delay-2 flex flex-col p-5 sm:p-6 lg:col-span-8',
          )}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
            <Building2 className="h-4 w-4 text-fuchsia-400" aria-hidden />
            The Enterprise Shift
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
            <span className="font-semibold text-white">Cursor AI</span>, a
            leading vibe coding platform, recently surpassed{' '}
            <span className="text-fuchsia-200">
              $2 Billion in Annual Recurring Revenue
            </span>
            , with{' '}
            <span className="font-medium text-white">60% of that revenue</span>{' '}
            now coming directly from enterprise contracts (up from mostly
            individual users a year ago). This is no longer a tool for
            hobbyists; it is{' '}
            <span className="font-medium text-cyan-200">corporate infrastructure</span>.
          </p>
        </article>

        {/* Output metric — full width */}
        <article
          className={cn(
            glass,
            'animate-fade-in-delay-2 border border-cyan-500/30 p-5 sm:p-6 lg:col-span-12',
          )}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            <Code2 className="h-4 w-4 text-cyan-400" aria-hidden />
            The Output Metric
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="font-mono text-3xl font-bold tabular-nums text-white sm:text-4xl">
                41%–46%
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                Of global code (new)
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Per the 2026 GitHub Octoverse report, nearly half of all new code
                written globally is now AI-generated.
              </p>
            </div>
            <div className="rounded-xl border border-fuchsia-500/25 bg-fuchsia-950/20 p-4">
              <p className="text-sm font-semibold text-fuchsia-200">
                AI-first companies
              </p>
              <p className="mt-2 font-mono text-2xl font-bold tabular-nums text-white sm:text-3xl">
                70%–90%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                At companies like Anthropic and Google, AI-generated share of
                new code falls in this range.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Rocket className="h-4 w-4 text-pink-400" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  &ldquo;Zero-to-One&rdquo; startups
                </span>
              </div>
              <p className="mt-3 font-mono text-3xl font-bold tabular-nums text-pink-300 sm:text-4xl">
                21%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Of Y Combinator&apos;s Winter 2026 cohort reported codebases over{' '}
                <span className="font-medium text-white">91% AI-generated</span>.
              </p>
            </div>
          </div>
        </article>

        {/* ROI row */}
        <article
          className={cn(
            glass,
            'animate-fade-in-delay-3 flex flex-col p-5 sm:p-6 lg:col-span-6',
          )}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            <Zap className="h-4 w-4 text-cyan-400" aria-hidden />
            The ROI for Shared Services
          </div>
          <p className="mt-4 font-mono text-4xl font-bold tabular-nums text-cyan-300 sm:text-5xl">
            55%
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Faster task completion
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
            Studies show that professionals using AI to build automations
            complete their tasks{' '}
            <span className="font-medium text-cyan-200">55% faster</span> than
            those building manually.
          </p>
        </article>

        <article
          className={cn(
            glass,
            'animate-fade-in-delay-3 flex flex-col border-fuchsia-500/25 p-5 sm:p-6 lg:col-span-6',
          )}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
            <LineChart className="h-4 w-4 text-fuchsia-400" aria-hidden />
            The Death of the Backlog
          </div>
          <p className="mt-4 font-mono text-4xl font-bold tabular-nums text-fuchsia-200 sm:text-5xl">
            60%
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Reduction in development time
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
            IBM reported a{' '}
            <span className="font-medium text-fuchsia-200">
              60% reduction in development time
            </span>{' '}
            for internal enterprise applications (like the ones SSCs rely on)
            when switching to AI-assisted development.
          </p>
        </article>
      </div>

      <div
        className="pointer-events-none absolute bottom-2 right-0 z-[2] mt-4 flex items-center justify-center rounded-lg border border-fuchsia-500/60 bg-fuchsia-950/70 px-3 py-1.5 text-lg font-bold tabular-nums text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.45)] backdrop-blur-sm sm:bottom-4 sm:text-2xl lg:mt-0"
        aria-label={`Slide ${slideIndex + 1}`}
      >
        {n}
      </div>
    </div>
  )
}
