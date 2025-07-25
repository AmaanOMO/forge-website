'use client'

import React from 'react'
import { Laptop, Flame, Globe } from 'lucide-react'

interface CultureCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image?: string
}

const CultureCard = ({ title, description, icon: Icon, image, href }: CultureCardProps & { href?: string }) => {
  const CardContent = () => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div className="p-6">
        {image && (
          <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-[#f9f6f2] flex items-center justify-center mr-3">
            <Icon className="w-5 h-5 text-[#005bbb]" />
          </div>
          <h3 className="font-serif text-xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}

const Culture = () => {

  return (
    <section className="w-full bg-[#fdfcf8] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Visual Grid */}
          <div 
            className="lg:w-3/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CultureCard
                title="SunSesh"
                description="Collaborative Sunday build sessions where ideas come to life through teamwork and shared expertise."
                icon={Laptop}
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                href="/sunsesh"
              />
              <CultureCard
                title="FireSides"
                description="Weekly speaker events featuring founders, engineers, and mentors sharing their journeys and insights."
                icon={Flame}
                image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                href="/firesides"
              />
              <CultureCard
                title="Atlas"
                description="A visual gallery of hackathons Forge members have attended, connecting our community to innovation worldwide."
                icon={Globe}
                image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div 
            className="lg:w-2/5"
          >
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-black">our</span>
                <span className="font-serif italic text-[#005bbb] ml-2">culture</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-gray-700">
                From weekend jam sessions to inspiring guest talks and hackathon
                showcases. Forge is built on more than just code. Our culture is
                where ambitious ideas take shape, whether you're building a startup,
                a robot, or a fashion brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture 