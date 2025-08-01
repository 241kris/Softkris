'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Project() {
    return (
        < >
            <div className='h-[700px] flex items-center '>
                <div>
                    <h1 className='font-extrabold text-3xl text-start mb-2'>My projects</h1>
                    <div className="card image-full md:w-96 w-87 shadow-sm border border-dashed p-2">
                        <figure>
                            <Image src="/egestock.png" width={500} height={300} alt="Logo" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">e-Gestock</h2>
                            <p className='text-justify'>eGestock est une application web de gestion de stock, de facturation, de suivi des ventes et d&apos;inventaires pour les entreprises.</p>
                            <Link className='badge badge-secondary' href="https://www.e-gestock.com/">  consulter </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
