import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <div className="w-full px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-black px-8 py-10 md:px-16 md:py-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          {/* Left side - Heading */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
              STAY UPTO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
          </div>

          {/* Right side - Form */}
          <div className="w-full space-y-3 lg:w-auto lg:min-w-[350px]">
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-full border-0 bg-white pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <button className="h-12 w-full rounded-full bg-white text-sm font-medium text-black hover:bg-gray-100 cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
