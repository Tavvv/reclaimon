import Nav from "@/sections/Nav"
import Hero from "@/sections/Hero"
import Problem from "@/sections/Problem"
import HowItWorks from "@/sections/HowItWorks"
import Features from "@/sections/Features"
import Extras from "@/sections/Extras"
import Pricing from "@/sections/Pricing"
import Faq from "@/sections/Faq"
import FinalCta from "@/sections/FinalCta"
import Footer from "@/sections/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Extras />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
