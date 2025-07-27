'use client'

import React from 'react'
import ChromaGrid from './components/ChromaGrid'
import Image from 'next/image'
import TrueFocus from './components/TrueFocus'

//icone import react icone
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMagic, FaGlobe, FaRocket } from 'react-icons/fa';
import Navbar from './components/Navbar'
import Project from './components/Project'
import Footer from './components/Footer'
import Squares from './components/Squares'

export default function Page() {

  const items = [
    {
      image: "/user3.png",
      title: "Kris Styvene",
      subtitle: "Full-stack Developer",
      handle: "@kris-styvene",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/241kris"
    },
    {
      image: "/user1.jpg",
      title: "Thomas Dakin",
      subtitle: "Marketing digital",
      handle: "@Thomas",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://www.linkedin.com/in/thomas-daquin-2363a7359?trk=contact-info"
    }
  ]


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
            <Image src="/logo.png" width={300} height={300} alt="Logo" />
            <span className="font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-[#40fa7e] via-[#2db5ff] to-[#7c3aed] text-4xl mt-4">
              Co-createur de l&apos;avenir numerique
            </span>
            <div className='my-5'>
              <h1 className='text-base text-center link mb-2'>retrouvez nous</h1>
              <div className='flex items-center gap-3 text-4xl justify-center '>
                <FaLinkedin />
                <AiFillTikTok />
                <FaFacebookSquare />
              </div>
            </div>

            <div className="my-10">
              <h1 className="text-base mb-6 text-start">Nos actions</h1>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4 ">
                  <FaMagic className="text-[#40fa7e] text-sm" />
                  <span className="text-sm link">
                    Construction de solution digital
                  </span>
                </li>
                <li className="flex items-center space-x-4 ">
                  <FaGlobe className="text-[#40fa7e] text-sm" />
                  <span className="text-sm link">
                    sites web (e-commerce, blog, vitrine)
                  </span>
                </li>
                <li className="flex items-center space-x-4 ">
                  <FaRocket className="text-[#40fa7e] text-sm" />
                  <span className="text-sm link">
                    Accompagnement dans vos projets numériques
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center mt-24">
          <TrueFocus
            sentence="Team Nehoko"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />

          <div className="relative mt-5 mb-14">
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        <Project />
        <Footer />
      </div>
    </>
  )
}
