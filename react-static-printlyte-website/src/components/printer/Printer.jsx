import React from "react";
import img from "../../assets/company image.png";

function Printer() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-5xl">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start
                   mb-16 md:mb-0 items-center relative"
        >
          <h1 className="text-blue-800 text-6xl text-left font-bold tracking-normal pb-11">
            Print Partner forSmall & Large Businesses
          </h1>

          <div className="">
            <button
              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                           focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                           rounded-full text-lg"
            >
              Enquire Now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full">
          <img
            src={img}
            alt="hero"
            className="object-cover object-center w-max h-max"
          />
        </div>
      </div>
    </div>
  );
}

export default Printer;

