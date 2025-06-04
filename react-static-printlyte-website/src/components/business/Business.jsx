import React from "react";
import healthcare from "../../assets/Healthcare.jpg";
import resturent from "../../assets/Resturent.jpg";
import realestate from "../../assets/real state.jpg";
import TravelAgencies from "../../assets/Travel Agencies 3.jpg";
import school from "../../assets/School.jpg";
import Startups from "../../assets/Startups.jpg";
import Corporates from "../../assets/Corporates.jpg";
import ReatailChains from "../../assets/Retail Chains.jpg";
import MNCs from "../../assets/MNCs 2.jpg";

export default function Business() {
  return (
    <>
      <div className="bg-gray-100 ">
        <h2 className="font-bold text-2xl text-center p-16 text-[#2d2556] sm:text-4xl md:text-5xl sm:p-5 sm:pt-10 ">
          Printlyte: Your Partner in Business Growth
        </h2>
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <img
                src={healthcare}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Healthcare
              </h2>
              <p>
                Printlyte makes printing and branding simple for healthcare
                providers. From patient materials to branded essentials, we take
                care of everything—from design to delivery. Let us handle your
                printing needs so you can focus on what matters most—caring
                for your patients.
              </p>
            </div>
            <div>
              <img
                src={resturent}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Restaurants
              </h2>
              <p>
                Want to stand out in the competitive restaurant industry? Boost
                your restaurant’s success with our branding services—menu
                design, table displays, and more. We’ll help you create a
                welcoming dining experience and build a strong brand presence
                that keeps customers coming back.
              </p>
            </div>
            <div>
              <img
                src={realestate}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Real Estate
              </h2>
              <p>
                Looking to make a lasting impression in the real estate market?
                Enhance your brand with our tailored printing
                services—brochures, signage, and marketing materials that
                showcase your properties in the best light. We’ll help you
                create a professional and memorable presence that attracts
                potential buyers and renters.
              </p>
            </div>
            <div>
              <img
                src={TravelAgencies}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Travel Agencies
              </h2>
              <p>
                Want to capture the wanderlust of your customers? Elevate your
                travel agency’s brand with our custom printing
                services—brochures, itineraries, posters, and more. We’ll help
                you create enticing materials that inspire travel and build
                lasting connections with your clients.
              </p>
            </div>
            <div>
              <img
                src={school}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Schools
              </h2>
              <p>
                Looking to strengthen your school’s identity? Enhance your
                school's brand with our printing solutions—customized
                stationery, event banners, and promotional materials. We’ll help
                you create a vibrant and cohesive look that reflects your
                school’s spirit and fosters a sense of pride among
                students and staff.
              </p>
            </div>
            <div>
              <img
                src={Startups}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Startups
              </h2>

              <p>
                Ready to make your mark in the market? Our tailored printing
                services help startups create a strong brand identity with
                custom business cards, marketing materials, and promotional
                items. Let us help you stand out and make a lasting
                impression from day one.
              </p>
            </div>
            <div className="justify-between">
              <img
                src={Corporates}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Corporates
              </h2>

              <p>
                Looking to elevate your corporate image? Printlyte offers
                customized printing solutions—corporate stationery, annual
                reports, event materials, and more. We help you maintain a
                professional, polished brand image that resonates with clients
                and stakeholders alike.
              </p>
            </div>
            <div>
              <img
                src={ReatailChains}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For Retail Chains
              </h2>
              <p>
                Looking to strengthen your retail brand? Our printing solutions
                for retail chains include customized signage, promotional
                materials, and product displays that create a cohesive and
                attractive shopping experience. Let us help you enhance your
                brand visibility and drive customer engagement across
                all your locations.
              </p>
            </div>
            <div>
              <img
                src={MNCs}
                alt="project-image"
                className="w-full h-auto overflow-hidden"
              ></img>
              <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                For MNCs
              </h2>
              <p>
                Looking to streamline your global brand presence? Printlyte
                offers efficient, tailored printing solutions for multinational
                companies. From corporate materials to global campaigns, we
                handle it all—ensuring consistency and quality across every
                market. Let us help you maintain a strong, unified brand
                on a global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
