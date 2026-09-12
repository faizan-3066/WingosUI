import React from 'react'
import { Search, ShoppingCart, User } from "lucide-react";

export default function Nav() {
  return (
   <div className="bg-[#040303] flex items-center justify-between px-5 shadow-emerald-100 shadow-2xl ">

  {/* Navigation */}
  <div className="text-white">
    <ul className="flex gap-6 p-5 font-serif">
      <li className="hover:text-[#E9B255] cursor-pointer transition">
        Home
      </li>

      <li className="hover:text-[#E9B255] cursor-pointer transition">
        Menu
      </li>

      <li className="hover:text-[#E9B255] cursor-pointer transition">
        About
      </li>

      <li className="hover:text-[#E9B255] cursor-pointer transition">
        Offers
      </li>

      <li className="hover:text-[#E9B255] cursor-pointer transition">
        Contact
      </li>
    </ul>
  </div>

  {/* Icons */}
  <div className="flex items-center gap-5">

    <Search
      size={24}
      className="text-white cursor-pointer hover:text-[#E9B255] transition"
    />

    <ShoppingCart
      size={24}
      className="text-white cursor-pointer hover:text-[#E9B255] transition"
    />

    <User
      size={24}
      className="text-white cursor-pointer hover:text-[#E9B255] transition"
    />

    {/* Gold Button */}
    <button className="bg-[#E9B255] text-black px-5 py-2 rounded-full font-semibold hover:bg-white transition">
      Order Now
    </button>

  </div>

</div>
  )
}
