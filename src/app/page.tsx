import CallToActions from '@/components/CallToActions'
import Footer from '@/components/Footer'
import Faq from '@/components/faq'
import Features from '@/components/features'

import Hero from '@/components/hero'
import ProductShowcase from '@/components/product-showcase'
import { getSession } from '@/lib/auth'

export default async function Home() {
  const session = await getSession()
  return (
    <main >
      <Hero session={session} />
      <Features />
      <ProductShowcase />
      <Faq />
      <CallToActions />
      <Footer />
    </main>
  )
}
