import React from "react";

const Product_Details = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto text-left">
      <div className="space-y-6">
        <div>
          <h3 className="text-[18px] font-semibold mb-2">Description</h3>
          <p className="text-gray-500 text-[16px] leading-7">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style for
            daily wear.
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-2">Material & Care</h3>
          <ul className="list-disc list-inside text-gray-500 text-[16px] space-y-1">
            <li>100% Premium Cotton</li>
            <li>Soft & breathable fabric</li>
            <li>Machine wash cold</li>
            <li>Do not bleach</li>
            <li>Iron inside out</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-2">Size & Fit</h3>
          <ul className="list-disc list-inside text-gray-500 text-[16px] space-y-1">
            <li>Regular fit</li>
            <li>True to size</li>
            <li>Model is 6ft wearing size L</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold mb-2">Shipping & Returns</h3>
          <ul className="list-disc list-inside text-gray-500 text-[16px] space-y-1">
            <li>Free shipping on all orders</li>
            <li>Delivery within 3–5 business days</li>
            <li>Easy 7-day return & exchange</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
