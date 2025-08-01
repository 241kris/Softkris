'use client'

import React from 'react'
import { FaReact, FaLaravel, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import TrueFocus from './components/TrueFocus'

//icone import react icone
import { FaLinkedin } from "react-icons/fa6";
import Navbar from './components/Navbar'
import Project from './components/Project'
import Footer from './components/Footer'
import Squares from './components/Squares'
import Link from 'next/link';

export default function Page() {

  return (
    <>
      <div className="relative h-screen bg-gray-950 text-white overflow-x-hidden px-4">
        {/* 🎨 Fond animé */}
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.2}
            squareSize={40}
            direction="diagonal"
            borderColor="#545353"
            hoverFillColor="#222"
          />
        </div>

        {/* 🧱 Contenu par-dessus */}
        <div className="relative z-10">
          <Navbar />
          <div className="flex flex-col items-center justify-center mb-7 pt-10">
            <h1 className='text-7xl font-extrabold text-white'>SoftKris</h1>
            <span className="font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-[#40fa7e] via-[#2db5ff] to-[#7c3aed] text-3xl mt-4">
              Developpeur web full stack | solo entrepreneur
            </span>
            <div className='my-5'>
              <h1 className='text-base text-center  font-bold mb-2'>Follow me</h1>
              <div className='flex items-center gap-3 text-3xl justify-center '>             
                
                <Link href='https://www.linkedin.com/in/kris-styvene-492941374/'> <FaLinkedin /></Link>
                <Link href='https://github.com/241kris'><FaGithub /></Link>
                <FaInstagramSquare />
              </div>
            </div>


            <div className="my-7  ">
              <h1 className="text-xl mb-6 text-start font-extrabold  text-gray-400 ms-4">My roadmap</h1>

              <ul className="flex flex-row items-center space-x-10 px-3">
                <li className="flex items-center space-x-2">
                  <FaReact className="text-[#61DBFB] md:text-3xl text-xl  animate-spin-slow" />
                  <span className="text-xl font-extrabold link">React.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiNextdotjs className="text-white md:text-3xl text-xl animate-pulse-glow" />
                  <span className="text-xl font-extrabold link">Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLaravel className="text-[#f9322c] md:text-3xl text-xl  animate-bounce-smooth" />
                  <span className="text-xl font-extrabold link">Laravel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center mt-24">
          <TrueFocus
            sentence="who am i ?"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />
          <div className='md:w-1/3 w-full z-10 mw-auto text-justify mt-8 text-lg  font-light'>
            Développeur Web Full-Stack <span className='text-green-400'>autodidacte depuis 3 ans </span>| 🚀 Entrepreneur passionné d’autoformation — Débrouillard, Adaptatif, <span className='text-green-400'>Orienté progrès.</span>
          </div>

        </div>

        <Project />
        <Footer />
      </div>
    </>
  )
}
