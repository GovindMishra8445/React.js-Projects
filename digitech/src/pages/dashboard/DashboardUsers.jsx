import React, { useState } from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import { CircleX } from "lucide-react";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    import("../../api/user").then(({ getAllUsers }) => {
      getAllUsers()
        .then((data) => {
          setUsers(data.users || []);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load users");
          setLoading(false);
        });
    });
  }, []);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRefresh = () => {
    console.log("Refreshed");
    setUsers([...initialUsers]); // simulate fetch
  };

  const handleBlockToggle = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );
  };

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen">
        <DashboardNav/>
      {/* Header */}
      <div className="flex mt-10 justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#0284c7]">Manage Users</h2>
        <button
          onClick={handleRefresh}
          className="bg-[#0284c7] text-white cursor-pointer px-4 py-1.5 rounded-md hover:bg-[#0285c7da] transition"
        >
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">User ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Joined Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.joined}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleBlockToggle(user.id)}
                    className={`text-xs px-3 py-1 rounded-md font-medium ${
                      user.blocked
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-xs cursor-pointer bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inline Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-40 flex items-center justify-center">
         <div className="bg-white w-full max-w-md rounded-xl p-8 relative shadow-xl transition-shadow hover:shadow-2xl">
  <button
    onClick={() => setSelectedUser(null)}
    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors duration-200 text-2xl focus:outline-none"
    aria-label="Close user details"
  >
    <CircleX />
  </button>
  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b pb-2 border-gray-200">User Details</h2>
  <div className="space-y-4 text-gray-800">
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">User ID:</span> 
      <span className="bg-gray-100 px-2 py-1 rounded">{selectedUser.id}</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Name:</span> 
      <span>{selectedUser.name}</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Email:</span> 
      <span className="text-blue-600 hover:underline">
        <a href={`mailto:${selectedUser.email}`}>{selectedUser.email}</a>
      </span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Phone:</span> 
      <span>{selectedUser.phone}</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Joined Date:</span> 
      <span>{selectedUser.joined}</span>
    </p>
        <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Gender:</span> 
      <span>{selectedUser.gender}</span>
    </p>
    <p className="flex items-center gap-2">
      <span className="font-medium text-gray-600">Status:</span> 
      <span 
        className={`px-2 py-1 rounded text-sm ${
          selectedUser.blocked 
            ? "bg-red-100 text-red-600" 
            : "bg-green-100 text-green-600"
        }`}
      >
        {selectedUser.blocked ? "Blocked" : "Active"}
      </span>
    </p>
  </div>
</div>
        </div>
      )}
    </div>
  );
};

export default DashboardUsers;