import { Check, ClipboardCopy } from 'lucide-react'
import { useCallback, useState } from 'react'
import { cn } from '../../lib/cn'
import { vibeCardClass } from '../../lib/vibeCard'

export const STRATEGIST_MASTER_PROMPT = `Role: Act as a Senior Solutions Architect and Product Manager. I am a business user with no coding experience. I want to build a simple, reliable internal tool, but I need you to design it and write the instructions for my AI Developer (Cursor/Claude).
1. Business Context & Objective: I need to solve this problem: [Insert 1-2 sentences about the manual task, e.g., We currently track new vendor requests manually in an email thread, and data keeps getting lost].
2. Core Features (The "Must-Haves"): The application must:
[Feature 1: e.g., Have a web form with fields for Vendor Name, Tax ID, and Contact Email]
[Feature 2: e.g., Validate that the email is formatted correctly before submitting]
[Feature 3: e.g., Save the submission to a simple database or local CSV file]
3. Architecture Decision: Based on my request, please select the absolute simplest technology stack for a beginner to run on their local machine (e.g., Python with Streamlit, or a single HTML/JS file). Tell me what you chose and why in one brief sentence.
4. Your Output: Do not write the application code. Instead, output a highly detailed "Builder Prompt" in Markdown format. I will copy this Markdown output and paste it into my execution AI (Cursor/Claude).
The Builder Prompt you generate must instruct the execution AI to:
Use the tech stack you selected.
Build the application step-by-step (e.g., "Build the UI first. Stop and let me review. Then build the logic.").
Add clear, plain-English comments to every block of code.
Never write the entire application in one single response.
Please generate the Builder Prompt now.`

export function SlidePrompts() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(STRATEGIST_MASTER_PROMPT)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = STRATEGIST_MASTER_PROMPT
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  return (
    <div
      className={cn(
        'animate-slide-fade-in relative flex min-h-0 flex-1 flex-col',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.08),transparent_55%)]" />

      <header className="relative z-[1] mb-6 shrink-0">
        <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
          Tools
        </p>
        <h2 className="animate-fade-in-delay-1 mt-2 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
          The Strategist Master Prompt
        </h2>
        <p className="animate-fade-in-delay-2 mt-2 max-w-3xl text-sm text-slate-400">
          Copy the full prompt below and paste it into Gemini (or your strategist
          model). Fill in the bracketed placeholders before sending.
        </p>
      </header>

      <div
        className={cn(
          vibeCardClass(1),
          'relative z-[1] flex min-h-0 flex-1 flex-col',
        )}
      >
        <div className="animate-fade-in-delay-2 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Master prompt
          </span>
          <button
            type="button"
            onClick={copy}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
              copied
                ? 'border-white/20 bg-white/10 text-slate-100'
                : 'border-white/15 bg-white/5 text-slate-100 hover:bg-white/10',
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-slate-400" aria-hidden />
                Copied
              </>
            ) : (
              <>
                <ClipboardCopy className="h-4 w-4 text-slate-400" aria-hidden />
                Copy to clipboard
              </>
            )}
          </button>
        </div>
        <div className="min-h-0 flex-1 p-4 sm:p-5">
          <label htmlFor="strategist-prompt" className="sr-only">
            The Strategist Master Prompt text
          </label>
          <textarea
            id="strategist-prompt"
            readOnly
            value={STRATEGIST_MASTER_PROMPT}
            spellCheck={false}
            className="h-[min(58vh,520px)] w-full resize-none rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 font-mono text-xs leading-relaxed text-slate-100 shadow-inner outline-none ring-white/10 focus-visible:ring-2 sm:text-sm"
          />
        </div>
      </div>

    </div>
  )
}
