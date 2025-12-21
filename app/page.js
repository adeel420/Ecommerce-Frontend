"use client";
import Arrivals_Selling from "./components/home_subsections/Arrivals_Selling";
import Browse_Testimonals from "./components/home_subsections/Browse_Testimonals";
import Hero_Section from "./components/home_subsections/Hero_Section";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero_Section />
      <Arrivals_Selling />
      <Browse_Testimonals />
    </div>
  );
}
