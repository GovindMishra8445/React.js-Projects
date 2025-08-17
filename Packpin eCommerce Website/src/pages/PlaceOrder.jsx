import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { getCartAmount, delevery_fee, cartItems, clearCart, loggedInUser } = useContext(ShopContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  // const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
  const token = localStorage.getItem("LoggedIn");
  console.log("Placeorder",token)

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  // Prepare cart data for order
  useEffect(() => {
    const tempData = cartItems
      .filter((item) => item.quantity)
      .map((item) => ({
        productId: item.itemId,
        productName: item.productName,
        packOf: item.packOf,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }));
    setCartData(tempData);
  }, [cartItems]);

  const handlePlaceOrder = () => {
    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    if (cartData.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      totalAmount: getCartAmount() + delevery_fee,
      products: cartData,
    };

    axios
      .post(
        "https://api.packpin.in/users/place-order",
        orderData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          // Clear the cart on successful order placement
          clearCart();
          alert("Order placed successfully!");
          navigate("/profile?tab=orders");
        } else {
          console.error("Order placement failed:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>
        <input className="border rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
        <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zip code" />
          <input className="border rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <input className="border rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>
      {/* ------------ Right Side ------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={handlePlaceOrder} className="bg-black text-white px-10 py-2 text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
