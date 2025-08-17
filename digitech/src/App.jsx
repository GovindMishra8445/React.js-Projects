import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification";
// import UnAuthorized from "./pages/auth/UnAuthorized";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import DashboardOffers from "./pages/dashboard/DashboardOffers";
import DashboardOrders from "./pages/dashboard/DashboardOrders";
import DashboardUsers from "./pages/dashboard/DashboardUsers";
import DashboardTransactions from "./pages/dashboard/DashboardTransactions";
import AddVendorCategory from "./pages/dashboard/AddVendorCategory";

// Vendor Dashboard Imports
import VendorDashboardLayout from "./components/layout/VendorDashboardLayout";
import VendorDashboardHome from "./pages/vendorDashboard/VendorDashboardHome";
import VendorProducts from "./pages/vendorDashboard/VendorProducts";
import VendorOrders from "./pages/vendorDashboard/VendorOrders";
import VendorUsers from "./pages/vendorDashboard/VendorUsers";
import VendorTransactions from "./pages/vendorDashboard/VendorTransactions";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDescription from "./pages/ShopPage/ProductDescription";
import Wishlist from "./pages/ShopPage/wishlist";
// import Wishlist from "./pages/ShopPage/wishlist";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/productDescription" element={<ProductDescription />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="otp-verification" element={<OtpVerification />} />

      {/*  Admin Dashboard Layout (ProtectedRoute) */}
      <Route element={<ProtectedRoute roles={["admin"]} />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route
            path="dashboard-add-category"
            element={<AddVendorCategory />}
          />
          <Route path="dashboard-products" element={<DashboardProducts />} />
          <Route path="offers" element={<DashboardOffers />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="users" element={<DashboardUsers />} />
          <Route path="transactions" element={<DashboardTransactions />} />
        </Route>
      </Route>

      {/*  Vendor Dashboard Layout (ProtectedRoute) */}
      <Route element={<ProtectedRoute roles={["vendor"]} />}>
        <Route path="/vendor-dashboard" element={<VendorDashboardLayout />}>
          <Route index element={<VendorDashboardHome />} />
          <Route path="vendor-products" element={<VendorProducts />} />
          <Route path="vendor-orders" element={<VendorOrders />} />
          <Route path="vendor-users" element={<VendorUsers />} />
          <Route path="vendor-earnings" element={<VendorTransactions />} />
        </Route>
      </Route>

      {/* Auth Routes (They are public too) */}
      {/* <Route path="/auth">
        <Route path="unauthorized" element={<UnAuthorized />} />
       <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} /> 
      </Route> */}
    </Routes>
  );
}

export default App;
