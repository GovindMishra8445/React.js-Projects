import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const pulses = [
  { img: "/pulses/pulse_pack-1.png", name: "Chana Dal", rating: 1 },
  { img: "/pulses/pulse_pack-2.png", name: "Moong Dal", rating: 1 },
  { img: "/pulses/pulse_pack-3.png", name: "Masoor Dal", rating: 1 },
  { img: "/pulses/pulse_pack-4.png", name: "Toor Dal (Arhar)", rating: 1 },
  { img: "/pulses/pulse_pack-5.png", name: "Urad Dal", rating: 1 },
  { img: "/pulses/pulse_pack-6.png", name: "Kabuli Chana (White)", rating: 1 },
  { img: "/pulses/pulse_pack-7.png", name: "Black Chana", rating: 1 },
  { img: "/pulses/pulse_pack-8.png", name: "Green Moong Whole", rating: 1 },
  { img: "/pulses/pulse_pack-9.png", name: "Rajma (Kidney Beans)", rating: 1 },
  { img: "/pulses/pulse_pack-10.png", name: "Lobia (Black Eyed Peas)", rating: 1 },
];

const CARD_WIDTH = 320;
const CARDS_PER_VIEW = 4;

export default function NutritiousPulses() {
  const [index, setIndex] = useState(0);

  const maxIndex = pulses.length - CARDS_PER_VIEW;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="md:text-4xl md:text-center w-full text-xl font-bold text-[#7a1c1c] font-serif">
            Nutritious Pulses – Naturally Protein-Rich
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl hover:bg-[#7a1c1c] disabled:opacity-50"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={index === maxIndex}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl hover:bg-[#7a1c1c] disabled:opacity-50"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
              width: `${pulses.length * CARD_WIDTH}px`,
            }}
          >
            {pulses.map((pulse, idx) => (
              <div
                key={idx}
                className="w-[320px] h-[400px] bg-white border border-[#a05a1c] rounded-xl p-6 flex-shrink-0 mx-2 flex flex-col items-center relative transition-transform hover:scale-105"
              >
                <span className="absolute top-3 left-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                  20% Off
                </span>
                <img
                  src={pulse.img}
                  alt={pulse.name}
                  className="w-40 h-64 object-contain mb-2"
                  draggable={false}
                />
                <div className="text-lg font-semibold text-left w-full mb-1 uppercase">
                  {pulse.name}
                </div>
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
                  <span className="ml-2 text-xs text-gray-600">(1)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
