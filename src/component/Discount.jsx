import React from 'react'

export default function Discount() {
  return (
    <div className="bg-[#040303] p-3 w-full flex items-center justify-between">

  {/* Left Content */}
  <div className="w-[50%] pl-3">

    <p className="text-[#FFCF62] text-xs font-sans tracking-widest">
      SPECIAL OFFER
    </p>

    <p className="text-2xl font-serif text-white mt-1">
      Get <span className="text-[#FFCF62]">20% off</span>
    </p>

    <p className="text-gray-400 text-xs mt-1 max-w-md">
      On your first order. Because good food should always be a little extra.
    </p>

    <button className="mt-2 bg-[#FFCF62] text-[#040303] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#E9B255] transition duration-300">
      Order Now
    </button>

  </div>

  {/* Right Image */}
  <div className="w-[50%] flex justify-end">
    <img
      src="/image/hero.png"
      alt="Premium Fast Food"
      className="
        w-[75%]
        max-w-[400px]
        object-contain
        drop-shadow-[0_0_25px_rgba(233,178,85,0.25)]
        hover:scale-105
        transition
        duration-500
      "
    />
  </div>

</div>
  )
}
