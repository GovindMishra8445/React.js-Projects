import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const UserProfile = () => {
  const { setLoggedInUser, loggedInUser } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);
  // Single state variable for the update modal popup
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "profile";
  const [activeTab, setActiveTab] = useState(initialTab);
  const token = localStorage.getItem("LoggedIn");

  // Redirect to login if not logged in
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  // Fetch orders
  useEffect(() => {
    axios
      .post(
        "https://api.packpin.in/users/get-user-order",
        {},
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.orderData);
          setOrderData(response.data.orderData);
        } else {
          setOrderData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user orders:", error);
      });
  }, [token]);

  // Fetch user data and automatically open the update modal if incomplete
  useEffect(() => {
    axios
      .post(
        "https://api.packpin.in/users/get-daitles",
        {},
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status) {
          setUserData(response.data.data);
          // Automatically open update modal if businessName is missing
          if (!response.data.data.businessName) {
            setIsUpdateModalOpen(true);
          }
        } else {
          console.error("Failed to fetch user data:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token]);

  // State for update form (pre-filled from userData)
  const [formData, setFormData] = useState({
    name: "",
    whatsAppNo: "",
    businessName: "",
    state: "",
    city: "",
    pinCode: "",
    gstNumber: "",
    address: "",
  });

  // When userData is loaded, update formData
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        whatsAppNo: userData.whatsAppNo || "",
        businessName: userData.businessName || "",
        state: userData.state || "",
        city: userData.city || "",
        pinCode: userData.pinCode || "",
        gstNumber: userData.GSTNumber || "",
        address: userData.address || "",
      });
    }
  }, [userData]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Regex validation added for each field
  const validate = () => {
    const newErrors = {};

    // Define regex patterns
    const namePattern = /^[a-zA-Z ]{2,}$/;
    const phonePattern = /^[0-9]{10}$/; // exactly 10 digits
    const stateCityPattern = /^[a-zA-Z ]+$/;
    const pinPattern = /^[0-9]{6}$/; // exactly 6 digits
    const gstPattern = /^[0-9A-Z]{15}$/; // exactly 15 characters: digits and uppercase letters

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!namePattern.test(formData.name)) {
      newErrors.name = "Name must be at least 2 letters and only contain letters and spaces";
    }

    if (!formData.whatsAppNo) {
      newErrors.whatsAppNo = "WhatsApp number is required";
    } else if (!phonePattern.test(formData.whatsAppNo)) {
      newErrors.whatsAppNo = "WhatsApp number must be exactly 10 digits";
    }

    if (!formData.businessName) {
      newErrors.businessName = "Business Name is required";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    } else if (!stateCityPattern.test(formData.state)) {
      newErrors.state = "State must contain only letters and spaces";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    } else if (!stateCityPattern.test(formData.city)) {
      newErrors.city = "City must contain only letters and spaces";
    }

    if (!formData.pinCode) {
      newErrors.pinCode = "Pin Code is required";
    } else if (!pinPattern.test(formData.pinCode)) {
      newErrors.pinCode = "Pin Code must be exactly 6 digits";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    // GST number is optional; if provided, validate it
    if (formData.gstNumber && !gstPattern.test(formData.gstNumber)) {
      newErrors.gstNumber = "GST Number must be exactly 15 characters (digits/uppercase)";
    }

    return newErrors;
  };

  // Handle update form submission (for profile update)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("https://api.packpin.in/users/profile-update", formData, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status) {
            // Close the update modal upon success
            setIsUpdateModalOpen(false);
            // Re-fetch user data to update the profile display
            axios
              .post(
                "https://api.packpin.in/users/get-daitles",
                {},
                {
                  headers: {
                    Authorization: `${token}`,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => {
                if (res.data.status) {
                  setUserData(res.data.data);
                } else {
                  console.error(
                    "Failed to fetch updated user data:",
                    res.data.message
                  );
                }
              })
              .catch((error) => {
                console.error("Error fetching updated user data:", error);
              });
          } else {
            console.error("Failed to update user data:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("LoggedIn");
    setLoggedInUser(null);
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-4 max-w-md bg-gray-100 shadow-md rounded-md">
            {userData ? (
              [
                { label: "ID", value: userData.user_id },
                { label: "Name", value: userData.name },
                { label: "Email", value: userData.email },
                { label: "Country", value: userData.country },
                { label: "WhatsApp No", value: userData.whatsAppNo },
                { label: "BusinessName", value: userData.businessName },
                { label: "State", value: userData.state },
                { label: "City", value: userData.city },
                { label: "PinCode", value: userData.pinCode },
                { label: "GSTNumber", value: userData.gstNumber },
                { label: "Address", value: userData.address },
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <span className="font-semibold text-gray-700">{item.label}:</span>
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))
            ) : (
              <p>Loading data...</p>
            )}
            <div className="flex justify-center">
              <button
                onClick={() => setIsUpdateModalOpen(true)}
                className="hover:bg-black bg-white hover:text-white text-black border-2 cursor-pointer font-light px-8 py-2 mt-4 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="p-4 flex justify-center m-10">
            <button
              onClick={handleLogOut}
              className="hover:bg-black bg-white hover:text-white text-black border-2 cursor-pointer font-light px-8 py-2 mt-4 rounded"
            >
              LogOut
            </button>
          </div>
        );
      case "orders":
        return (
          <>
            {orderData && orderData.length > 0 ? (
              orderData.map((item) => (
                <NavLink to="/order-details" key={item.order_id}>
                  <div className="p-4 w-full h-20 bg-gray-500 rounded-md mb-4 text-black text-xl">
                    <p>Order ID: {item.order_id}</p>
                    <p>Order Status: {item.status}</p>
                  </div>
                </NavLink>
              ))
            ) : (
              <div className="p-4 flex justify-end">Oops! No Order</div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Update Profile Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-2 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Update Your Profile
              </h2>
              <button
                onClick={() => {
                  setIsUpdateModalOpen(false);
                  // Optionally, reset formData if needed:
                  setFormData({
                    name: "",
                    whatsAppNo: "",
                    businessName: "",
                    state: "",
                    city: "",
                    pinCode: "",
                    gstNumber: "",
                    address: "",
                  });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}

                <input
                  type="text"
                  name="whatsAppNo"
                  id="whatsAppNo"
                  placeholder="WhatsApp No"
                  value={formData.whatsAppNo}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.whatsAppNo && (
                  <p className="text-red-500 text-sm">{errors.whatsAppNo}</p>
                )}

                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm">{errors.businessName}</p>
                )}

                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}

                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}

                <input
                  type="text"
                  name="pinCode"
                  id="pinCode"
                  placeholder="Pin-Code"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.pinCode && (
                  <p className="text-red-500 text-sm">{errors.pinCode}</p>
                )}

                <input
                  type="text"
                  name="gstNumber"
                  id="gstNumber"
                  placeholder="GST Number (Optional)"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.gstNumber && (
                  <p className="text-red-500 text-sm">{errors.gstNumber}</p>
                )}

                <textarea
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-8xl mx-auto mt-2 bg-gray-100 shadow-lg rounded-lg">
        <div className="flex border-b">
          {[
            { id: "profile", label: "Profile" },
            { id: "settings", label: "Settings" },
            { id: "orders", label: "Orders" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 p-3 text-center font-medium border-b-2 transition-colors duration-300 ${
                activeTab === tab.id
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </>
  );
};

export default UserProfile;

