import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function StartupFair() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Forge Startup Fair
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            One of our big events for the semester.
          </p>
          
          <div className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-700 space-y-6">
            <p>
              We're working to bring together some of the most exciting startups around Buffalo to showcase what they're building and maybe even hire some of you. Whether you're looking to get inspired, find your next opportunity, or just see what's being built nearby, this is your chance.
            </p>
            
            <p>
              We're in the early stages, actively planning this and hope it happens soon. Stay tuned and in the meantime, come meet us at a SunSesh or a Fireside!
            </p>
          </div>
          
          <a 
            href="https://lu.ma/ubforge?k=c&period=past"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#005bbb] text-[#005bbb] bg-transparent px-6 py-3 rounded-lg hover:bg-[#005bbb] hover:text-white transition-colors font-medium"
          >
                          Check what's next
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 