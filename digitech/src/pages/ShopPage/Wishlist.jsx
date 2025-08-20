import React from "react";
import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Heart } from "lucide-react";
import Navbar from "../../components/Navbar";

const Wishlist = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Navbar/>
      <div>
        <div>
          <div>
            <div className="flex justify-center align-middle pt-5">
              <Heart className="w-15 h-15 text-amber-800" />
            </div>
            <div className="flex justify-center align-middle text-5xl py-5 text-amber-800 font-bold font-mono">
              <h1>My Wishlist</h1>
            </div>
          </div>
          <div className="flex justify-center align-middle gap-10 pt-6">
            <button
              onClick={alert}
              className=" text-amber-700  rounded hover:text-amber-900 text-2xl cursor-pointer"
            >
              Create Wishlist
            </button>
            <button
              onClick={alert}
              className=" text-amber-700  rounded hover:text-amber-900 text-2xl cursor-pointer"
            >
              My Wishlist
            </button>
            <button
              onClick={alert}
              className=" text-amber-700  rounded hover:text-amber-900 text-2xl cursor-pointer"
            >
              Search Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
