import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/landing/Hero'
import LiveTraceSection from '@/components/landing/LiveTraceSection'
import ProofSection from '@/components/landing/ProofSection'
import HowItWorks from '@/components/landing/HowItWorks'
import WhyItMatters from '@/components/landing/WhyItMatters'
import TeamSection from '@/components/landing/TeamSection'
import PartnersCTA from '@/components/landing/PartnersCTA'
import { organizationSchema } from '@/lib/schema'

export default function Home() {
  const schema = organizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />
      <main>
        <Hero />
        <LiveTraceSection />
        <ProofSection />
        <HowItWorks />
        <WhyItMatters />
        <TeamSection />
        <PartnersCTA />
      </main>
      <Footer />
    </>
  )
}
