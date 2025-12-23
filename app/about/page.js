import {
  Check,
  Users,
  Award,
  TrendingUp,
  Heart,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { assets } from "../assets/assets";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                Our Story
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                WE BELIEVE IN STYLE THAT SPEAKS
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Since 2000, SHOP.CO has been transforming the fashion landscape
                by bringing together the world's most iconic brands and emerging
                designers. We're more than just a store—we're a movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base">
                  Explore Our Collection
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base">
                  Our Impact
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <Image src={assets.team} alt="" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  International Brands
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  2,000+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  High-Quality Products
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  30,000+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Happy Customers
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  23+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[280px] sm:h-[350px] md:h-[450px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <Image src={assets.design} alt="" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Our Journey Started With A Vision
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                What began as a small boutique in 2000 has grown into a global
                fashion destination trusted by thousands. Our founders believed
                that everyone deserves access to exceptional style without
                compromise.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Today, we partner with over 200 international brands—from
                timeless classics like PRADA and GUCCI to innovative newcomers
                reshaping fashion. Every product is hand-selected for quality,
                style, and sustainability.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Curated collections from 200+ global brands
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-3">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Sustainable and ethical fashion practices
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-3">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Customer-first approach with free shipping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Mission & Vision
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                We're driven by a passion for fashion that empowers, inspires,
                and transforms.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black flex items-center justify-center mb-4 sm:mb-6">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To democratize fashion by making premium, sustainable
                    clothing accessible to everyone. We believe style should
                    never come at the cost of quality, ethics, or the
                    environment.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black flex items-center justify-center mb-4 sm:mb-6">
                    <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To become the world's most trusted fashion platform where
                    quality meets conscience. We envision a future where every
                    purchase contributes to a sustainable and equitable fashion
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              These principles guide everything we do, from sourcing products to
              serving our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-red-100 to-pink-100 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Passion
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We live and breathe fashion, bringing you the latest trends with
                genuine enthusiasm.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Integrity
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Transparency and honesty in every interaction, from pricing to
                product descriptions.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Innovation
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Constantly evolving to bring you the best shopping experience
                and newest styles.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Community
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Building a global family of fashion lovers who inspire and
                support each other.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Why Choose SHOP.CO
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                We're committed to delivering an unparalleled shopping
                experience.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Fast Shipping
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Free express delivery on orders over $100. Get your style
                  delivered in 2-3 business days.
                </p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                  <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Secure Payment
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Shop with confidence using our encrypted payment gateway
                  supporting all major cards.
                </p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 sm:col-span-2 lg:col-span-1">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                  <Award className="h-7 w-7 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Authentic Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Every product is verified authentic. 100% genuine brands, no
                  compromises.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
