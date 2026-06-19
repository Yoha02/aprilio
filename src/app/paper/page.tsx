'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowCard from '@/components/ui/GlowCard'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'

const clinicalQuestions = [
  {
    question: 'First-line therapy for ERBB2-mutant NSCLC',
    groundedRetrieval: 'Zongertinib (approved Feb 2026)',
    gpt54: 'Missed zongertinib',
    claude46: 'Missed zongertinib',
    perplexity: 'Missed zongertinib',
    deepseek: 'Missed zongertinib',
    gemini: 'Missed zongertinib',
  },
  {
    question: 'Second-line therapy for FGFR2+ cholangiocarcinoma',
    groundedRetrieval: 'Sevabertinib (approved Nov 2025)',
    gpt54: 'Missed sevabertinib',
    claude46: 'Missed sevabertinib',
    perplexity: 'Missed sevabertinib',
    deepseek: 'Missed sevabertinib',
    gemini: 'Missed sevabertinib',
  },
  {
    question: 'First-line HCC systemic therapy',
    groundedRetrieval: 'Current NCCN recommendations with citations',
    gpt54: 'Incomplete',
    claude46: 'Incomplete',
    perplexity: 'Camrelizumab + rivoceranib (FDA-rejected twice)',
    deepseek: 'Sintilimab (China-only)',
    gemini: 'Incomplete',
  },
  {
    question: 'Second-line therapy for follicular lymphoma',
    groundedRetrieval: 'Current options excluding withdrawn drugs',
    gpt54: 'Incomplete',
    claude46: 'Tazemetostat (withdrawn Mar 2026)',
    perplexity: 'Incomplete',
    deepseek: 'Incomplete',
    gemini: 'Incomplete',
  },
  {
    question: 'First-line therapy for metastatic TNBC (PD-L1+)',
    groundedRetrieval: 'Pembrolizumab + chemotherapy with citations',
    gpt54: 'Partially correct',
    claude46: 'Partially correct',
    perplexity: 'Partially correct',
    deepseek: 'Partially correct',
    gemini: 'Partially correct',
  },
  {
    question: 'Adjuvant therapy for Stage III melanoma (BRAF V600+)',
    groundedRetrieval: 'Current guideline recommendations with page refs',
    gpt54: 'Partially correct',
    claude46: 'Partially correct',
    perplexity: 'Partially correct',
    deepseek: 'Partially correct',
    gemini: 'Partially correct',
  },
]

const methodology = [
  {
    step: '1',
    title: 'Semantic Extraction',
    description: 'GPT-4.1 extracts structured clinical entities from the natural language query: cancer type, biomarkers, treatment line, and clinical context.',
  },
  {
    step: '2',
    title: 'Parallel Retrieval',
    description: 'Thread Pool Executor simultaneously queries NCCN guidelines via structured TOC navigation and performs internet search via DuckDuckGo for late-breaking updates.',
  },
  {
    step: '3',
    title: 'NCCN Guideline Navigation',
    description: 'Structured navigation through the NCCN table of contents identifies relevant sections, then extracts content with page-level references for direct source validation.',
  },
  {
    step: '4',
    title: 'Synthesis & Citation',
    description: 'Retrieved content is synthesized into a coherent clinical response with specific page number citations enabling direct verification against source guidelines.',
  },
]

export default function PaperPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-dark-surface pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.08),transparent_60%)]" />
          <Container className="relative">
            <AnimateOnScroll>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                Research
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                Our <GradientText from="from-purple" to="to-teal">Research</GradientText>
              </h1>
              <div className="mt-6">
                <Badge variant="info" pulse>
                  Under review at npj Digital Medicine (Impact Factor 15.1)
                </Badge>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Paper Details */}
        <section className="py-20 bg-bg">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-heading)] leading-tight">
                  Building a Large Language Model Assistant to Maintain Currency with Medical Oncology Guidelines
                </h2>
                <p className="mt-4 text-text-secondary">
                  <span className="font-medium text-text-primary">Authors:</span>{' '}
                  Gary Takahashi, Eyoha Mengistu, Ebrahim Tarshizi, Andrew Van Benschoten
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">
                  Abstract
                </h3>
                <div className="bg-surface border border-navy/5 rounded-lg p-6">
                  <p className="text-text-secondary leading-relaxed">
                    Staying current in clinical medicine is a continual challenge, yet informed
                    clinical decisions at the point of care hinge on the timely availability of
                    practice-relevant updates. Large Language Model (LLM)-based assistants seem
                    to proffer a solution to this problem, but even models fine-tuned on medical
                    corpora suffer from hallucinations and struggle with maintaining currency.
                    This is especially true in the fast-paced setting of medical oncology.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    We have developed an LLM-based assistant that extracts semantic information
                    from a query to automate retrieval of appropriate NCCN guideline information,
                    while simultaneously performing an Internet search to obtain late-breaking
                    updates, a process we refer to as grounded retrieval. All five foundational
                    models tested provided information that was incomplete and did not reflect
                    late-breaking updates. Most models recommended therapies that are unavailable
                    in the U.S., have been withdrawn, or have been rejected by the FDA.
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    In contrast, our model obtained information relevant to the query,
                    incorporating the latest consensus committee recommendations with specific
                    page number references for direct source validation.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Key Results */}
        <section className="py-20 bg-dark-surface">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-3">
                  Key Results
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] mb-4">
                  Model Comparison
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed mb-8">
                  Six clinical questions were posed to five frontier models and our Grounded
                  Retrieval system. Every frontier model missed critical updates and produced
                  dangerous recommendations.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-dark-surface-light">
                      <th className="text-left px-4 py-3 text-text-on-dark-muted font-medium">Question</th>
                      <th className="text-left px-4 py-3 text-teal font-medium">Grounded Retrieval</th>
                      <th className="text-left px-4 py-3 text-text-on-dark-muted font-medium">Frontier Models</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clinicalQuestions.map((q, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-dark-surface-light/50">
                        <td className="px-4 py-3 text-text-on-dark font-medium max-w-[200px]">{q.question}</td>
                        <td className="px-4 py-3 text-success max-w-[200px]">{q.groundedRetrieval}</td>
                        <td className="px-4 py-3 text-danger-light max-w-[250px]">
                          {q.perplexity !== q.gpt54 ? (
                            <span className="text-text-on-dark-muted text-xs">
                              {q.gpt54 === q.claude46
                                ? `All models: ${q.gpt54}`
                                : `GPT-5.4: ${q.gpt54} · Claude: ${q.claude46} · Perplexity: ${q.perplexity}`}
                            </span>
                          ) : (
                            <span className="text-text-on-dark-muted text-xs">All models: {q.gpt54}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-bg">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-3">
                  Methodology
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary font-[family-name:var(--font-heading)] mb-10">
                  How Grounded Retrieval Works
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {methodology.map((step, i) => (
                <AnimateOnScroll key={step.step} delay={i * 0.1}>
                  <GlowCard glowColor={i % 2 === 0 ? 'teal' : 'purple'} className="h-full">
                    <div className="p-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-purple flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </GlowCard>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-dark-surface">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] mb-4">
                  Full Paper Available Upon Publication
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed mb-8">
                  Our paper is currently under peer review at npj Digital Medicine.
                  A preprint will be available shortly. Contact us for early access.
                </p>
                <a href="/contact">
                  <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-teal/40 text-teal bg-transparent hover:bg-teal/10 hover:border-teal transition-all duration-200 cursor-pointer">
                    Request Early Access
                  </button>
                </a>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
