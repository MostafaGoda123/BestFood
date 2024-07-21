import React from 'react'
import HeadLineCard from './HeadLineCard'
import image1 from '../images/headLineCard1.png'
import image2 from '../images/headLineCard2.png'
import image3 from '../images/headLineCard3.png'

const HeadLineCards = () => {
   let allCards = [
      {title:"Sun's Out, BOGO's Out" , subTitle:"Through 8/26",image:image1},
      {title:"New Restaurants" , subTitle:"Added Daily",image:image2},
      {title:"We Deliver Desserts Too" , subTitle:"Tasty Treats",image:image3},
   ]
   return (
      <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 container mx-auto'>
         {allCards.map(element => {
            return <HeadLineCard key={element.title} element={element} />
         })}
      </div>
   )
}

export default HeadLineCards
