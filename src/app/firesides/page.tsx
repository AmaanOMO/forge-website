import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Firesides() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Firesides
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-700">
            Laid-back fireside talks with builders, founders, and engineers across the startup/tech space. We bring in advice, stories, and lessons from the people who have been there and done great things.
          </p>
          
          <a 
            href="https://luma.com/ubforge?k=c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#005bbb] text-[#005bbb] bg-transparent px-6 py-3 rounded-lg hover:bg-[#005bbb] hover:text-white transition-colors font-medium"
          >
            See Upcoming Firesides
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 