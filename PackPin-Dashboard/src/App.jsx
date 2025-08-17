import React, { createContext, useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllProduct from "./Pages/Product/AllProduct";
import Category from "./Pages/Product/Category";
import SubCategory from "./Pages/Product/SubCategory";
import EditProfile from "./Components/EditProfile/EditProfile";
import DialogFromProduct from "./Pages/DialogFromProduct/DialogFromProduct";
import Login from "./Pages/Login";
import ViewProductDetails from "./Pages/ViewProductDetails/ViewProductDetails";
import ViewCategoryDetails from "./Pages/ViewProductDetails/ViewCategoryDetails";
import Orders from "./Components/Orders/Orders";
import Reports from "./Components/Reports/Reports";
import Settings from "./Components/Settings/Settings";
import Customers from "./Components/Customers/Customers";
import "./App.css";
import ViewSubCategoryDetails from "./Pages/ViewProductDetails/ViewSubCategoryDetails";

export const MyContext = createContext();

function MainLayout() {
  const { isSidebarOpen } = useContext(MyContext);

  return (
    <>
      {isSidebarOpen && <Sidebar />}
      <div
        className={`main-layout transition-all duration-300 ${
          isSidebarOpen ? "ml-[18%]" : "ml-0"
        }`}
      >
        <Header />
        <div className="contentMain flex">
          <div className="contentRight py-3 px-5 transition-all duration-300 w-full">
            <Outlet />
          </div>
        </div>
        <DialogFromProduct />
      </div>
    </>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenDialogFromProduct, setIsOpenDialogFromProduct] = useState({
    open: false,
    model: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return (
    <MyContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isOpenDialogFromProduct,
        setIsOpenDialogFromProduct,
        isLogin,
        setIsLogin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={isLogin ? <MainLayout /> : <Navigate to="/login" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<AllProduct />} />
              <Route path="category" element={<Category />} />
              <Route path="sub-category" element={<SubCategory />} />
            </Route>
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="viewProductDetails" element={<ViewProductDetails />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
            <Route
              path="viewCategoryDetails"
              element={<ViewCategoryDetails />}
            />
            {/* <Route
              path="viewSubCategoryDetails"
              element={<ViewSubCategoryDetails />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
