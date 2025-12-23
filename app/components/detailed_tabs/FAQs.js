"use client";
import { faqs } from "@/app/data/Data";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[24px] sm:text-[28px] font-bold">FAQs</h1>
      </div>

      <div className="space-y-0 border border-border rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={clsx(
              "border-b border-border last:border-b-0",
              openIndex === index ? "bg-muted/30" : "bg-card"
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="text-lg font-semibold text-foreground pr-4 text-balance">
                {faq.question}
              </span>
              <ChevronDown
                className={clsx(
                  "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <div
              className={clsx(
                "grid transition-all duration-200 ease-in-out",
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
