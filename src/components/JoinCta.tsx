'use client'

import React, { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const JoinCta = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>()

  useEffect(() => {
    // Create subtle animated background effect
    const background = backgroundRef.current
    if (!background) return

    // Create sparkle elements
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'absolute rounded-full bg-[#005bbb] opacity-0'
      // Random size - increased from 2-8px to 4-12px
      const size = Math.random() * 8 + 4
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      // Random position
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
      // Animation with random delays
      sparkle.style.animation = `sparkle 3s ease-in-out ${Math.random() * 5}s infinite`
      background.appendChild(sparkle)
    }

    // Create keyframe animation
    if (!document.getElementById('sparkle-animation')) {
      const style = document.createElement('style')
      style.id = 'sparkle-animation'
      style.innerHTML = `
        @keyframes sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      if (document.getElementById('sparkle-animation')) {
        document.getElementById('sparkle-animation')?.remove()
      }
    }
  }, [])

  return (
    <section className="w-full bg-[#fdfcf8] py-32 relative overflow-hidden">
      <div ref={backgroundRef} className="absolute inset-0 z-0"></div>
      <div 
        ref={contentRef}
        className={`max-w-4xl mx-auto text-center px-8 relative z-10 transition-all duration-800 ${
          contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black">
          If you're ambitious, you're already one of us
        </h2>
        <div className="flex justify-center items-center mb-10">
          <div className="h-1 w-24 bg-[#005bbb]"></div>
        </div>
        <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
          If you're dreaming big, building things, or just curious — you're in
          the right place. Forge is for anyone who wants to make something real.
          No resume required, just a bit of guts.
        </p>
        <p className="text-lg mb-8">
          Pull up to a SunSesh. Chat at a Fireside. Submit to Atlas.
          <br />
          This is your invite. We'll be right here when you're ready to start.
        </p>
        <p className="text-base text-gray-600 mb-10">
          Come meet us, join an event, or just hang out. It all starts with
          showing up.
        </p>
        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="text-[#005bbb] underline hover:text-[#004a99] transition-colors"
          >
            Join us
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/company/forgeatub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#005bbb] flex items-center justify-center text-white hover:bg-[#004a99] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#005bbb] flex items-center justify-center text-white hover:bg-[#004a99] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#005bbb] flex items-center justify-center text-white hover:bg-[#004a99] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#005bbb] flex items-center justify-center text-white hover:bg-[#004a99] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default JoinCta 