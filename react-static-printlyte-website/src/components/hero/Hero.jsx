import React from "react";
import PrintlyteBanner from "../../assets/Printlye Banner examplae.jpg";

export default function Hero() {
  return (
    <div className="flex flex-wrap justify-center items-center p-5 pb-20">
      <div className="p-5 lg:w-1/2 sm:w-full ">
        <h1 className="text-blue-800 font-bold text-wrap md:text-5xl lg:text-4xl max-sm:text-2xl text-left pb-11 ">
          Customized Printing Solutions for the Healthcare Industry.
        </h1>
        <p className="pt-5 pb-8 text-gray-500 size-auto text-lg text-wrap">
          Printlyte caters to hospitals, clinics, and labs with
          precision-crafted materials for communication, marketing, and
          branding—ensuring quality and compliance every step of the way.
        </p>
          <button
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg"
          >
            Contact Us
          </button>
      </div>
      <div className="lg:max-w-lg ">
        <img
          src={PrintlyteBanner}
          alt="hero"
          className="max-w-full h-auto relative "
        />
      </div>
    </div>
  );
}
