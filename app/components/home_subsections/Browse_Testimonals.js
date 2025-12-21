"use client";
import { assets } from "@/app/assets/assets";
import { testimonials } from "@/app/data/Data";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Browse_Testimonals = () => {
  const [index, setIndex] = useState(0);

  // Responsive cards count
  const cardsPerView =
    typeof window !== "undefined"
      ? window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 768
        ? 2
        : 1
      : 3;

  const maxIndex = testimonials.length - cardsPerView;

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="my-12 flex flex-col items-center px-4 md:px-0">
      {/* Browse Dress Style */}
      <div className="bg-[#f0f0f0] px-6 md:px-12 py-12 md:py-24 w-full md:w-[90%] rounded-[40px]">
        <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold heading text-center mb-12">
          BROWSE BY DRESS STYLE
        </h1>

        {/* 1st Row Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {/* Casual */}
          <div className="w-full md:w-[407px] h-[220px] md:h-[289px] relative rounded-[20px] overflow-hidden bg-white">
            <Image
              src={assets.casual}
              alt="Casual"
              fill
              className="object-cover"
            />
            <h1 className="absolute top-4 md:top-6 left-4 md:left-6 text-2xl md:text-[36px] font-bold text-black z-10">
              Casual
            </h1>
          </div>

          {/* Formal */}
          <div className="w-full md:w-[684px] h-[220px] md:h-[289px] relative rounded-[20px] overflow-hidden bg-white">
            <Image
              src={assets.formal}
              alt="Formal"
              fill
              className="object-cover"
            />
            <h1 className="absolute top-4 md:top-6 left-4 md:left-6 text-2xl md:text-[36px] font-bold text-black z-10">
              Formal
            </h1>
          </div>
        </div>

        {/* 2nd Row Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-10 justify-center">
          {/* Party */}
          <div className="w-full md:w-[684px] h-[220px] md:h-[289px] relative rounded-[20px] overflow-hidden bg-white">
            <Image
              src={assets.party}
              alt="Party"
              fill
              className="object-cover"
            />
            <h1 className="absolute top-4 md:top-6 left-4 md:left-6 text-2xl md:text-[36px] font-bold text-black z-10">
              Party
            </h1>
          </div>

          {/* Gym */}
          <div className="w-full md:w-[407px] h-[220px] md:h-[289px] relative rounded-[20px] overflow-hidden bg-white">
            <Image src={assets.gym} alt="Gym" fill className="object-cover" />
            <h1 className="absolute top-4 md:top-6 left-4 md:left-6 text-2xl md:text-[36px] font-bold text-black z-10">
              Gym
            </h1>
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <div className="my-24 w-full overflow-hidden">
        {/* Title + Buttons */}
        <div className="flex items-center justify-between px-6 md:px-12 mb-10">
          <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold heading">
            OUR HAPPY CUSTOMERS
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="text-4xl cursor-pointer disabled:opacity-30"
              disabled={index === 0}
            >
              <GoArrowLeft />
            </button>

            <button
              onClick={handleNext}
              className="text-4xl cursor-pointer disabled:opacity-30"
              disabled={index >= maxIndex}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 420}px)`,
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[320px] sm:min-w-[360px] md:min-w-[400px] h-[239px] bg-white border border-[#ccc] py-8 px-7 rounded-[20px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-3">
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

                {/* Name */}
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-bold text-[20px]">{testimonial.name}</h1>
                  <span className="bg-[#01AB31] flex items-center justify-center h-6 w-6 rounded-full text-white text-sm">
                    ✓
                  </span>
                </div>

                {/* Description */}
                <p className="text-[16px] text-gray-500 leading-relaxed">
                  “{testimonial.description}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse_Testimonals;
