import React from 'react'
import TrueFocus from './TrueFocus'
import Link from 'next/link'

export default function How_am_i() {
    return (
        < >
            <div className="flex flex-col justify-start items-center mt-24">
                <TrueFocus
                    sentence="Qui suis-je ?"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="blue"
                    animationDuration={1.5}
                    pauseBetweenAnimations={1}
                />
                <div className='md:w-1/3 w-full z-10 mw-auto text-justify mt-8 text-lg  font-light'> <span className='text-gray-400 font-semibold'>Gabonais de 24 ans,</span> residant à Libreville, tomber amoureux des technologies web depuis déjà 3 ans
                    Développeur Web <span className='text-green-400'> Full-Stackautodidacte </span> me fesant naitre le desir d'entreprendre fondateur de <Link className='badge badge-default' href="https://www.e-gestock.com/">eGestock</Link>| 🚀 Entrepreneur passionné d’autoformation — Débrouillard, Adaptatif, <span className='text-green-400'>Orienté progrès.</span>
                </div>

            </div>

        </>
    )
}
