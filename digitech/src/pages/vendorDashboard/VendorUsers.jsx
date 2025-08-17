import React, { useState } from "react";
import VendorDashboardNav from "../../components/navbar/VendorDashboardNav";
import { CircleX } from "lucide-react";
import { useApi } from '../../hooks/useApi';
import { getAllVendors } from "../../api/vendor";
// import { getVendorUsers } from '../../api/vendor';

const VendorUsers = () => {
  // const { data, loading, error, refetch } = useApi(getAllVendors);
  // const users = data?.users || [];
  const [selectedUser, setSelectedUser] = useState(null);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] ">
      <VendorDashboardNav />
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0284c7]">Customers</h2>
          <p className="text-sm text-gray-600 mt-1">List of users who ordered from you</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <div className="min-w-[700px]">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#0284c7]">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">User Name</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Email</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Phone</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Total Orders</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Total Spent</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-4 md:px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{user.email}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{user.phone}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{user.totalOrders}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-semibold">{formatCurrency(user.totalSpent)}</td>
                  <td className="px-4 md:px-6 py-4">
                    <button
                      onClick={() => setSelectedUser(user)}
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
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <CircleX />
            </button>
            <h2 className="text-lg font-bold mb-4 text-gray-800">User Details</h2>
            <div className="mb-2">
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Address:</strong> {selectedUser.address}</p>
              <p><strong>Joined:</strong> {selectedUser.joined}</p>
            </div>
            <div>
              <p><strong>Total Orders:</strong> {selectedUser.totalOrders}</p>
              <p><strong>Total Spent:</strong> {formatCurrency(selectedUser.totalSpent)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorUsers;