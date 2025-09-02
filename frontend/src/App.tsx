import Header from "./components/header"
import HeroSection from "./components/hero"
import RealEstateSection from "./components/statisctics"
import WhyChooseUsSection from "./components/whychooseus"
import PopularResidencesSection from "./components/popularsection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RealEstateSection />
      <WhyChooseUsSection />
      <PopularResidencesSection />
    </div>
  )
}
