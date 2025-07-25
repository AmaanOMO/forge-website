'use client'

import React from 'react'
import Image from 'next/image'

const ForWhom = () => {

  return (
    <section className="w-full bg-[#fdfcf8] py-24">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div 
          className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black">
            This isn't just a club, it's a
            <span className="relative inline-block mx-2">
              <span className="relative z-10">launchpad.</span>
              <span className="absolute inset-0 border-2 border-[#005bbb] transform translate-y-1 translate-x-1"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Come jam with engineers, artists, designers, and founders on campus who want to build what's next, together.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We're open to all majors and all skill levels. If you've got the ambition, we've got the tools, the community, and the drive.
          </p>
        </div>
        {/* Right Column - Visual Content */}
        <div 
          className="md:w-2/3 md:pl-12 relative group"
        >
          <Image
            src="/myImages/thanksBuilding.jpeg"
            alt="Thanks Building at University at Buffalo"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Blue accent elements */}
      <div 
        className="max-w-6xl mx-auto px-8 mt-12"
      >
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-[#005bbb]"></div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#005bbb] h-16 rounded-lg opacity-20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            <span className="font-bold text-white">Build</span>
          </div>
          <div className="bg-[#005bbb] h-16 rounded-lg opacity-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            <span className="font-bold text-white">Connect</span>
          </div>
          <div className="bg-[#005bbb] h-16 rounded-lg opacity-60 flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            <span className="font-bold text-white">Launch</span>
          </div>
          <div className="bg-[#005bbb] h-16 rounded-lg opacity-80 flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            <span className="font-bold text-white">Grow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhom 