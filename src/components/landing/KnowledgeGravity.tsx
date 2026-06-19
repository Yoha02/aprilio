'use client'

import { useEffect, useState, type PointerEvent } from 'react'
import { motion } from 'framer-motion'

const states = [
  { label: 'Mapping source topology', detail: 'structure found', color: 'text-cyan-deep' },
  { label: 'Aligning structure + meaning', detail: 'ontology active', color: 'text-violet' },
  { label: 'New evidence detected', detail: 'graph adapting', color: 'text-gold-dark' },
  { label: 'Current Factum resolved', detail: 'boundary preserved', color: 'text-success' },
]

const sources = [
  { id: 'guideline', eyebrow: 'STRUCTURED', title: 'Clinical guideline', meta: '214 pages · v3.2026', mark: '§', position: 'left-[2%] top-[16%]', color: 'cyan', phase: 0 },
  { id: 'taxonomy', eyebrow: 'SYMBOLIC', title: 'Clinical taxonomy', meta: 'AML → 1L → non-intensive', mark: '⌘', position: 'bottom-[18%] left-[1%]', color: 'violet', phase: 1 },
  { id: 'update', eyebrow: 'LIVE SIGNAL', title: 'Regulatory update', meta: 'newer than source set', mark: '+', position: 'right-[1%] top-[17%]', color: 'factum', phase: 2 },
  { id: 'trial', eyebrow: 'EMERGING', title: 'Trial evidence', meta: 'recency checked', mark: '↗', position: 'right-[0%] top-[54%]', color: 'coral', phase: 2 },
]

const fragments = [
  { text: 'version unknown', className: 'left-[2%] top-[46%] -rotate-6' },
  { text: 'context split', className: 'right-[7%] top-[40%] rotate-6' },
  { text: 'plausible ≠ proven', className: 'left-[28%] top-[5%] rotate-3' },
]

