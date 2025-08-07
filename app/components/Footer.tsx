import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            {/*section footer*/}
            <footer className="footer sm:footer-horizontal  text-neutral-content p-2 md:h-80 h-120 items-end-safe pb-12 relative z-10">

                {/* mes contacts email, telephone*/}
                <nav>
                    <h6 className="text-xl mb-7 link text-white">Mes contacts</h6>
                    <div id='contact' className="grid grid-cols-1 gap-2 text-sm text-start">
                        <a href="tel:+241077001355" className="hover:underline hover:text-[#40fa7e] transition">
                            +241 077001355 <span className='text-xs text-green-400'>( WhatsApp )</span>
                        </a>
                        <a href="tel:+241076309060" className="hover:underline hover:text-[#40fa7e] transition">
                            +241 065748577
                        </a>
                        <a href="mailto:styvenekris@gmail.com" className="hover:underline hover:text-[#40fa7e] transition">
                            styvenekris@gmail.com
                        </a>
                    </div>
                </nav>

                {/* Tous droits réservés.*/}
                <aside>
                    <Image src="/barcode.gif" width={50} height={50} alt="Logo" />
                    <p className='text-start'>
                        Copyright © 2025 Softkris LLC
                        <br />
                        Tous droits réservés.
                    </p>
                </aside>
                
            </footer>

        </>
    )
}
