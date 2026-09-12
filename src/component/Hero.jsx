import React from 'react'

export default function Hero() {
  return (
    <div className="bg-[#040303] p-8 w-full flex items-center min-h-[550px]">

  {/* Left Content */}
  <div className="w-[50%] px-8">

    <p className="text-[#E9B255] text-sm font-sans tracking-widest mb-3">
      PREMIUM FAST FOOD
    </p>

    <h1 className="text-white text-6xl font-serif leading-tight">
      Biggest Bites
    </h1>

    <h1 className="text-[#FFCF62] text-6xl font-semibold font-serif leading-tight">
      Happier Vibes
    </h1>

    <p className="text-gray-300 font-sans text-md mt-5 max-w-lg">
      Fresh ingredients. Bold flavors. Crafted for food lovers like you.
    </p>

    {/* Buttons */}
    <div className="flex gap-4 mt-7">

      <button className="
        bg-[#E9B255]
        text-black
        px-6 py-3
        rounded-full
        font-semibold
        hover:bg-white
        hover:scale-105
        transition duration-300
      ">
        Order Now
      </button>

      <button className="
        border border-[#E9B255]
        text-[#E9B255]
        px-6 py-3
        rounded-full
        font-semibold
        hover:bg-[#E9B255]
        hover:text-black
        hover:scale-105
        transition duration-300
      ">
        Watch Our Story
      </button>

    </div>
  </div>


  {/* Right Image */}
  <div className="w-[50%] flex justify-center items-center">

    <img
      src="/image/hero.png"
      alt="Premium Fast Food"
      className="
        w-[90%]
        max-w-[550px]
        object-contain
        drop-shadow-[0_0_35px_rgba(233,178,85,0.25)]
        hover:scale-105 transition duration-500 "/>

  </div>

</div>
  )
}
