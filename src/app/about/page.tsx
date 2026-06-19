'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowCard from '@/components/ui/GlowCard'
import GradientText from '@/components/ui/GradientText'

const team = [
  {
    name: 'Gary Takahashi, MD',
    role: 'Clinical Architecture & Medical Oncology',
    bio: 'Medical oncologist and creator of the original guideline retrieval logic. Gary built Aprilio to make changing clinical knowledge traceable at the point of decision.',
    gradient: 'from-teal to-purple',
  },
  {
    name: 'Andrew Van Benschoten',
    role: 'Systems Architecture & Strategy',
    bio: 'Leads cloud architecture, commercial strategy, and the adaptive harness concept that allows Aprilio to scale across knowledge systems.',
    gradient: 'from-purple to-teal',
  },
  {
    name: 'Eyoha “Yoha” Mengistu',
    role: 'Product, Automation & Experience',
    bio: 'Leads product systems, automation, interface design, and market development—turning the architecture into an enterprise-ready product.',
    gradient: 'from-gold to-teal',
  },
  {
    name: 'Ebrahim “ET” Tarshizi',
    role: 'Operations & Academic Partnerships',
    bio: 'Leads operations, academic relationships, and research coordination across Aprilio’s clinical and institutional work.',
    gradient: 'from-teal to-gold',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-dark-surface pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,201,167,0.08),transparent_60%)]" />
          <Container className="relative">
            <AnimateOnScroll>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                The company
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                Intelligence that can <GradientText>show its work.</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-on-dark-muted max-w-2xl leading-relaxed">
                Aprilio builds structurally grounded retrieval infrastructure for knowledge that must stay current, traceable, and certain.
              </p>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-bg">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-3">
                  Origin
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-heading)] mb-6">
                  Why Aprilio exists
                </h2>
                <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
                  <p>
                    Aprilio began with a medical oncologist confronting a familiar problem:
                    the source of truth was changing faster than the tools used to retrieve it.
                  </p>
                  <p>
                    Clinical practice guidelines in oncology change constantly&mdash;new drug
                    approvals, updated treatment algorithms, safety signal withdrawals. Yet the
                    tools available to stay current remain inadequate. Large language models
                    hallucinate, serve stale information, and recommend treatments that have been
                    withdrawn or rejected by the FDA.
                  </p>
                  <p>
                    Aprilio&rsquo;s Grounded Adaptive Retrieval architecture approaches a knowledge
                    base the way an expert does&mdash;mapping its structure, navigating its hierarchy,
                    checking fresh external information, and using the LLM for semantic understanding
                    rather than unsupported fact recall.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-20 bg-dark-surface">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                  Mission
                </p>
                <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed font-[family-name:var(--font-heading)]">
                  &ldquo;To make high-stakes knowledge usable without hiding the path back to truth.&rdquo;
                </blockquote>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Team */}
        <section className="py-20 bg-bg">
          <Container>
            <SectionHeading
              label="Team"
              title="The People Behind Aprilio"
              description="A cross-disciplinary team combining clinical oncology, systems architecture, product engineering, and academic operations."
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, i) => (
                <AnimateOnScroll key={member.name} delay={i * 0.1}>
                  <GlowCard
                    glowColor={i % 3 === 0 ? 'teal' : i % 3 === 1 ? 'purple' : 'gold'}
                    className="h-full"
                  >
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4`}>
                        <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-heading)]">
                        {member.name}
                      </h3>
                      <p className="text-sm text-teal font-medium mt-1">{member.role}</p>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </GlowCard>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        {/* Academic Credibility */}
        <section className="py-20 bg-dark-surface">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                  Academic Foundation
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] mb-6">
                  Built at the University of San Diego
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed text-lg mb-8">
                  Aprilio&rsquo;s research is conducted within an academic framework, ensuring
                  rigorous methodology and peer-reviewed validation. Our paper is currently
                  under review at npj Digital Medicine (Impact Factor 15.1).
                </p>
                <Link href="/paper" className="button-link border border-cyan/35 text-cyan hover:bg-cyan/10">
                  Read our research <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
