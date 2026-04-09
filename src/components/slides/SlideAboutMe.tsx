import { ExternalLink } from 'lucide-react'
import { ParallaxBox } from '../parallax/ParallaxRoot'
import { cn } from '../../lib/cn'
import { vibeCardClass } from '../../lib/vibeCard'

const PROFILE_IMAGE = encodeURI('/LZ profile.png')
const LINKEDIN =
  'https://www.linkedin.com/in/luk%C3%A1%C5%A1-zm%C3%A1tl%C3%ADk-81a0a318/'

const REFERENCES = [
  { label: 'aivymarketing.com', href: 'https://aivymarketing.com' },
  { label: 'kinnytools.com', href: 'https://kinnytools.com' },
  { label: 'kinnyapps.com', href: 'https://kinnyapps.com' },
] as const

export function SlideAboutMe() {
  return (
    <div className="animate-slide-fade-in relative flex min-h-0 flex-1 flex-col justify-center">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start lg:gap-14">
        <div className="flex justify-center lg:justify-start">
          <ParallaxBox
            as="figure"
            depth={1.08}
            className={cn(
              vibeCardClass(0),
              'w-full max-w-[200px] shrink-0 overflow-hidden p-1',
            )}
          >
            <img
              src={PROFILE_IMAGE}
              alt="Lukáš Zmátlík"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </ParallaxBox>
        </div>

        <ParallaxBox
          depth={1.14}
          className={cn(
            vibeCardClass(1),
            'min-h-0 flex-1 space-y-5 border-l border-white/10 p-6 sm:p-8',
          )}
        >
          <p className="text-pretty text-lg font-light leading-snug text-slate-100 sm:text-xl">
            AI &amp; Automation Strategist | Vibecoding scalable Apps &amp; ERPs
            | Shaping enterprise architecture and business strategy.
          </p>

          <section className="space-y-1.5 text-sm leading-relaxed text-slate-400">
            <h3 className="font-medium text-slate-100">
              Strategic Tech Leadership
            </h3>
            <p>
              3.5 years driving enterprise-scale finance and technology
              transformation at Rohlik Group across six European markets.
            </p>
          </section>

          <section className="space-y-1.5 text-sm leading-relaxed text-slate-400">
            <h3 className="font-medium text-slate-100">
              AI &amp; Automation (Rohlik)
            </h3>
            <p>
              Directed the Backoffice Tribe to develop core business systems,
              heavily focusing on RPA, low-code, and AI-driven process
              automation.
            </p>
          </section>

          <section className="space-y-1.5 text-sm leading-relaxed text-slate-400">
            <h3 className="font-medium text-slate-100">
              Enterprise Architecture (Rohlik)
            </h3>
            <p>
              Spearheaded the implementation of Oracle NetSuite and Anaplan,
              established a group-wide Shared Service Center, and entirely
              redesigned the finance process flow.
            </p>
          </section>

          <section className="space-y-1.5 text-sm leading-relaxed text-slate-400">
            <h3 className="font-medium text-slate-100">Prior Experience</h3>
            <p>
              10+ years driving corporate restructuring, operational
              efficiency, and omnichannel transformations at leading
              organizations (CSOB, Mladá fronta, TV Nova).
            </p>
          </section>

          <div className="space-y-2 pt-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              References
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {REFERENCES.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 underline decoration-white/15 underline-offset-2 transition-colors hover:text-slate-100"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="pt-1">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </p>
        </ParallaxBox>
      </div>
    </div>
  )
}
