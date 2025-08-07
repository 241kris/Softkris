'use client'

import React from 'react'
//import composent
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Footer from './components/Footer'
import Squares from './components/Squares'

export default function Page() {

  return (
    <>
      <div className="relative  bg-gray-950 text-white  px-4">

        {/* Fond animé */}
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.1}
            squareSize={80}
            direction="diagonal"
            borderColor="#545353"
            hoverFillColor="#222"
          />
        </div>

        {/*section hero */}
        <Hero />

        {/*section about me */}
        <AboutMe />

        {/*section my projects */}
        <Project />

        {/*section footer */}
        <Footer />

      </div>
    </>
  )
}
