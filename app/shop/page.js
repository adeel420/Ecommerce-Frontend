"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { categories, colors, dressStyle, products, sizes } from "../data/Data";
import { Slider } from "antd";

const page = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [openDressStyleId, setDressStyleId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("");

  const handleToggle = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  const handleToggleStyle = (id) => {
    setDressStyleId((prev) => (prev === id ? null : id));
  };

  const handleSize = (id) => {
    setSelectedSize((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <h1 className="text-[14px] sm:text-[16px] flex flex-wrap items-center gap-2 text-black font-normal">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-400">{">"}</span>
        <span className="text-black">Shop</span>
      </h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[20%] mt-6 lg:mt-12 p-4 border border-[#ccc] rounded-[20px]">
          {/* Filters */}
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] font-bold">Filters</h1>
            <Image src={assets.filter} alt="" />
          </div>

          <hr className="my-3 border-[#ccc]" />

          {/* Categories */}
          <ul className="flex flex-col gap-2">
            {categories.map((item) => (
              <li
                key={item.id}
                className="list-none text-[15px] sm:text-[16px] text-gray-500"
              >
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => handleToggle(item.id)}
                >
                  {item.category}
                  {openCategoryId === item.id ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </div>

                {openCategoryId === item.id && (
                  <div className="ml-4 mt-2 text-sm text-gray-400">
                    Total: 0
                  </div>
                )}
              </li>
            ))}
          </ul>

          <hr className="my-3 border-[#ccc]" />

          {/* Price */}
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] font-bold">Price</h1>
            <MdOutlineKeyboardArrowUp />
          </div>

          <Slider range step={10} defaultValue={[20, 50]} />

          <hr className="my-4 border-[#ccc]" />

          {/* Colors */}
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] font-bold">Colors</h1>
            <MdOutlineKeyboardArrowUp />
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            {colors.map((color, index) => (
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

          <hr className="my-4 border-[#ccc]" />

          {/* Sizes */}
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] font-bold">Size</h1>
            <MdOutlineKeyboardArrowUp />
          </div>

          <div className="flex gap-2 flex-wrap mt-3">
            {sizes.map((size) => (
              <h1
                key={size.id}
                onClick={() => handleSize(size.id)}
                className={`text-[13px] sm:text-[14px] py-[16px] sm:py-[20px] px-[8px] sm:px-[10px]
                  w-[80px] sm:w-[98px] h-[36px] sm:h-[39px]
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

          <hr className="my-4 border-[#ccc]" />

          {/* Dress Style */}
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] font-bold">
              Dress Style
            </h1>
            <MdOutlineKeyboardArrowUp />
          </div>

          <ul className="flex flex-col mt-3 gap-2">
            {dressStyle.map((item) => (
              <li
                key={item.id}
                className="list-none text-[15px] sm:text-[16px] text-gray-500"
              >
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => handleToggleStyle(item.id)}
                >
                  {item.style}
                  {openDressStyleId === item.id ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </div>

                {openDressStyleId === item.id && (
                  <div className="ml-4 mt-2 text-sm text-gray-400">
                    Total: 0
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button className="bg-black text-white h-[48px] w-full mt-4 text-[14px] font-medium rounded-[62px]">
            Apply Filter
          </button>
        </div>

        {/* Products */}
        <div className="w-full lg:w-[80%] px-2 sm:px-4 md:px-6 lg:px-8 mt-6 lg:mt-12">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
            All Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[260px] sm:max-w-[295px]"
              >
                <div className="w-full h-[220px] sm:h-[260px] md:h-[298px] bg-[#efeeec] rounded-[20px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>

                <h1 className="text-[16px] sm:text-[18px] font-bold mt-4">
                  {item.title}
                </h1>

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

                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-[20px] sm:text-[24px] font-bold">
                    ${item.price}
                  </h3>
                  <h3 className="text-[20px] sm:text-[24px] text-gray-400 line-through font-bold">
                    ${item.oldPrice}
                  </h3>
                  <span className="text-xs text-[#FF3333] bg-[#ffe9e8] px-3 py-1 rounded-full font-bold">
                    {item.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[260px] sm:max-w-[295px]"
              >
                <div className="w-full h-[220px] sm:h-[260px] md:h-[298px] bg-[#efeeec] rounded-[20px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>

                <h1 className="text-[16px] sm:text-[18px] font-bold mt-4">
                  {item.title}
                </h1>

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

                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-[20px] sm:text-[24px] font-bold">
                    ${item.price}
                  </h3>
                  <h3 className="text-[20px] sm:text-[24px] text-gray-400 line-through font-bold">
                    ${item.oldPrice}
                  </h3>
                  <span className="text-xs text-[#FF3333] bg-[#ffe9e8] px-3 py-1 rounded-full font-bold">
                    {item.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
