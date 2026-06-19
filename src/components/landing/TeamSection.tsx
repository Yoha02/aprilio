import Container from '@/components/ui/Container'
import { applications, team } from '@/content/site'

export default function TeamSection() {
  return (
    <>
      <section id="applications" className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow text-cyan-deep">Enterprise infrastructure</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                One architecture. Many living knowledge systems.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-muted lg:pb-2">
              Aprilio’s commercial model is built around licensing and integration: adapt the harness to a knowledge base, expose it through a platform or API, and preserve its source logic as the data changes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {applications.map((application, index) => (
              <article key={application.index} className={`relative overflow-hidden rounded-[26px] border border-ink/10 p-6 sm:p-7 ${index === 1 ? 'bg-mist' : index === 2 ? 'bg-[#f2efff]' : 'bg-[#eefafa]'}`}>
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-ink/8" aria-hidden="true">
                  <span className="absolute inset-8 rounded-full border border-ink/8" />
                  <span className="absolute inset-16 rounded-full border border-ink/8" />
                </div>
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white font-mono text-xs font-bold text-ink shadow-sm">{application.index}</span>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-ink">{application.title}</h3>
                  <p className="mt-4 min-h-[96px] text-sm leading-6 text-ink-muted">{application.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {application.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink/10 bg-white/55 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-wider text-ink-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-bg py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-ink-faint">Built across disciplines</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">Clinical judgment meets systems engineering.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink-muted">Founded by a medical oncologist, cloud architect, product builder, and academic operator.</p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <article key={person.initials} className="bg-paper p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-mono text-xs font-bold text-cyan">{person.initials}</span>
                  <span className="h-2 w-2 rounded-full bg-factum" />
                </div>
                <h3 className="mt-8 text-base font-semibold text-ink">{person.name}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-cyan-deep">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-ink-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
