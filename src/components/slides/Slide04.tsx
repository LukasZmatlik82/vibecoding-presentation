import {
  AlertTriangle,
  BookOpen,
  FlaskConical,
  KeyRound,
  Shield,
  UserCheck,
} from 'lucide-react'
import { ParallaxBox, ParallaxLayer } from '../parallax/ParallaxRoot'
import { cn } from '../../lib/cn'
import { vibeCardClass, vibeIconChipClass, vibeIconTextClass } from '../../lib/vibeCard'

const pillars = [
  {
    id: 'sanitization',
    title: 'Data Sanitization (Build in the Sandbox)',
    icon: FlaskConical,
    rule: 'Never use real customer PII, live financial data, or sensitive employee records when prompting an AI to build a process.',
    practice:
      'Use synthetic or dummy data (e.g., "John Doe", "$100.00") during the prompt and testing phases. Once the logic is perfect, point the secure, finalized agent at the real data.',
  },
  {
    id: 'least-privilege',
    title: 'The Principle of Least Privilege',
    icon: KeyRound,
    rule: 'An AI agent is a digital worker; it should only have the access it absolutely needs.',
    practice:
      'If you are using a web agent (like Duvo.ai) to scrape public data, do not log it in using your personal Admin account. Create a restricted "Service Account" for the agent so it cannot accidentally alter core systems.',
  },
  {
    id: 'hitl',
    title: 'Human-in-the-Loop (HITL) by Default',
    icon: UserCheck,
    rule: 'AI acts, humans authorize.',
    practice:
      'For high-stakes processes (like approving payments or sending external emails), vibe code a "pause" into the workflow. The AI can draft the email, extract the data, and prepare the form, but a human must click the final "Approve" button.',
  },
  {
    id: 'documentation',
    title: 'Documentation via Plain English',
    icon: BookOpen,
    rule: 'Prevent the "Black Box" problem. If the person who built the automation leaves, the team must still understand it.',
    practice:
      'Because the process was built using natural language, save your original prompts! Your prompt is your documentation. Keep a centralized library of the exact English instructions used to build your team\'s bots.',
  },
] as const

const cardAnim = ['animate-fade-in-delay-1', 'animate-fade-in-delay-2', 'animate-fade-in-delay-3', 'animate-fade-in-delay-4'] as const

export function Slide04() {
  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col pb-14',
      )}
    >
      <ParallaxLayer
        depth={-0.34}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-35 [mask-image:radial-gradient(ellipse_85%_55%_at_50%_12%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.07),transparent_58%)]"
        aria-hidden
      />

      <div className="relative z-[1] mb-5 max-w-4xl lg:mb-6">
        <p className="animate-fade-in-delay-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
          Governance &amp; Security — Scaling Safely in the Enterprise
        </p>
        <h2 className="animate-fade-in-delay-2 mt-2 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-[1.75rem]">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Empowering the business without compromising the enterprise.
          </span>
        </h2>
      </div>

      <ParallaxBox
        depth={1.08}
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
            <AlertTriangle className={cn('h-5 w-5', vibeIconTextClass(0))} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
              The Risk
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Vibe coding is so fast and accessible that it can create uncontrolled{' '}
              <span className="font-medium text-slate-100">&ldquo;Shadow Automation&rdquo;</span>
              —where critical business processes are running on AI scripts that IT
              cannot see or audit.
            </p>
          </div>
        </div>
      </ParallaxBox>

      <div className="relative z-[1] min-h-0 flex-1">
        <h3 className="animate-fade-in-delay-3 mb-5 flex items-center gap-2 text-lg font-semibold sm:mb-6 sm:text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5">
            <Shield className="h-4 w-4 text-slate-400" aria-hidden />
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
            The 4 Pillars of Responsible Vibe Coding
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <ParallaxBox
                as="article"
                key={pillar.id}
                depth={1.04 + i * 0.035}
                className={cn(
                  vibeCardClass(i),
                  'flex flex-col p-4 sm:p-5',
                  cardAnim[i],
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span
                    className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-xs font-bold text-slate-100"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div
                    className={cn(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                      vibeIconChipClass(i),
                    )}
                  >
                    <Icon className={cn('h-5 w-5', vibeIconTextClass(i))} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold leading-snug text-slate-100 sm:text-[1.05rem]">
                      {pillar.title}
                    </h4>
                  </div>
                </div>

                <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      The Rule
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {pillar.rule}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      The Practice
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {pillar.practice}
                    </p>
                  </div>
                </div>
              </ParallaxBox>
            )
          })}
        </div>
      </div>
    </div>
  )
}
