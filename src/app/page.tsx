import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ScrollingBanner from '../components/ScrollingBanner'
import ForWhom from '../components/ForWhom'
import Culture from '../components/Culture'
import JoinCta from '../components/JoinCta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      <Hero />
      <About />
      <ScrollingBanner />
      <ForWhom />
      <Culture />
      <JoinCta />
      <Footer />
    </div>
  )
}
