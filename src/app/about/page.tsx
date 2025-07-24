'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  const [activePeriod, setActivePeriod] = useState('S25')

  const timelineData = {
    S25: {
      title: "S25",
      subtitle: "Where it all began.",
      content: "In Spring 2025, Amaan Sheikh saw a gap — UB had talent, but no real space for builders to consistently connect, experiment, and ship. Inspired by other campus communities, he founded Forge to give students what they were missing: a dev-first collective built on action, not talk.",
      additionalContent: "The early days were small but scrappy. A few passionate students showed up each week to work on projects, prep for hackathons, or simply vibe and code. No gatekeeping, no fluff — just consistent, hands-on building.",
      finalContent: "That foundation kicked off a movement: structured weekly work sessions, pods focused on shipping MVPs, and a network of mentors and alumni invested in student success."
    },
    F25: {
      title: "F25", 
      subtitle: "Our first full term. The real build begins.",
      content: "We're expanding in Fall 2025 with so much more: internal systems for mentorship and logistics, sunday build sessions, fireside talks and our first large-scale events. We're building the club we always wanted to be part of — and you're invited."
    }
  }

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
        <div className="max-w-6xl mx-auto">
          {/* Banner Image */}
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <p className="text-gray-600 text-lg font-medium">Community Banner</p>
              <p className="text-gray-500 text-sm mt-2">Students building together</p>
            </div>
            {/* Smoke effect placeholders */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white/15 rounded-full blur-sm"></div>
          </div>
          
          {/* Text Content */}
          <div className="text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              The dev collective for doers.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12">
              Extraordinary things happen when people come together to make. Forge was created to bring that energy to the University at Buffalo — a space where devs, leaders, and founders build in public, push boundaries, and connect with other ambitious students.
            </p>
            <button className="border-2 border-[#005bbb] text-[#005bbb] bg-transparent px-4 py-2 rounded-lg hover:bg-[#005bbb] hover:text-white transition-colors font-medium text-sm">
              Meet our team
            </button>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full py-4 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Our Journey</h2>
          
          {/* Timeline Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => period.active && setActivePeriod(period.id)}
                  disabled={!period.active}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
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
              <div>
                <h3 className="font-serif text-3xl font-bold mb-4">{timelineData.S25.title}</h3>
                <h4 className="text-xl font-semibold mb-8 text-gray-700">{timelineData.S25.subtitle}</h4>
                
                {/* Three Images Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-lg font-bold">🏢</span>
                      </div>
                      <p className="text-gray-600 text-sm">First Meeting Space</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-lg font-bold">👥</span>
                      </div>
                      <p className="text-gray-600 text-sm">Early Community</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-lg font-bold">💻</span>
                      </div>
                      <p className="text-gray-600 text-sm">First Build Session</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{timelineData.S25.content}</p>
                  <p>{timelineData.S25.additionalContent}</p>
                  <p>{timelineData.S25.finalContent}</p>
                </div>
              </div>
            )}

            {activePeriod === 'F25' && (
              <div>
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