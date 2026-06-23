'use client'

import { motion } from 'framer-motion'

const ragSteps = [
  { label: 'Split into chunks', meta: 'source structure flattened' },
  { label: 'Similarity search', meta: 'nearest text selected' },
  { label: 'Generate response', meta: 'model fills the gaps' },
]

const garSteps = [
  { label: 'Map source structure', meta: 'hierarchy preserved' },
  { label: 'Resolve intent + recency', meta: 'fresh evidence reconciled' },
  { label: 'Issue a Factum', meta: 'claims linked or halted' },
]

function FlowLane({ type }: { type: 'rag' | 'gar' }) {
  const isGar = type === 'gar'
  const steps = isGar ? garSteps : ragSteps

  return (
    <article className={`relative overflow-hidden rounded-[24px] border p-5 sm:p-7 ${isGar ? 'border-cyan-deep/25 bg-[#f2fbfa]' : 'border-ink/10 bg-[#f6f5f1]'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`eyebrow ${isGar ? 'text-cyan-deep' : 'text-ink-faint'}`}>{isGar ? 'GAR / Aprilio' : 'RAG / conventional'}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">{isGar ? 'Follow the knowledge' : 'Find similar text'}</h3>
        </div>
        <span className={`rounded-full px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider ${isGar ? 'bg-cyan/30 text-cyan-deep' : 'bg-ink/5 text-ink-faint'}`}>{isGar ? 'grounded' : 'probabilistic'}</span>
      </div>

      <div className="relative mt-7 pl-12">
        <div className={`absolute bottom-8 left-[17px] top-8 w-px ${isGar ? 'bg-cyan-deep/25' : 'bg-ink/12'}`} aria-hidden="true" />
        <motion.span
          aria-hidden="true"
          className={`absolute left-[11px] top-7 z-10 h-3.5 w-3.5 rounded-full border-2 border-white ${isGar ? 'bg-cyan-deep shadow-[0_0_18px_rgba(21,156,165,.6)]' : 'bg-coral shadow-[0_0_16px_rgba(255,142,115,.4)]'}`}
          animate={{ top: ['7%', '88%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: isGar ? 3.4 : 3.8, repeat: Infinity, ease: 'linear', delay: isGar ? 0.4 : 0 }}
        />

        <div className="space-y-3">
          <div className="relative rounded-2xl border border-ink/10 bg-white px-4 py-4 shadow-sm">
            <span className={`absolute -left-[39px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white ${isGar ? 'bg-cyan-deep' : 'bg-ink-faint'}`} aria-hidden="true" />
            <p className="text-base font-semibold text-ink">Clinical question + sources</p>
            <p className="mt-1 text-[13px] leading-5 text-ink-faint">guideline · regulatory update · evidence</p>
          </div>
          {steps.map((step, index) => (
            <motion.div key={step.label} initial={{ opacity: 0.45, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.12 }} className="relative rounded-2xl border border-ink/10 bg-white px-4 py-4 shadow-sm">
              <span className={`absolute -left-[39px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white ${isGar ? 'bg-cyan-deep' : 'bg-ink-faint'}`} aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs font-bold ${isGar ? 'text-cyan-deep' : 'text-ink-faint'}`}>0{index + 1}</span>
                <div>
                  <p className="text-base font-semibold text-ink">{step.label}</p>
                  <p className="mt-1 text-[13px] leading-5 text-ink-faint">{step.meta}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={`mt-5 rounded-2xl border px-4 py-4 ${isGar ? 'border-cyan-deep/20 bg-cyan/15' : 'border-coral/20 bg-coral/10'}`}>
        <p className={`font-mono text-[11px] font-bold uppercase tracking-wider ${isGar ? 'text-cyan-deep' : 'text-coral'}`}>{isGar ? 'Verified outcome' : 'Uncertain outcome'}</p>
        <p className="mt-2 text-base font-semibold text-ink">{isGar ? 'Current · source-linked · bounded' : 'Plausible · source boundary unknown'}</p>
      </div>
    </article>
  )
}

export default function RetrievalComparison() {
  return (
    <div className="mt-12 rounded-[30px] border border-ink/10 bg-white/65 p-3 shadow-lg backdrop-blur sm:p-5 lg:p-6">
      <div className="mb-4 flex flex-col gap-2 px-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-ink">One question. The same changing source set. Two very different paths.</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-ink-faint">Packets show retrieval moving top to bottom</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <FlowLane type="rag" />
        <FlowLane type="gar" />
      </div>
    </div>
  )
}
