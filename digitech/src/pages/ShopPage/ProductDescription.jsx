import React from "react";
import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProductDescription = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="">
          <img
            src="/public/al.webp"
            alt="product image"
            className="w-full object-cover h-64 md:h-200 py-5 px-5 rounded"
          />
        </div>
        <div className=" py-4">
          <h1 className="font-extrabold font-sans  lg:text-4xl md:text-2xl text-xl pt-5">
            Premium California Almonds 1 KG (Badaam/Badam) FREE Container
          </h1>
          <h3 className="py-8">
            <span className="font-bold text-2xl">Price - 1,299.00</span> (MRP
            incl.all taxes)
          </h3>
          <ul className="list-disc ml-5 space-y-4 text-xl text-justify px-8">
            <li>
              Nonpareil Premium California Almonds | Badaam - Sourced from the
              best farms.
            </li>
            <li>
              FREE Container - Packed in a 100% food grade, bpa-free plastic
              storage container.
            </li>
            <li>Packed with protein, Vitamin E & fiber.</li>
            <li>
              Perfect for snacking or adding a nutty twist to your recipes.
            </li>
            <li>
              Ministry of Nuts Almonds are bigger and crunchier, and uniform in
              size. These almonds are premium quality, handpicked and 100%
              natural. The almonds are stored hygienically in food grade
              packaging material and go through multiple levels of checks during
              the processing stage to retain their freshness, crunchiness and
              uniformity in terms of size, taste and color.
            </li>
            <li>
              They are rich in dietary fibre which is generally known to be an
              essential part of a healthy & balanced diet.
            </li>
            <li>Sourced from the best farms.</li>
            <li>Packed with protein, vitamin E &amp; fiber.</li>
            <li>
              Perfect for snacking or adding a nutty twist to your recipes.
            </li>
            <li>Packed in 100% food-grade, airtight, BPA-free containers.</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-2xl mx-auto">
          <img src="/public/al.webp" alt="img" className=" h-32" />
          <img
            src="/public/almonds-container-1.avif"
            alt="img"
            className="h-32"
          />
          <img
            src="/public/almonds-container-2.avif"
            alt="img"
            className="h-32"
          />
          <img
            src="/public/almonds-container-3.avif"
            alt="img"
            className="h-32"
          />
        </div>
        <div className="flex justify-center align-middle gap-5 p-5">
          <div>
            <button
              onClick={alert}
              className="ml-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-800 text-3xl"
            >
              Add To Cart
            </button>
          </div>
          <div>
            <button
              onClick={alert}
              className="ml-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-800 text-3xl"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDescription;
