import {
  Eye,
  Infinity as InfinityIcon,
  Layers2,
  MessageSquareText,
  RefreshCw,
} from 'lucide-react'
import { ParallaxBox, ParallaxLayer } from '../parallax/ParallaxRoot'
import { cn } from '../../lib/cn'
import {
  vibeCardClass,
  vibeCardInnerClass,
  vibeIconChipClass,
  vibeIconTextClass,
} from '../../lib/vibeCard'

const steps = [
  {
    id: 'deconstruct',
    n: 1,
    title: 'Deconstruct',
    subtitle: 'The Human Task',
    icon: Layers2,
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-400">
          Do not prompt:{' '}
          <span className="italic text-slate-100">
            &ldquo;Automate my vendor onboarding.&rdquo;
          </span>{' '}
          <span className="text-slate-400">(Too vague; the AI will guess and fail.)</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Instead, break it down:{' '}
          <span className="text-slate-100">
            &ldquo;Step 1: Extract data from the W-9 form. Step 2: Open the ERP.
            Step 3: Create a new vendor record. Step 4: Email the vendor a
            confirmation.&rdquo;
          </span>
        </p>
      </>
    ),
  },
  {
    id: 'prompt',
    n: 2,
    title: 'Prompt',
    subtitle: 'Give the Instructions',
    icon: MessageSquareText,
    body: (
      <>
        <p className="text-sm leading-relaxed text-slate-400">
          Write your instructions exactly as you would for a brand-new junior
          employee. Provide context, boundaries, and specific rules.
        </p>
        <ParallaxLayer
          depth={0.72}
          className={cn(
            vibeCardInnerClass(1),
            'p-3 text-xs leading-relaxed text-slate-400 sm:text-sm',
          )}
        >
          <span className="font-medium text-slate-100">Example: </span>
          &ldquo;Build an automation that takes the attached PDF, extracts the
          Invoice Number and Total Amount, and logs it into our tracking
          spreadsheet. Ignore any invoices under $50.&rdquo;
        </ParallaxLayer>
      </>
    ),
  },
  {
    id: 'execute',
    n: 3,
    title: 'Execute & Observe',
    subtitle: 'The AI Task',
    icon: Eye,
    body: (
      <p className="text-sm leading-relaxed text-slate-400">
        Run the prompt. Watch the AI agent attempt the task (whether it is
        writing a script or physically navigating a browser). Notice where it
        hesitates, makes a mistake, or encounters a pop-up it wasn&apos;t
        expecting.
      </p>
    ),
  },
  {
    id: 'refine',
    n: 4,
    title: 'Refine & Repeat',
    subtitle: 'Close the loop',
    icon: RefreshCw,
    body: (
      <p className="text-sm leading-relaxed text-slate-400">
        Feed what you observed back into the conversation: tighten wording, add
        guardrails for edge cases and UI surprises, and run again. Reliability
        comes from{' '}
        <span className="font-medium text-slate-100">iteration</span>, not a single
        perfect prompt.
      </p>
    ),
  },
] as const

export function Slide03() {
  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col pb-14',
      )}
    >
      <ParallaxLayer
        depth={-0.34}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-35 [mask-image:radial-gradient(ellipse_85%_55%_at_50%_15%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.09),transparent_58%)]"
        aria-hidden
      />

      <div className="relative z-[1] mb-5 max-w-4xl lg:mb-6">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
          The Vibe Coding Workflow — Building Your First Automation
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-[1.85rem]">
          Stop typing code. Start having a conversation.
        </h2>
      </div>

      <ParallaxBox
        depth={1.1}
        className={cn(
          vibeCardClass(0),
          'animate-fade-in-delay-2 relative z-[1] mb-8 p-4 sm:p-5',
        )}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
              vibeIconChipClass(0),
            )}
          >
            <InfinityIcon className={cn('h-5 w-5', vibeIconTextClass(0))} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
              The Golden Rule
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Vibe coding is rarely a &ldquo;one-shot&rdquo; success. It is an{' '}
              <span className="font-medium text-slate-100">iterative</span>,{' '}
              <span className="font-medium text-slate-100">conversational loop</span>{' '}
              between you and the AI.
            </p>
          </div>
        </div>
      </ParallaxBox>

      <div className="relative z-[1] min-h-0 flex-1">
        <h3 className="animate-fade-in-delay-3 mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
          The 4-Step Workflow
        </h3>

        <div className="relative">
          <div
            className="absolute left-[18px] top-3 bottom-3 w-px bg-white/15 sm:left-5"
            aria-hidden
          />

          <ol className="relative flex list-none flex-col gap-6 sm:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const delayClass =
                i === 0
                  ? 'animate-fade-in-delay-1'
                  : i === 1
                    ? 'animate-fade-in-delay-2'
                    : i === 2
                      ? 'animate-fade-in-delay-3'
                      : 'animate-fade-in-delay-4'

              return (
                <li key={step.id} className={cn('relative pl-12 sm:pl-14', delayClass)}>
                  <span
                    className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-700 text-xs font-bold text-slate-100 shadow-[0_0_12px_-4px_rgba(0,0,0,0.5)] sm:top-0 sm:h-10 sm:w-10 sm:text-sm"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <ParallaxBox
                    as="article"
                    depth={1.05 + i * 0.04}
                    className={cn(
                      vibeCardClass(i + 1),
                      'p-4 sm:p-5',
                    )}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <div
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                          vibeIconChipClass(i),
                        )}
                      >
                        <Icon className={cn('h-5 w-5', vibeIconTextClass(i))} aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                          <h4 className="text-base font-semibold text-slate-100 sm:text-lg">
                            {step.n}. {step.title}
                          </h4>
                          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                            {step.subtitle}
                          </span>
                        </div>
                        <div className="mt-3">{step.body}</div>
                      </div>
                    </div>
                  </ParallaxBox>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
