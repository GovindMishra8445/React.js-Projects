import React, { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <p className="animate-bounce text-start text-lg font-medium text-gray-500">
              Coming soon...
            </p>
          </div>
        );
      case "account":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="animate-bounce text-start text-lg font-medium text-gray-500">
              Coming soon...
            </p>
          </div>
        );
      case "notifications":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
            <p className="animate-bounce text-start text-lg font-medium text-gray-500">
              Coming soon...
            </p>
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
            <p className="animate-bounce text-start text-lg font-medium text-gray-500">
              Coming soon...
            </p>
          </div>
        );
      default:
        return <div>Select a setting option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Settings</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg
            className="w-10 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white p-6 md:w-64 ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h1 className="text-2xl font-bold mb-8 max-sm:hidden">Settings</h1>
        <nav>
          <ul className="space-y-4">
            <li
              onClick={() => {
                setActiveTab("profile");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded hover:bg-gray-700 ${
                activeTab === "profile" ? "bg-gray-700" : ""
              }`}
            >
              Profile
            </li>
            <li
              onClick={() => {
                setActiveTab("account");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded hover:bg-gray-700 ${
                activeTab === "account" ? "bg-gray-700" : ""
              }`}
            >
              Account
            </li>
            <li
              onClick={() => {
                setActiveTab("notifications");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded hover:bg-gray-700 ${
                activeTab === "notifications" ? "bg-gray-700" : ""
              }`}
            >
              Notifications
            </li>
            <li
              onClick={() => {
                setActiveTab("privacy");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded hover:bg-gray-700 ${
                activeTab === "privacy" ? "bg-gray-700" : ""
              }`}
            >
              Privacy
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-auto">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default Settings;
