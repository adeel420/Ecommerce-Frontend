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
import { categories, colors } from "../data/Data";
import { Slider } from "antd";

const page = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleToggle = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
  };
  return (
    <div className="py-12 px-6 ">
      {/* Header */}
      <h1 className="text-[16px] flex items-center gap-2 text-[black] font-normal ">
        <Link
          href={"/"}
          className="text-[gray] cursor-pointer hover:text-black "
        >
          Home
        </Link>
        <span className="text-[gray] ">{">"}</span>
        <span className="text-black ">Shop</span>
      </h1>

      {/* Main */}
      <div className="w-[20%] mt-12 p-4 border border-[#ccc] rounded-[20px] ">
        {/* Filters */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[20px] font-bold ">Filters</h1>
          <Image src={assets.filter} alt="" />
        </div>

        {/* hr */}
        <hr className="text-[#ccc] my-3 " />

        {/* Categories */}
        <ul className="flex flex-col gap-2">
          {categories.map((item) => (
            <li
              key={item.id}
              className="list-none text-[16px] text-gray-500 cursor-pointer"
            >
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
                onClick={() => handleToggle(item.id)}
              >
                {item.category}
                {openCategoryId === item.id ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowRight />
                )}
              </div>

              {/* Dropdown content */}
              {openCategoryId === item.id && (
                <div className="ml-4 mt-2 text-sm text-gray-400">Total: 0</div>
              )}
            </li>
          ))}
        </ul>

        {/* hr */}
        <hr className="text-[#ccc] my-3 " />

        {/* Title */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[20px] font-bold ">Price</h1>
          <MdOutlineKeyboardArrowUp />
        </div>

        {/* Slider */}
        <Slider
          range
          step={10}
          defaultValue={[20, 50]}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />

        {/* hr */}
        <hr className="text-[#ccc] my-3 mt-5 " />

        {/* Title */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[20px] font-bold ">Colors</h1>
          <MdOutlineKeyboardArrowUp />
        </div>

        {/* Colors */}
        <div className="flex flex-wrap gap-3 mt-3">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center`}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <span
                  className={`${
                    color === "#FFFFFF" ? "text-black" : "text-white"
                  } font-bold`}
                >
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>

        {/* hr */}
        <hr className="text-[#ccc] my-3 " />
      </div>
    </div>
  );
};

export default page;
