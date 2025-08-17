import React, { useState } from "react";
import DashboardNav from "../../components/navbar/DashboardNav";

import { useApi } from '../../hooks/useApi';
import { getAllVendors } from '../../api/vendor';

const AddVenderCategroy = () => {
  const { data, loading, error, refetch } = useApi(getAllVendors);
  // Access vendors array from the API response structure
  const vendorCategories = data?.result?.vendors || [];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    addressLine: "",
    city: "",
    state: "",
    zipCode: "",
    countryCode: "",
    dateOfBirth: "",
  });
// For Business Category modal
const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
const [businessCategoryName, setBusinessCategoryName] = useState("");
const [description, setDescription] = useState("");

const [businessCategories, setBusinessCategories] = useState([]);
  const handleOpenCreate = () => {
    setIsEditMode(false);
    setFormData({ firstName: "", category: "", mobileNumber: "" });
    setSelectedCategory({}); // trigger modal
  };

  const handleOpenEdit = (vendor) => {
    setIsEditMode(true);
    setFormData({
      firstName: vendor.firstName,
      lastName: vendor.lastName,
      email: vendor.email,
      mobileNumber: vendor.mobileNumber,
      addressLine: vendor.addressLine,
      city: vendor.city,
      state: vendor.state,
      zipCode: vendor.zipCode,
      countryCode: vendor.countryCode,
      dateOfBirth: vendor.dateOfBirth,
    });
    setSelectedCategory(vendor);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();

    if (isEditMode) {
      // Edit logic
      const updated = vendorCategories.map((v) =>
        v.name === selectedCategory.name ? { ...v, name: formData.firstName, count: formData.category } : v
      );
      setVendorCategories(updated);
      console.log("Edited Vendor:", formData);
    } else {
      // Create logic
      const newVendor = {
        name: formData.firstName,
        count: formData.category || "dry fruit",
        color: "bg-yellow-100",
        icon: "🛒",
      };
      setVendorCategories((prev) => [...prev, newVendor]);
      console.log("New Vendor:", newVendor);
    }

    handleCloseModal();
  };

  return (
    <div className="p-6">
      <DashboardNav/>
      <div className="md:flex mt-12 justify-between ">
        <p className="text-xl font-semibold text-[]">Vendor Category</p>
        <div className="flex gap-3">
             <button
        className=" bg-[#0284c7] hover:bg-[#0285c7dc] cursor-pointer text-white px-6 py-2 rounded-md font-semibold"
        onClick={handleOpenCreate}
      >
        Create Vendor
      </button>
     <button
  className="bg-[#0284c7] hover:bg-[#0285c7dc] cursor-pointer text-white px-6 py-2 rounded-md font-semibold"
  onClick={() => setIsBusinessModalOpen(true)}
>
  Add Business Category
</button>
{isBusinessModalOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
      <button
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        onClick={() => setIsBusinessModalOpen(false)}
      >
        &times;
      </button>
      <h2 className="text-xl font-semibold mb-4   text-gray-800">Add Business Category</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Business Category"
          value={businessCategoryName}
          onChange={(e) => setBusinessCategoryName(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Category Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
        />
        <button
          onClick={() => {
            if (businessCategoryName.trim() !== "") {
              setBusinessCategories((prev) => [...prev, businessCategoryName, description]);
              setBusinessCategoryName("");
              setDescription("");
            }
          }}
          className="w-full bg-[#0284c7] hover:bg-[#0285c7dc] text-white py-2 rounded-md font-semibold"
        >
          Add Category
        </button>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full ">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Category Name</th>
              </tr>
            </thead>
            <tbody>
              {businessCategories.map((cat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{cat}</td>
                </tr>
              ))}
              {businessCategories.length === 0 && (
                <tr>
                  <td colSpan="2" className="text-center text-gray-500 py-4">
                    No categories added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">Loading vendors...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-red-500">
                  Error loading vendors: {error.message}
                </td>
              </tr>
            ) : vendorCategories.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No vendors found.
                </td>
              </tr>
            ) : (
              vendorCategories.map((vendor, idx) => (
                <tr key={vendor._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {vendor.firstName} {vendor.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{vendor.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{vendor.mobileNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${vendor.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleOpenEdit(vendor)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

   

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {isEditMode ? `Edit Vendor - ${selectedCategory.name}` : "Create Vendor"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <input
                name="email"
                type="text"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                name="password"
                type="text"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                name="mobileNumber"
                type="text"
                placeholder="Mobile Number"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                name="addressLine"
                type="text"
                placeholder="Address Line"
                required
                value={formData.addressLine}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <div className="flex gap-2">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
                <input
                  name="state"
                  type="text"
                  placeholder="State"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <input
                  name="zipCode"
                  type="text"
                  placeholder="Zip Code"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
                <input
                  name="countryCode"
                  type="text"
                  placeholder="Country Code"
                  required
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <input
                name="dateOfBirth"
                type="text"
                placeholder="Date of Birth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              {/* <input
                name="text"
                type="text"
                placeholder="Category (dry fruit/spices)"
                value={formData.category}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                name="mobileNumber"
                type="text"
                placeholder="Mobile Number (optional)"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              /> */}
              <button
                type="submit"
                className="w-full bg-[#0284c7] hover:bg-[#0285c7dc] text-white py-2 rounded-md font-semibold"
              >
                {isEditMode ? "Update Vendor" : "Add Vendor"}
              </button>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default AddVenderCategroy;