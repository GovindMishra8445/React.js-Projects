import React from "react";
import Communication from "../../assets/Communication Material.png";
import MedicalStationery from "../../assets/Medical Stationery.png";
import MarketingMaterials from "../../assets/Marketing Materials.png";
import BrandedPromotional from "../../assets/Branded Promotional Items.png";

function Healthcare() {
  return (
    <>
        <div className="container mx-auto p-4 pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20">
          <h2 className="text-4xl text-[#2d2556] font-bold p-5 pl-0 text-center ">
            Printlyte for Healthcare
          </h2>
          <div className="grid grid-cols-2 gap-8 p-20 max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-sm:p-8">
              <div>
                <img
                  src={Communication}
                  alt="project-image"
                  className="w-20 h-20"
                ></img>
                <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                  Communication Materials
                </h2>
                <p>
                  Effective communication is key in healthcare. We offer
                  high-quality printed materials to keep patients informed, from
                  appointment cards to important consent forms and post-surgery
                  instructions.
                </p>
                <div className="grid grid-cols-2 font-bold max-sm:grid-cols-1">
                  <li>Appointment Cards</li>
                  <li>Consent Forms</li>
                  <li>Brochures</li>
                  <li>Prescription Pads</li>
                </div>
              </div>
              <div>
                <img
                  src={MedicalStationery}
                  alt="project-image"
                  className="w-20 h-20"
                ></img>
                <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0 ">
                  Medical Stationery
                </h2>
                <p>
                  Professional stationery is essential for a healthcare
                  provider’s daily operations. We provide custom letterheads,
                  business cards, and more to ensure a consistent and polished
                  brand image.
                </p>
                <div className="grid grid-cols-2 font-bold max-sm:grid-cols-1">
                  <li>Letterheads</li>
                  <li>Business Cards</li>
                  <li>Envelopes</li>
                  <li>Folders</li>
                </div>
              </div>
              <div>
                <img
                  src={MarketingMaterials}
                  alt="project-image"
                  className="w-20 h-20"
                ></img>
                <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                  Marketing Materials
                </h2>
                <p>
                  Attract more patients and clients with well-designed marketing
                  materials. We create eye-catching brochures, posters, and
                  banners to help you stand out and communicate your services
                  effectively.
                </p>
                <div className="grid grid-cols-2  font-bold max-sm:grid-cols-1">
                  <li className="">Brochures and Flyers</li>
                  <li>Posters</li>
                  <li>Banners</li>
                  <li>Newsletter</li>
                </div>
              </div>
              <div>
                <img
                  src={BrandedPromotional}
                  alt="project-image"
                  className="w-20 h-20"
                ></img>
                <h2 className="text-3xl text-[#2d2556] font-bold p-5 pl-0">
                  Branded Promotional Items
                </h2>
                <p>
                  Promotional items not only serve as a marketing tool but also
                  build your healthcare brand. We offer customized tote bags,
                  pens, and medical supplies that reflect your practice’s
                  professional image.
                </p>
                <div className="grid grid-cols-2  font-bold max-sm:grid-cols-1">
                  <li className="">Custom Tote Bags</li>
                  <li>Pens, Notebooks, and Pads</li>
                  <li>Branded Medical Supplies</li>
                </div>
              </div>
              {/* <div>
              <img src={image} alt="project-image"></img>
              <h2>For Tech Firms</h2>
              <p>
                Printo's BrandStore empowers businesses with a personalized
                online storefront, seamless integration, visual showcases, and
                easy customization. Secure transactions, order management, and
                analytics automate branded merchandise creation, enhancing
                company culture promotion.
              </p>
            </div>
            <div>
              <img src={image} alt="project-image"></img>
              <h2>For Event Planners</h2>
              <span>
                Do you want to make moments unforgettable for clients and guests
                during your event?
              </span>
              <p>
                Elevate any event effortlessly with our expertly crafted
                marketing materials. Eye-catching banners & elegant invitations
                leave lasting impressions on clients and guests.
              </p>
            </div>
            <div>
              <img src={image} alt="project-image"></img>
              <h2>For Retail Stores</h2>
              <span>Is your retail store getting lost amongst the crowd?</span>
              <p>
                Attract footfalls and convert window shoppers to loyal customers
                with our eye-catching signage solutions: storefront signs,
                displays, and promos.
              </p>
            </div>
            <div>
              <img src={image} alt="project-image"></img>
              <h2>For Graphic Designers</h2>
              <span>
                Are you an illustrator seeking to elevate your art and reach a
                wider audience?
              </span>
              <p>
                Showcase your art beyond canvas with our brand merchandising
                services. Turn your masterpieces into captivating products,
                boosting brand visibility.
              </p>
            </div> */}
            </div>
          </div>
    </>
  );
}

export default Healthcare;
