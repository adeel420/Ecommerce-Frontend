import { products } from "@/app/data/Data";
import Image from "next/image";
import React from "react";

const Arrivals_Selling = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold heading text-center mb-12">
        NEW ARRIVALS
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {products.map((item) => (
          <div key={item.id} className="w-full max-w-[295px]">
            {/* Image */}
            <div className="w-full h-[298px] bg-[#efeeec] rounded-[20px] flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={220}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-lg md:text-[18px] font-bold mt-4">
              {item.title}
            </h1>

            {/* Rating */}
            <div className="flex gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
                </svg>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl md:text-[24px] font-bold">
                ${item.price}
              </h3>
              <h3 className="text-xl md:text-[24px] text-gray-400 line-through font-bold">
                ${item.oldPrice}
              </h3>
              <span className="text-xs text-[#FF3333] bg-[#ffe9e8] px-3 py-1 rounded-full font-bold">
                {item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-[transparent] text-black border border-[#9A9A9A] cursor-pointer font-medium text-[16px] w-[218px] h-[52px] rounded-full mt-12 mx-auto block hover:bg-[black] hover:text-white transition-all transition-1s ">
        View All
      </button>

      {/* Hr */}
      <div className=" py-24 ">
        <hr className="text-[#9A9A9A] " />
      </div>

      {/* Top Selling */}
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold heading text-center mb-12">
        TOP SELLING
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {products.map((item) => (
          <div key={item.id} className="w-full max-w-[295px]">
            {/* Image */}
            <div className="w-full h-[298px] bg-[#efeeec] rounded-[20px] flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={220}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-lg md:text-[18px] font-bold mt-4">
              {item.title}
            </h1>

            {/* Rating */}
            <div className="flex gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
                </svg>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl md:text-[24px] font-bold">
                ${item.price}
              </h3>
              <h3 className="text-xl md:text-[24px] text-gray-400 line-through font-bold">
                ${item.oldPrice}
              </h3>
              <span className="text-xs text-[#FF3333] bg-[#ffe9e8] px-3 py-1 rounded-full font-bold">
                {item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-[transparent] text-black border border-[#9A9A9A] cursor-pointer font-medium text-[16px] w-[218px] h-[52px] rounded-full mt-12 mx-auto block hover:bg-[black] hover:text-white transition-all transition-1s ">
        View All
      </button>
    </div>
  );
};

export default Arrivals_Selling;
