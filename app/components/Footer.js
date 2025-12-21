import Link from "next/link";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F0F0F0] pt-16 pb-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-300">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">SHOP.CO</h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white" fill="white" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-6">COMPANY</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-6">HELP</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ Links */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-6">FAQ</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-6">
                RESOURCES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
            <p className="text-gray-600 text-sm">
              Shop.co © 2025, All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path d="M18.5 10.5h11v11h-11z" fill="#FF5F00" />
                  <path
                    d="M19.5 16c0-2.2 1-4.2 2.5-5.5-2.5-2-6-1.5-8 1s-1.5 6 1 8c1.5 1.2 3.5 1.5 5.5.8v-4.3c-1-.5-1.5-1.5-1.5-2.5-.5-1.5.5-3 2-3.5.5 0 1 0 1.5.2v5.8z"
                    fill="#EB001B"
                  />
                  <path
                    d="M30.5 16c0 3.5-2.8 6.3-6.3 6.3-.8 0-1.5-.2-2.2-.5 2.5-2 3-5.5 1-8-.5-.8-1.2-1.5-2-2 2.5-2 6-1.5 8 1 1.2 1.5 1.8 3.5 1.5 5.2z"
                    fill="#F79E1B"
                  />
                </svg>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#00579F" />
                  <text
                    x="50%"
                    y="55%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    VISA
                  </text>
                </svg>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path
                    d="M20 10h-4l-4 12h3l.7-2h4.6l.7 2h3.2L20 10zm-1.5 7.5h-3l1.5-4.5 1.5 4.5z"
                    fill="#139AD6"
                  />
                  <path
                    d="M28 10h3v12h-3V10zm9 0h-3l-3 6v-6h-3v12h3v-6l3 6h3l-4-6 4-6z"
                    fill="#139AD6"
                  />
                  <text
                    x="22"
                    y="20"
                    fill="#139AD6"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    PayPal
                  </text>
                </svg>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="black" />
                  <path
                    d="M24 12c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                    fill="white"
                  />
                  <path
                    d="M24 13.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="w-8 h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#4285F4"
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    G
                  </text>
                  <text
                    x="50%"
                    y="65%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#888"
                    fontSize="6"
                    fontFamily="Arial, sans-serif"
                  >
                    Pay
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
