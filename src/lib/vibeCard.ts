/**
 * Shared “vibe” panels: soft gradients + ring + outer glow (pink / cyan / fuchsia cycle).
 * Use {@link vibeCardClass} for main cards; {@link vibeCardInnerClass} for nested stat tiles.
 */

const ACCENT = [
  'rounded-2xl border border-pink-500/35 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-pink-950/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_0_40px_-8px_rgba(236,72,153,0.42)] ring-1 ring-pink-400/25 backdrop-blur-md',
  'rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-cyan-950/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_0_40px_-8px_rgba(34,211,238,0.4)] ring-1 ring-cyan-400/30 backdrop-blur-md',
  'rounded-2xl border border-cyan-500/45 bg-gradient-to-b from-slate-950 via-indigo-950/90 to-fuchsia-900/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_44px_-10px_rgba(217,70,239,0.55)] ring-1 ring-fuchsia-400/30 backdrop-blur-md',
] as const

const ICON_CHIP = [
  'border-pink-500/45 bg-pink-500/10',
  'border-cyan-500/45 bg-cyan-500/10',
  'border-fuchsia-500/45 bg-fuchsia-500/10',
] as const

const ICON_TEXT = ['text-pink-400', 'text-cyan-400', 'text-fuchsia-400'] as const

const INNER = [
  'rounded-xl border border-pink-500/30 bg-gradient-to-br from-slate-950/90 to-pink-950/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_28px_-10px_rgba(236,72,153,0.35)] ring-1 ring-pink-500/20',
  'rounded-xl border border-cyan-500/35 bg-gradient-to-br from-slate-950/90 to-cyan-950/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_28px_-10px_rgba(34,211,238,0.35)] ring-1 ring-cyan-500/20',
  'rounded-xl border border-fuchsia-500/35 bg-gradient-to-br from-slate-950/90 to-fuchsia-950/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_28px_-10px_rgba(217,70,239,0.38)] ring-1 ring-fuchsia-500/20',
] as const

export function vibeCardClass(index: number): string {
  return ACCENT[index % 3]!
}

export function vibeIconChipClass(index: number): string {
  return ICON_CHIP[index % 3]!
}

export function vibeIconTextClass(index: number): string {
  return ICON_TEXT[index % 3]!
}

export function vibeCardInnerClass(index: number): string {
  return INNER[index % 3]!
}

/** Slide01 center column — image frame with cyan glow. */
export const vibeImageFrame =
  'relative min-h-0 w-full flex-1 overflow-hidden rounded-3xl border border-cyan-500/45 bg-gradient-to-b from-cyan-950/30 via-slate-950/40 to-slate-950/80 shadow-[0_0_48px_-8px_rgba(34,211,238,0.45),inset_0_0_60px_-20px_rgba(34,211,238,0.12)] ring-1 ring-cyan-400/35'
