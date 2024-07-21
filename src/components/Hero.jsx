import React from 'react'
import burger from '../images/burger.png'

const Hero = () => {
   return (
      <main className='container mx-auto'>
         <div className={`image w-full relative h-96 bg-red-500`}>
            <div className="overlay absolute left-0 top-0 bg-black/40 text-neutral-200 font-bold w-full h-full text-4xl flex flex-col gap-1 justify-center p-5">
               <h1>The <span className='text-orange-500'>Best</span></h1>
               <h1><span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img src={burger} alt="" className='w-full h-full object-cover' />
         </div>
      </main>
   )
}

export default Hero
