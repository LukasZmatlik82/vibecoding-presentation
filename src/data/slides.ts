export type SlideMeta = {
  id: string
  title: string
  /** Defaults to deck (main presentation slides). */
  section?: 'deck' | 'tools'
}

export const SLIDES: SlideMeta[] = [
  { id: 'basics', title: 'The Basics' },
  { id: 'ecosystem', title: 'The 2026 Ecosystem' },
  { id: 'workflow', title: 'The Workflow' },
  { id: 'security', title: 'Security & Governance' },
  { id: 'use-cases', title: 'Advanced Workflow (Cursor)' },
  { id: 'industry-reality', title: 'The Industry Reality – By the Numbers' },
  { id: 'prompts', title: 'Prompts', section: 'tools' },
  { id: 'live-feedback', title: 'Live Feedback & Q&A', section: 'tools' },
]
