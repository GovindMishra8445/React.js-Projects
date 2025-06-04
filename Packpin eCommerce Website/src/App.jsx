import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import PlaceOrder from "./pages/PlaceOrder";
import SubCategoryProduct from "./pages/SubCategoryProduct";
import UserProfile from "./pages/UserProfile";
import OrderDetails from "./pages/OrderDetails";

const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="max-sm:px-4">
        <Navbar />
      </div>
      <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw] scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/SubCategory/:categoryId"
            element={<SubCategoryProduct />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
