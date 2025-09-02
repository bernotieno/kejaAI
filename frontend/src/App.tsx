import Header from "./components/header"
import HeroSection from "./components/hero"
import RealEstateSection from "./components/statisctics"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RealEstateSection />
    </div>
  )
}
