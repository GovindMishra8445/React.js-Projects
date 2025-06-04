import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({
  id,
  name,
  image,
  description = "",
  price,
  currency,
  packSize,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cartItems, updateQuantity, getCartCount } = useContext(ShopContext);
  // console.log(packSize.packOf);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const currentItem = cartItems.find((item) => item.itemId === id);
  const quantity = currentItem ? currentItem.quantity : 0;

  const pack = packSize.packOf;
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      updateQuantity(id, packSize.price, pack, newQuantity, name, image);
    }
  };

  return (
    <div className="text-gray-700 bg-slate-200 p-4 rounded-xl shadow shadow-slate-400">
      <Link to={`/product/${id}`} className="block">
        <div className="overflow-hidden flex justify-between">
          <p className="text-xs">{name}</p>
          <img
            src={image}
            alt={name}
            className="hover:scale-110 transition ease-in-out mix-blend-multiply h-auto w-10 right-0"
          />
        </div>
        <div>
          {/* Short Description with "See More" */}
          <p className="text-xs text-gray-600 pr-20">
            {description && (
              <>
                {isExpanded ? description : `${description.slice(0, 30)}...`}{" "}
                {description.length > 10 && (
                  <span
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link click when toggling
                      toggleDescription();
                    }}
                    className="text-red-500 cursor-pointer flex-wrap text-[10px]"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </span>
                )}
              </>
            )}
          </p>
        </div>
      </Link>

      <div className="flex justify-between items-center pt-5">
        <p className="text-sm font-medium">
          {currency}₹{price}
        </p>


        {quantity > 0 ? (
          <div className="flex items-center gap-1 border-red-400 border-2 border-solid rounded-lg p-1">
            {/* Decrease Quantity Button */}
            <button
              className="bg-gray-400 text-white px-2 rounded-lg disabled:opacity-50"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </button>

            {/* Quantity Input */}
            <input
              className="border max-w-[40px] sm:max-w-[60px] px-2 text-center"
              type="number"
              min={0}
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(Number(e.target.value) || 0)
              }
            />

            {/* Increase Quantity Button */}
            <button
              className="bg-gray-400 text-white px-2 rounded-lg"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
        ) : (
          // Add to Cart Button
          <button
            className="bg-red-500 text-white px-3 rounded-lg text-sm"
            onClick={() => handleQuantityChange(1)}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
