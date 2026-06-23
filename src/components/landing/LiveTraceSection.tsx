'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import FactumEngine from './FactumEngine'

export default function LiveTraceSection() {
  return (
    <section id="live-trace" className="relative z-10 mt-10 overflow-hidden rounded-t-[38px] bg-mist py-20 sm:mt-14 sm:rounded-t-[56px] sm:py-28">
      <div className="absolute inset-0 soft-grid opacity-40" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow text-cyan-deep">See it in action</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.01] tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">Watch evidence become a current Factum.</h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-ink-muted">Follow one clinical question from changing sources to a verified, bounded answer.</p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.07em] text-ink-faint">
              {['Input', 'Structure', 'Recency', 'Verified output'].map((item, index) => <span key={item} className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-2"><b className="text-cyan-deep">0{index + 1}</b>{item}</span>)}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-14 sm:mt-18">
          <FactumEngine />
        </motion.div>
      </Container>
    </section>
  )
}
