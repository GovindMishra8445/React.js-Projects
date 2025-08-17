import React, { useState } from "react";
import { Button, TextField, Avatar } from "@mui/material";
import { MdEdit, MdCancel } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!/^[a-zA-Z ]{2,50}$/.test(name)) {
      newErrors.name = "Invalid name. Only letters and spaces allowed.";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Invalid contact number. Must be 10 digits.";
    }
    if (!/^[a-zA-Z ]{2,50}$/.test(role)) {
      newErrors.role = "Invalid role. Only letters and spaces allowed.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfilePic(null);
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Profile updated successfully!");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
  });

  return (
    <div className="p-8 bg-[#374152] rounded-md mt-15 shadow-md w-full">
      <div className="grid grid-cols-2 gap-4 items-center max-sm:grid-cols-1 max-sm:text-sm">
        <div className="font-semibold text-gray-200">Profile Picture</div>
        <div
          {...getRootProps()}
          className="bg-[#374152] w-full h-32 rounded-md flex flex-col p-2 items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
        >
          <input {...getInputProps()} />
          <SlCloudUpload className="text-3xl text-gray-200" />
          <p className="text-sm text-gray-200">
            {isDragActive
              ? "Drop your images here..."
              : "Drag your images here"}
          </p>
          <p className="text-xs text-gray-200">
            (Only *.jpeg, *.webp, and *.png images will be accepted)
          </p>
        </div>
      </div>
      {profilePic && (
        <div className="flex justify-center items-center p-3 pl-30">
          <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-md relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full p-0.5 object-fill"
            />
            <button
              onClick={removeImage}
              type="button"
              className="absolute top-1 right-1 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600 max-sm:p-0"
            >
              <MdCancel className="text-sm max-sm:text-sm" />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mt-8 items-center max-sm:grid-cols-1 max-sm:text-sm">
        <div className="text-[14px] font-[500] mb-8 text-gray-200 max-sm:mb-1">Name</div>
        <input
          placeholder="Enter the Name"
          required
          className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <div className="text-[14px] font-[500] mb-8 text-gray-200 max-sm:mb-1">Email</div>
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <div className="text-[14px] font-[500] mb-8 text-gray-200 max-sm:mb-1">Contact Number</div>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          required
          className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          error={!!errors.contact}
          helperText={errors.contact}
        />
        <div className="text-[14px] font-[500] mb-8 text-gray-200 max-sm:mb-1">Your Role</div>
        <input
          placeholder="Enter Role"
          required
          className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          error={!!errors.role}
          helperText={errors.role}
        />
      </div>

      <div className="flex justify-end mt-4">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
