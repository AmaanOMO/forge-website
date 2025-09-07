import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Mentorship() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-gradient-to-br from-[#f9f6f2] to-[#fdfcf8]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black">
            Mentorship
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-700 max-w-4xl mx-auto">
            Forge connects ambitious students with experienced mentors to guide their journey.
          </p>
        </div>
      </section>

      {/* Why Mentorship Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            1-on-1 Mentorship for Builders
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center">
            At Forge, we believe mentorship accelerates growth. Whether you're building a project, 
            applying to internships, or exploring ideas, having someone who's been there before 
            makes all the difference.
          </p>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#fdfcf8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            Meet Our Mentors
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Joseph Chen */}
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-6">
                <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/Headshots/JosephChen_optimized.png"
                    alt="Joseph Chen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      {/* LinkedIn Icon */}
                      <a 
                        href="https://www.linkedin.com/in/joehchen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-black">
                Joseph Chen
              </h3>
              <p className="text-lg text-[#005bbb] font-medium mb-6">
                Software Engineer at Amazon & Founder of Lift Card
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Joe Chen is a Software Engineer at Amazon and founder of Lift Card, a fitness app 
                with over 50,000 downloads. Joe will host office hours 
                and 1-on-1 sessions to guide UB students on building projects and navigating 
                career paths.
              </p>
            </div>

            {/* Zaid Arshad */}
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-6">
                <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/myImages/ZaidArshad.png"
                    alt="Zaid Arshad"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      {/* LinkedIn Icon */}
                      <a 
                        href="https://www.linkedin.com/in/zaid-arsh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-black">
                Zaid Arshad
              </h3>
              <p className="text-lg text-[#005bbb] font-medium mb-6">
              SWE Intern at Notion & Founder of Yoki Labs
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Zaid Arshad is a current SWE intern at Notion and founder of Yoki Labs. 
                With 200k+ users on his projects, Zaid brings a passion for building impactful software 
                and sharing his journey from starting at 12 to now mentoring the next generation of developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-black">1. Apply</h3>
              <p className="text-gray-700">
                Apply for mentorship through our form
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-black">2. Review</h3>
              <p className="text-gray-700">
                Selected mentor reviews your application
              </p> 
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-black">3. Connect</h3>
              <p className="text-gray-700">
                Get matched for a 1-on-1 session with your mentor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#f9f6f2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
            Apply for mentorship and take the next step in your journey.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6s7KHizAIHkNizOTlVVNHq9GUZEokAXwTNMAacdl5vTV93A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#005bbb] text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-[#004499] transition-colors duration-300 shadow-lg"
          >
            Apply for Mentorship
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
