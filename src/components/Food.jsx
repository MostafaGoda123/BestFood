import React, { useState } from 'react'
import { data } from './../data/Data';

const Food = () => {
   const [foods, setFoods] = useState(data)

   const filterType = (category) => {
      setFoods(
         data.filter((item) => {
            return item.category === category
         })
      )
   }
   const filterPrice = (price) => {
      setFoods(
         data.filter((item) => {
            return item.price === price
         })
      )
   }

   return (
      <section className='container mx-auto my-10'>
         <h1 className="text-orange-600 text-center mb-5 text-4xl font-bold">Top Rated Menu Items</h1>
         <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
               <h3 className='text-xl font-semibold mb-2'>Filter Type</h3>
               <ul className='flex gap-2'>
                  <button onClick={()=> setFoods(data) } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>All</button>
                  <button onClick={()=> filterType("burger") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Burgers</button>
                  <button onClick={()=> filterType("pizza") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Pizza</button>
                  <button onClick={()=> filterType("salad") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Salads</button>
                  <button onClick={()=> filterType("chicken") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Chicken</button>
               </ul>
            </div>
            <div>
               <h3 className='text-xl font-semibold mb-2'>Filter Price</h3>
               <ul className='flex gap-2'>
                  <button onClick={()=> filterPrice("$") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$</button>
                  <button onClick={()=> filterPrice("$$") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$</button>
                  <button onClick={()=> filterPrice("$$$") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$</button>
                  <button onClick={()=> filterPrice("$$$$") } className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$$</button>
               </ul>
            </div>
         </div>
         <section className="displayFoods grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {foods.map(item => (
               <div key={item.id} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">
                  <img src={item.image} alt={item.name} className='w-full h-60 object-cover'/>
                  <p className="flex p-4 justify-between">
                     <span className='font-semibold'>{item.name}</span>
                     <button className='border-none bg-orange-600 text-white rounded-full'>{item.price}</button>
                  </p>
               </div>
            ))}
         </section>
      </section>
   )
}

export default Food
