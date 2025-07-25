'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto animate-fade-up">
          {/* Content Layout - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2 text-left">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                Projects
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                This page is currently under construction. While we showcase amazing projects, here's a picture of Meowndalf The Great to keep you company.
              </p>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold mb-4">🧙‍♂️ Meowndalf The Great</h3>
                <p className="text-lg leading-relaxed mb-6">
                  "The best projects are built with passion and persistence."
                </p>
                <p className="text-sm text-gray-500 italic">
                  - Meowndalf The Great
                </p>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/myImages/wisecat.png"
                  alt="Meowndalf The Great - A wise cat"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 