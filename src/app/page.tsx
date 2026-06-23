import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/landing/Hero'
import TrustStrip from '@/components/landing/TrustStrip'
import LiveTraceSection from '@/components/landing/LiveTraceSection'
import WhyAprilio from '@/components/landing/WhyAprilio'
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
        <TrustStrip />
        <LiveTraceSection />
        <WhyAprilio />
        <HowItWorks />
        <ProofSection />
        <WhyItMatters />
        <TeamSection />
        <PartnersCTA />
      </main>
      <Footer />
    </>
  )
}
