'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { architectureStages } from '@/content/site'

export default function HowItWorks() {
  return (
    <section id="engine" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="absolute inset-0 soft-grid opacity-55" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-cyan-deep">The adaptive harness</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
            Structure first. Retrieval second. Synthesis last.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Aprilio replaces vector guesswork with a dataset-specific harness—built once, reused continuously, and regenerated when its components fail.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[9%] right-[9%] top-[58px] hidden h-px bg-ink/15 lg:block" aria-hidden="true">
            <motion.span
              className="block h-px origin-left bg-gradient-to-r from-cyan-deep via-violet to-factum"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {architectureStages.map((stage, index) => (
              <motion.article
                key={stage.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="group relative rounded-[26px] border border-ink/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl font-mono text-sm font-bold ${index === 0 ? 'bg-cyan text-ink' : index === 1 ? 'bg-violet text-white' : 'bg-factum text-ink'}`}>
                    {stage.number}
                  </span>
                  <span className="eyebrow text-ink-faint">{stage.eyebrow}</span>
                </div>
                <div className="mt-10">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-deep">{stage.agent}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink">{stage.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink-muted">{stage.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between rounded-xl bg-mist px-3 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-faint">Output</span>
                  <span className="text-xs font-semibold text-ink">{stage.output}</span>
                </div>
                <span className="absolute -bottom-px left-8 right-8 h-px scale-x-0 bg-gradient-to-r from-cyan-deep via-violet to-factum transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-[26px] border border-ink/10 bg-ink p-5 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 font-mono text-sm font-bold text-cyan">↻</span>
            <div>
              <p className="text-sm font-semibold">Closed-loop regeneration</p>
              <p className="mt-1 text-sm leading-6 text-white/55">When a component fails, Aprilio can identify the failure source and regenerate the affected harness layer.</p>
            </div>
          </div>
          <span className="w-fit rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-white/45">component-level attribution</span>
        </div>
      </Container>
    </section>
  )
}
