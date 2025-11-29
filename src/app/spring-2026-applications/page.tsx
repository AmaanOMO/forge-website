'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Spring2026Applications() {
  const scrollToOpenPositions = () => {
    const element = document.getElementById('open-positions')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const positions = [
    {
      title: 'Marketing Lead',
      description: 'Responsible for managing Forge\'s public presence.',
      responsibilities: [
        'Run and schedule content on social platforms',
        'Work with current Marketing Director on brand direction',
        'Help design Forge merch + event promo materials'
      ]
    },
    {
      title: 'Events & Programming Lead',
      description: 'Runs planning + logistics for Forge events.',
      responsibilities: [
        'Organize weekly SunSesh events & guest speakers',
        'Coordinate space, supplies, food, scheduling',
        'Work directly with Ops + Finance to deliver smooth events'
      ]
    },
    {
      title: 'Partnerships Lead',
      description: 'Forging relationships with companies, startups, and brands.',
      responsibilities: [
        'Reach out to companies for speakers & partnerships',
        'Help secure sponsorships + opportunities for members',
        'Maintain long-term relationships with partners'
      ]
    },
    {
      title: 'Finance Lead',
      description: 'Responsible for all money, purchases, and budgeting.',
      responsibilities: [
        'Track Forge\'s budget + expenses',
        'Handle reimbursement processes',
        'Lead fundraising initiatives'
      ]
    },
    {
      title: 'Growth & Community Lead',
      description: 'Builds community vibes and engagement.',
      responsibilities: [
        'Plan fun social events (apple picking, ice skating, potlucks)',
        'Member onboarding + engagement',
        'Help grow Forge\'s culture + retention'
      ]
    }
  ]

  const pillars = [
    { name: 'Reliability' },
    { name: 'Communication' },
    { name: 'Ownership' },
    { name: 'Passion for building' }
  ]

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-gradient-to-br from-[#f9f6f2] to-[#fdfcf8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black">
            Forge E-Board Applications - Spring 2026
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto">
            Help lead the fastest-growing builder community at UB.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center mb-6">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgHsK5jLkvzi4jLTWVS2rDqkje4WHu9hR2sveXCaif1wMsqA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#005bbb] text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-[#004499] transition-colors duration-300 shadow-lg"
            >
              Apply Now
            </a>
            <button
              onClick={scrollToOpenPositions}
              className="text-[#005bbb] underline hover:text-[#004499] transition-colors text-lg font-medium"
            >
              View open roles below
            </button>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="font-serif text-2xl font-bold mb-3 text-black">
                  {position.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {position.description}
                </p>
                <ul className="space-y-2">
                  {position.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-[#005bbb] mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
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
            We're selecting people who consistently show up and want to build something meaningful on campus.
          </p>
        </div>
      </section>

      {/* Apply Button Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#f9f6f2]">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfgHsK5jLkvzi4jLTWVS2rDqkje4WHu9hR2sveXCaif1wMsqA/viewform?usp=publish-editor"
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

