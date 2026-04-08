import {
  AlertTriangle,
  BookOpen,
  FlaskConical,
  KeyRound,
  Shield,
  UserCheck,
} from 'lucide-react'
import { cn } from '../../lib/cn'

type Slide04Props = {
  slideIndex: number
}

const glassCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'

const pillars = [
  {
    id: 'sanitization',
    title: 'Data Sanitization (Build in the Sandbox)',
    icon: FlaskConical,
    iconClass: 'text-cyan-400',
    iconWrap: 'border-cyan-500/45 bg-cyan-500/10',
    rule: 'Never use real customer PII, live financial data, or sensitive employee records when prompting an AI to build a process.',
    practice:
      'Use synthetic or dummy data (e.g., "John Doe", "$100.00") during the prompt and testing phases. Once the logic is perfect, point the secure, finalized agent at the real data.',
  },
  {
    id: 'least-privilege',
    title: 'The Principle of Least Privilege',
    icon: KeyRound,
    iconClass: 'text-fuchsia-400',
    iconWrap: 'border-fuchsia-500/45 bg-fuchsia-500/10',
    rule: 'An AI agent is a digital worker; it should only have the access it absolutely needs.',
    practice:
      'If you are using a web agent (like Duvo.ai) to scrape public data, do not log it in using your personal Admin account. Create a restricted "Service Account" for the agent so it cannot accidentally alter core systems.',
  },
  {
    id: 'hitl',
    title: 'Human-in-the-Loop (HITL) by Default',
    icon: UserCheck,
    iconClass: 'text-pink-400',
    iconWrap: 'border-pink-500/45 bg-pink-500/10',
    rule: 'AI acts, humans authorize.',
    practice:
      'For high-stakes processes (like approving payments or sending external emails), vibe code a "pause" into the workflow. The AI can draft the email, extract the data, and prepare the form, but a human must click the final "Approve" button.',
  },
  {
    id: 'documentation',
    title: 'Documentation via Plain English',
    icon: BookOpen,
    iconClass: 'text-emerald-400',
    iconWrap: 'border-emerald-500/45 bg-emerald-500/10',
    rule: 'Prevent the "Black Box" problem. If the person who built the automation leaves, the team must still understand it.',
    practice:
      'Because the process was built using natural language, save your original prompts! Your prompt is your documentation. Keep a centralized library of the exact English instructions used to build your team\'s bots.',
  },
] as const

const cardAnim = ['animate-fade-in-delay-1', 'animate-fade-in-delay-2', 'animate-fade-in-delay-3', 'animate-fade-in-delay-4'] as const

export function Slide04({ slideIndex }: Slide04Props) {
  const badge = String(slideIndex + 1).padStart(2, '0')

  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col pb-14',
        'bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]',
        'bg-[length:40px_40px]',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-35 [mask-image:radial-gradient(ellipse_85%_55%_at_50%_12%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.07),transparent_58%)]" />

      <header className="relative z-[1] mb-5 flex shrink-0 items-start justify-between gap-4 lg:mb-6">
        <div className="animate-fade-in flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 backdrop-blur-md">
          Logo
        </div>
      </header>

      <div className="relative z-[1] mb-5 max-w-4xl lg:mb-6">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.22em] text-fuchsia-400/90">
          Governance &amp; Security — Scaling Safely in the Enterprise
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[1.75rem]">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Empowering the business without compromising the enterprise.
          </span>
        </h2>
      </div>

      <div
        className={cn(
          glassCard,
          'animate-fade-in-delay-2 relative z-[1] mb-8 border-amber-500/35 bg-amber-950/20 p-4 sm:p-5',
        )}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/45 bg-amber-500/10">
            <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-amber-100 sm:text-base">
              The Risk
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Vibe coding is so fast and accessible that it can create uncontrolled{' '}
              <span className="font-medium text-white">&ldquo;Shadow Automation&rdquo;</span>
              —where critical business processes are running on AI scripts that IT
              cannot see or audit.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-[1] min-h-0 flex-1">
        <h3 className="animate-fade-in-delay-3 mb-5 flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-lg font-semibold text-transparent sm:mb-6 sm:text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10">
            <Shield className="h-4 w-4 text-cyan-400" aria-hidden />
          </span>
          The 4 Pillars of Responsible Vibe Coding
        </h3>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.id}
                className={cn(
                  glassCard,
                  'flex flex-col p-4 sm:p-5',
                  cardAnim[i],
                  pillar.id === 'documentation' && 'border-emerald-500/25',
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span
                    className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-xs font-bold text-cyan-300"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div
                    className={cn(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                      pillar.iconWrap,
                    )}
                  >
                    <Icon className={cn('h-5 w-5', pillar.iconClass)} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold leading-snug text-white sm:text-[1.05rem]">
                      {pillar.title}
                    </h4>
                  </div>
                </div>

                <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400/90">
                      The Rule
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      {pillar.rule}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-fuchsia-400/90">
                      The Practice
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      {pillar.practice}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-2 right-0 z-[2] flex items-center justify-center rounded-lg border border-fuchsia-500/60 bg-fuchsia-950/70 px-3 py-1.5 text-lg font-bold tabular-nums text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.45)] backdrop-blur-sm sm:bottom-4 sm:text-2xl"
        aria-label={`Slide ${slideIndex + 1}`}
      >
        {badge}
      </div>
    </div>
  )
}
