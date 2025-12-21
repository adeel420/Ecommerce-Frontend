"use client";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" ">
      {/* Top Bar */}
      <p className="bg-black text-white p-2 text-center text-xs sm:text-sm font-thin">
        Sign up and get 20% off to your first order.{" "}
        <span className="font-bold underline cursor-pointer">Sign Up Now</span>
      </p>

      {/* Main Bar */}
      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 max-w-7xl mx-auto">
          {/* Logo */}
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl whitespace-nowrap">
            SHOP.CO
          </h1>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 text-sm font-normal">
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Shop
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              About
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Arrivals
            </Link>
          </nav>

          {/* Search bar - Desktop */}
          <form className="hidden md:flex items-center py-2 px-3 lg:px-4 rounded-full gap-2 bg-[#f0f0f0] flex-1 max-w-md">
            <IoIosSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent w-full text-sm outline-0"
            />
          </form>

          {/* Icons - Desktop */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <button className="md:hidden" aria-label="Search">
              <IoIosSearch className="text-xl lg:text-2xl cursor-pointer hover:text-gray-600 transition" />
            </button>
            <button aria-label="Cart">
              <IoCartOutline className="text-xl lg:text-2xl cursor-pointer hover:text-gray-600 transition" />
            </button>
            <button aria-label="User Account">
              <FaRegUserCircle className="text-xl lg:text-2xl cursor-pointer hover:text-gray-600 transition" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <form className="md:hidden mt-3 flex items-center py-2 px-3 rounded-full gap-2 bg-[#f0f0f0]">
          <IoIosSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent w-full text-sm outline-0"
          />
        </form>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              Home
            </Link>
            <Link
              href="#"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              About
            </Link>
            <Link
              href="#"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="py-2 hover:text-gray-600 transition text-sm font-normal"
            >
              Arrivals
            </Link>
            <div className="flex gap-4 pt-3 border-t border-gray-200 sm:hidden">
              <button aria-label="Cart">
                <IoCartOutline className="text-2xl cursor-pointer hover:text-gray-600 transition" />
              </button>
              <button aria-label="User Account">
                <FaRegUserCircle className="text-2xl cursor-pointer hover:text-gray-600 transition" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
