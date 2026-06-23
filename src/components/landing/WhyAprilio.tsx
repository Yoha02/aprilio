'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const reasons = [
  { number: '01', title: 'Current', description: 'Continuously checks changing sources before an answer is issued.', color: 'bg-cyan', icon: '↻' },
  { number: '02', title: 'Traceable', description: 'Connects each claim to the exact source and retrieval path.', color: 'bg-factum', icon: '↗' },
  { number: '03', title: 'Structured', description: 'Preserves hierarchies and decision logic instead of flattening them.', color: 'bg-violet-light', icon: '⌘' },
  { number: '04', title: 'Bounded', description: 'Stops when required evidence is missing rather than filling the gap.', color: 'bg-success-light', icon: '⊘' },
]

export default function WhyAprilio() {
  return (
    <section id="why-aprilio" className="bg-paper py-20 sm:py-28" aria-labelledby="why-aprilio-title">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-cyan-deep">Why Aprilio</p>
            <h2 id="why-aprilio-title" className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">Intelligence you can inspect.</h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-ink-muted">Four properties make changing medical knowledge usable in high-stakes AI.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.article key={reason.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group rounded-[24px] border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${reason.color} font-mono text-lg font-bold text-ink`}>{reason.icon}</span>
                <span className="font-mono text-xs font-bold tracking-[0.09em] text-ink-faint">{reason.number}</span>
              </div>
              <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em] text-ink">{reason.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink-muted">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
