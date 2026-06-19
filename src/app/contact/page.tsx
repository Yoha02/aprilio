'use client'

import { useActionState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GlowCard from '@/components/ui/GlowCard'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'
import { submitContactForm, type ContactFormState } from './actions'

const roles = [
  'Clinical Knowledge Publisher',
  'Health System',
  'AI or Clinical Platform',
  'Research Partner',
  'Investor',
  'Other',
]

const initialState: ContactFormState = { success: false, message: '' }

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-dark-surface pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(247,183,49,0.06),transparent_60%)]" />
          <Container className="relative">
            <AnimateOnScroll>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                Contact
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                Start a <GradientText from="from-gold" to="to-teal">Technical Conversation</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-on-dark-muted max-w-2xl leading-relaxed">
                Tell us about the knowledge system, platform, or research problem you&rsquo;re working on.
              </p>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Contact Form + Sidebar */}
        <section className="py-20 bg-bg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-3xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <AnimateOnScroll>
                  {state.success ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-success-bg border border-success/20 rounded-lg p-8 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
                        Message Sent
                      </h3>
                      <p className="text-text-secondary">{state.message}</p>
                    </motion.div>
                  ) : (
                    <form action={formAction} className="space-y-5">
                      {state.message && !state.success && (
                        <div className="bg-danger-bg border border-danger/20 rounded-lg p-3 text-sm text-danger">
                          {state.message}
                        </div>
                      )}

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2.5 rounded-md border border-navy/10 bg-surface text-text-primary placeholder:text-text-tertiary focus:border-teal focus:ring-1 focus:ring-teal/20 transition-colors"
                          placeholder="Dr. Jane Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2.5 rounded-md border border-navy/10 bg-surface text-text-primary placeholder:text-text-tertiary focus:border-teal focus:ring-1 focus:ring-teal/20 transition-colors"
                          placeholder="jane@hospital.org"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-1.5">
                          Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          className="w-full px-4 py-2.5 rounded-md border border-navy/10 bg-surface text-text-primary focus:border-teal focus:ring-1 focus:ring-teal/20 transition-colors"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-2.5 rounded-md border border-navy/10 bg-surface text-text-primary placeholder:text-text-tertiary focus:border-teal focus:ring-1 focus:ring-teal/20 transition-colors resize-none"
                          placeholder="Tell us about your use case..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isPending}
                      >
                        {isPending ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </AnimateOnScroll>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimateOnScroll delay={0.1}>
                  <div className="space-y-6">
                    <GlowCard glowColor="teal">
                      <div className="p-5">
                        <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
                          Technical Walkthrough
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                          See the Factum Engine, adaptive harness, provenance trace,
                          and reliability workflow using a real clinical case.
                        </p>
                        <p className="text-xs text-text-tertiary italic">
                          We coordinate sessions directly with the founding team.
                        </p>
                      </div>
                    </GlowCard>

                    <GlowCard glowColor="purple">
                      <div className="p-5">
                        <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
                          Email Us Directly
                        </h3>
                        <a
                          href="mailto:contact@aprilio.ai"
                          className="text-sm text-teal hover:text-teal-light transition-colors"
                        >
                          contact@aprilio.ai
                        </a>
                      </div>
                    </GlowCard>

                    <GlowCard glowColor="gold">
                      <div className="p-5">
                        <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-heading)] mb-2">
                          What to Expect
                        </h3>
                        <ul className="text-sm text-text-secondary space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal mt-0.5">&#10003;</span>
                            Response within 24 hours
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal mt-0.5">&#10003;</span>
                            Architecture-focused walkthrough
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal mt-0.5">&#10003;</span>
                            Direct founder conversation
                          </li>
                        </ul>
                      </div>
                    </GlowCard>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
