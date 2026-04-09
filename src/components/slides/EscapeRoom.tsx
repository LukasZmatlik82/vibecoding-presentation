import { useEffect, useRef, useState } from 'react'

import { ParallaxBox } from '../parallax/ParallaxRoot'

// ─── Game Types ────────────────────────────────────────────────────────────────

type Player = { x: number; y: number; w: number; h: number; speed: number }

type Enemy = {
  id: number
  x: number
  y: number
  w: number
  h: number
  label: string
  speed: number
  color: string
}

type Laser = { id: number; x: number; y: number; speed: number }

type Particle = {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const CANVAS_W = 800
const CANVAS_H = 500

const ENEMY_LABELS = [
  'Invoice',
  'PTO Request',
  'Password Reset',
  'IT Ticket',
  'Bug Report',
  'Deploy Req',
  'Access Issue',
  'VPN Down',
  'Printer Jammed',
  'Ticket #4829',
  'URGENT!!!',
  'ASAP pls',
  'Out of Office?',
  'Reboot pls',
]

const ENEMY_COLORS = ['#f43f5e', '#e879f9', '#c026d3', '#db2777', '#fb923c']

// ─── Component ─────────────────────────────────────────────────────────────────

export function EscapeRoom() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const [gameKey, setGameKey] = useState(0)
  const [showOverlay, setShowOverlay] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [displayScore, setDisplayScore] = useState(0)

  // All mutable game state lives in a ref to avoid stale closure issues in rAF
  const gs = useRef({
    player: { x: CANVAS_W / 2 - 30, y: CANVAS_H - 60, w: 60, h: 40, speed: 5 } as Player,
    enemies: [] as Enemy[],
    lasers: [] as Laser[],
    particles: [] as Particle[],
    score: 0,
    keys: { left: false, right: false },
    lastEnemySpawn: 0,
    spawnInterval: 1200,
    lastShot: 0,
    idE: 0,
    idL: 0,
    idP: 0,
    lastFrameTime: 0,
  })

  useEffect(() => {
    if (gameKey === 0) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctxMaybe = canvas.getContext('2d')
    if (!ctxMaybe) return

    return (function runGame(ctx: CanvasRenderingContext2D) {
    // Reset state
    const g = gs.current
    g.player = { x: CANVAS_W / 2 - 30, y: CANVAS_H - 60, w: 60, h: 40, speed: 5 }
    g.enemies = []
    g.lasers = []
    g.particles = []
    g.score = 0
    g.keys = { left: false, right: false }
    g.lastEnemySpawn = 0
    g.spawnInterval = 1200
    g.lastShot = 0
    g.idE = 0
    g.idL = 0
    g.idP = 0
    g.lastFrameTime = 0

    // ── Keyboard ──────────────────────────────────────────────────────────────

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') g.keys.left = true
      if (e.code === 'ArrowRight') g.keys.right = true
      if (e.code === 'Space') {
        e.preventDefault()
        const now = performance.now()
        if (now - g.lastShot > 220) {
          g.lastShot = now
          g.idL++
          g.lasers.push({
            id: g.idL,
            x: g.player.x + g.player.w / 2,
            y: g.player.y,
            speed: 12,
          })
        }
      }
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') g.keys.left = false
      if (e.code === 'ArrowRight') g.keys.right = false
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    // ── Draw helpers ──────────────────────────────────────────────────────────

    function drawGrid() {
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x <= CANVAS_W; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CANVAS_H); ctx.stroke()
      }
      for (let y = 0; y <= CANVAS_H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CANVAS_W, y); ctx.stroke()
      }
    }

    function drawPlayer(p: Player) {
      ctx.save()
      ctx.shadowColor = '#22d3ee'
      ctx.shadowBlur = 24

      // Ship body
      ctx.fillStyle = '#22d3ee'
      ctx.beginPath()
      ctx.moveTo(p.x + p.w / 2, p.y)              // nose
      ctx.lineTo(p.x + p.w,     p.y + p.h)        // bottom-right
      ctx.lineTo(p.x + p.w * 0.65, p.y + p.h * 0.72)
      ctx.lineTo(p.x + p.w / 2,   p.y + p.h * 0.82)
      ctx.lineTo(p.x + p.w * 0.35, p.y + p.h * 0.72)
      ctx.lineTo(p.x,           p.y + p.h)        // bottom-left
      ctx.closePath()
      ctx.fill()

      // Engine flame
      ctx.shadowColor = '#f0abfc'
      ctx.shadowBlur = 16
      ctx.fillStyle = '#f0abfc'
      ctx.fillRect(p.x + p.w * 0.28, p.y + p.h * 0.78, p.w * 0.16, p.h * 0.22)
      ctx.fillRect(p.x + p.w * 0.56, p.y + p.h * 0.78, p.w * 0.16, p.h * 0.22)

      ctx.restore()
    }

    function drawEnemy(e: Enemy) {
      ctx.save()
      ctx.shadowColor = e.color
      ctx.shadowBlur = 14

      // Gradient fill
      const grad = ctx.createLinearGradient(e.x, e.y, e.x, e.y + e.h)
      grad.addColorStop(0, e.color + '55')
      grad.addColorStop(1, e.color + '22')
      ctx.fillStyle = grad
      ctx.fillRect(e.x, e.y, e.w, e.h)

      // Border
      ctx.strokeStyle = e.color
      ctx.lineWidth = 1.5
      ctx.strokeRect(e.x, e.y, e.w, e.h)

      // Label
      ctx.shadowBlur = 0
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 10px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.save()
      ctx.beginPath()
      ctx.rect(e.x + 4, e.y + 4, e.w - 8, e.h - 8)
      ctx.clip()
      ctx.fillText(e.label, e.x + e.w / 2, e.y + e.h / 2)
      ctx.restore()

      ctx.restore()
    }

    function drawLaser(l: Laser) {
      ctx.save()
      ctx.shadowColor = '#22d3ee'
      ctx.shadowBlur = 14
      ctx.fillStyle = '#67e8f9'
      ctx.fillRect(l.x - 2, l.y, 4, 18)
      ctx.restore()
    }

    function drawParticle(p: Particle) {
      const alpha = p.life / p.maxLife
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.shadowColor = p.color
      ctx.shadowBlur = 10
      ctx.fillStyle = p.color
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
      ctx.restore()
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    function aabb(ax: number, ay: number, aw: number, ah: number,
                  bx: number, by: number, bw: number, bh: number) {
      return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by
    }

    function spawnEnemy(now: number) {
      if (now - g.lastEnemySpawn < g.spawnInterval) return
      g.lastEnemySpawn = now
      const w = 88 + Math.random() * 44
      const h = 30 + Math.random() * 14
      g.idE++
      g.enemies.push({
        id: g.idE,
        x: Math.random() * (CANVAS_W - w),
        y: -h,
        w, h,
        label: ENEMY_LABELS[Math.floor(Math.random() * ENEMY_LABELS.length)],
        speed: 1.1 + Math.random() * 1.6 + g.score * 0.015,
        color: ENEMY_COLORS[Math.floor(Math.random() * ENEMY_COLORS.length)],
      })
      g.spawnInterval = Math.max(380, 1200 - g.score * 8)
    }

    function burstParticles(e: Enemy) {
      const count = 12 + Math.floor(Math.random() * 5)
      for (let i = 0; i < count; i++) {
        g.idP++
        g.particles.push({
          id: g.idP,
          x: e.x + Math.random() * e.w,
          y: e.y + Math.random() * e.h,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 5 - 1.5,
          life: 60,
          maxLife: 60,
          color: e.color,
          size: 3 + Math.random() * 4,
        })
      }
    }

    // ── Game loop ─────────────────────────────────────────────────────────────

    function loop(timestamp: number) {
      // Update
      const p = g.player
      if (g.keys.left)  p.x = Math.max(0, p.x - p.speed)
      if (g.keys.right) p.x = Math.min(CANVAS_W - p.w, p.x + p.speed)

      g.lasers.forEach(l => { l.y -= l.speed })
      g.lasers = g.lasers.filter(l => l.y > -20)

      spawnEnemy(timestamp)
      g.enemies.forEach(e => { e.y += e.speed })

      // Game-over check: enemy reaches player
      for (const e of g.enemies) {
        if (e.y + e.h >= p.y + 8) {
          cancelAnimationFrame(rafRef.current)
          window.removeEventListener('keydown', onKeyDown)
          window.removeEventListener('keyup', onKeyUp)
          setIsGameOver(true)
          setShowOverlay(true)
          setDisplayScore(g.score)

          // Final draw of current frame before stopping
          ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
          drawGrid()
          g.enemies.forEach(drawEnemy)
          g.lasers.forEach(drawLaser)
          g.particles.forEach(drawParticle)
          drawPlayer(p)
          return
        }
      }

      // Collisions
      const hitEnemy = new Set<number>()
      const hitLaser = new Set<number>()
      for (const laser of g.lasers) {
        for (const enemy of g.enemies) {
          if (hitEnemy.has(enemy.id)) continue
          if (aabb(laser.x - 2, laser.y, 4, 18, enemy.x, enemy.y, enemy.w, enemy.h)) {
            hitEnemy.add(enemy.id)
            hitLaser.add(laser.id)
            burstParticles(enemy)
            g.score++
            setDisplayScore(g.score)
            break
          }
        }
      }
      g.enemies  = g.enemies.filter(e => !hitEnemy.has(e.id))
      g.lasers   = g.lasers.filter(l => !hitLaser.has(l.id))

      // Particles physics
      g.particles.forEach(pt => {
        pt.x += pt.vx
        pt.y += pt.vy
        pt.vy += 0.12
        pt.life--
      })
      g.particles = g.particles.filter(pt => pt.life > 0)

      // Draw
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
      drawGrid()
      g.enemies.forEach(drawEnemy)
      g.lasers.forEach(drawLaser)
      g.particles.forEach(drawParticle)
      drawPlayer(p)

      // HUD
      ctx.save()
      ctx.shadowColor = '#22d3ee'
      ctx.shadowBlur = 10
      ctx.fillStyle = '#22d3ee'
      ctx.font = 'bold 13px monospace'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.fillText(`SCORE  ${g.score}`, 14, 14)
      ctx.restore()

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
    })(ctxMaybe)
  }, [gameKey])

  function handleStart() {
    setIsGameOver(false)
    setDisplayScore(0)
    setShowOverlay(false)
    setGameKey(k => k + 1)
  }

  return (
    <div className="animate-slide-fade-in flex min-h-0 flex-1 flex-col">
      {/* Header */}
      <header className="mb-6 shrink-0">
        <h2 className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          Bored? Help us clear the IT Backlog.
        </h2>
      </header>

      <div className="flex flex-1 flex-col items-center gap-4">
        {/* Glassmorphic game card */}
        <ParallaxBox
          depth={1.1}
          className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_60px_-10px_rgba(34,211,238,0.18)] backdrop-blur-md"
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="block w-full rounded-xl"
            style={{
              background: 'linear-gradient(180deg,#020617 0%,#060d1f 100%)',
              aspectRatio: `${CANVAS_W}/${CANVAS_H}`,
            }}
          />

          {/* Start / Game Over overlay */}
          {showOverlay && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-slate-950/80 backdrop-blur-sm">
              {isGameOver ? (
                <>
                  <p
                    className="text-3xl font-bold text-fuchsia-400"
                    style={{ textShadow: '0 0 20px rgba(217,70,239,0.9)' }}
                  >
                    GAME OVER
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Backlog cleared:{' '}
                    <span className="font-bold text-cyan-400">{displayScore} tickets</span>
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="text-2xl font-bold text-cyan-300"
                    style={{ textShadow: '0 0 18px rgba(34,211,238,0.9)' }}
                  >
                    Backlog Blaster
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Destroy the backlog before it reaches you
                  </p>
                </>
              )}

              <button
                onClick={handleStart}
                className="mt-5 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-7 py-2.5 text-sm font-semibold text-cyan-300 shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_32px_-2px_rgba(34,211,238,0.6)]"
              >
                {isGameOver ? 'Play Again' : 'Launch Game'}
              </button>
            </div>
          )}
        </ParallaxBox>

        {/* Controls hint */}
        <p className="text-sm text-slate-500">
          <kbd className="rounded border border-white/10 bg-white/8 px-1.5 py-0.5 font-mono text-xs text-slate-300">
            ←
          </kbd>{' '}
          <kbd className="rounded border border-white/10 bg-white/8 px-1.5 py-0.5 font-mono text-xs text-slate-300">
            →
          </kbd>{' '}
          to move &nbsp;·&nbsp;{' '}
          <kbd className="rounded border border-white/10 bg-white/8 px-1.5 py-0.5 font-mono text-xs text-slate-300">
            Space
          </kbd>{' '}
          to deploy Automation Lasers
        </p>
      </div>
    </div>
  )
}
