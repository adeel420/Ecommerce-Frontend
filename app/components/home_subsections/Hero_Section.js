"use client";
import Image from "next/image";
import { heroData, heroLogos } from "../../data/Data";
import { assets } from "@/app/assets/assets";

const Hero_Section = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#f2f0f1] px-4 sm:px-6 md:px-12 py-12 md:py-20 min-h-[80vh] flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto md:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white px-10 py-3 rounded-full text-sm hover:opacity-90 transition">
              Shop Now
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6">
            {heroData.map((data, index) => (
              <div
                key={index}
                className={`px-6 py-3 text-center md:text-left ${
                  index !== heroData.length - 1
                    ? "md:border-r border-gray-300"
                    : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {data.number}
                </h2>
                <p className="text-sm text-gray-500">{data.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={assets.hero}
            alt="Hero Image"
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* ================= LOGO MARQUEE ================= */}
      <section className="bg-black py-8 overflow-hidden">
        <div className="relative w-full">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...heroLogos, ...heroLogos].map((logo, index) => (
              <div key={index} className="mx-6 sm:mx-10 flex items-center">
                <Image
                  src={logo.img}
                  alt="Brand Logo"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_Section;
