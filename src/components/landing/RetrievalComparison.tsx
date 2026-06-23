'use client'

import { motion } from 'framer-motion'

type Tone = 'rag' | 'gar' | 'ink' | 'factum'

const toneStyles: Record<Tone, string> = {
  rag: 'border-ink/10 bg-white text-ink-faint',
  gar: 'border-cyan-deep/20 bg-white text-cyan-deep',
  ink: 'border-ink/10 bg-ink text-white',
  factum: 'border-factum/40 bg-factum text-ink',
}

function ArchitectureNode({ eyebrow, title, meta, icon, tone = 'rag', className = '' }: { eyebrow: string; title: string; meta: string; icon: string; tone?: Tone; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -3 }}
      className={`relative rounded-2xl border p-3.5 shadow-[0_10px_28px_rgba(16,37,66,.07)] transition-shadow hover:shadow-[0_16px_34px_rgba(16,37,66,.11)] sm:p-4 ${toneStyles[tone]} ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${tone === 'ink' ? 'bg-white/10 text-cyan' : tone === 'factum' ? 'bg-white/45 text-ink' : tone === 'gar' ? 'bg-cyan/20 text-cyan-deep' : 'bg-ink/5 text-ink-muted'}`}>{icon}</span>
        <div className="min-w-0">
          <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.08em] ${tone === 'ink' ? 'text-cyan' : tone === 'factum' ? 'text-gold-dark' : tone === 'gar' ? 'text-cyan-deep' : 'text-ink-faint'}`}>{eyebrow}</p>
          <p className={`mt-1 text-[15px] font-semibold leading-5 ${tone === 'ink' ? 'text-white' : 'text-ink'}`}>{title}</p>
          <p className={`mt-1.5 text-[12px] leading-[18px] ${tone === 'ink' ? 'text-white/65' : 'text-ink-muted'}`}>{meta}</p>
        </div>
      </div>
    </motion.div>
  )
}

function FlowConnector({ tone = 'rag', height = 'h-8', delay = 0 }: { tone?: 'rag' | 'gar' | 'factum'; height?: string; delay?: number }) {
  const line = tone === 'gar' ? 'bg-cyan-deep/28' : tone === 'factum' ? 'bg-factum/65' : 'bg-ink/15'
  const packet = tone === 'gar' ? 'bg-cyan-deep shadow-[0_0_12px_rgba(21,156,165,.55)]' : tone === 'factum' ? 'bg-factum shadow-[0_0_12px_rgba(246,200,95,.65)]' : 'bg-coral shadow-[0_0_10px_rgba(255,142,115,.45)]'
  return (
    <div className={`relative mx-auto w-px ${height} ${line}`} aria-hidden="true">
      <motion.span className={`absolute -left-[3px] top-0 h-[7px] w-[7px] rounded-full ${packet}`} animate={{ top: ['0%', '82%'], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'linear' }} />
    </div>
  )
}

function ConvergeConnector({ tone }: { tone: 'rag' | 'gar' }) {
  const line = tone === 'gar' ? 'border-cyan-deep/30 bg-cyan-deep/30' : 'border-ink/15 bg-ink/15'
  const packet = tone === 'gar' ? 'bg-cyan-deep' : 'bg-coral'
  return (
    <div className="relative mx-auto h-10 w-[55%]" aria-hidden="true">
      <span className={`absolute inset-x-0 top-0 h-5 rounded-t-xl border-x border-t ${line}`} />
      <span className={`absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 ${line}`} />
      <motion.span className={`absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full ${packet}`} animate={{ y: [0, 19], opacity: [0, 1, 0] }} transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }} />
    </div>
  )
}

function VectorIndex() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} className="relative mx-auto w-full max-w-[220px] py-2 text-center">
      <div className="relative mx-auto h-[74px] w-[128px]">
        <span className="absolute inset-x-0 top-0 h-7 rounded-[50%] border border-ink/15 bg-white shadow-sm" />
        <span className="absolute inset-x-0 bottom-0 top-3 border-x border-ink/15 bg-white" />
        <span className="absolute inset-x-0 bottom-0 h-7 rounded-[50%] border border-ink/15 bg-[#f0efeb]" />
        {[0, 1, 2].map((item) => <span key={item} className="absolute left-1/2 top-[18px] h-1.5 w-1.5 rounded-full bg-ink/25" style={{ transform: `translate(${(item - 1) * 20}px, ${item * 7}px)` }} />)}
        <motion.span className="absolute left-[31px] top-[17px] h-2 w-2 rounded-full bg-coral" animate={{ x: [0, 58, 24, 0], y: [0, 14, 35, 0], opacity: [0.25, 1, 0.7, 0.25] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <p className="mt-1 text-[15px] font-semibold text-ink">Vector index</p>
      <p className="mt-1 text-xs text-ink-faint">dense embeddings · flattened chunks</p>
    </motion.div>
  )
}

function StructuralGraph() {
  return (
    <div className="relative mx-auto h-[78px] w-[140px]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 140 78" fill="none">
        <path d="M70 12V32M70 32L26 59M70 32L70 61M70 32L114 59" stroke="#159ca5" strokeOpacity=".38" strokeWidth="1.5" />
        <motion.circle cx="70" cy="12" r="7" fill="#5fe1e6" animate={{ r: [6, 8, 6] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <circle cx="26" cy="59" r="6" fill="#7768d8" />
        <circle cx="70" cy="61" r="6" fill="#f6c85f" />
        <circle cx="114" cy="59" r="6" fill="#ff8e73" />
        <motion.circle r="3" fill="#159ca5" animate={{ cx: [70, 26], cy: [19, 54], opacity: [0, 1, 0] }} transition={{ duration: 1.7, repeat: Infinity }} />
      </svg>
    </div>
  )
}

function RagArchitecture() {
  return (
    <article data-testid="rag-architecture" className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-[#f6f5f1] p-4 sm:p-6">
      <div className="absolute -right-28 top-20 h-64 w-64 rounded-full bg-coral/[0.06] blur-3xl" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-ink-faint">RAG / conventional</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[28px]">A narrowing retrieval pipe</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">Index documents, retrieve nearby chunks, then ask a generator to compose the answer.</p>
        </div>
        <span className="rounded-full bg-ink/5 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-faint">Similarity-led</span>
      </div>

      <div className="relative mt-7 rounded-[22px] border border-ink/8 bg-white/45 p-3 sm:p-4">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-ink-faint">Index time</p>
            <ArchitectureNode eyebrow="Corpus" title="Source documents" meta="guidelines · updates · evidence" icon="DOC" />
            <FlowConnector />
            <ArchitectureNode eyebrow="Transform" title="Chunk + embed" meta="split text and create vectors" icon="01" />
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-ink-faint">Query time</p>
            <ArchitectureNode eyebrow="Input" title="Clinical question" meta="natural-language request" icon="?" />
            <FlowConnector delay={0.6} />
            <ArchitectureNode eyebrow="Transform" title="Query embedding" meta="encode the question as a vector" icon="02" />
          </div>
        </div>

        <ConvergeConnector tone="rag" />
        <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
          <VectorIndex />
          <div className="mt-3 rounded-xl bg-coral/[0.09] px-3 py-2.5 text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.07em] text-coral">Cosine similarity</p>
            <p className="mt-1 text-[13px] font-semibold text-ink">Return top‑k nearest chunks</p>
          </div>
        </div>
        <FlowConnector />
        <ArchitectureNode eyebrow="Augment" title="Retrieved text → prompt" meta="pass selected passages to the model" icon="03" />
        <FlowConnector delay={0.4} />
        <ArchitectureNode eyebrow="Generate" title="Large language model" meta="synthesize a fluent response" icon="LLM" tone="ink" />
      </div>

      <div className="relative mt-4 rounded-2xl border border-coral/25 bg-coral/10 px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div><p className="font-mono text-[11px] font-bold uppercase tracking-wider text-coral">Plausible output</p><p className="mt-2 text-base font-semibold text-ink">Answer generated from similar passages</p></div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-coral/25 bg-white font-mono text-sm font-bold text-coral">?</span>
        </div>
        <p className="mt-2 text-[13px] leading-5 text-ink-muted">Document hierarchy, recency conflicts, and exact claim boundaries are not inherently enforced.</p>
      </div>
    </article>
  )
}

function GarArchitecture() {
  return (
    <article data-testid="gar-architecture" className="relative overflow-hidden rounded-[28px] border border-cyan-deep/25 bg-[#effaf9] p-4 shadow-[0_20px_55px_rgba(21,156,165,.08)] sm:p-6">
      <div className="absolute -right-16 top-28 h-72 w-72 rounded-full bg-cyan/[0.13] blur-3xl" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-cyan-deep">GAR / Aprilio</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[28px]">A living, governed knowledge system</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">Build a reusable map once, then route every question through structure, freshness, and evidence gates.</p>
        </div>
        <span className="rounded-full bg-cyan/25 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-deep">Structure-led</span>
      </div>

      <div className="relative mt-7 rounded-[22px] border border-cyan-deep/12 bg-white/55 p-3 sm:p-4">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-deep">01 · Persistent knowledge build</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['§', 'Guideline'],
            ['+', 'Live update'],
            ['↗', 'Evidence'],
          ].map(([icon, label], index) => (
            <motion.div key={label} initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-xl border border-cyan-deep/12 bg-white px-2 py-3 text-center shadow-sm">
              <span className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-cyan/15 font-mono text-xs font-bold text-cyan-deep">{icon}</span>
              <p className="mt-2 text-[12px] font-semibold leading-4 text-ink">{label}</p>
            </motion.div>
          ))}
        </div>
        <ConvergeConnector tone="gar" />
        <ArchitectureNode eyebrow="Cartographer agent" title="Read the source hierarchy" meta="sections, pathways, and decision logic stay intact" icon="01" tone="gar" />
        <FlowConnector tone="gar" />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-cyan-deep/18 bg-white p-3 text-center shadow-sm sm:p-4">
            <StructuralGraph />
            <p className="text-[15px] font-semibold text-ink">Structural source map</p>
            <p className="mt-1 text-xs leading-[18px] text-ink-muted">machine-readable pathways</p>
          </div>
          <ArchitectureNode eyebrow="Ontoharness" title="Reusable navigation artifact" meta="intent and evidence rules bound to this dataset" icon="OH" tone="gar" className="h-full" />
        </div>

        <div className="my-5 flex items-center gap-3" aria-hidden="true"><span className="h-px flex-1 bg-cyan-deep/20" /><span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-deep">02 · Runtime retrieval</span><span className="h-px flex-1 bg-cyan-deep/20" /></div>
        <ArchitectureNode eyebrow="Query" title="Resolve clinical intent" meta="patient context → pathway → decision point" icon="?" tone="ink" />
        <FlowConnector tone="factum" />
        <div className="grid gap-3 sm:grid-cols-2">
          <ArchitectureNode eyebrow="Route" title="Follow structure" meta="retrieve by pathway, not proximity alone" icon="S" tone="gar" />
          <ArchitectureNode eyebrow="Reconcile" title="Check what changed" meta="compare recency and source authority" icon="↻" tone="gar" />
        </div>
        <ConvergeConnector tone="gar" />

        <div className="relative rounded-2xl border border-factum/45 bg-ink p-4 text-white shadow-[0_18px_36px_rgba(16,37,66,.2)]">
          <motion.span className="absolute -right-1 top-1/2 h-2.5 w-2.5 rounded-full bg-coral" animate={{ x: [0, 12, 18], opacity: [1, 1, 0] }} transition={{ duration: 1.7, repeat: Infinity, repeatDelay: 1.4 }} aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-factum font-mono text-sm font-bold text-ink">✓</span>
            <div><p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-factum">Evidence boundary gate</p><p className="mt-1 text-[15px] font-semibold">Verify provenance or stop</p></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.05em]">
            <span className="rounded-full bg-success/20 px-2.5 py-1.5 text-success-light">current path continues</span>
            <span className="rounded-full bg-coral/15 px-2.5 py-1.5 text-coral">stale branch rejected</span>
          </div>
        </div>
        <FlowConnector tone="factum" height="h-10" />
        <ArchitectureNode eyebrow="Factum assembler" title="Issue only bounded claims" meta="each claim carries its retrieval path and source" icon="F" tone="factum" />
      </div>

      <div className="relative mt-4 overflow-hidden rounded-2xl border border-cyan-deep/25 bg-cyan/15 px-4 py-4">
        <motion.span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/45 blur-md" animate={{ left: ['-12%', '115%'] }} transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }} aria-hidden="true" />
        <div className="relative flex items-center justify-between gap-3">
          <div><p className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-deep">Verified Factum</p><p className="mt-2 text-base font-semibold text-ink">Current · source-linked · bounded</p></div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-success font-mono text-sm font-bold text-white">✓</span>
        </div>
        <p className="relative mt-2 text-[13px] leading-5 text-ink-muted">If the evidence is absent or contradictory, the system exposes the boundary instead of inventing an answer.</p>
      </div>
    </article>
  )
}

export default function RetrievalComparison() {
  return (
    <div data-testid="architecture-comparison" className="mt-12 rounded-[32px] border border-ink/10 bg-white/70 p-3 shadow-[0_24px_70px_rgba(16,37,66,.1)] backdrop-blur sm:p-5 lg:p-6">
      <div className="mb-5 flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.09em] text-cyan-deep">Architecture comparison</p>
          <p className="mt-2 text-base font-semibold text-ink sm:text-lg">One changing source set. Two fundamentally different systems.</p>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.07em] text-ink-faint">
          <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-coral" /> packet</span>
          <span>flows top → bottom</span>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <RagArchitecture />
        <GarArchitecture />
      </div>
    </div>
  )
}
