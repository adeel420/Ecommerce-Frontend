"use client";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/Data";

export default function page() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            Contact Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            GET IN TOUCH
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            We'd love to hear from you. Our team is always here to help with any
            questions or concerns you may have.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Email Us</h3>
            <p className="text-sm text-gray-600 mb-3">
              Send us an email anytime
            </p>
            <a
              href="mailto:support@shop.co"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline break-all"
            >
              support@shop.co
            </a>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center mb-4">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-3">
              Mon-Fri from 8am to 5pm
            </p>
            <a
              href="tel:+1234567890"
              className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mb-4">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Visit Us</h3>
            <p className="text-sm text-gray-600 mb-3">
              Come say hello at our office
            </p>
            <p className="text-sm font-medium text-gray-700">
              123 Fashion Street, NY 10001
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">
              Working Hours
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Our standard business hours
            </p>
            <p className="text-sm font-medium text-gray-700">
              Mon-Fri: 8am - 5pm EST
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 sm:py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Visit our flagship store in the heart of New York City.
            </p>
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="mapGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#E0F2FE" />
                    <stop offset="100%" stopColor="#BAE6FD" />
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect
                  x="0"
                  y="0"
                  width="600"
                  height="400"
                  fill="url(#mapGradient)"
                />

                {/* Streets */}
                <line
                  x1="0"
                  y1="150"
                  x2="600"
                  y2="150"
                  stroke="#94A3B8"
                  strokeWidth="4"
                />
                <line
                  x1="0"
                  y1="250"
                  x2="600"
                  y2="250"
                  stroke="#94A3B8"
                  strokeWidth="4"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="400"
                  stroke="#94A3B8"
                  strokeWidth="4"
                />
                <line
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="400"
                  stroke="#94A3B8"
                  strokeWidth="4"
                />

                {/* Buildings */}
                <rect
                  x="220"
                  y="30"
                  width="160"
                  height="100"
                  fill="#64748B"
                  opacity="0.3"
                />
                <rect
                  x="420"
                  y="50"
                  width="140"
                  height="80"
                  fill="#64748B"
                  opacity="0.3"
                />
                <rect
                  x="30"
                  y="170"
                  width="150"
                  height="60"
                  fill="#64748B"
                  opacity="0.3"
                />
                <rect
                  x="420"
                  y="270"
                  width="150"
                  height="110"
                  fill="#64748B"
                  opacity="0.3"
                />

                {/* Main Store Building (highlighted) */}
                <rect
                  x="220"
                  y="170"
                  width="160"
                  height="60"
                  fill="#EF4444"
                  opacity="0.8"
                />
                <rect x="240" y="180" width="30" height="40" fill="#FEE2E2" />
                <rect x="280" y="180" width="30" height="40" fill="#FEE2E2" />
                <rect x="320" y="180" width="30" height="40" fill="#FEE2E2" />

                {/* Pin marker */}
                <g transform="translate(300, 140)">
                  <ellipse
                    cx="0"
                    cy="30"
                    rx="20"
                    ry="5"
                    fill="#991B1B"
                    opacity="0.3"
                  />
                  <path
                    d="M 0,-30 C -15,-30 -25,-15 -25,0 C -25,15 0,30 0,30 C 0,30 25,15 25,0 C 25,-15 15,-30 0,-30 Z"
                    fill="#DC2626"
                  />
                  <circle cx="0" cy="-5" r="8" fill="white" />
                </g>

                {/* Trees */}
                <circle cx="100" cy="100" r="15" fill="#10B981" opacity="0.6" />
                <rect x="95" y="115" width="10" height="20" fill="#92400E" />

                <circle cx="500" cy="200" r="15" fill="#10B981" opacity="0.6" />
                <rect x="495" y="215" width="10" height="20" fill="#92400E" />

                {/* Text */}
                <text
                  x="300"
                  y="360"
                  fontFamily="Arial, sans-serif"
                  fontSize="18"
                  fontWeight="bold"
                  fill="#1F2937"
                  textAnchor="middle"
                >
                  SHOP.CO Flagship Store
                </text>
                <text
                  x="300"
                  y="385"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  123 Fashion Street, New York, NY 10001
                </text>
              </svg>
            </div>
            <div className="mt-6 p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl">
              <h3 className="font-semibold text-lg sm:text-xl mb-4">
                Store Information
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Address:</strong> 123 Fashion Street, New York, NY
                    10001
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Phone:</strong> +1 (234) 567-890
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hours:</strong> Mon-Sat: 10am - 8pm, Sun: 11am - 6pm
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12 text-center leading-relaxed text-sm sm:text-base px-4">
              Find answers to common questions about our products, shipping, and
              services.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl sm:rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Our team is here to help. Reach out to us and we'll get back to you
            as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              Chat With Us
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base">
              View Help Center
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
