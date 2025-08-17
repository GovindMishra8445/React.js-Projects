import React, { useState } from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import { CircleX } from "lucide-react";
import { useEffect } from "react";
import { getAllOrders } from "../../api/order";

// Remove hardcoded orders


const DashboardOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllOrders()
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);


  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

     const handleRefresh = () => {
    console.log("Refreshed");
    setRefreshOrders([...orders]);  
  };

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
        <DashboardNav/>
      <div className="flex justify-between mt-4 items-center mb-4">
        <h2 className="text-xl font-bold text-[#0284c7]">Manage Orders</h2>
         <button
          onClick={handleRefresh}
          className="bg-[#0284c7] text-white cursor-pointer px-4 py-1.5 rounded-md hover:bg-[#0285c7da] transition"
        >
          Refresh
        </button>
      </div>

      <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0284c7]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Products</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Amount (₹)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {RefreshOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-sm">{order.customer.email}</td>
                <td className="px-6 py-4 text-sm">{order.products.length}</td>
                <td className="px-6 py-4 text-sm">{formatCurrency(order.amount)}</td>
                <td className="px-6 py-4 text-sm">{order.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-medium">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-xs cursor-pointer bg-blue-100 curosr-pointer text-blue-700 px-3 py-1 rounded-md font-medium"
                  >
                     View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <CircleX />
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Order Details: {selectedOrder.id}
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Customer Information</h3>
              <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
              <p><strong>User ID:</strong> {selectedOrder.customer.userId}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Order Information</h3>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Total Amount:</strong> {formatCurrency(selectedOrder.amount)}</p>
              <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
              <p><strong>Transaction Status:</strong> {selectedOrder.transactionStatus}</p>
              <p><strong>Order Date:</strong> {selectedOrder.date}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Products</h3>
              <table className="w-full border text-sm text-left">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="p-2 border">Product Name</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.products.map((prod, i) => (
                    <tr key={i}>
                      <td className="p-2 border">{prod.name}</td>
                      <td className="p-2 border">{prod.quantity}</td>
                      <td className="p-2 border">{formatCurrency(prod.price)}</td>
                      <td className="p-2 border">{formatCurrency(prod.price * prod.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOrder