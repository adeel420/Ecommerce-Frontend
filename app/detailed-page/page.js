"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { colors, sizes } from "../data/Data";
import { FiMinus, FiPlus } from "react-icons/fi";
import Product_Details from "../components/detailed_tabs/Product_Details";
import Rating_Reviews from "../components/detailed_tabs/Rating_Reviews";
import FAQs from "../components/detailed_tabs/FAQs";

const page = () => {
  const [selectedImg, setSelectedImg] = useState(assets.checkShirt);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTabs, setActiveTabs] = useState("Product Details");

  const handleSize = (id) => {
    setSelectedSize((prev) => (prev === id ? null : id));
  };
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <h1 className="text-[13px] sm:text-[16px] flex flex-wrap items-center gap-2 text-black font-normal">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-400">{">"}</span>
        <Link href="/shop" className="text-gray-500 hover:text-black">
          Shop
        </Link>
        <span className="text-gray-400">{">"}</span>
        <Link href="/" className="text-gray-500 hover:text-black">
          Mens
        </Link>
        <span className="text-gray-400">{">"}</span>
        <span className="text-black">T-Shirts</span>
      </h1>

      {/* Main */}
      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col-reverse md:w-[50%] sm:flex-row items-center gap-4">
          {/* Thumbnails */}
          <div className="flex sm:flex-col mt-4 md:mt-0 gap-2">
            {[assets.checkShirt, assets.shirt, assets.shirt2].map(
              (img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex items-center justify-center rounded-[20px] bg-[#efeeec]
            h-[90px] w-[90px] sm:h-[167px] sm:w-[152px] ${
              selectedImg === img ? "border border-1" : ""
            }`}
                  onClick={() => setSelectedImg(img)}
                >
                  <Image
                    src={img}
                    alt="shirt"
                    width={140}
                    height={140}
                    className="object-contain rounded-[20px] "
                  />
                </div>
              )
            )}
          </div>

          {/* Main Image */}
          <div
            className="w-full max-w-[444px]
      h-[260px] sm:h-[360px] md:h-[528px]
      bg-[#efeeec] rounded-[20px] flex items-center justify-center"
          >
            {selectedImg && (
              <Image
                src={selectedImg}
                alt=""
                width={420}
                height={420}
                className="object-contain"
              />
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[50%]">
          <h1 className="font-bold text-[24px] sm:text-[32px] md:text-[40px]">
            One Life Graphic T-shirt
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex gap-1 my-2">
              {[...Array(4)].map((_, i) => (
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
            <p className="text-[14px] sm:text-[16px] font-normal">
              4/<span className="text-gray-400">5</span>
            </p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-[22px] sm:text-[32px] font-bold">$200</h3>
            <h3 className="text-[22px] sm:text-[32px] text-gray-400 line-through font-bold">
              $500
            </h3>
            <span className="text-[14px] sm:text-[16px] w-[72px] h-[34px] flex items-center justify-center text-[#FF3333] bg-[#ffe9e8] rounded-full font-bold">
              -20%
            </span>
          </div>

          {/* Desc */}
          <p className="text-gray-500 w-full md:w-[500px] text-[14px] sm:text-[16px] mt-3">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <hr className="my-5 border-[#ccc]" />

          {/* Colors */}
          <p className="text-gray-500 text-[14px] sm:text-[16px]">
            Select Colors
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            {colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                onClick={() => setSelectedColor(color)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <span
                    className={`font-bold ${
                      color === "#FFFFFF" ? "text-black" : "text-white"
                    }`}
                  >
                    ✓
                  </span>
                )}
              </div>
            ))}
          </div>

          <hr className="my-5 border-[#ccc]" />

          {/* Sizes */}
          <p className="text-gray-500 text-[14px] sm:text-[16px]">
            Choose Size
          </p>

          <div className="flex gap-2 flex-wrap mt-3">
            {sizes.slice(2, 6).map((size) => (
              <h1
                key={size.id}
                onClick={() => handleSize(size.id)}
                className={`text-[13px] sm:text-[14px]
            py-[14px] sm:py-[20px]
            w-[72px] sm:w-[98px]
            h-[36px] sm:h-[39px]
            rounded-[62px] flex items-center justify-center cursor-pointer
            ${
              selectedSize === size.id
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-gray-500"
            }`}
              >
                {size.size}
              </h1>
            ))}
          </div>

          <hr className="my-5 border-[#ccc]" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div
              className="bg-[#F0F0F0]
        w-[140px] sm:w-[170px]
        h-[40px] sm:h-[52px]
        rounded-[62px]
        flex items-center justify-between px-3"
            >
              <button
                className="flex items-center justify-center hover:bg-black hover:text-white
            w-[32px] sm:w-[40px]
            h-[32px] sm:h-[40px] cursor-pointer
            rounded-full"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <FiMinus />
              </button>

              <p className="font-medium">{quantity}</p>

              <button
                className="flex items-center justify-center hover:bg-black hover:text-white
            w-[32px] sm:w-[40px]
            h-[32px] sm:h-[40px] cursor-pointer
            rounded-full"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FiPlus />
              </button>
            </div>

            <button
              className="bg-black text-white
        w-full sm:w-[300px]
        h-[40px] sm:h-[52px]
        rounded-[62px]
        flex items-center justify-center text-[14px] cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center w-full mt-16 ">
        {["Product Details", "Rating & Reviews", "FAQs"].map((btn, index) => (
          <button
            className={`text-[16px] md:text-[20px] w-full pb-3 cursor-pointer ${
              activeTabs === btn
                ? "border-b border-b-2 border-b-[black] text-[black] font-bold"
                : "text-[gray] font-normal"
            }`}
            onClick={() => setActiveTabs(btn)}
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* tabs content */}
      <div className="mt-6 ">
        {activeTabs === "Product Details" && <Product_Details />}
        {activeTabs === "Rating & Reviews" && <Rating_Reviews />}
        {activeTabs === "FAQs" && <FAQs />}
      </div>
    </div>
  );
};

export default page;
