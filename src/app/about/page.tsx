'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  // State for timeline period selection (S25, F25, etc.)
  const [activePeriod, setActivePeriod] = useState('S25')

  // Timeline content data for each period
  const timelineData = {
    S25: {
      title: "S25",
      subtitle: "Where it all began.",
      content: "Back in Spring 2025, Amaan Sheikh noticed something missing at UB, a space for students who just wanted to build things outside of class. He started reaching out to founders, engineers, and leaders he admired for advice, and everyone seemed to agree: UB needed a community like this.",
      additionalContent: "That idea became Forge. It started small: just a few messages, some calls, and a bunch of “yeah, this should exist” moments. Soon, a team came together, all excited to help make UB a place where future founders, devs, designers, and creatives could start building together.",
      additionalContent2: "We hosted our first info session and our first ever pitch night that semester, it wasn't perfect, but it was packed, and filled with momentum. That summer, Amaan connected with alumni in Silicon Valley, got advice from top schools' campus orgs, built infrastructure with the team and we all worked hard to launch strong in the fall.",
      additionalContent3: "From a missing piece to a growing community, that’s how Forge began."

    },
    F25: {
      title: "F25", 
      subtitle: "Our first full term. The real build begins.",
      content: "We're expanding in Fall 2025 with so much more: internal systems for mentorship and logistics, sunday build sessions, fireside talks and our first large-scale events. We're building the club we always wanted to be part of — and you're invited."
    }
  }

  // Timeline button configuration - future periods are disabled
  const periods = [
    { id: 'S25', label: 'S25', active: true },
    { id: 'F25', label: 'F25', active: true },
    { id: 'S26', label: 'S26', active: false },
    { id: 'F26', label: 'F26', active: false },
    { id: 'S27', label: 'S27', active: false },
    { id: 'F27', label: 'F27', active: false }
  ]

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto animate-fade-up">
          {/* Banner Image */}
          <div className="w-full h-64 md:h-80 rounded-lg mb-12 relative overflow-hidden">
            <Image 
              src="/myImages/firstpitchnight1.png" 
              alt="First Pitch Night at Forge"
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center 62%' }}
            />
          </div>
          
          {/* Text Content */}
          <div className="text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              The dev collective for doers.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12">
            Extraordinary things happen when ambitious people come together to build. Forge was created to bring that energy to the University at Buffalo. Throughout history, the greatest innovations have come from tight-knit, high-intensity teams united by a shared vision. At Forge, developers, designers, scientists, engineers, founders, and future leaders build in public, push boundaries, and find their people.
            </p>
            <a 
              href="/meet-the-team"
              className="inline-block border-2 border-[#005bbb] text-[#005bbb] bg-transparent px-6 py-3 rounded-lg hover:bg-[#005bbb] hover:text-white transition-colors font-medium text-base"
            >
              Meet our team
            </a>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full py-4 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Our Journey</h2>
          
          {/* Timeline Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => period.active && setActivePeriod(period.id)}
                  disabled={!period.active}
                  className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    period.active
                      ? activePeriod === period.id
                        ? 'bg-black text-white'
                        : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="transition-all duration-300">
            {activePeriod === 'S25' && (
              <div key="S25" className="animate-fade-up">
                <h3 className="font-serif text-3xl font-bold mb-4">{timelineData.S25.title}</h3>
                <h4 className="text-xl font-semibold mb-8 text-gray-700">{timelineData.S25.subtitle}</h4>
                
                {/* Three Images Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative">
                    <Image
                      src="/myImages/pitchpicture.png"
                      alt="First Meeting Space"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 50%' }}
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative">
                    <Image
                      src="/myImages/joinForge.jpg"
                      alt="Early Community"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 50%', transform: 'scale(1)' }}
                    />
                  </div>
                  <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative">
                    <Image
                      src="/myImages/speaker2.jpg"
                      alt="First Build Session"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 40%' }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{timelineData.S25.content}</p>
                  <p>{timelineData.S25.additionalContent}</p>
                  <p>{timelineData.S25.additionalContent2}</p>
                  <p>{timelineData.S25.additionalContent3}</p>
                </div>
              </div>
            )}

            {activePeriod === 'F25' && (
              <div key="F25" className="animate-fade-up">
                <h3 className="font-serif text-3xl font-bold mb-4">{timelineData.F25.title}</h3>
                <h4 className="text-xl font-semibold mb-8 text-gray-700">{timelineData.F25.subtitle}</h4>
                
                {/* Text Content */}
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{timelineData.F25.content}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
} 