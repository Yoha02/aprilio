import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function PartnersCTA() {
  return (
    <section className="bg-bg py-8 sm:py-12">
      <Container>
        <div className="radial-wash soft-grid relative overflow-hidden rounded-[32px] border border-ink/10 bg-white px-6 py-16 text-center shadow-lg sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          <div className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-cyan shadow-[0_0_0_12px_rgba(95,225,230,.12)]" aria-hidden="true" />
          <div className="absolute bottom-[20%] right-[9%] h-3 w-3 rounded-full bg-factum shadow-[0_0_0_12px_rgba(246,200,95,.12)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow text-cyan-deep">Build the intelligence layer</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">
              Your knowledge already has structure. Let’s make it usable.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
              Bring your changing medical knowledge into a system teams can inspect, integrate, and trust.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="button-link button-link-dark">Request a demo <span aria-hidden="true">↗</span></Link>
              <Link href="/contact?interest=partnership" className="button-link button-link-light">Partner with us <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
