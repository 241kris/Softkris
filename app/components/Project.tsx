'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import icone from react icone  
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

export default function Project() {
    return (
        < >
            <div className='h-screen flex items-center justify-center '>
                <div className='z-10 '>
                    <h1 className='text-3xl font-extrabold'>Softkris project</h1>

                    <section className='flex flex-col md:flex-row gap-4 items-center justify-strat mt-4 '>

                        {/*card e-gestock*/}
                        <main className='border rounded-sm lg:w-1/3 w-full  p-2 border-gray-600  '>
                            <div className='flex gap-2 justify-between '>
                                <div className="w-[160px] h-[120] rounded-box overflow-hidden">
                                    <Image src="/egestock.png" width={400} height={300} alt="image e-gestock" className='rounded-lg w-full h-full ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-sm link  text-[#ff9fa0] '>technologie utilisé</h1>
                                    <ul className="flex flex-row items-star space-x-10 text-base">
                                        <li className="flex items-center space-x-2">

                                            <SiTypescript className="text-[#61DBFB]  animate-pulse-glow" />
                                            <span className=" font-extrabold link">TypeScript</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <SiNextdotjs className="text-white animate-pulse-glow" />
                                            <span className=" font-extrabold link">Next.js</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-2 '>
                                <div className='flex items-center gap-2'>
                                    <Link href="https://www.e-gestock.com/">  <h2 className="card-title link text-[#ff9fa0]">e-Gestock</h2> </Link>
                                    <span className='badge badge-accent'>fondateur</span>
                                </div>
                                <p className='text-sm font-light text-justify py-2'>
                                    eGestock - Application de gestion de stock et de facturation  Gabonnaise penssée pour les gerant de  bar, snack-bar et depot de boisson
                                </p>

                            </div>
                        </main>

                        {/*card optic241*/}
                        <main className='border rounded-sm p-2 lg:w-1/3 w-full border-gray-600  '>
                            <div className='flex gap-2 justify-between '>
                                <div className="w-[160px]  h-[120] rounded-box overflow-hidden">
                                    <Image src="/optic241.jpg" width={400} height={300} alt="image optic241" className='rounded-lg w-full h-full ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-sm link  text-green-400'>technologie utilisé</h1>
                                    <ul className="flex flex-row items-star space-x-10 text-base">
                                        <li className="flex items-center space-x-2">
                                            <FaReact className="text-[#61DBFB]   animate-spin-slow" />
                                            <span className=" font-extrabold link">React.js</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <SiNextdotjs className="text-white animate-pulse-glow" />
                                            <span className=" font-extrabold link">Next.js</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <Link href="https://www.optic241.ga/">  <h2 className="card-title link text-green-400">optic241</h2> </Link>
                                <p className='text-sm font-light text-justify py-2'>
                                    site vitrine d'une celebre structure de Libreville specialiste en santé visuelle, au style et au confort des yeux.
                                </p>


                            </div>
                        </main>

                    </section>

                </div>
            </div >
        </>
    )
}
