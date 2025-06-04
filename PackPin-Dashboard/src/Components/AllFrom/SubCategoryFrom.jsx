import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { MdCancel } from "react-icons/md";
import { Button } from "@mui/material";

const SubCategoryFrom = () => {
  // State for the product details
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState(""); // For Product Name
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [packOf, setPackOf] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handlePackOf = (event) => {
    setPackOf(event.target.value);
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

  const validate = () => {
    let newErrors = {};
    // Validate Product Name: letters, numbers, and spaces allowed, length between 2 and 50.
    if (!/^[a-zA-Z0-9 ]{2,50}$/.test(name)) {
      newErrors.name =
        "Invalid product name. Only letters, numbers, and spaces allowed.";
    }
    // (Add further validations for other fields if needed)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Product updated successfully!");
      // further submit logic...
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
    <section className="p-10 bg-[#374152] ">
      <form className="form">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
              Product Name
            </h2>
            <input
              type="text"
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
              Description
            </h2>
            <textarea
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
              Category
            </h2>
            <input
              type="text"
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
              SubCategory
            </h2>
            <Select
              id="SubCategoryProduct"
              size="small"
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={subCategory}
              label="SubCategory"
              onChange={handleSubCategory}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Pizza">Pizza</MenuItem>
              <MenuItem value="Burger">Burger</MenuItem>
              <MenuItem value="Samosa">Samosa </MenuItem>
            </Select>
          </div>

          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">Price</h2>
            <Select
              id="Price"
              size="small"
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={price}
              label="Price"
              onChange={handlePrice}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="40">40</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
              PackOf
            </h2>
            <Select
              id="PackOf"
              size="small"
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={packOf}
              label="PackOf"
              onChange={handlePackOf}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="10">10 PackOf</MenuItem>
              <MenuItem value="20">20 PackOf</MenuItem>
              <MenuItem value="30">30 PackOf</MenuItem>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center">
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
        <div className="flex justify-end mt-4">
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SubCategoryFrom;
