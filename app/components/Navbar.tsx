
import React from 'react'
import Image from 'next/image'


export default function Navbar() {
    return (
        < >
            {/* navbar*/}
            <nav className="block w-full max-w-screen-lg px-4  mx-auto  shadow-2xl rounded-md lg:px-8 h-50  pt-7">
                <div className="container flex flex-wrap items-center justify-between mx-auto  ">

                    {/* profil picture*/}
                    <Image src="/profil.png" width={80} height={80} alt="Logo" className='rounded-xl' />

                    {/* raccourcis link*/}
                    <div >
                        <a href="#about-me" className="link text-base ">a propos de moi</a>
                        <a href="#contact" className="ms-7 link text-base ">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    )
}
