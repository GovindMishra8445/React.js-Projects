// CategoryDetailModal.jsx
import { CircleX } from "lucide-react";
import React from "react";

const ProductDetailModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed backdrop-blur-sm transition-opacity duration-300 inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 cursor-pointer text-xl"
          onClick={onClose}
        >
          <CircleX />
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Category Details</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Category:</strong> {data.category}</p>
          <p><strong>Subcategory:</strong> {data.subCategory}</p>
          <p><strong>Added By:</strong> {data.by}</p>
          <p><strong>Time:</strong> {data.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;