import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllProducts } from "../api/product";
import { FaHeart, FaEye } from "react-icons/fa";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { getSingleImageUrl } from "../api/imageApi";

// Remove hardcoded deals


export default function DealsSection() {
  const scrollRef = useRef();
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllProducts()
      .then((data) => {
        if (data?.result?.products) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api/v1/', '');
          
          const dealsData = data.result.products
            .filter(product => {
              // Check if product has a discount
              return product.productOriginalPrice > product.productPrice;
            })
            .map(product => ({
              id: product._id,
              name: product.productName,
              img: product.productImage?.[0] || '',
              price: product.productPrice,
              originalPrice: product.productOriginalPrice,
              discount: Math.round(((product.productOriginalPrice - product.productPrice) / product.productOriginalPrice) * 100) + '% OFF',
              stockStatus: product.stockStatus,
              rating: 4, // Default rating
              soldBy: 'DigiTech' // Default seller
            }));
          
          setDeals(dealsData);
        } else {
          setDeals([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load deals");
        setLoading(false);
      });
  }, []);

  const scrollAmount = 300; // px

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title & Arrows */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 w-full  text-[#7a1c1c]">
            Fresh & Flavorful Dry Fruits
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white text-xl flex items-center justify-center hover:bg-[#7a1c1c]"
            >
             <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#a05a1c] text-white text-xl flex items-center justify-center hover:bg-[#7a1c1c]"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Scrollable Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 scroll overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-70 bg-white border border-[#a05a1c] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center group relative"
            >
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                {deal.discount}
              </span>

              {/* Image */}
              <div className="w-36 h-36 flex items-center justify-center mb-2 overflow-hidden bg-white p-2">
                <img
                src={getSingleImageUrl(deal.img)}
                  alt={deal.name}
                className="w-36 h-36 object-contain mb-2"
                />
              </div>

              {/* Name */}
              <div className="text-lg font-semibold text-center mb-1">
                {deal.name}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < deal.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xs text-gray-600">
                  ({deal.rating})
                </span>
              </div>

              {/* Seller */}
              <div className="text-xs text-gray-500 mb-1">
                Sold By{" "}
                <span className="font-medium text-[#7a1c1c]">
                  {deal.soldBy}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-[#7a1c1c]">
                  {deal.newPrice}
                </span>
                <span className="text-sm line-through text-red-600">
                  {deal.oldPrice}
                </span>
              </div>

              {/* Action Buttons */}
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
