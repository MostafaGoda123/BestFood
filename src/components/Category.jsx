import React from 'react'
import { categories } from '../data/Data'

const Category = () => {
   return (
      <section className="bg-neutral-100 py-10">
         <section className='category container mx-auto'>
            <h1 className="text-orange-600 text-center mb-5 text-4xl font-bold">Top Rated Menu Items</h1>
            <div className="allCategories grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {categories.map(item => (
                  <div key={item.name} className='flex items-center p-5 justify-between bg-white rounded-xl'>
                     <h2 className="font-semibold">{item.name}</h2>
                     <img src={item.image} alt="" className='w-20' />
                  </div>
               ))}
            </div>
         </section>
      </section>
   )
}

export default Category
