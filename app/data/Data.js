import { assets } from "@/app/assets/assets";

export const heroData = [
  { number: "200+", title: "International Brands" },
  { number: "2,000+", title: "High-Quality Products" },
  { number: "30,000+", title: "Happy Customers" },
];

export const heroLogos = [
  { img: assets.versage },
  { img: assets.zara },
  { img: assets.gucci },
  { img: assets.prada },
  { img: assets.klien },
];

export const products = [
  {
    id: 1,
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    oldPrice: 260,
    discount: "-20%",
    image: assets.shirt,
  },
  {
    id: 2,
    title: "SKINNY FIT JEANS",
    price: 120,
    oldPrice: 260,
    discount: "-20%",
    image: assets.jeans,
  },
  {
    id: 3,
    title: "CHECKERED SHIRT",
    price: 120,
    oldPrice: 260,
    discount: "-20%",
    image: assets.checkShirt,
  },
  {
    id: 4,
    title: "SLEEVE STRIPED T-SHIRT",
    price: 120,
    oldPrice: 260,
    discount: "-20%",
    image: assets.shirt2,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    description:
      "The quality of the clothes is amazing! Everything fits perfectly and feels premium. I’ll definitely be shopping here again.",
  },
  {
    name: "Michael Lee",
    description:
      "Fast delivery and excellent customer service. The designs are modern and exactly as shown on the website.",
  },
  {
    name: "Ayesha Khan",
    description:
      "I love how comfortable and stylish the outfits are. Perfect for both casual wear and special occasions.",
  },
  {
    name: "Daniel Roberts",
    description:
      "Great fabric, great prices, and great experience overall. This brand has become my go-to for everyday fashion.",
  },
  {
    name: "Emily Carter",
    description:
      "The attention to detail is impressive. Every piece I ordered exceeded my expectations.",
  },
  {
    name: "Rohan Mehta",
    description:
      "Trendy styles with excellent quality. I’ve received so many compliments wearing these outfits.",
  },
  {
    name: "Sophia Martinez",
    description:
      "Beautiful designs and very comfortable to wear. The sizing was accurate and the delivery was quick.",
  },
  {
    name: "James Wilson",
    description:
      "Absolutely worth it! Premium look and feel at a reasonable price. Highly recommended.",
  },
];

export const categories = [
  { id: 0, category: "Shirts" },
  { id: 1, category: "Pants" },
  { id: 2, category: "Trousers" },
  { id: 3, category: "Hoodie" },
  { id: 4, category: "Jeans" },
];

export const colors = [
  "#00FF00", // green
  "#FF0000", // red
  "#FFFF00", // yellow
  "#FFA500", // orange
  "#00FFFF", // cyan
  "#0000FF", // blue
  "#800080", // purple
  "#FF00FF", // pink
  "#FFFFFF", // white
  "#000000", // black
];

export const sizes = [
  { id: 0, size: "XX-Small" },
  { id: 1, size: "X-Small" },
  { id: 2, size: "Small" },
  { id: 3, size: "Medium" },
  { id: 4, size: "Large" },
  { id: 5, size: "X-Large" },
  { id: 6, size: "XX-Large" },
  { id: 7, size: "3X-Large" },
  { id: 8, size: "4X-Large" },
];

export const dressStyle = [
  { id: 0, style: "Casual" },
  { id: 1, style: "Formal" },
  { id: 2, style: "Party" },
  { id: 3, style: "Gym" },
];

export const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "You can return products within 30 days of receipt for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days depending on your location.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel your order within 24 hours of placing it.",
  },
];
