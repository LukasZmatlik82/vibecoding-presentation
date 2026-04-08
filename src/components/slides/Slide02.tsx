import { Bot, Quote, Sparkles, Terminal } from 'lucide-react'
import { cn } from '../../lib/cn'

const glassCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'

export function Slide02() {
  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.06),transparent_55%)]" />

      <div className="relative z-[1] mb-6 max-w-4xl lg:mb-8">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.28em] text-fuchsia-400/90">
          Slide 2
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[1.75rem]">
          The 2026 Ecosystem —{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            From Chatbots to Autonomous Agents
          </span>
        </h2>
        <p className="animate-fade-in-delay-3 mt-3 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-base font-medium text-transparent sm:text-lg">
          The tools that turn plain English into digital action.
        </p>
      </div>

      <div className="relative z-[1] grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* Left: two categories */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <article
            className={cn(
              glassCard,
              'animate-fade-in-delay-1 border-cyan-500/30 p-5 sm:p-6',
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10">
                <Terminal className="h-5 w-5 text-cyan-400" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  AI Development Environments
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  For Scripts &amp; Data
                </p>
                <p className="mt-3 text-xs text-cyan-300/90">
                  <span className="font-semibold text-cyan-200">The Tools: </span>
                  Cursor, Windsurf, GitHub Copilot.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  <span className="font-medium text-white">How it Works: </span>
                  These are &quot;AI-first&quot; workspaces. You open a folder of
                  spreadsheets or PDFs, type &quot;Consolidate these files and
                  highlight discrepancies,&quot; and the AI writes and executes the
                  Python script locally to do it in seconds.
                </p>
              </div>
            </div>
          </article>

          <article
            className={cn(
              glassCard,
              'animate-fade-in-delay-2 border-fuchsia-500/25 p-5 sm:p-6',
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10">
                <Bot className="h-5 w-5 text-fuchsia-400" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Autonomous Web Agents
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  For Browser &amp; System Automation
                </p>
                <p className="mt-3 text-xs text-fuchsia-300/90">
                  <span className="font-semibold text-fuchsia-200">
                    The Tools:{' '}
                  </span>
                  Duvo.ai, OpenAI Operator, Anthropic Computer Use.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  <span className="font-medium text-white">How it Works: </span>
                  These agents don&apos;t just write code; they take physical
                  control of a secure browser session. You instruct them to
                  &quot;Log into Salesforce, download the Q3 pipeline, and upload
                  it to the SharePoint.&quot; The AI actually &quot;clicks&quot; the
                  buttons and navigates the UI, bypassing the need for complex API
                  integrations.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Right: context + leadership + takeaway */}
        <div className="flex min-h-0 flex-col gap-5 lg:col-span-7">
          <div
            className={cn(
              glassCard,
              'animate-fade-in-delay-1 border-cyan-500/30 p-5 sm:p-6',
            )}
          >
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  The Evolution of the Interface
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  We have moved past copying and pasting code from a separate chat
                  window. Today&apos;s vibe coding happens natively where the work
                  is done, using two main categories of tools — outlined on the
                  left.
                </p>
              </div>
            </div>
          </div>

          <blockquote
            className={cn(
              glassCard,
              'animate-fade-in-delay-2 relative shrink-0 border-fuchsia-500/25 p-5 sm:p-6',
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10">
                <Quote className="h-5 w-5 text-fuchsia-400" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
                  Leadership Perspective
                </p>
                <p className="mt-3 text-base font-medium leading-relaxed text-white sm:text-[1.05rem]">
                  &ldquo;I just write the prompt, and the AI writes the code,
                  tests it, and deploys it. I am not coding anymore. I am
                  directing.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-slate-400">
                  — The new reality of the &quot;10x Business User&quot;
                </footer>
              </div>
            </div>
          </blockquote>

          <div
            className={cn(
              glassCard,
              'animate-fade-in-delay-3 border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 to-fuchsia-950/30 p-5 sm:p-6',
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Key Takeaway
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-[0.95rem]">
              You do not need an IT background to use these tools. If you
              understand the business process steps and can clearly articulate
              them, you can now build the automation yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
