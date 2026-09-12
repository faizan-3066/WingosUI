import React from 'react'

export default function Customer() {
  return (
   <div className="bg-[#F3F0E9] w-full px-6 py-14">

  {/* Section Heading */}
  <div className="text-center mb-10">

    <p className="text-sm tracking-widest text-[#E9B255] font-semibold font-sans">
      OUR BEST SELLERS
    </p>

    <h2 className="text-4xl font-bold text-gray-800 font-serif mt-2">
      Customer Favorites
    </h2>

    <p className="font-sans text-gray-600 mt-2">
      Handpicked items that keep our customers coming back
    </p>

  </div>


  {/* Cards */}
  <div className="max-w-6xl mx-auto flex justify-center gap-7 flex-wrap">


    {/* Pizza Card */}
    <div className="w-56 bg-[#F6F3ED] rounded-2xl border border-gray-200
                    p-4 shadow-md hover:scale-105 hover:shadow-xl
                    transition duration-500">

      <div className="bg-white rounded-xl p-2">
        <img
          src="/image/pizza.png"
          alt="Pepperoni Pizza"
          className="w-36 h-32 object-contain mx-auto"
        />
      </div>

      <div className="text-center mt-4">

        <h3 className="text-gray-800 text-lg font-serif font-bold">
          Pepperoni Pizza
        </h3>

        <p className="text-gray-500 text-xs font-sans mt-2 h-8">
          Loaded with cheese and pepperoni
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-3">
          $8.99
        </h4>

        <button
          className="mt-4 bg-[#E9B255] text-black w-full py-2
                     rounded-full font-semibold
                     hover:bg-black hover:text-[#E9B255]
                     transition duration-300"
        >
          Order Now
        </button>

      </div>
    </div>


    {/* Burger Card */}
    <div className="w-56 bg-[#F6F3ED] rounded-2xl border border-gray-200
                    p-4 shadow-md hover:scale-105 hover:shadow-xl
                    transition duration-500">

      <div className="bg-white rounded-xl p-2">
        <img
          src="/image/burger.png"
          alt="Classic Beef Burger"
          className="w-36 h-32 object-contain mx-auto"
        />
      </div>

      <div className="text-center mt-4">

        <h3 className="text-gray-800 text-lg font-serif font-bold">
          Classic Beef Burger
        </h3>

        <p className="text-gray-500 text-xs font-sans mt-2 h-8">
          Juicy beef, fresh veggies & special sauce
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-3">
          $7.99
        </h4>

        <button
          className="mt-4 bg-[#E9B255] text-black w-full py-2
                     rounded-full font-semibold
                     hover:bg-black hover:text-[#E9B255]
                     transition duration-300"
        >
          Order Now
        </button>

      </div>
    </div>


    {/* Fries Card */}
    <div className="w-56 bg-[#F6F3ED] rounded-2xl border border-gray-200
                    p-4 shadow-md hover:scale-105 hover:shadow-xl
                    transition duration-500">

      <div className="bg-white rounded-xl p-2">
        <img
          src="/image/fries.png"
          alt="Loaded Fries"
          className="w-36 h-32 object-contain mx-auto"
        />
      </div>

      <div className="text-center mt-4">

        <h3 className="text-gray-800 text-lg font-serif font-bold">
          Loaded Fries
        </h3>

        <p className="text-gray-500 text-xs font-sans mt-2 h-8">
          Crispy fries with cheese & delicious sauces
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-3">
          $5.99
        </h4>

        <button
          className="mt-4 bg-[#E9B255] text-black w-full py-2
                     rounded-full font-semibold
                     hover:bg-black hover:text-[#E9B255]
                     transition duration-300"
        >
          Order Now
        </button>

      </div>
    </div>


    {/* Chicken Wings Card */}
    <div className="w-56 bg-[#F6F3ED] rounded-2xl border border-gray-200
                    p-4 shadow-md hover:scale-105 hover:shadow-xl
                    transition duration-500">

      <div className="bg-white rounded-xl p-2">
        <img
          src="/public/image/chicken.png"
          alt="Chicken Wings"
          className="w-36 h-32 object-contain mx-auto"
        />
      </div>

      <div className="text-center mt-4">

        <h3 className="text-gray-800 text-lg font-serif font-bold">
          Crispy Chicken Wings
        </h3>

        <p className="text-gray-500 text-xs font-sans mt-2 h-8">
          Crispy wings tossed in spicy signature sauce
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-3">
          $6.99
        </h4>

        <button
          className="mt-4 bg-[#E9B255] text-black w-full py-2
                     rounded-full font-semibold
                     hover:bg-black hover:text-[#E9B255]
                     transition duration-300"
        >
          Order Now
        </button>

      </div>
    </div>

  </div>


  {/* Bottom Button */}
  <div className="flex justify-center mt-12">

    <button
      className="border-2 border-[#E9B255] text-gray-800
                 px-8 py-3 rounded-full font-semibold
                 hover:bg-[#E9B255] hover:text-black
                 transition duration-300"
    >
      View Full Menu →
    </button>

  </div>

</div>
)
}
