'use client'

import React from 'react'

const About = () => {

  return (
    <section 
      id="about-section" 
      className="w-full bg-[#fdfcf8] py-24"
    >
      <div className="max-w-3xl mx-auto text-center px-8">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black">
          A collective of ambitious student builders.
        </h2>
        <div className="flex justify-center items-center mb-8">
          <div className="h-1 w-16 bg-[#005bbb]"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
                      Whether it's your first project or the next billion-dollar idea, Forge is a community where ideas turn into action and builders grow into leaders.
          Tap into a network of UB alumni in Silicon Valley, startup founders, and engineers from top tech companies.
          <br className="hidden md:block" />
          <br className="hidden md:block" />
                      We give you the space, community, and momentum to build what's next.
        </p>
        
        <div className="text-lg md:text-xl font-medium text-gray-800 mb-4">
          Show up → Meet cool people → Build great things → Repeat
        </div>
        <p className="text-base md:text-lg text-gray-600">
                      and before you know it, you've got your first MVP, team, and maybe even a startup.
        </p>
      </div>
    </section>
  )
}

export default About 