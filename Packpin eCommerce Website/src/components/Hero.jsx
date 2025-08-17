import React, { useState, useEffect } from "react";
import banner1 from "../assets/Packpin banner 1.jpg";
import banner2 from "../assets/Packpin banner 2.jpg";

const HeroSlider = () => {
  const images = [banner1, banner2, banner1, banner2, banner1, banner2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="pt-5">
      <div className="w-full relative overflow-hidden h-full ">
        <div
          className="inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroSlider;
