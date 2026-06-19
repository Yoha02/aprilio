'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import KnowledgeGravity from './KnowledgeGravity'

const principles = ['Structure + semantics', 'Continuous recency', 'Provenance by design', 'Visible boundaries']

export default function Hero() {
  const { scrollY } = useScroll()
  const copyY = useTransform(scrollY, [0, 900], [0, 52])
  const fieldY = useTransform(scrollY, [0, 1000], [0, 88])
  const fieldRotate = useTransform(scrollY, [0, 1000], [0, 2.5])

  return (
    <section className="hero-light relative min-h-[980px] overflow-hidden bg-paper pb-32 pt-32 text-ink sm:pb-40 sm:pt-40 lg:min-h-[100svh] lg:pb-28 lg:pt-32">
      <div className="hero-aurora absolute inset-0" aria-hidden="true" />
      <div className="hero-noise absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="absolute -left-[3vw] top-[16%] hidden select-none font-[family-name:var(--font-heading)] text-[12vw] font-semibold leading-none tracking-[-0.08em] text-ink/[0.025] lg:block" aria-hidden="true">LIVING</div>
      <div className="absolute -right-[1vw] bottom-[5%] hidden select-none font-[family-name:var(--font-heading)] text-[10vw] font-semibold leading-none tracking-[-0.08em] text-ink/[0.025] lg:block" aria-hidden="true">KNOWLEDGE</div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[.88fr_1.12fr] lg:gap-8 xl:grid-cols-[.82fr_1.18fr]">
          <motion.div style={{ y: copyY }} className="relative z-20 pt-3 lg:pt-10">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2.5 rounded-full border border-cyan-deep/15 bg-cyan/15 px-3 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-deep shadow-[0_0_0_5px_rgba(95,225,230,.13),0_0_18px_rgba(95,225,230,.6)]" />
              <span className="eyebrow text-cyan-deep">The neurosymbolic knowledge layer</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-[790px] text-[clamp(4.2rem,8vw,7.9rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-ink">
              Ground truth,<br />
              <span className="hero-gradient-text">in motion.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }} className="mt-8 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl">
              Knowledge changes. Models guess. Aprilio continuously turns fragmented sources into a living, structured intelligence layer, ensuring every answer is current, traceable, and honest about its limits.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#live-trace" className="button-link bg-factum text-ink shadow-[0_14px_38px_rgba(246,200,95,.17)] hover:shadow-[0_18px_48px_rgba(246,200,95,.25)]">See it in action <span aria-hidden="true">↓</span></Link>
              <Link href="#engine" className="button-link border border-ink/12 bg-white/72 text-ink shadow-sm backdrop-blur transition-colors hover:bg-white">Explore the architecture <span aria-hidden="true">↗</span></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-10 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3 border-t border-ink/10 pt-5 font-mono text-[8px] uppercase tracking-[0.1em] text-ink-faint sm:flex sm:flex-wrap sm:text-[9px]">
              {principles.map((principle, index) => <span key={principle} className="flex items-center gap-2"><i className={`h-1 w-1 rounded-full ${index === 0 ? 'bg-cyan' : index === 1 ? 'bg-violet-light' : index === 2 ? 'bg-factum' : 'bg-success-light'}`} />{principle}</span>)}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }} style={{ y: fieldY, rotate: fieldRotate }} className="relative z-10 -mx-5 lg:-mr-16 lg:ml-0 xl:-mr-20">
            <KnowledgeGravity />
          </motion.div>
        </div>
      </Container>

      <div className="hero-marquee absolute inset-x-0 bottom-8 overflow-hidden border-y border-ink/[0.055] bg-white/24 py-3 text-ink/25 sm:bottom-10" aria-hidden="true">
        <div className="hero-marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-[8px] font-bold uppercase tracking-[0.22em] sm:text-[9px]">
          {[...principles, ...principles, ...principles].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-8">{item}<i className="h-1 w-1 rounded-full bg-cyan-deep/50" /></span>)}
        </div>
      </div>
    </section>
  )
}