export default function KnowledgeGravity() {
  const [phase, setPhase] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const [focusedSource, setFocusedSource] = useState<string | null>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0, left: 50, top: 50, inside: false })

  useEffect(() => {
    const timer = window.setInterval(() => setPhase((value) => (value + 1) % states.length), 2400)
    return () => window.clearInterval(timer)
  }, [])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const left = Math.min(96, Math.max(4, ((event.clientX - bounds.left) / bounds.width) * 100))
    const top = Math.min(94, Math.max(6, ((event.clientY - bounds.top) / bounds.height) * 100))
    const sourceTarget = (event.target as HTMLElement).closest<HTMLElement>('[data-source-id]')
    setHovered(sourceTarget?.dataset.sourceId ?? null)
    setPointer({ x: ((left - 50) / 50) * 18, y: ((top - 50) / 50) * 14, left, top, inside: true })
  }

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0, left: 50, top: 50, inside: false })
    setHovered(null)
  }

  const interactiveSource = focusedSource ?? hovered
  const activeSource = sources.find((source) => source.id === interactiveSource)
  const status = activeSource
    ? { label: `Tracing ${activeSource.title}`, detail: 'lineage highlighted', color: 'text-cyan-deep' }
    : states[phase]

  return (
    <div
      className="knowledge-field relative mx-auto aspect-[1/1.2] w-full max-w-[720px] touch-pan-y sm:aspect-[1/1.03]"
      aria-label="Interactive neurosymbolic knowledge field showing Aprilio organizing changing sources into a current Factum"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-[7%] rounded-full bg-cyan/[0.09] blur-3xl" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.075] blur-2xl" aria-hidden="true" />

      <div className="absolute inset-x-[8%] top-[4%] z-20 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-ink-faint sm:text-[9px]">
        <span>Aprilio / Living knowledge field</span>
        <span className="flex items-center gap-2"><i className="trace-status-pulse h-1.5 w-1.5 rounded-full bg-success" /> continuously adapting</span>
      </div>

      <motion.svg animate={{ x: pointer.x * -0.12, y: pointer.y * -0.12 }} transition={{ type: 'spring', stiffness: 90, damping: 20 }} className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 720 740" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="#5fe1e6" stopOpacity=".18" />
            <stop offset="55%" stopColor="#7768d8" stopOpacity=".07" />
            <stop offset="100%" stopColor="#7768d8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="knowledge-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#5fe1e6" />
            <stop offset=".5" stopColor="#9b91e7" />
            <stop offset="1" stopColor="#f6c85f" />
          </linearGradient>
          <filter id="packet-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <circle cx="360" cy="364" r="304" stroke="#102542" strokeOpacity=".09" className="knowledge-ring knowledge-ring-slow" />
        <circle cx="360" cy="364" r="232" stroke="#102542" strokeOpacity=".12" strokeDasharray="3 8" className="knowledge-ring knowledge-ring-reverse" />
        <circle cx="360" cy="364" r="157" stroke="url(#knowledge-line)" strokeOpacity=".42" strokeDasharray="2 9" className="knowledge-ring" />
        <circle cx="360" cy="364" r="128" fill="url(#core-glow)" />

        <path id="path-guideline" d="M118 190 C214 174 250 264 329 334" className={`gravity-route ${interactiveSource === 'guideline' ? 'gravity-route-selected' : ''}`} />
        <path id="path-taxonomy" d="M112 570 C212 568 258 482 332 398" className={`gravity-route ${interactiveSource === 'taxonomy' ? 'gravity-route-selected' : ''}`} />
        <path id="path-update" d="M607 192 C516 194 470 264 391 336" className={`gravity-route ${phase >= 2 ? 'gravity-route-hot' : ''} ${interactiveSource === 'update' ? 'gravity-route-selected' : ''}`} />
        <path id="path-trial" d="M616 448 C520 456 470 428 397 390" className={`gravity-route ${interactiveSource === 'trial' ? 'gravity-route-selected' : ''}`} />
        <path id="path-output" d="M360 424 C360 478 360 535 360 606" className="gravity-route gravity-route-output" />

        <circle r="4" fill="#5fe1e6" filter="url(#packet-glow)"><animateMotion dur="4.8s" repeatCount="indefinite" path="M118 190 C214 174 250 264 329 334" /></circle>
        <circle r="3.5" fill="#9b91e7" filter="url(#packet-glow)"><animateMotion dur="5.6s" begin="-2s" repeatCount="indefinite" path="M112 570 C212 568 258 482 332 398" /></circle>
        <circle r="4.5" fill="#f6c85f" filter="url(#packet-glow)"><animateMotion dur="3.8s" begin="-1s" repeatCount="indefinite" path="M607 192 C516 194 470 264 391 336" /></circle>
        <circle r="3.5" fill="#ff8e73" filter="url(#packet-glow)"><animateMotion dur="5.1s" begin="-3s" repeatCount="indefinite" path="M616 448 C520 456 470 428 397 390" /></circle>
        <circle r="5" fill="#f6c85f" filter="url(#packet-glow)"><animateMotion dur="3.2s" repeatCount="indefinite" path="M360 424 C360 478 360 535 360 606" /></circle>

        {Array.from({ length: 18 }).map((_, index) => {
          const angle = (index / 18) * Math.PI * 2
          const radius = index % 2 === 0 ? 304 : 232
          return <circle key={index} cx={360 + Math.cos(angle) * radius} cy={364 + Math.sin(angle) * radius} r={index % 3 === 0 ? 2 : 1.2} fill="#102542" fillOpacity={index % 3 === 0 ? '.28' : '.14'} />
        })}
      </motion.svg>

      <motion.div
        animate={{ left: `${pointer.left}%`, top: `${pointer.top}%`, opacity: pointer.inside ? 1 : 0 }}
        transition={{ left: { type: 'spring', stiffness: 210, damping: 28 }, top: { type: 'spring', stiffness: 210, damping: 28 }, opacity: { duration: 0.2 } }}
        className="pointer-events-none absolute z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-cyan-deep/20 bg-white/82 px-2.5 py-1.5 shadow-[0_10px_30px_rgba(16,37,66,.12)] backdrop-blur-md md:flex"
        aria-hidden="true"
      >
        <span className="relative grid h-5 w-5 place-items-center rounded-full border border-cyan-deep/25"><i className="h-1.5 w-1.5 rounded-full bg-cyan-deep shadow-[0_0_0_4px_rgba(21,156,165,.12)]" /></span>
        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.11em] text-cyan-deep">Query intent</span>
      </motion.div>

      {fragments.map((fragment, index) => (
        <span key={fragment.text} className={`knowledge-fragment absolute z-0 hidden rounded-full border border-coral/20 bg-coral/[0.06] px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.1em] text-coral/65 sm:block ${fragment.className}`} style={{ animationDelay: `${index * -1.9}s` }}>
          {fragment.text}
        </span>
      ))}

      <motion.div animate={{ x: pointer.x * 0.24, y: pointer.y * 0.24 }} transition={{ type: 'spring', stiffness: 95, damping: 20 }} className="pointer-events-none absolute inset-0 z-10">
        {sources.map((source, index) => {
          const isActive = phase === source.phase || (source.phase === 2 && phase === 3)
          const isHovered = interactiveSource === source.id
          return (
          <motion.button
            key={source.id}
            type="button"
            aria-label={`Trace ${source.title} into the Aprilio knowledge field`}
            data-testid={`knowledge-source-${source.id}`}
            data-source-id={source.id}
            onMouseEnter={() => setHovered(source.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setFocusedSource(source.id)}
            onBlur={() => setFocusedSource(null)}
            animate={{ opacity: phase >= source.phase || isHovered ? 1 : 0.56, scale: isHovered ? 1.07 : isActive ? 1.035 : 1, y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.35 }}
            className={`knowledge-source pointer-events-auto absolute z-10 w-[148px] rounded-2xl border bg-white/88 p-3 text-left shadow-[0_18px_45px_rgba(16,37,66,.11)] backdrop-blur-md sm:w-[190px] sm:p-4 ${isHovered ? 'border-cyan-deep/35 shadow-[0_22px_55px_rgba(21,156,165,.18)]' : 'border-ink/10'} ${source.position}`}
            style={{ animationDelay: `${index * -1.5}s` }}
          >
            <div className="flex items-center gap-2.5">
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border text-xs font-bold ${source.color === 'cyan' ? 'border-cyan-deep/20 bg-cyan/15 text-cyan-deep' : source.color === 'violet' ? 'border-violet/20 bg-violet/10 text-violet' : source.color === 'factum' ? 'border-factum/35 bg-factum/20 text-gold-dark' : 'border-coral/25 bg-coral/10 text-coral'}`}>{source.mark}</span>
              <div className="min-w-0">
                <p className={`font-mono text-[7px] font-bold tracking-[0.13em] sm:text-[8px] ${source.color === 'cyan' ? 'text-cyan-deep' : source.color === 'violet' ? 'text-violet' : source.color === 'factum' ? 'text-gold-dark' : 'text-coral'}`}>{source.eyebrow}</p>
                <p className="mt-1 truncate text-[9px] font-semibold tracking-[-0.01em] text-ink sm:text-xs">{source.title}</p>
              </div>
            </div>
            <p className="mt-2 border-t border-ink/8 pt-2 font-mono text-[7px] text-ink-muted sm:text-[9px]">{source.meta}</p>
          </motion.button>
          )
        })}
      </motion.div>

      <motion.div
        animate={{ scale: phase === 1 ? 1.04 : 1, rotate: phase === 2 ? 2 : 0, x: pointer.x * 0.42, y: pointer.y * 0.42 }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        className="absolute left-1/2 top-[49.2%] z-20 h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 bg-[#0d1b36]/95 p-4 shadow-[0_0_0_18px_rgba(95,225,230,.025),0_28px_80px_rgba(0,0,0,.38)] backdrop-blur-xl sm:h-[218px] sm:w-[218px] sm:p-5"
      >
        <div className="flex items-center justify-between font-mono text-[7px] font-bold uppercase tracking-[0.11em] text-white/60 sm:text-[8px]"><span>ONTOHARNESS</span><span className="text-success-light">ACTIVE</span></div>
        <div className="relative mx-auto mt-3 h-[80px] w-[142px] sm:mt-4 sm:h-[96px] sm:w-[170px]">
          <motion.span animate={{ x: phase === 1 ? 5 : 0 }} transition={{ duration: 0.7 }} className="absolute left-0 top-0 grid h-20 w-20 place-items-center rounded-full border border-cyan/45 bg-cyan/20 font-mono text-2xl font-bold text-cyan shadow-[0_0_35px_rgba(95,225,230,.2)] sm:h-24 sm:w-24 sm:text-[28px]">S</motion.span>
          <motion.span animate={{ x: phase === 1 ? -5 : 0 }} transition={{ duration: 0.7 }} className="absolute right-0 top-0 grid h-20 w-20 place-items-center rounded-full border border-purple-light/45 bg-violet/25 font-mono text-2xl font-bold text-purple-light shadow-[0_0_35px_rgba(119,104,216,.24)] sm:h-24 sm:w-24 sm:text-[28px]">M</motion.span>
          <span className="absolute left-1/2 top-1/2 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-factum/50 bg-ink text-factum shadow-[0_0_24px_rgba(246,200,95,.4)]"><i className="h-1.5 w-1.5 rounded-full bg-factum" /></span>
        </div>
        <p className="mt-2 text-center font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/85 sm:text-[10px]">Structure × meaning</p>
        <div className="mt-2 flex items-center gap-2"><span className="h-px flex-1 bg-white/15" /><span className="font-mono text-[8px] font-bold tracking-[0.06em] text-white/60 sm:text-[9px]">NEUROSYMBOLIC</span><span className="h-px flex-1 bg-white/15" /></div>
      </motion.div>

      <motion.div
        animate={{ opacity: phase === 3 ? 1 : 0.66, y: phase === 3 ? -4 : 0, scale: phase === 3 ? 1.035 : 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-[1%] left-1/2 z-20 w-[210px] -translate-x-1/2 rounded-[18px] border border-factum/35 bg-factum px-4 py-3 text-ink shadow-[0_22px_60px_rgba(246,200,95,.18)] sm:w-[260px] sm:px-5 sm:py-4"
      >
        <div className="flex items-center justify-between"><span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em]">FACTUM / 04</span><span className="rounded-full bg-success px-2 py-1 font-mono text-[7px] font-bold text-white">VERIFIED</span></div>
        <p className="mt-2 text-[10px] font-bold sm:text-xs">Current. Linked. Bounded.</p>
        <div className="mt-2 flex gap-3 font-mono text-[7px] uppercase tracking-[0.06em] text-ink/65 sm:text-[8px]"><span>2 sources</span><span>0 unsupported claims</span></div>
      </motion.div>

      <div className="absolute bottom-[9%] left-[8%] z-20 hidden items-center gap-2 rounded-full border border-ink/10 bg-white/72 px-3 py-2 font-mono text-[7px] uppercase tracking-[0.1em] text-ink-faint shadow-sm backdrop-blur md:flex">
        <span className="grid h-4 w-4 place-items-center rounded-full border border-coral/30 text-[7px] text-coral">×</span> stale fragments rejected
      </div>

      <div className="absolute inset-x-[7%] bottom-[-4%] z-30 rounded-2xl border border-ink/10 bg-white/82 p-2.5 shadow-[0_16px_50px_rgba(16,37,66,.12)] backdrop-blur-xl sm:bottom-[-2%] sm:p-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full ${interactiveSource ? 'bg-cyan-deep' : phase === 2 ? 'bg-factum' : phase === 3 ? 'bg-success' : 'bg-cyan-deep'}`} /><motion.span animate={{ opacity: 1, y: 0 }} className={`font-mono text-[8px] font-bold uppercase tracking-[0.1em] sm:text-[9px] ${status.color}`}>{status.label}</motion.span></div>
          <span className="hidden font-mono text-[8px] uppercase tracking-[0.08em] text-ink-muted sm:block">{status.detail}</span>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-1">{states.map((_, index) => <span key={index} className={`h-0.5 rounded-full transition-colors duration-500 ${index <= phase ? 'bg-cyan-deep' : 'bg-ink/10'}`} />)}</div>
      </div>
    </div>
  )
}
