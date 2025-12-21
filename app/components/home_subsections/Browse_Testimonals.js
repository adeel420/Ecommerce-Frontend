import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

const Browse_Testimonals = () => {
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
    </div>
  );
};

export default Browse_Testimonals;
