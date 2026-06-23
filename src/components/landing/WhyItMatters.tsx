'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { benchmarkRuns } from '@/content/site'

function RunGrid({ success }: { success: boolean }) {
  return (
    <div className="grid grid-cols-10 gap-1.5 sm:gap-2" aria-label={success ? '20 of 20 successful internal evaluation runs' : '0 of 20 evaluated comparison runs caught the late-breaking update'}>
      {benchmarkRuns.map((run, index) => (
        <motion.span key={run.id} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.025, duration: 0.25 }} className={`aspect-square rounded-[5px] ${success ? 'bg-cyan-deep shadow-[0_0_14px_rgba(21,156,165,.18)]' : 'border border-ink/12 bg-white'}`} title={`Run ${run.id}`} />
      ))}
    </div>
  )
}

export default function WhyItMatters() {
  return (
    <section id="reliability" className="overflow-hidden bg-[#eef8f6] py-20 sm:py-28" aria-labelledby="reliability-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-cyan-deep">Reliability, repeated</p>
            <h2 id="reliability-title" className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">One correct answer is not enough.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-muted lg:pb-2">Aprilio repeats difficult questions to reveal variance that one-shot benchmarks hide.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[26px] border border-cyan-deep/20 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-cyan-deep">Aprilio / internal test</p>
                <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl">20/20</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-success">stable</span>
            </div>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-muted">Detected the late-breaking update and returned exact provenance on every run.</p>
            <div className="mt-7"><RunGrid success /></div>
          </article>

          <article className="rounded-[26px] border border-ink/10 bg-white/55 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-ink-faint">Evaluated comparison lanes</p>
                <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-ink/55 sm:text-6xl">0/20</p>
              </div>
              <span className="rounded-full bg-coral/10 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-coral">update missed</span>
            </div>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-muted">Missed the newly approved regimen and returned inconsistent citation behavior.</p>
            <div className="mt-7"><RunGrid success={false} /></div>
          </article>
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-[24px] border border-ink/10 bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-factum font-mono text-lg font-bold text-ink">⊘</span>
            <div>
              <p className="text-lg font-semibold text-ink">Missing evidence triggers a halt, not a guess.</p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">The system preserves a visible boundary when a required node or pathway is absent.</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-ink/10 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">auditable halt state</span>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink-faint">Internal evaluation: one complex AML question repeated at temperature 0.3. External validation pending.</p>
      </Container>
    </section>
  )
}
