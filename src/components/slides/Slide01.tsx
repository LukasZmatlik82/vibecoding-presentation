import { MessageSquare, Terminal } from 'lucide-react'
import heroImage from '../../assets/slide01-hero.png'
import { cn } from '../../lib/cn'

export function Slide01() {
  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]" />

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

      <div
        className={cn(
          'relative z-[1] mx-auto grid min-h-0 w-full max-w-6xl flex-1 grid-cols-1 gap-5',
          'lg:grid-cols-3 lg:grid-rows-1 lg:items-stretch lg:gap-6 lg:h-[min(52vh,520px)] lg:min-h-0',
        )}
      >
        <article
          className={cn(
            'animate-fade-in-delay-1 flex min-h-[220px] w-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-5',
            'lg:min-h-0 lg:h-full lg:justify-between lg:overflow-y-auto',
          )}
        >
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-pink-500/40 bg-pink-500/10 sm:mb-4 sm:h-11 sm:w-11">
              <Terminal className="h-5 w-5 text-pink-400" aria-hidden />
            </div>
            <p className="font-mono text-2xl font-bold tracking-tight text-pink-400 sm:text-3xl lg:text-[1.65rem]">
              SYNTAX
            </p>
            <h3 className="mt-1.5 text-sm font-semibold text-white sm:mt-2 sm:text-base">
              The Old Way (Syntax-Driven)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:mt-3">
              &ldquo;What exact formula or code do I need to type to make this
              system move data from A to B?&rdquo;
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            (Requires deep technical training).
          </p>
        </article>

        <div className="animate-fade-in-delay-2 flex min-h-[220px] w-full flex-col lg:min-h-0 lg:h-full">
          <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-3xl border border-cyan-500/40 shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]">
            <img
              src={heroImage}
              alt="Futuristic portrait with neon lighting representing human–AI collaboration"
              className="h-full min-h-[200px] w-full object-cover object-center lg:min-h-0"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        <article
          className={cn(
            'animate-fade-in-delay-3 flex min-h-[220px] w-full flex-col rounded-2xl border border-cyan-500/50 p-4 text-white shadow-[0_0_32px_-10px_rgba(217,70,239,0.45)] backdrop-blur-md sm:p-5',
            'bg-gradient-to-b from-slate-950 via-indigo-950/90 to-fuchsia-700/95',
            'lg:min-h-0 lg:h-full lg:justify-between lg:overflow-y-auto',
          )}
        >
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/50 bg-white/10 sm:mb-4 sm:h-11 sm:w-11">
              <MessageSquare className="h-5 w-5 text-cyan-300" aria-hidden />
            </div>
            <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[1.65rem]">
              INTENT
            </p>
            <h3 className="mt-1.5 text-sm font-semibold sm:mt-2 sm:text-base">
              The New Way (Intent-Driven)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90 sm:mt-3">
              &ldquo;Here is the business rule. When an invoice arrives, extract
              the total, check it against the PO in the ERP, and flag it if
              it&apos;s over $10k.&rdquo;
            </p>
          </div>
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
    </div>
  )
}
