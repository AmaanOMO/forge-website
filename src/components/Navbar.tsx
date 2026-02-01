'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  // Toggle states for mobile menu and Culture dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cultureOpen, setCultureOpen] = useState(false)
  
  return (
    <nav className="w-full py-6 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 bg-[#f9f6f2]/95 backdrop-blur-sm border-b border-gray-200/50">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black hover:text-[#005bbb] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Forge Text - Left on Desktop, Center on Mobile */}
      <div className="flex-1 flex justify-center md:justify-start px-4">
        <Link href="/" className="font-serif font-bold text-[26px] hover:text-[#005bbb] transition-colors cursor-pointer">Forge</Link>
      </div>
      
      {/* Desktop Navigation - Centered */}
      <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link href="/about" className="hover:text-[#005bbb] transition-colors">
          About
        </Link>
        <a href="https://luma.com/calendar/manage/cal-zJkt69wozQWZhcK" target="_blank" rel="noopener noreferrer" className="hover:text-[#005bbb] transition-colors">
          Events
        </a>
        <Link href="/projects" className="hover:text-[#005bbb] transition-colors">
          Projects
        </Link>
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
              <Link href="/sunsesh" className="block px-4 py-2 hover:bg-gray-100">
                SunSesh
              </Link>
              <Link href="/firesides" className="block px-4 py-2 hover:bg-gray-100">
                Fireside
              </Link>
              <Link href="/atlas" className="block px-4 py-2 hover:bg-gray-100">
                Atlas
              </Link>
            </div>
          )}
        </div>
        <Link href="/startup-fair" className="hover:text-[#005bbb] transition-colors">
          Startup Fair
        </Link>
        <Link href="/spring-2026-applications" className="animated-blue-text">
          Foundry 2026
        </Link>
      </div>

      {/* Logo - Desktop and Mobile */}
      <div className="w-20 h-20 flex items-center justify-center">
        <Image 
          src="/myImages/forgeLogo.png" 
          alt="Forge Logo" 
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200 md:hidden z-50">
          <div className="px-8 py-6 space-y-4">
            <Link 
              href="/about" 
              className="block py-2 hover:text-[#005bbb] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="https://luma.com/calendar/manage/cal-zJkt69wozQWZhcK" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 hover:text-[#005bbb] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <Link 
              href="/projects" 
              className="block py-2 hover:text-[#005bbb] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/startup-fair" 
              className="block py-2 hover:text-[#005bbb] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Startup Fair
            </Link>
            <Link 
              href="/spring-2026-applications" 
              className="block py-2 animated-blue-text"
              onClick={() => setMobileMenuOpen(false)}
            >
              Foundry 2026
            </Link>
            
            {/* Mobile Culture Dropdown */}
            <div className="border-t border-gray-200 pt-4">
              <button
                className="flex items-center justify-between w-full py-2 hover:text-[#005bbb] transition-colors"
                onClick={() => setCultureOpen(!cultureOpen)}
              >
                <span>Culture</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${cultureOpen ? 'rotate-180' : ''}`}
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
                <div className="pl-4 space-y-2 mt-2">
                  <Link 
                    href="/sunsesh" 
                    className="block py-2 hover:text-[#005bbb] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SunSesh
                  </Link>
                  <Link 
                    href="/firesides" 
                    className="block py-2 hover:text-[#005bbb] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fireside
                  </Link>
                  <Link 
                    href="/atlas" 
                    className="block py-2 hover:text-[#005bbb] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Atlas
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 