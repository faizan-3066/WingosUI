import React from 'react'

export default function Categoris() {
  return (
    <div className='bg-[#120D09] p-5'>
        <p className='text-[#E9B255] font-sans text-sm'>OUR NEW</p>
        <p className='text-white font-serif text-xl '>Poluar Categories</p>
        
        <div className='flex p-3 gap-5 justify-center '>

            <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="/public/image/burger.png" alt=""  className='w-28 h-28 mx-auto ' />
                  <p className='text-white text-sm font-serif'>Burger</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Juicy & Loaded</p>
              </div>
            </div>

              <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="\public\image\pizza.png" alt=""  className='w-28 h-28 mx-auto ' />
                    <p className='text-white text-sm font-serif'>Pizza</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Cheesy & Delicious</p>
              </div>
            </div>

             <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="/public/image/chicken.png" alt=""  className='w-28 h-28 mx-auto ' />
                    <p className='text-white text-sm font-serif'>Chicken</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Crispy & Tasty</p>
              </div>
            </div>

                <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="\public\image\fries.png" alt=""  className='w-28 h-28 mx-auto ' />
                  <p className='text-white text-sm font-serif'>Fries</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Golden & Crunchy</p>
              </div>
            </div>

            <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="\public\image\wraps.png" alt=""  className='w-28 h-28 mx-auto ' />
                  <p className='text-white text-sm font-serif'>Wraps</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Fresh & Healthy</p>
              </div>
            </div>

               <div className='w-42 h-42 bg-[#0E0F0F] rounded-2xl border border-amber-500 p-2  hover:scale-105 transition duration-500'>
              <div className='text-center'>
                <img src="\public\image\drinks.png" alt=""  className='w-28 h-28 mx-auto ' />
                  <p className='text-white text-sm font-serif'>Drinks</p>
                  <p className='text-[#E9B255] text-sm font-sans '>Cool & Refreshing</p>
              </div>
            </div>


              

        </div>
    </div>
  )
}
