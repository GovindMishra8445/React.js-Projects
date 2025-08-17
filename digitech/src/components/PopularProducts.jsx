import React, {useState,useEffect, useRef } from "react";
import { FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getAllProducts } from "../api/product";
import { getSingleImageUrl } from "../api/imageApi";

const CARD_WIDTH = 288 + 32; // w-72 = 288px + gap-8 = 32px

export default function PopularProducts() {
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
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api/v1/', '');
          
          // Get popular products (for now, just take the first 6 products)
          const popularProducts = data.result.products
            .slice(0, 6) // Take first 6 products as popular
            .map(product => ({
              id: product._id,
              img: product.productImage?.[0] || '',
              name: product.productName,
              discount: product.productOriginalPrice > product.productPrice 
                ? `${Math.round(((product.productOriginalPrice - product.productPrice) / product.productOriginalPrice) * 100)}% Off`
                : '10% Off', // Default discount if no discount in data
              rating: 4, // Default rating
              soldBy: 'DigiTech', // Default seller
              newPrice: `$${product.productPrice?.toFixed(2) || '0.00'}`,
              oldPrice: `$${product.productOriginalPrice?.toFixed(2) || '0.00'}`,
              stockStatus: product.stockStatus || 'IN-STOCK'
            }));
          
          setProducts(popularProducts);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching popular products:', error);
        setError("Failed to load popular products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -CARD_WIDTH * 2 : CARD_WIDTH * 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-12"
      style={{
        background: "#fff",
        backgroundImage: "url('/bg-pattern.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h2
            className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]"
            style={{ color: "#7a1c1c", fontFamily: "serif" }}
          >
            Popular Products
          </h2>
          <div className="flex relative md:-right-80 gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white flex items-center justify-center text-xl transition hover:bg-[#7a1c1c]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex scroll gap-8 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 bg-white border border-[#a05a1c] rounded-xl p-6 flex flex-col items-center relative transition-transform duration-200 hover:scale-105"
            >
              <span className="absolute top-3 left-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
              <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-white p-2">
                <img
                src={getSingleImageUrl(product.img)}
                  alt={product.name}
                className="w-40 h-40 object-contain mb-2"
                draggable={false}
                />
              </div>
              <div className="text-lg font-semibold text-left w-full mb-1">
                {product.name}
              </div>
              <div className="flex items-center justify-start w-full mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xs text-gray-600">
                  ({product.rating})
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1 w-full text-left">
                Sold By{" "}
                <span className="font-medium text-[#7a1c1c]">
                  {product.soldBy}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2 w-full">
                <span className="text-lg font-bold text-[#7a1c1c]">
                  {product.newPrice}
                </span>
                <span className="text-sm line-through text-red-600">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex gap-3 w-full mt-2">
                <button className="flex-1 bg-[#a05a1c] text-white px-4 py-2 rounded transition hover:bg-[#7a1c1c]">
                  Add To Cart
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5e7d7] text-[#a05a1c] hover:bg-[#a05a1c] hover:text-white transition">
                  <FaHeart />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5e7d7] text-[#a05a1c] hover:bg-[#a05a1c] hover:text-white transition">
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
