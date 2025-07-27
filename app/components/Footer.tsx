import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal  text-neutral-content p-10">
                <aside>
                    <Image src="/barcode.gif" width={50} height={50} alt="Logo" />
                    <p className='text-start'>
                        Copyright © 2025 Nehoko LLC
                        <br />
                        Tous droits réservés.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-xl font-extrabold text-white">Entrer en contact</h6>
                    <div className="grid grid-cols-1 gap-2 text-sm text-start">
                        <a href="tel:+241077001355" className="hover:underline hover:text-[#40fa7e] transition">
                            +241 077001355
                        </a>
                        <a href="tel:+241076309060" className="hover:underline hover:text-[#40fa7e] transition">
                            +241 076309060
                        </a>
                        <a href="mailto:contact@nehoko.com" className="hover:underline hover:text-[#40fa7e] transition">
                            contact@nehoko.com
                        </a>
                    </div>

                </nav>
            </footer>

        </>
    )
}
