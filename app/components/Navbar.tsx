 
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        < >
            <nav className="block w-full max-w-screen-lg px-4  mx-auto  shadow-2xl rounded-md lg:px-8   mt-10">
                <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                    <Image src="/logo.png" width={75} height={75} alt="Logo" />
                    {/*<Link href="/blog" className="badge badge-accent ">Blog</Link>*/}
                </div>
            </nav>

        </>
    )
}
