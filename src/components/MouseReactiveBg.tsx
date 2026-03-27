import { useEffect, useRef } from 'react'

interface Props {
  spacing?: number
  glowRadius?: number
}

export default function MouseReactiveBg({ spacing = 40, glowRadius = 200 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf = useRef<number>(0)
  const t0 = useRef(Date.now())

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let w = 0, h = 0

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const CONN = spacing * 2.2 // max dist between dots to draw connection line

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const t = (Date.now() - t0.current) * 0.001
      const mx = mouse.current.x
      const my = mouse.current.y

      const cols = Math.ceil(w / spacing) + 1
      const rows = Math.ceil(h / spacing) + 1

      // Collect dots that are lit (near cursor) for connection lines
      type LitDot = { x: number; y: number; inf: number }
      const lit: LitDot[] = []

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing

          const dx = x - mx
          const dy = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          const inf = Math.max(0, 1 - dist / glowRadius)

          // Gentle breathing wave
          const wave = (Math.sin(x * 0.022 + t * 0.6) * Math.cos(y * 0.018 + t * 0.45) + 1) * 0.5

          const alpha = 0.04 + wave * 0.05 + inf * 0.55
          const size = 0.85 + wave * 0.25 + inf * 2.6

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)

          if (inf > 0.05) {
            lit.push({ x, y, inf })
            const g = ctx.createRadialGradient(x, y, 0, x, y, size * 2.8)
            g.addColorStop(0, `rgba(0,212,126,${alpha})`)
            g.addColorStop(0.55, `rgba(0,163,92,${alpha * 0.35})`)
            g.addColorStop(1, 'rgba(0,163,92,0)')
            ctx.fillStyle = g
          } else {
            ctx.fillStyle = `rgba(0,212,126,${alpha})`
          }
          ctx.fill()
        }
      }

      // Connection lines between lit dots — sparse, elegant circuit feel
      for (let i = 0; i < lit.length; i++) {
        for (let j = i + 1; j < lit.length; j++) {
          const dx = lit[i].x - lit[j].x
          const dy = lit[i].y - lit[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONN) {
            const lineAlpha =
              (1 - d / CONN) * Math.min(lit[i].inf, lit[j].inf) * 0.28
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,126,${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.moveTo(lit[i].x, lit[i].y)
            ctx.lineTo(lit[j].x, lit[j].y)
            ctx.stroke()
          }
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    draw()

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    window.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
    }
  }, [spacing, glowRadius])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
