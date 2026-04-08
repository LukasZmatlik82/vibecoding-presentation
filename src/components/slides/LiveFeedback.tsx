import { Send, Trash2 } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from 'react'
import { cn } from '../../lib/cn'

export type FeedbackItem = {
  id: string
  text: string
  timestamp: string
}

const STORAGE_KEY = 'vibe-coding-feedback-wall-v1'

function formatTime(d: Date) {
  const h = d.getHours().toString().padStart(2, '0')
  const m = d.getMinutes().toString().padStart(2, '0')
  return `${h}:${m}`
}

function isFeedbackItem(x: unknown): x is FeedbackItem {
  if (typeof x !== 'object' || x === null) return false
  const o = x as Record<string, unknown>
  return (
    typeof o.id === 'string' &&
    typeof o.text === 'string' &&
    typeof o.timestamp === 'string'
  )
}

function loadMessages(): FeedbackItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isFeedbackItem)
  } catch {
    return []
  }
}

function saveMessages(messages: FeedbackItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  } catch {
    /* quota or private mode */
  }
}

const glass =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'

export function LiveFeedback() {
  const [messages, setMessages] = useState<FeedbackItem[]>(loadMessages)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    saveMessages(messages)
  }, [messages])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || e.newValue == null) return
      try {
        const parsed = JSON.parse(e.newValue) as unknown
        if (Array.isArray(parsed)) {
          setMessages(parsed.filter(isFeedbackItem))
        }
      } catch {
        /* ignore */
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const send = useCallback(() => {
    const text = draft.trim()
    if (!text) return
    const now = new Date()
    setMessages((prev) => [
      {
        id: `${now.getTime()}-${Math.random().toString(36).slice(2, 9)}`,
        text,
        timestamp: formatTime(now),
      },
      ...prev,
    ])
    setDraft('')
  }, [draft])

  const clearAll = useCallback(() => {
    if (!window.confirm('Remove all messages saved on this browser?')) return
    setMessages([])
  }, [])

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div
      className={cn(
        'relative animate-slide-fade-in flex min-h-0 flex-1 flex-col',
        'bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]',
        'bg-[length:40px_40px]',
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.07),transparent_55%)]" />

      <header className="relative z-[1] mb-6 shrink-0">
        <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.28em] text-fuchsia-400/90">
          Tools
        </p>
        <h1 className="animate-fade-in-delay-1 mt-2 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
          Live Feedback &amp; Q&amp;A
        </h1>
        <p className="animate-fade-in-delay-2 mt-2 max-w-2xl text-sm text-slate-400">
          Messages are saved in this browser&apos;s storage so they survive
          refresh. They are not synced to a server—only people using this
          device and browser profile see them. Open another tab to see updates
          live.
        </p>
      </header>

      <div className="relative z-[1] grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <section
          className={cn(
            glass,
            'animate-fade-in-delay-2 flex min-h-[280px] flex-col p-4 sm:p-5',
          )}
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Your message
          </h2>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your feedback or question…"
            rows={6}
            className={cn(
              'mt-3 min-h-[140px] flex-1 resize-y rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white placeholder:text-slate-600',
              'outline-none transition-shadow',
              'focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/60',
            )}
          />
          <button
            type="button"
            onClick={send}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/25 to-fuchsia-500/25 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(34,211,238,0.45)] transition-colors hover:from-cyan-500/35 hover:to-fuchsia-500/35 sm:w-auto sm:self-end"
          >
            <Send className="h-4 w-4 text-cyan-300" aria-hidden />
            Send Message
          </button>
        </section>

        <section
          className={cn(
            glass,
            'animate-fade-in-delay-3 flex min-h-[320px] flex-col overflow-hidden p-4 sm:min-h-[380px] sm:p-5 lg:min-h-0',
          )}
        >
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Feedback wall
            </h2>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors hover:border-rose-500/40 hover:bg-rose-950/30 hover:text-rose-200"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden />
                Clear all
              </button>
            )}
          </div>
          <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1 [-ms-overflow-style:scrollbar] [scrollbar-gutter:stable]">
            {messages.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-500">
                No messages yet. Be the first to share feedback.
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <li key={msg.id}>
                    <article className="rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                      <p className="text-[11px] font-medium tabular-nums text-slate-500">
                        {msg.timestamp}
                      </p>
                      <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-white">
                        {msg.text}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
