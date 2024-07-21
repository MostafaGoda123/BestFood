import React from 'react'

const HeadLineCard = ({element}) => {
   return (
      <div className='relative h-60 rounded-xl overflow-hidden'>
         <div className="overlay absolute left-0 top-0 bg-black/50 p-3 w-full h-full text-neutral-200 text-2xl">
            <h3 className='font-bold'>{element.title}</h3>
            <p>{element.subTitle}</p>
            <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
         </div>
         <img src={element.image} className='w-full h-full object-cover' alt="" />
      </div>
   )
}

export default HeadLineCard
