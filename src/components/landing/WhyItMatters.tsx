'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { benchmarkRuns } from '@/content/site'

function RunGrid({ success }: { success: boolean }) {
  return (
    <div className="grid grid-cols-10 gap-1.5 sm:gap-2" aria-label={success ? '20 of 20 successful runs' : '0 of 20 runs caught the late-breaking update'}>
      {benchmarkRuns.map((run, index) => (
        <motion.span
          key={run.id}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.035, duration: 0.25 }}
          className={`aspect-square rounded-[5px] ${success ? 'bg-cyan shadow-[0_0_15px_rgba(95,225,230,.22)]' : 'border border-white/15 bg-white/[0.03]'}`}
          title={`Run ${run.id}`}
        />
      ))}
    </div>
  )
}

export default function WhyItMatters() {
  return (
    <section className="overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-factum">Reliability, repeated</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              One correct answer is not a safety standard.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/60 lg:pb-2">
            Aprilio’s Deterministic Reliability method tests the same difficult question repeatedly, exposing variance that one-shot benchmarks hide.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[26px] border border-cyan/25 bg-white/[0.055] p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-cyan">Aprilio / 20 runs</p>
                <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">20/20</p>
              </div>
              <span className="rounded-full bg-success/15 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-success-light">stable</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">Caught the late-breaking FDA update and returned exact guideline provenance on every run.</p>
            <div className="mt-8"><RunGrid success /></div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-white/40">Frontier systems / 20 runs</p>
                <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white/55 sm:text-6xl">0/20</p>
              </div>
              <span className="rounded-full bg-coral/10 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-coral">update missed</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/45">The evaluated frontier-model lanes missed the newly approved regimen and produced unreliable citation behavior.</p>
            <div className="mt-8"><RunGrid success={false} /></div>
          </motion.article>
        </div>

        <div className="mt-5 grid overflow-hidden rounded-[26px] border border-white/10 bg-[#132a47] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 soft-grid opacity-10" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-white/35">Metacognitive gate</span>
                <span className="h-2.5 w-2.5 rounded-full bg-factum shadow-[0_0_18px_rgba(246,200,95,.65)]" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">Node not found</p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">“I don’t know.”</p>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <span className="block h-full w-[62%] rounded-full bg-gradient-to-r from-cyan to-factum" />
                </div>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-white/30">Retrieval halted before synthesis</p>
              </div>
            </div>
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow text-factum">The traceability moat</p>
            <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">Knowing when the evidence is missing is a feature, not a failure.</h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
              Because Aprilio retrieves against explicit structural rules, it can recognize when a required node or pathway is absent. The system halts instead of filling the gap with a clinically plausible guess.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['No synthetic citations', 'Visible evidence boundary', 'Auditable halt state'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-white/45">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-white/28">
          Internal evaluation: one complex AML question repeated at temperature 0.3. Results require external peer review.
        </p>
      </Container>
    </section>
  )
}
