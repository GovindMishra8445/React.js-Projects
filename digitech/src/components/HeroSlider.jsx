import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft , ArrowRight, icons } from 'lucide-react';
const slides = [
  {
    img: "/slide1.jpg",
    alt: "Slide 1",
  },
  {
    img: "/slide2.jpg",
    alt: "Slide 2",
  },
  {
    img: "/slide3.jpg",
    alt: "Slide 3",
  },
  {
    img: "/slide4.jpg",
    alt: "Slide 4",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full bg-[#fff8f3] px-4 py-4">
      <div className="relative max-w-full mx-auto rounded-3xl overflow-hidden h-72 md:h-[420px] group">

        {/* Slides */}
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.img}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === current ? "opacity-100 " : "opacity-0 z-0"
            }`}
            draggable={false}
          />
        ))}

        {/* Left Arrow - Only on Hover */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#88070a] cursor-pointer text-white rounded-full w-10 h-10 flex md:w-12 md:h-12 items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous Slide"
        >
         <ArrowLeft />
        </button>

        {/* Right Arrow - Only on Hover */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#88070a] flex cursor-pointer text-white rounded-full w-10 h-10 md:w-12 md:h-12 items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next Slide"
        >
         <ArrowRight />
        </button>
      </div>
    </section>
  );
}