import React, { useState } from "react";
import VendorDashboardNav from "../../components/navbar/VendorDashboardNav";
import { CircleX } from "lucide-react";
import Bulkinquiry from "./VendorOrderSection/Bulkinquiry";
import RegularOrders from "./VendorOrderSection/RegularOrders";

const vendorOrders = [
  {
    id: "ORD_001",
    customer: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "+91 98765 43210",
    },
    products: [
      {
        name: "Organic Almonds",
        quantity: 2,
        price: 450,
      },
      {
        name: "Premium Cashews",
        quantity: 1,
        price: 380,
      },
    ],
    amount: 1280,
    date: "2025-01-15",
    status: "Processing",
    paymentMethod: "UPI",
    shippingAddress: "123 Main St, Mumbai, Maharashtra 400001",
  },
  {
    id: "ORD_002",
    customer: {
      name: "Jane Smith",
      email: "jane.smith@gmail.com",
      phone: "+91 98765 43211",
    },
    products: [
      {
        name: "Mixed Dry Fruits",
        quantity: 1,
        price: 550,
      },
    ],
    amount: 550,
    date: "2025-01-14",
    status: "Shipped",
    paymentMethod: "Credit Card",
    shippingAddress: "456 Oak Ave, Delhi, Delhi 110001",
  },
  {
    id: "ORD_003",
    customer: {
      name: "Mike Johnson",
      email: "mike.johnson@gmail.com",
      phone: "+91 98765 43212",
    },
    products: [
      {
        name: "Pistachios",
        quantity: 3,
        price: 420,
      },
    ],
    amount: 1260,
    date: "2025-01-13",
    status: "Delivered",
    paymentMethod: "Net Banking",
    shippingAddress: "789 Pine Rd, Bangalore, Karnataka 560001",
  },
];

const VendorOrders = () => {
  const [orders, setOrders] = useState(vendorOrders);
  const [pageType, setPageType] = useState("Regular orders")
  const [selectedOrder, setSelectedOrder] = useState(null);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] ">
      <VendorDashboardNav />
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0284c7]">My Orders</h2>
          <p className="text-sm text-gray-600 mt-1">Manage customer orders</p>
        </div>
        <div className="flex gap-6">
        <button
        onClick={()=>setPageType("Regular orders")}
          className="bg-[#0284c7] text-white cursor-pointer px-4 py-2 rounded-md hover:bg-[#0285c7da] transition w-full sm:w-auto"
        >
          Regular orders
        </button>
         <button
         onClick={()=>setPageType("Bulk inquiry")}
          className="bg-[#0284c7] text-white cursor-pointer px-4 py-2 rounded-md hover:bg-[#0285c7da] transition w-full sm:w-auto"
        >
          Bulk inquiry
        </button>
        </div>
      </div>
      
{pageType === "Regular orders" && (
  <div>
    <RegularOrders
      orders={orders}
      handleStatusUpdate={handleStatusUpdate}
      getStatusColor={getStatusColor}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      formatCurrency={formatCurrency}
    />
  </div>
 )}

 

      {pageType === "Bulk inquiry" && (
        <div>
         <Bulkinquiry/>
          </div>
      )}
    
    </div>
  );
};

export default VendorOrders; 