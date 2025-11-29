
'use client'

import React, { useEffect, useRef } from 'react'

const Hero = () => {
  // Refs for staggered fade-in animations
  const headingRef = useRef<HTMLDivElement>(null)
  const subheadingRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const ubSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered fade-in animation sequence
    const heading = headingRef.current
    const subheading = subheadingRef.current
    const links = linksRef.current
    const ubSection = ubSectionRef.current
    
    if (heading && subheading && links && ubSection) {
      setTimeout(() => {
        heading.style.opacity = '1'
        heading.style.transform = 'translateY(0)'
      }, 300)
      setTimeout(() => {
        subheading.style.opacity = '1'
        subheading.style.transform = 'translateY(0)'
      }, 600)
      setTimeout(() => {
        links.style.opacity = '1'
        links.style.transform = 'translateY(0)'
      }, 900)
      setTimeout(() => {
        ubSection.style.opacity = '1'
        ubSection.style.transform = 'translateY(0)'
      }, 1200)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section')
    if (aboutSection) {
      const offset = 50 // Account for sticky navbar
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full px-8 md:px-16 pt-16 pb-24 flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-12 md:mb-0">
        <div
          ref={headingRef}
          className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl opacity-0 transform translate-y-4 transition-all duration-700"
        >
          Creating
        </div>
        <div
          ref={subheadingRef}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mt-2 opacity-0 transform translate-y-4 transition-all duration-700"
        >
          what's next
        </div>
        <div
          ref={linksRef}
          className="mt-8 space-y-6 opacity-0 transform translate-y-4 transition-all duration-700"
        >
          <a
            href="/sunsesh"
            className="block uppercase tracking-widest text-sm font-light hover:text-[#005bbb] transition-colors"
          >
            SunSesh
          </a>
          <a
            href="/firesides"
            className="block uppercase tracking-widest text-sm font-light hover:text-[#005bbb] transition-colors"
          >
            Firesides
          </a>
          <a
            href="/atlas"
            className="block uppercase tracking-widest text-sm font-light hover:text-[#005bbb] transition-colors"
          >
            Atlas
          </a>
        </div>
        
        {/* New UB Section */}
        <div
          ref={ubSectionRef}
          className="mt-8 opacity-0 transform translate-y-4 transition-all duration-700"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-light text-black mb-4 text-left">
            Forge is the University at Buffalo's home for tomorrow's leaders.
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-8 text-left">
            We gather builders weekly to learn, collaborate, build, and much more through our SunSesh and Fireside events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://luma.com/calendar/manage/cal-zJkt69wozQWZhcK?period=past"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full border-2 border-[#005bbb] text-[#005bbb] font-medium hover:bg-[#005bbb] hover:text-white transition-colors duration-300"
            >
              → See what's happening
            </a>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:text-gray-800 transition-colors duration-300"
            >
              Dive Deeper
            </button>
          </div>
        </div>
      </div>
      
      {/* Video section */}
      <div className="md:w-2/3 md:pl-12 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/addedVids/1129.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero