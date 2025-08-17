import DashboardNav from "../../components/navbar/DashboardNav";
import { CircleX } from "lucide-react";

import { useEffect, useState } from "react";
import { getAllOrders } from "../../api/order";

// Remove hardcoded transactions


const DashboardTransations = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllOrders()
      .then((data) => {
        setTransactions(data.orders || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load transactions");
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
    setLoading(true);
    setError(null);
    getAllOrders()
      .then((data) => {
        setTransactions(data.orders || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to refresh transactions");
        setLoading(false);
      });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-700";
      case "PENDING":
        return "bg-yellow-100 text-yellow-700";
      case "FAILED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
      <DashboardNav />
      <div className="flex justify-between mt-4 items-center mb-4">
        <h2 className="text-xl font-bold text-[#0284c7]">Transactions</h2>
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Transaction ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Amount (₹)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Method</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">View Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {refreshTransactions.map((transaction) => (
              <tr key={transaction.transactionId} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">{transaction.transactionId}</td>
                <td className="px-6 py-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">{transaction.user.name}</div>
                    <div className="text-gray-500">{transaction.user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{formatCurrency(transaction.amount)}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-medium">
                    {transaction.method}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{transaction.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedTransaction(transaction)}
                    className="text-xs cursor-pointer bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-200 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedTransaction(null)}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <CircleX />
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Transaction Details: {selectedTransaction.transactionId}
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">User Information</h3>
              <p><strong>Name:</strong> {selectedTransaction.user.name}</p>
              <p><strong>Email:</strong> {selectedTransaction.user.email}</p>
              <p><strong>User ID:</strong> {selectedTransaction.user.userId}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Transaction Information</h3>
              <p><strong>Transaction ID:</strong> {selectedTransaction.transactionId}</p>
              <p><strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 text-xs rounded ${getStatusColor(selectedTransaction.status)}`}>
                  {selectedTransaction.status}
                </span>
              </p>
              <p><strong>Total Amount:</strong> {formatCurrency(selectedTransaction.amount)}</p>
              <p><strong>Payment Method:</strong> {selectedTransaction.method}</p>
              <p><strong>Transaction Status:</strong> {selectedTransaction.transactionStatus}</p>
              <p><strong>Transaction Date:</strong> {selectedTransaction.date}</p>
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
                  {selectedTransaction.products.map((prod, i) => (
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

export default DashboardTransations;