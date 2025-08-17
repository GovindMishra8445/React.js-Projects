import React from "react";

export default function CartDropdown({ open }) {
  // For now, cart is always empty. You can later add cart items as props or from context.
  return (
    <div
      className={`absolute md:top-26 top-50  right-10 mt-3 w-80 bg-white rounded-xl shadow-lg border border-red-200 z-50 transition-all duration-200 ${open ? 'block' : 'hidden'}`}
      style={{ minHeight: 360 }}
    >
      <div className="flex flex-col items-center justify-center py-8 px-6">
        <img src="/empty.png" alt="Empty Cart" className="w-40 h-40 mb-4" />
        <p className="text-xl font-medium text-gray-700 mb-2">Your cart is empty!</p>
      </div>
      <div className="border-t border-red-200 px-6 py-4">
        <div className="flex justify-between mb-1 text-gray-700">
          <span>Subtotal</span>
          <span>0</span>
        </div>
        <div className="flex justify-between mb-1 text-gray-700">
          <span>Tax</span>
          <span>0</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-black mt-2">
          <span>Total</span>
          <span>0</span>
        </div>
        <div className="flex gap-3 mt-6">
          <button className="flex-1 py-2 rounded-lg border border-gray-700 text-gray-900 hover:bg-gray-100 transition">View Cart</button>
          <button className="flex-1 py-2 rounded-lg bg-[#8B0000] text-white hover:bg-[#a83232] transition">Checkout</button>
        </div>
      </div>
    </div>
  );
}