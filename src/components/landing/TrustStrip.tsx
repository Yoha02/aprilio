import Container from '@/components/ui/Container'

const signals = [
  { value: '20/20', label: 'update detected' },
  { value: '100%', label: 'source-linked runs' },
  { value: '0', label: 'unsupported claims' },
]

export default function TrustStrip() {
  return (
    <section id="evaluation-summary" aria-label="Internal evaluation summary" className="relative z-20 -mt-10 bg-transparent sm:-mt-12">
      <Container>
        <div className="grid overflow-hidden rounded-[26px] border border-ink/10 bg-white/95 shadow-[0_22px_70px_rgba(16,37,66,.12)] backdrop-blur-xl lg:grid-cols-[1.3fr_repeat(3,.55fr)]">
          <div className="border-b border-ink/10 px-6 py-5 lg:border-b-0 lg:border-r lg:px-7">
            <p className="eyebrow text-cyan-deep">Internal AML evaluation</p>
            <p className="mt-2 text-base font-semibold leading-6 text-ink">Aprilio found the late-breaking update and preserved provenance on every run.</p>
            <p className="mt-1 text-xs leading-5 text-ink-faint">One complex clinical query · external validation pending</p>
          </div>
          {signals.map((signal) => (
            <div key={signal.label} className="border-b border-ink/10 px-6 py-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="text-3xl font-semibold tracking-[-0.055em] text-ink">{signal.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.07em] text-ink-faint">{signal.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
