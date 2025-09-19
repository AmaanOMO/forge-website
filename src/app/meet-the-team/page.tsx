'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function MeetTheTeam() {
  // State for team period selection (F25, S26, etc.)
  const [activePeriod, setActivePeriod] = useState('F25')

  // Team period configuration - future periods are disabled
  const periods = [
    { id: 'F25', label: 'F25', active: true },
    { id: 'S26', label: 'S26', active: false }
  ]

  // Placeholder team data - replace with real team members later
  // Use objectPosition to control image positioning: 'center X%' where X is 0-100
  // 0% = top of image, 50% = center, 100% = bottom of image
  const teamMembers = [
    { 
      name: 'Amaan Sheikh', 
      title: 'Executive Director',
      image: '/Headshots/Amaan.png',
      personalWebsite: 'https://www.amaans.dev/',
      linkedin: 'https://www.linkedin.com/in/amaansheikh-swe/',
      objectPosition: 'center 30%'
    },
    { 
      name: 'Matthew Chu', 
      title: 'Co-director of Events and Programming',
      image: '/Headshots/MatthewChu.png',
      linkedin: 'https://www.linkedin.com/in/matthewchu88/',
      objectPosition: 'center 50%'
    },
    { 
      name: 'Kyler Shih', 
      title: 'Co-director of Events and Programming',
      image: '/Headshots/KylerShih.png',
      linkedin: 'https://www.linkedin.com/in/kyler-shih-8a66142bb/',
      objectPosition: 'center 30%'
    },
    { 
      name: 'Leya Skaria', 
      title: 'Director of Marketing',
      image: '/Headshots/LeyaSkaria.png',
      linkedin: 'https://www.linkedin.com/in/leyaskaria/',
      objectPosition: 'center 80%'
    },
    { 
      name: 'Charlotte Lee', 
      title: 'Director of Operations',
      image: '/Headshots/CharlotteLee.png',
      linkedin: 'https://www.linkedin.com/in/charlotte-lee-12795b286/',
      objectPosition: 'center 50%'
    },
    { 
      name: 'Tahmina Fayezi', 
      title: 'Director of Partnership',
      image: '/Headshots/TahminaFayezi.png',
      linkedin: 'https://www.linkedin.com/in/tahmina-fayezi/',
      objectPosition: 'center 50%'
    },
    { 
      name: 'Christabell Htoo', 
      title: 'Director of Growth and Community',
      image: '/Headshots/ChristabelHtoo.png',
      linkedin: 'https://www.linkedin.com/in/christabel-htoo/',
      objectPosition: 'center 0.1%'
    },
    { 
      name: 'Hua Yang', 
      title: 'Director of Finance',
      image: '/Headshots/HuaYang.png',
      linkedin: 'https://www.linkedin.com/in/huayang1/',
      objectPosition: 'center 50%'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Our Leadership Legacy
          </h1>
          
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
            {activePeriod === 'F25' && (
              <div key="F25" className="animate-fade-up">
                <h2 className="font-serif text-3xl font-bold mb-8 text-gray-700">
                Board of Directors: Gen 1
                </h2>
                

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="group relative">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
                          style={{ 
                            objectPosition: member.objectPosition || 'center 50%'
                          }}
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-3">
                            {/* First member gets custom social links, others get default */}
                            {index === 0 ? (
                              <>
                                {/* Personal Website Icon */}
                                <a 
                                  href={member.personalWebsite}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="Personal Website"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                  </svg>
                                </a>
                                
                                {/* LinkedIn Icon */}
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                              </>
                            ) : index === 1 || index === 2 ? (
                              <>
                                {/* LinkedIn Icon for Matthew and Kyler */}
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                              </>
                            ) : index === 3 || index === 4 ? (
                              <>
                                {/* LinkedIn Icon for Tashfia and Charlotte */}
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                              </>
                            ) : index === 5 || index === 6 || index === 7 ? (
                              <>
                                {/* LinkedIn Icon for Tahmina, Christabell, and Hua */}
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                              </>
                            ) : (
                              <>
                                {/* LinkedIn Icon */}
                                <a 
                                  href="#" 
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                                
                                {/* Twitter Icon */}
                                <a 
                                  href="#" 
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                  aria-label="Twitter"
                                >
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                  </svg>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-center mt-3 text-sm font-medium text-gray-700">
                        {member.name}
                      </p>
                      {member.title && (
                        <p className="text-center mt-1 text-xs font-bold text-gray-600">
                          {member.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePeriod === 'S26' && (
              <div key="S26" className="animate-fade-up">
                <h2 className="font-serif text-3xl font-bold mb-8 text-gray-700">
                  Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                  The Spring 2026 team will be revealed soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 