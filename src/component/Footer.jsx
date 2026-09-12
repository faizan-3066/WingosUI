import React from 'react'

export default function Footer() {
  return (
<footer className="bg-[#040303] text-white pt-10 pb-5">

  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-serif font-bold text-[#FFCF62]">
        BITE HOUSE
      </h2>

      <p className="text-gray-400 text-sm mt-3 leading-6">
        Delicious food, bold flavors, and unforgettable bites.
        Made fresh for every craving.
      </p>

      <button className="mt-4 bg-[#FFCF62] text-[#040303] px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#E9B255] hover:scale-105 transition duration-300">
        Order Now
      </button>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-serif font-semibold text-white mb-4">
        Quick Links
      </h3>

      <ul className="space-y-2 text-sm text-gray-400">
        <li className="hover:text-[#FFCF62] cursor-pointer transition">
          Home
        </li>
        <li className="hover:text-[#FFCF62] cursor-pointer transition">
          Menu
        </li>
        <li className="hover:text-[#FFCF62] cursor-pointer transition">
          About Us
        </li>
        <li className="hover:text-[#FFCF62] cursor-pointer transition">
          Contact
        </li>
      </ul>
    </div>

    {/* Opening Hours */}
    <div>
      <h3 className="text-lg font-serif font-semibold text-white mb-4">
        Opening Hours
      </h3>

      <p className="text-gray-400 text-sm mb-2">
        Monday - Friday
        <span className="block text-[#FFCF62]">
          11:00 AM - 11:00 PM
        </span>
      </p>

      <p className="text-gray-400 text-sm">
        Saturday - Sunday
        <span className="block text-[#FFCF62]">
          12:00 PM - 12:00 AM
        </span>
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-serif font-semibold text-white mb-4">
        Contact Us
      </h3>

      <p className="text-gray-400 text-sm mb-3">
        📍 Gujranwala, Pakistan
      </p>

      <p className="text-gray-400 text-sm mb-3">
        📞 +92 300 1234567
      </p>

      <p className="text-gray-400 text-sm">
        ✉️ hello@bitehouse.com
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mt-5">
        <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center text-[#FFCF62] hover:bg-[#FFCF62] hover:text-[#040303] transition cursor-pointer">
          f
        </div>

        <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center text-[#FFCF62] hover:bg-[#FFCF62] hover:text-[#040303] transition cursor-pointer">
          ig
        </div>

        <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center text-[#FFCF62] hover:bg-[#FFCF62] hover:text-[#040303] transition cursor-pointer">
          X
        </div>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-[#222222] mt-8 pt-4 text-center">

    <p className="text-gray-500 text-xs">
      © 2026 Bite House. All Rights Reserved.
    </p>

    <p className="text-gray-600 text-xs mt-1">
      Crafted with <span className='text-amber-400'>FA Pixels</span> for food lovers.
    </p>

  </div>

</footer>


  )
}
