"use client";
import { testimonials } from "@/app/data/Data";
import React, { useState } from "react";
import Reviews_Modals from "../modals/Reviews_Modals";

const Rating_Reviews = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <h1 className="text-[20px] sm:text-[24px] font-bold">All Reviews</h1>
          <p className="text-[14px] sm:text-[16px] font-normal text-gray-500">
            (251)
          </p>
        </div>

        <button
          className="bg-black text-white
        w-full sm:w-[200px]
        h-[40px] sm:h-[52px]
        rounded-[62px]
        flex items-center justify-center
        text-[13px] sm:text-[14px]
        cursor-pointer"
          onClick={() => setOpenPopup(true)}
        >
          Write a Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {testimonials.slice(0, 4).map((testimonial, i) => (
          <div
            key={i}
            className="w-full
            min-h-[220px]
            bg-white
            border border-[#ccc]
            py-6 sm:py-8
            px-5 sm:px-7
            rounded-[20px]"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                >
                  <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
                </svg>
              ))}
            </div>

            {/* Name */}
            <div className="flex items-center gap-2 mb-2">
              <h1 className="font-bold text-[16px] sm:text-[20px]">
                {testimonial.name}
              </h1>
              <span
                className="bg-[#01AB31] flex items-center justify-center
              h-5 w-5 sm:h-6 sm:w-6
              rounded-full text-white text-xs sm:text-sm"
              >
                ✓
              </span>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-gray-500 leading-relaxed">
              “{testimonial.description}”
            </p>
          </div>
        ))}
      </div>

      {/* View All */}
      <button
        className="bg-transparent text-black
      border border-[#9A9A9A]
      font-medium
      text-[14px] sm:text-[16px]
      w-full sm:w-[218px]
      h-[44px] sm:h-[52px]
      rounded-full
      mt-10 sm:mt-12
      mx-auto block
      hover:bg-black hover:text-white
      transition-all duration-300"
      >
        View All
      </button>

      {openPopup && <Reviews_Modals setOpenPopup={setOpenPopup} />}
    </div>
  );
};

export default Rating_Reviews;
