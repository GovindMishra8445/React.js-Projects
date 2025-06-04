import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    state: "",
    city: "",
    pinCode: "",
    gstNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.businessName) errors.businessName = "Business Name is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.pinCode) errors.pinCode = "Pin Code is required";
    if (!formData.address) errors.address = "Address is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", formData);
      // You can make an API call here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <div>
        <label htmlFor="businessName" className="block font-medium text-gray-700">
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          id="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
      </div>

      <div>
        <label htmlFor="state" className="block font-medium text-gray-700">
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>

      <div>
        <label htmlFor="pinCode" className="block font-medium text-gray-700">
          Pin Code
        </label>
        <input
          type="text"
          name="pinCode"
          id="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
      </div>

      <div>
        <label htmlFor="gstNumber" className="block font-medium text-gray-700">
          GST Number (Optional)
        </label>
        <input
          type="text"
          name="gstNumber"
          id="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="address" className="block font-medium text-gray-700">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default UpdateProfile;
