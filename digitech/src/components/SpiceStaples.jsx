import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";

// Remove hardcoded spiceImages


const CARD_WIDTH = 176 + 16; // w-44 (176px) + gap-4 (16px)

export default function SpiceStaples() {
  // const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllProducts()
      .then((data) => {
        if (data?.result?.products) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api/v1/', '');
          
          // Filter for spice products (you might want to adjust this filter)
          const spiceProducts = data.result.products
            .filter(product => 
              product.productName && 
              /spice|masala|turmeric|cumin|coriander|cardamom|pepper|chili|chilli|clove|cinnamon/i.test(
                product.productName.toLowerCase()
              )
            )
            .map(product => ({
              ...product,
              imageUrl: product.productImage?.[0] || ''
            }));
          
          setProducts(spiceProducts);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -CARD_WIDTH * 3 : CARD_WIDTH * 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 overflow-hidden" style={{ background: "#f3cfa2" }}>
      <div className="container mx-auto px-4">
        {/* Heading + Arrows */}
        <div className="flex items-center justify-center mb-8">
          <h2
            className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]"
            style={{ color: "#7a1c1c", fontFamily: "serif" }}
          >
            Spice Staples for Every Indian Kitchen
          </h2>
          <div className="flex relative md:-right-20 gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full cursor-pointer bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full cursor-pointer bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        {loading ? (
          <div className="flex justify-center items-center h-40 w-full">
            <span className="text-lg text-gray-700">Loading...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40 w-full">
            <span className="text-lg text-red-600">{error}</span>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-4 px-1  scroll overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {products.map((product, idx) => (
              <div
                key={product._id || idx}
                className="flex-shrink-0 w-44 h-80 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
                style={{ background: "#f3cfa2" }}
              >
                <img
                  src={getImageUrl(product.imageUrl)}
                  alt={product.productName || `Spice ${idx + 1}`}
                  className="object-contain w-full h-full m-3 rounded-xl"
                  draggable={false}
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
