import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const pulsesImages = [
  "/cate-1.png",
  "/pulses-2.png",
  "/pulses-3.png",
  "/pulses/pulses-4.png",
  "/pulses/pulses-5.png",
  "/pulses/pulses-6.png",
  "/pulses/pulses-7.png",
  "/pulses/pulses-8.png",
  "/pulses/pulses-9.png",
  "/pulses/pulses-10.png",
];

const CARDS_PER_VIEW = 6;
const CARD_WIDTH = 224 + 32; // w-56 (224px) + gap-8 (32px)

export default function DailyEssentialsPulses() {
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = pulsesImages.length - CARDS_PER_VIEW;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="py-12" style={{ background: "#f3cfa2" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h2
            className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]"
            style={{
              color: "#7a1c1c",
              fontFamily: "serif",
              lineHeight: 1.1,
            }}
          >
            Daily Essentials — Vantara’s Premium Pulses
          </h2>
          <div className="flex relative md:-right-10 gap-3">
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

        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * CARD_WIDTH}px)`,
              width: `${pulsesImages.length * CARD_WIDTH}px`,
            }}
          >
            {pulsesImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-56 h-80 rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-105"
                style={{ background: "#f3cfa2" }}
              >
                <img
                  src={img}
                  alt={`Vantara Pulses ${idx + 1}`}
                  className="object-contain w-full h-full rounded-xl"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
