import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { getAllProducts } from "../api/product";
import { getImageUrl, getSingleImageUrl } from "../api/imageApi";

// Remove hardcoded products

export default function BestsellingDryFruits() {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllProducts()
      .then((data) => {
        if (data?.result?.products) {
          // Map the API response to match the expected format
          const formattedProducts = data.result.products.map((product) => ({
            id: product?._id,
            name: product?.productName,
            img: product?.productImage?.[0] || "",
            price: product?.productPrice,
        
            originalPrice: product?.productOriginalPrice,
            discount:
              product?.productOriginalPrice > product?.productPrice
                ? Math.round(
                    ((product.productOriginalPrice - product.productPrice) /
                      product.productOriginalPrice) *
                      100
                  ) + "% OFF" 
                : "",
            stockStatus: product?.stockStatus,
          }));

          // Filter for dry fruits based on product name
          const dryFruits = formattedProducts.filter(
            (p) =>
              p.name &&
              /almond|wallnut|cashew|pistachio|dates|raisin|anjeer|nut/i.test(
                p.name.toLowerCase()
              )
          );
          console.log("Products >>>>>>>>>>>>>>", dryFruits);
          

          setProducts(dryFruits);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load dry fruits. Please try again later.");
        setLoading(false);
      });
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -350 : 340,
        behavior: "smooth",
      });
    }
  };

  // Add loading and error states
  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
            Our Bestselling Dry Fruits – Handpicked & Wholesome
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[267.75px] h-100 bg-white border border-gray-200 rounded-xl p-6">
                <div className="animate-pulse">
                  <div className="h-60 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
            Our Bestselling Dry Fruits – Handpicked & Wholesome
          </h2>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#8B0000] text-white rounded hover:bg-[#6a0000] transition">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
            Our Bestselling Dry Fruits – Handpicked & Wholesome
          </h2>
          <p>No dry fruits found. Please check back later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and Nav Buttons */}
        <div className="relative flex justify-center items-center mb-10">
          <h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
            Our Bestselling Dry Fruits – Handpicked & Wholesome
          </h2>
          <div className="absolute right-8 top-16 flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full cursor-pointer bg-[#a97b50] flex items-center justify-center text-white text-xl shadow hover:bg-[#8B0000] transition"
              aria-label="Scroll Left"
              type="button">
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full cursor-pointer bg-[#a97b50] flex items-center justify-center text-white text-xl shadow hover:bg-[#8B0000] transition"
              aria-label="Scroll Right"
              type="button">
              <ArrowRight />
            </button>
          </div>
        </div>
        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 scroll md:mx-12 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}>
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group  flex-shrink-0 w-[267.75px] h-100 bg-white border border-[#8B0000] rounded-xl shadow-lg p-6 flex flex-col items-center relative">
              {/* Discount badge */}
              <span className="absolute top-4 left-4 bg-[#8B0000] text-white text-sm px-3 py-1 rounded font-semibold z-10">
                {product.discount}
              </span>

              {/* Product image */}
              <div className="w-full h-60 flex items-center justify-center mb-4 overflow-hidden bg-white p-2">
                <img
                  src={getSingleImageUrl(product.img)}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-4 transform transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              {/* Product name */}
              <div className="text-lg font-semibold text-gray-900 text-center mb-2 tracking-wide min-h-[2.5rem] line-clamp-2">
                {product.name}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill={i < product.rating ? "currentColor" : "#e5e7eb"}
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-base text-gray-700">(1)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
