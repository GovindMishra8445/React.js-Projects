import React, { useState } from "react";
import { FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getSingleImageUrl } from "../api/imageApi";

const pulses = [
  { img: "/pulses/pulses_bowl-1.png", name: "Chana Dal", discount: "20% Off", rating: 1, soldBy: "Silvary", newPrice: "$489.00", oldPrice: "$889.00" },
  { img: "/pulses/pulses_bowl-2.png", name: "Moong Dal", discount: "23% Off", rating: 1, soldBy: "Hasbi", newPrice: "$569.00", oldPrice: "$869.00" },
  { img: "/pulses/pulses_bowl-3.png", name: "Masoor Dal", discount: "18% Off", rating: 2, soldBy: "Hasbi", newPrice: "$40.35", oldPrice: "$49.13" },
  { img: "/pulses/pulses_bowl-4.png", name: "Toor Dal (Arhar)", discount: "15% Off", rating: 0, soldBy: "Silvary", newPrice: "$897.00", oldPrice: "$1000.00" },
  { img: "/pulses/pulses_bowl-5.png", name: "Urad Dal", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$529.00", oldPrice: "$829.00" },
  { img: "/pulses/pulses_bowl-6.png", name: "Kabuli Chana", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$629.00", oldPrice: "$829.00" },
  { img: "/pulses/pulses_bowl-7.png", name: "Black Chana", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$629.00", oldPrice: "$829.00" },
  { img: "/pulses/pulses_bowl-8.png", name: "Green Moong Whole", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$629.00", oldPrice: "$829.00" },
  { img: "/pulses/pulses_bowl-9.png", name: "Rajma", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$629.00", oldPrice: "$829.00" },
  { img: "/pulses/pulses_bowl-10.png", name: "Lobia", discount: "15% Off", rating: 0, soldBy: "Sobnil", newPrice: "$629.00", oldPrice: "$829.00" },
];

const CARDS_PER_VIEW = 4;
const CARD_WIDTH = 288 + 32; // w-72 + gap-8

export default function MostLovedPulses() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = pulses.length - CARDS_PER_VIEW;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section
      className="py-12"
      style={{
        background: "#fff",
        backgroundImage: "url('/spices/bg-pattern.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Ribbon */}
        <div className="md:flex items-center mb-8">
          <div className="relative">
            <div
              className="md:pl-6 pl-2 md:pr-10 py-2 md:text-2xl font-medium text-white"
              style={{
                background: "#a05a1c",
                borderTopLeftRadius: "4px",
                borderBottomRightRadius: "24px",
                fontFamily: "Quicksand, Arial, serif",
                minWidth: "320px",
              }}
            >
              Most Loved by Our Customers
            </div>
            <div
              className="mt-2"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 0,
                height: 0,
                borderTop: "32px solid #a05a1c",
                borderRight: "32px solid transparent",
              }}
            />
          </div>
          <div className="flex-1 border-b border-[#a05a1c] ml-4"></div>
          <div className="flex gap-3 mt-3 ml-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c] disabled:opacity-50"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex === maxIndex}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c] disabled:opacity-50"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Smooth Scroll Cards */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * CARD_WIDTH}px)`,
              width: `${pulses.length * CARD_WIDTH}px`,
            }}
          >
            {pulses.map((pulse, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 bg-white border border-[#a05a1c] rounded-xl p-6 flex flex-col items-center relative transition-transform duration-200 hover:scale-105"
              >
                <span className="absolute top-3 left-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                  {pulse.discount}
                </span>
                <img
                  src={getSingleImageUrl(pulse.img)}
                  alt={pulse.name}
                  className="w-40 h-40 object-contain mb-2"
                  draggable={false}
                />
                <div className="text-lg font-semibold text-left w-full mb-1">{pulse.name}</div>
                <div className="flex items-center justify-start w-full mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < pulse.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">({pulse.rating})</span>
                </div>
                <div className="text-xs text-gray-500 mb-1 w-full text-left">
                  Sold By <span className="font-medium text-[#7a1c1c]">{pulse.soldBy}</span>
                </div>
                <div className="flex items-center gap-2 mb-2 w-full">
                  <span className="text-lg font-bold text-[#7a1c1c]">{pulse.newPrice}</span>
                  <span className="text-sm line-through text-red-600">{pulse.oldPrice}</span>
                </div>
                <div className="flex gap-3 w-full mt-2">
                  <button className="flex-1 bg-[#a05a1c] text-white px-4 py-2 rounded transition hover:bg-[#7a1c1c]">
                    Add To Cart
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5e7d7] text-[#a05a1c] hover:bg-[#a05a1c] hover:text-white transition">
                    <FaHeart />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5e7d7] text-[#a05a1c] hover:bg-[#a05a1c] hover:text-white transition">
                    <FaEye />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
