'use client'

import React, { useState } from 'react'

const Navbar = () => {
  // Toggle state for Culture dropdown menu
  const [cultureOpen, setCultureOpen] = useState(false)
  
  return (
    <nav className="w-full py-6 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 bg-[#f9f6f2]/95 backdrop-blur-sm border-b border-gray-200/50">
      <a href="/" className="font-serif font-bold text-[26px] hover:text-[#005bbb] transition-colors cursor-pointer">Forge</a>
      <div className="hidden md:flex items-center space-x-6">
        <a href="/about" className="hover:text-[#005bbb] transition-colors">
          About
        </a>
        <a href="https://lu.ma/ubforge?k=c&period=past" target="_blank" rel="noopener noreferrer" className="hover:text-[#005bbb] transition-colors">
          Events
        </a>
        <a href="/projects" className="hover:text-[#005bbb] transition-colors">
          Projects
        </a>
        <div className="relative">
          <button
            className="flex items-center hover:text-[#005bbb] transition-colors"
            onClick={() => setCultureOpen(!cultureOpen)}
          >
            Culture
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform ${cultureOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {cultureOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <a href="/sunsesh" className="block px-4 py-2 hover:bg-gray-100">
                SunSesh
              </a>
              <a href="/firesides" className="block px-4 py-2 hover:bg-gray-100">
                Fireside
              </a>
              <a href="/atlas" className="block px-4 py-2 hover:bg-gray-100">
                Atlas
              </a>
            </div>
          )}
        </div>
        <a href="/startup-fair" className="hover:text-[#005bbb] transition-colors">
          Startup Fair
        </a>
      </div>
      <div className="w-16 h-16 flex items-center justify-center">
        <img 
          src="/myImages/forgeLogo.png" 
          alt="Forge Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  )
}

export default Navbar 