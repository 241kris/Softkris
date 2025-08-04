'use client'

import React from 'react'
//icone import react icone 
import Project from './components/Project'
import Footer from './components/Footer'
import Squares from './components/Squares'
import Hero from './components/Hero'
import How_am_i from './components/How_am_i'

export default function Page() {

  return (
    <>
      <div className="relative md:h-400 h-450 bg-gray-950 text-white overflow-x-hidden px-4">

        {/* 🎨 Fond animé */}
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.2}
            squareSize={80}
            direction="diagonal"
            borderColor="#545353"
            hoverFillColor="#222"
          />
        </div>

        {/*section hero */}
        <Hero />

        {/*section who am i */}
        <How_am_i />

        {/*section my projects */}
        <Project />

        {/*section footer */}
        <Footer />
        
      </div>
    </>
  )
}
