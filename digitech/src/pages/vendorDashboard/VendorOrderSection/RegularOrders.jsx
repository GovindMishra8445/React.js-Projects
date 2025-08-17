import React from 'react'

const RegularOrders = ({ orders, handleStatusUpdate, getStatusColor, selectedOrder, setSelectedOrder, formatCurrency }) => {
  return (
    <div>     <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <div className="min-w-[800px]">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#0284c7]">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Order ID</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Customer</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Products</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Amount</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Date</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700 font-medium">{order.id}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 truncate">{order.customer.name}</div>
                      <div className="text-gray-500 truncate">{order.customer.email}</div>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{order.products.length} items</td>
                  <td className="px-4 md:px-6 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(order.amount)}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{order.date}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-1 flex-wrap">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-xs cursor-pointer bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-200 transition"
                      >
                        View Details
                      </button>
                      {order.status === "Processing" && (
                        <button
                          onClick={() => handleStatusUpdate(order.id, "Shipped")}
                          className="text-xs cursor-pointer bg-green-100 text-green-700 px-3 py-1 rounded-md font-medium hover:bg-green-200 transition"
                        >
                          Ship Order
                        </button>
                      )}
                      {order.status === "Shipped" && (
                        <button
                          onClick={() => handleStatusUpdate(order.id, "Delivered")}
                          className="text-xs cursor-pointer bg-green-100 text-green-700 px-3 py-1 rounded-md font-medium hover:bg-green-200 transition"
                        >
                          Mark Delivered
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg p-4 md:p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <span>&times;</span>
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Order Details: {selectedOrder.id}
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Customer Information</h3>
              <p><strong>Name:</strong> {selectedOrder.customer.name}</p>
              <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
              <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
              <p><strong>Shipping Address:</strong> {selectedOrder.shippingAddress}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Order Information</h3>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 text-xs rounded ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </p>
              <p><strong>Total Amount:</strong> {formatCurrency(selectedOrder.amount)}</p>
              <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
              <p><strong>Order Date:</strong> {selectedOrder.date}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Products</h3>
              <div className="overflow-x-auto">
                <table className="w-full border text-sm text-left min-w-[400px]">
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
        </div>
      )}
      </div></div>
  )
}

export default RegularOrders