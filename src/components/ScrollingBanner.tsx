'use client'

import React from 'react'

const ScrollingBanner = () => {
  const companies = [
    'Amazon', 'Google', 'Meta', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb', 
    'PayPal', 'Stripe', 'Notion', 'Figma', 'OpenAI', 'Discord', 'Dropbox', 'Atlassian', 
    'Zoom', 'Databricks', 'Pinterest', 'Adobe', 'Spotify', 'Reddit', 'Robinhood', 
    'GitHub', 'Salesforce', 'Nvidia', 'Intel', 'Twitch', 'Slack', 'Shopify', 'ByteDance', 
    'Y Combinator', 'a16z', 'Sequoia', 'Greylock', 'CB Insights', 'Tesla', 'DeepMind', 
    'Canva', 'Duolingo', 'Replit', 'Hugging Face', 'Vercel', 'Linear', 'Ramp', 'Deel', 
    'Rippling', 'Brex', 'Asana', 'Intercom', 'Loom'
  ]

  return (
    <div className="w-full py-8 overflow-hidden bg-[#f9f6f2]">
      <div className="relative">
        <div className="flex animate-scroll-left hover:pause">
          {companies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 mx-8 text-gray-600 font-medium text-lg whitespace-nowrap"
            >
              {company}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`${company}-duplicate-${index}`}
              className="flex-shrink-0 mx-8 text-gray-600 font-medium text-lg whitespace-nowrap"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner 