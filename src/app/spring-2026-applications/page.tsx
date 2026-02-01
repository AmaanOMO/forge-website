'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const HERO_VIDEOS = [
  '/addedVids/calhacks.mp4',
  '/addedVids/calhack2.mp4',
  '/addedVids/calhack3.mp4',
  '/addedVids/pittsburgh.mp4',
  '/addedVids/spurhacks2.mp4'
]
const HERO_VIDEO_DURATION_MS = 3000

export default function Spring2026Applications() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const currentIndexRef = useRef(0)
  currentIndexRef.current = currentVideoIndex

  // Play current video when index changes
  useEffect(() => {
    const video = videoRefs.current[currentVideoIndex]
    if (video) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
  }, [currentVideoIndex])

  // Pre-start next video ~250ms before switch so it's already playing when we crossfade (removes pause on loop)
  useEffect(() => {
    const PRELOAD_BEFORE_SWITCH_MS = 250
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % HERO_VIDEOS.length
      const nextVideo = videoRefs.current[nextIndex]
      if (nextVideo) {
        nextVideo.currentTime = 0
        nextVideo.play().catch(() => {})
        setTimeout(() => setCurrentVideoIndex(nextIndex), PRELOAD_BEFORE_SWITCH_MS)
      } else {
        setCurrentVideoIndex(nextIndex)
      }
    }, HERO_VIDEO_DURATION_MS)
    return () => clearInterval(interval)
  }, [])

  const pillars = [
    { name: 'Ambition' },
    { name: 'Innovation' },
    { name: 'Consistency' },
    { name: 'Ownership' }
  ]

  const fellowActivities = [
    { label: 'Build', text: 'Build consistently throughout the semester' },
    { label: 'Meet', text: 'Meet weekly on Tuesday nights for accountability and resources' },
    { label: 'Work', text: 'Work in teams or solo inside the Forge Foundry' },
    { label: 'Present', text: 'Present their projects at Forge Demo Day' }
  ]

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section - video slideshow background */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden min-h-[450px] md:min-h-[560px] flex items-center justify-center bg-gray-800 shadow-lg animate-fade-up">
            {/* Autoplaying video slideshow: 3 clips, 3s each, loops */}
            {HERO_VIDEOS.map((src, index) => (
              <video
                key={src}
                ref={(el) => { videoRefs.current[index] = el }}
                src={src}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 [filter:grayscale(40%)_sepia(25%)]"
                style={{ opacity: index === currentVideoIndex ? 1 : 0, zIndex: index === currentVideoIndex ? 1 : 0 }}
              />
            ))}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-[2]" />
            {/* Hero content - white/light text */}
            <div className="relative z-[3] max-w-4xl mx-auto text-center px-6 py-12">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                Forge Foundry Applications - Spring 2026
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 text-white/90 max-w-3xl mx-auto">
                Where Forge Fellows build.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center mb-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfVevwl5TjYbpSoXmKG5v9NSHHfGuX-InTIHbzFln9oFSwJng/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#005bbb] text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-[#004499] transition-colors duration-300 shadow-lg"
                >
                  Apply Now
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* What It is Section */}
      <section id="what-it-is" className="w-full py-16 px-8 md:px-16 bg-[#fdfcf8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center text-black">
            What It is
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
            The Forge Foundry is the execution engine of the Forge Fellowship. We are a selective, semester-long program for students who want to build startups, technical projects, or products with real momentum.
          </p>
        </div>
      </section>

      {/* What Fellows Do Section - Horizontal path with labels */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#f9f6f2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            What Fellows Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {fellowActivities.map((activity, index) => (
                <div key={index} className="flex flex-col items-center text-center relative z-10">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#005bbb] mb-2">
                    {activity.label}
                  </span>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {activity.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#fdfcf8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            What We Look For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-black">
                  {pillar.name}
                </h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
            We're looking for people who don't just want to learn, but want to ship.
          </p>
        </div>
      </section>

      {/* Apply Button Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#f9f6f2]">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVevwl5TjYbpSoXmKG5v9NSHHfGuX-InTIHbzFln9oFSwJng/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#005bbb] text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-[#004499] transition-colors duration-300 shadow-lg"
          >
            Start Your Application
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

