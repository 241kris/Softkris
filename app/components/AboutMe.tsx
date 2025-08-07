import React from 'react'
import TrueFocus from './TrueFocus'
import Link from 'next/link'

export default function AboutMe() {
  return (
    < > 
        {/*section qui je suis ?*/}
            <div id='about-me' className="flex flex-col justify-start items-center py-24">
                <TrueFocus
                    sentence="Qui suis-je ?"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="green"
                    animationDuration={1.5}
                    pauseBetweenAnimations={1}
                />
                
                {/*presentation, bio*/}
                <div className='md:w-1/3 w-full z-10 mw-auto text-justify mt-8 text-lg  font-light'>
                    <p className=' italic'>Vous pouvez m&apos;appelez <span className='link text-[#61DBFB]'> kris</span> </p>
                    <br />
                    <p className='mt-4'>
                        Développeur full stack autodidacte depuis 3 ans. Je construis <Link href={'https://www.e-gestock.com'} className='link  text-[#61DBFB]'>e-gestock</Link>, une solution de gestion de stock/facturation pour barmen, conçue pour s’adapter à leur réalité.
                    </p>
                </div>

            </div>
    </>
  )
}
