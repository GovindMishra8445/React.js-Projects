import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useApi } from '../../hooks/useApi';
import { getUserProfile } from '../../api/user';

const DashboardNav = () => {
  // Replace '1' with the actual user id or fetch from state/context
  const userId = 1;
  const { data: userData } = useApi(() => getUserProfile(userId));
  const user = userData?.user;
  const notifications = [];
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white w-full h-16 shadow-md px-6 sm:px-12 flex items-center justify-between rounded-full sticky top-0 z-10 transition-all duration-300">
      <p className="text-2xl cursor-pointer dropdown dropdown-hover">
<IoMdNotificationsOutline />
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <p className="text-lg pl-3">Notification</p>
    <li><a>No notifications</a></li>
  </ul>
</p>



        <button
          className="relative rounded-full border-2 border-gray-200 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
          onClick={() => setOpen(true)}
        >
          <img
            src="/images/profile.jpg"
            alt="Admin Profile"
            className="w-10 h-10 object-cover rounded-full ring-1 ring-gray-200"
          />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[95%] max-w-md relative transform transition-all duration-300 scale-100">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src="/images/profile.jpg"
                  alt="Admin"
                  className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-100 shadow-md"
                />
                <span className="absolute bottom-0 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Admin Name</h2>
              <p className="text-gray-600 text-sm mb-4">admin@example.com</p>

              <div className="mt-4 text-sm text-left space-y-2 bg-gray-50 p-4 rounded-lg">
                <p><strong className="text-gray-900">Role:</strong> {user?.role || 'N/A'}</p>
                <p><strong className="text-gray-900">Joined:</strong> {user?.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : 'N/A'}</p>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardNav;