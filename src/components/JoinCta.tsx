'use client'

import React, { useEffect, useRef } from 'react'

const JoinCta = () => {
  // Ref for the animated background sparkles
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create subtle animated background effect
    const background = backgroundRef.current
    if (!background) return

    // Create animated sparkle elements
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'absolute rounded-full bg-[#005bbb] opacity-0'
      const size = Math.random() * 8 + 4 // Random size between 4-12px
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.left = `${Math.random() * 100}%` // Random horizontal position
      sparkle.style.top = `${Math.random() * 100}%` // Random vertical position
      sparkle.style.animation = `sparkle 3s ease-in-out ${Math.random() * 5}s infinite` // Random delay for staggered effect
      background.appendChild(sparkle)
    }

    // Inject CSS keyframes for sparkle animation
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
        className="max-w-4xl mx-auto text-center px-8 relative z-10"
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black">
          If you&apos;re ambitious, you&apos;re already one of us
        </h2>
        <div className="flex justify-center items-center mb-10">
          <div className="h-1 w-24 bg-[#005bbb]"></div>
        </div>
        <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
          If you&apos;re dreaming big, building things, or just curious — you&apos;re in
          the right place. Forge is for anyone who wants to make something real.
          No resume required, just a bit of guts.
        </p>
        <p className="text-lg mb-8">
          Pull up to a SunSesh. Chat at a Fireside. Submit to Atlas.
          <br />
          This is your invite. We&apos;ll be right here when you&apos;re ready to start.
        </p>
        <p className="text-base text-gray-600 mb-10">
          Come meet us, join an event, or just hang out. It all starts with
          showing up.
        </p>
        <div className="flex justify-center">
          <a
            href="https://lu.ma/ubforge?k=c&period=past"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005bbb] underline hover:text-[#004a99] transition-colors text-xl font-medium"
          >
            Join us
          </a>
        </div>
      </div>
    </section>
  )
}

export default JoinCta 