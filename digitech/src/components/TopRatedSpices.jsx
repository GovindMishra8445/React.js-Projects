import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const spices = [
  { img: "/spices/spice_pack-1.png", name: "Fennel Seeds", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-2.png", name: "Black Cardamom", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-3.png", name: "Red Chilly", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-4.png", name: "Cardamom", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-5.png", name: "White Mustard", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-6.png", name: "Pimento", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-4.png", name: "Cardamom", discount: "20% Off", rating: 1 },
  { img: "/spices/spice_pack-6.png", name: "Pimento", discount: "20% Off", rating: 1 },
];

const CARD_WIDTH = 288 + 32; // w-72 = 288px + gap-8 = 32px

export default function TopRatedSpices() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -CARD_WIDTH * 2 : CARD_WIDTH * 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-12"
      style={{
        background: "#fff",
        backgroundImage: "url('/src/assets/spices/bg-pattern.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading + Controls */}
        <div className="flex items-center justify-center mb-8">
          <h2
            className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]"
            style={{
              color: "#7a1c1c",
              fontFamily: "serif",
              lineHeight: 1.1,
            }}
          >
            Top-Rated Spices — Rich in Aroma & Quality
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 scroll overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          {spices.map((spice, idx) => (
            <div
              key={idx}
              className="group  flex-shrink-0 w-[267.75px] h-100 bg-white border border-[#8B0000] rounded-xl shadow-lg p-6   flex flex-col items-center relative"
            >
              <span className="absolute top-3 left-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                {spice.discount}
              </span>
              <img
                src={spice.img}
                alt={spice.name}
                className="w-full h-60 object-contain mb-4 transform transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="text-lg font-bold text-center mb-1 uppercase text-[#222] tracking-wide">
                {spice.name}
              </div>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < spice.rating ? "text-yellow-400" : "text-gray-300"
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
    </section>
  );
}
