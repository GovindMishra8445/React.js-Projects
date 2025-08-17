import React from "react";
import MRIBack from "../../assets/MRI back 2.jpg";
import xre from "../../assets/x-Re Envelop.jpg";
import folder from "../../assets/folder.jpg";
import Minitemplate from "../../assets/MeTemplate - flier Process.jpg";
import Tshirt from "../../assets/T-shirt.jpg";
import CoffeeMag from "../../assets/Coffee-Mag.jpg";

function Delivered() {
  return (
    <>
      <div className="bg-sky-200 pb-10 sm:pb-50 md:pb-10 lg:pb-10 xl:pb-10">
        <h2 className="text-4xl text-center font-bold text-sky-800 p-10 sm:p-10 md:p-10 lg:p-10 xl:p-10 sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl  ">
          Work We Delivered forIndia’s Largest Brands.
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:gap-32 md:gap-32 lg:gap-32 xl:gap-32 max-sm:grid-cols-1 max-sm:gap-8"> 
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
              Over 1M+ <br/> MRI Bag Delivered
              </p>
              <img
                src={MRIBack}
                alt="project-image"
                className="w-full object-cover"
              />
              <p className="text-black text-center font-bold p-5 text-xl">
                MRI Bag
              </p>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
              Over 1M+ <br/>X-Ray Envelopes Delivered
              </p>
              <img
                src={xre}
                alt="project-image"
                className="w-full object-cover "
              />
              <h2 className="text-black text-center font-bold p-5 text-xl">
              X-Ray Envelopes
              </h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
                Over 50K+<br/> folders
              </p>
              <img
                src={folder}
                alt="project-image"
                className="w-full object-cover"
              />
              <h2 className="text-black text-center font-bold p-5 text-xl">Folders Completed</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
                Over 1M+ <br/> Pamphlet Delivered 
              </p>
              <img
                src={Minitemplate}
                alt="project-image"
                className="w-full object-cover "
              />
              <h2 className="text-black text-center font-bold p-5 text-xl">
              Pamphlet 
              </h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
                Over 50K+ <br/> T-Shirts Delivered
              </p>
              <img
                src={Tshirt}
                alt="project-image"
                className="w-full object-cover"
              />
              <h2 className="text-black text-center font-bold p-5 text-xl">T-shirt Delivered</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden bg-[#E9CEB3]">
              <p className="bg-white text-center text-2xl p-2 font-semibold">
               Over 50K+ <br/> Coffee Mugs Delivered
               </p>

              <img
                src={CoffeeMag}
                alt="project-image"
                className="w-full object-cover "
              />
              <h2 className="text-black text-center font-bold p-5 text-xl">
                Coffee Mug Delivered
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivered;
