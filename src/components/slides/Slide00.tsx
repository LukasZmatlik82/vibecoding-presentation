import { ExternalLink } from 'lucide-react'
import { cn } from '../../lib/cn'
import { vibeCardClass } from '../../lib/vibeCard'

const RAMP_IMAGE = encodeURI('/ChatGPT Image 8. 4. 2026 16_50_06.png')
const SOURCE_HREF =
  'https://www.businessinsider.com/vibe-coding-ai-tools-underperforming-ramp-tech-2026-3'

export function Slide00() {
  return (
    <div className="animate-slide-fade-in relative flex min-h-0 flex-1 flex-col justify-center">
      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div
          className={cn(
            vibeCardClass(0),
            'flex flex-col justify-center p-6 sm:p-8',
          )}
        >
          <blockquote className="border-l border-white/20 pl-6 sm:pl-8">
            <p className="text-pretty text-xl font-light leading-snug tracking-tight text-slate-100 sm:text-2xl sm:leading-snug">
              Employees who don&apos;t vibe code are &apos;probably
              underperforming,&apos;{' '}
              <span className="text-slate-400">
                Geoff Charles, chief product officer of Ramp, an AI fintech
                startup.
              </span>
            </p>
          </blockquote>
          <p className="mt-8 pl-6 text-sm text-slate-500 sm:pl-8">
            <a
              href={SOURCE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-100"
            >
              Business Insider
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <figure
            className={cn(
              vibeCardClass(1),
              'w-full max-w-md overflow-hidden p-1',
            )}
          >
            <img
              src={RAMP_IMAGE}
              alt="Graphic accompanying the opening quote"
              className="w-full rounded-lg object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
