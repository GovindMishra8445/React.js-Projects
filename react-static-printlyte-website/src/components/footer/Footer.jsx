// import React from 'react'
// import facebook from "../../assets/facebook icon.png"
// import instagram from "../../assets/instagram icons.png"
// import linkedin from "../../assets/linkedin icons.png"
// import Printlyte from "../../assets/Printlyte.svg"

// export default function Footer() {
//     const listNavbar = [
//         {name: 'Home', link:'#'},
//         {name: 'Skills', link:'#skills'},
//         {name: 'Experience', link:'#experience'},
//         {name: 'Language', link:'#language'},
//         {name: 'Projects', link:'#projects'},

//     ];
//   return (
//    <footer className="">
//       <div className='size-10 flex pt-5'>
//         <img src={facebook}></img>
//         <img src={instagram}></img>
//         <img src={linkedin}></img>
//         <div className='fle pe-52'>
//         <p className='text text-sm'>© 2023 Printo Document Services Pvt, Ltd. All Rights Reserved.</p>
//         <img src={Printlyte}></img>
//         </div>
//       </div>
//    </footer>
//   )
// }

import React from "react";
import printlyte from "../../assets/Printlyte.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm m-8">
        <div>
          <img src={printlyte} className="mb-5 w-52" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            "Printlyte: Elevating healthcare communication with
            precision-crafted materials for hospitals, clinics, and labs—where
            quality meets compliance. From tailored marketing solutions to
            professional branding essentials, we ensure every detail aligns with
            industry standards, empowering your organization to make a
            lasting impact."
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>+91-9549-8905-30</li>
            <li>Myprint@printlyte.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025&copy; Printlyte. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
