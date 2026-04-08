import {
  BookMarked,
  Code2,
  RefreshCw,
  Sparkles,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { vibeCardClass, vibeIconChipClass, vibeIconTextClass } from '../../lib/vibeCard'

const steps = [
  {
    id: 'strategist',
    n: 1,
    title: 'The Strategist',
    badge: 'Powered by Gemini Pro',
    icon: Sparkles,
    action:
      'Before writing a single line of code, open Gemini Pro. Treat it as your Senior Business Analyst and Lead Architect.',
    goal: (
      <>
        Have a conversation to define the problem, map out the user journey, and
        decide on the technology stack. Ask Gemini to write the step-by-step{' '}
        <span className="font-medium text-slate-100">&ldquo;Master Prompt&rdquo;</span> or
        blueprint that you will later feed to your coding AI.
      </>
    ),
    variant: 'goal' as const,
  },
  {
    id: 'context',
    n: 2,
    title: 'The Context Engine',
    badge: 'Docs & Rules',
    icon: BookMarked,
    action:
      'Move into Cursor IDE. Before generating code, give the AI its boundaries.',
    goal: null,
    practice: (
      <ul className="mt-2 list-none space-y-2 pl-0 text-sm leading-relaxed text-slate-400">
        <li className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>
            Use a{' '}
            <code className="rounded bg-slate-900/80 px-1.5 py-0.5 font-mono text-xs text-slate-100">
              .cursorrules
            </code>{' '}
            file to tell the AI exactly how you want things done (e.g., &ldquo;Always
            write error logs,&rdquo; &ldquo;Never use placeholder code&rdquo;).
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>
            Use Cursor&apos;s{' '}
            <code className="rounded bg-slate-900/80 px-1.5 py-0.5 font-mono text-xs text-slate-100">
              @Docs
            </code>{' '}
            feature to feed it the exact, up-to-date API documentation of the systems
            you are trying to connect. Do not let the AI guess the API structure.
          </span>
        </li>
      </ul>
    ),
    variant: 'practice' as const,
  },
  {
    id: 'builder',
    n: 3,
    title: 'The Builder',
    badge: 'Cursor + Claude',
    icon: Code2,
    action:
      'Paste Gemini’s blueprint into Cursor, using Claude (e.g., Claude 3.5 Sonnet) as your execution engine.',
    goal: null,
    practice: (
      <p className="text-sm leading-relaxed text-slate-400">
        Build step-by-step. Do not ask for the whole application at once. Ask
        Claude to build the login screen. Stop. Review it. Then ask it to build
        the database connection.
      </p>
    ),
    variant: 'practice' as const,
  },
  {
    id: 'iteration',
    n: 4,
    title: 'The Iteration Loop',
    badge: 'Run, React, Refine',
    icon: RefreshCw,
    action: 'Test the application constantly.',
    goal: null,
    practice: (
      <p className="text-sm leading-relaxed text-slate-400">
        When (not if) it breaks, do not try to manually rewrite the code. Copy
        the error message from your terminal, paste it back into Cursor, and ask:{' '}
        <span className="italic text-slate-100">
          &ldquo;Explain your reasoning for this error, and then provide a
          fix.&rdquo;
        </span>
      </p>
    ),
    variant: 'practice' as const,
  },
]

const stepAnim = [
  'animate-fade-in-delay-1',
  'animate-fade-in-delay-2',
  'animate-fade-in-delay-3',
  'animate-fade-in-delay-4',
] as const

export function Slide05() {
  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col pb-14',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-35 [mask-image:radial-gradient(ellipse_85%_55%_at_50%_12%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_58%)]" />

      <div className="relative z-[1] mb-5 max-w-4xl lg:mb-6">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          The Advanced Workflow — Vibe Coding with Cursor AI
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-[1.65rem]">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            A proven, multi-model approach for building production-ready
            applications.
          </span>
        </h2>
      </div>

      <div
        className={cn(
          vibeCardClass(0),
          'animate-fade-in-delay-2 relative z-[1] mb-8 p-4 sm:p-5',
        )}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          The Strategy
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Do not use one AI for everything. The most successful teams split the
          workflow by the strengths of the models—using one for high-level
          architecture and another for ground-level execution.
        </p>
      </div>

      <div className="relative z-[1] min-h-0 flex-1">
        <h3 className="animate-fade-in-delay-3 mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
          The 4-Step Professional Pipeline
        </h3>

        <div className="relative">
          <div
            className="absolute left-[18px] top-3 bottom-3 w-px bg-white/15 sm:left-5"
            aria-hidden
          />

          <ol className="relative flex list-none flex-col gap-6 sm:gap-7">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <li
                  key={step.id}
                  className={cn('relative pl-12 sm:pl-14', stepAnim[i])}
                >
                  <span
                    className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-700 text-xs font-bold text-slate-100 shadow-[0_0_12px_-4px_rgba(0,0,0,0.5)] sm:top-0 sm:h-10 sm:w-10 sm:text-sm"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <article className={cn(vibeCardClass(i + 1), 'p-4 sm:p-5')}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <div
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                          vibeIconChipClass(i + 1),
                        )}
                      >
                        <Icon className={cn('h-5 w-5', vibeIconTextClass(i + 1))} aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <h4 className="text-base font-semibold text-slate-100 sm:text-lg">
                            {step.n}. {step.title}
                          </h4>
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                            {step.badge}
                          </span>
                        </div>

                        <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                              The Action
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-400">
                              {step.action}
                            </p>
                          </div>

                          {step.variant === 'goal' && step.goal && (
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                The Goal
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                {step.goal}
                              </p>
                            </div>
                          )}

                          {step.variant === 'practice' && step.practice && (
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                The Best Practice
                              </p>
                              {step.practice}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
