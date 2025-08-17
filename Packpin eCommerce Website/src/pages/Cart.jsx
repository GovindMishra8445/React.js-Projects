import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    currency,
    cartItems,
    updateQuantity,
    navigate,
    getCartAmount,
    delevery_fee,
  } = useContext(ShopContext);

  const [loggedInUser, setLoggedInUser] = useState("");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("LoggedIn");
    console.log("Home page user", user);
    console.log(loggedInUser);
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogin = () => {
    if (loggedInUser) {
      navigate("/place-order");
    } else {
      navigate("/login");
    }
  };

  let quantity;
  useEffect(() => {
    const tempData = [];
    cartItems.map((item) => {
      if (item.quantity) {
        tempData.push({
          productId: item.itemId,
          productName: item.productName,
          packOf: item.packOf,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        });
        quantity = item.quantity;
      }
    });
    setCartData(tempData);
  }, [cartItems]);

  // Get the quantity of the current product from cartItems
  // item.productId, item.price, item.packOf, item.quantity-1,item.productName,item.image
  const handleQuantityChange = (id, price, pack, newQuantity, name, image) => {
    console.log(newQuantity);
    console.log(
      "Id",
      id,
      "price",
      price,
      "pack",
      pack,
      "newQuantity",
      newQuantity,
      "name",
      name
    );
    if (newQuantity >= 0) {
      updateQuantity(id, price, pack, newQuantity, name, image);
    }
  };
  let products = cartData;
  let cartAmount = getCartAmount() + delevery_fee;
  console.log(cartAmount);
  console.log("In Cartdata from Cart page", products);

  return (
    <>
      <div className="border-t pt-14 px-4">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {cartData.map((item, index) => {
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5ff_0.sfr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className=" flex items-start gap-6">
                  <img className=" w-16 sm:w-20" src={item.image} alt="" />
                  <div>
                    <p className=" text-xs sm:text-lg font-medium">
                      {item.productName}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p className=" px-2 sm:px-3 sm:py-1 border bg-slate-150">
                        {item.packOf}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center max-sm:w-28 items-center gap-1 border-red-400 border-2 border-solid rounded-lg p-1">
                  <button
                    className="bg-gray-400 text-white px-2 rounded-lg disabled:opacity-50"
                    onClick={() =>
                      handleQuantityChange(
                        item.productId,
                        item.price,
                        item.packOf,
                        item.quantity - 1,
                        item.productName,
                        item.image
                      )
                    }
                    // onClick={() => handleQuantityChange(item.quantity - 1)}
                    disabled={item.quantity <= 0}
                  >
                    -
                  </button>
                  <input
                    className="border max-w-[40px] sm:max-w-[60px] px-2 text-center"
                    type="number"
                    min={0}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(Number(e.target.value) || 0)
                    }
                  />
                  <button
                    className="bg-gray-400 text-white px-2 rounded-lg"
                    onClick={() =>
                      handleQuantityChange(
                        item.productId,
                        item.price,
                        item.packOf,
                        item.quantity + 1,
                        item.productName,
                        item.image
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className=" w-full text-end">
              <button
                onClick={handleLogin}
                className="bg-black text-white text-sm my-5 px-5 py-3 rounded-md"
              >
                {loggedInUser ? " PROCEED TO CHECKOUT" : "LOGIN TO PROCEED"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
