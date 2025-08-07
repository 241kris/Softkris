import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagramSquare, FaReact, FaLaravel } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import Navbar from './Navbar'

export default function Hero() {
    return (
        < >
            {/*hero section*/}
            <div className="relative z-10 ">

                {/*import composent navbar*/}
                <Navbar />

                <div className="flex flex-col items-center justify-center mb-7 pt-10 h-130">
                    
                    {/*intro*/}
                    <h1 className='md:text-8xl text-6xl font-extrabold text-gray-300 '> SoftKris</h1>
                    <span className="font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-[#40fa7e] via-[#2db5ff] to-[#7c3aed] text-2xl mt-4">
                        Developpeur web full stack | solo entrepreneur
                    </span>

                    {/*mes reseaux sociaux*/}
                    <div className='my-5'>
                        <div className='flex items-center gap-3 text-3xl justify-center '>

                            <Link href='https://www.linkedin.com/in/kris-styvene-492941374/' className='text-blue-500'> <FaLinkedin /></Link>
                            <Link href='https://github.com/241kris'><FaGithub /></Link>
                            <FaInstagramSquare className='text-red-200' />
                        </div>
                    </div>

                    {/*mes outils de dev*/}
                    <div className="my-7  ">
                        <h1 className="text-lg mb-6 text-center ms-4  text-gray-200">Mes technologies</h1>

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

        </>
    )
}
