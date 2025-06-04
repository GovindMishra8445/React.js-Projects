// import React, { useState, useEffect } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { useDropzone } from "react-dropzone";
// import { SlCloudUpload } from "react-icons/sl";
// import { MdCancel } from "react-icons/md";
// import { Button } from "@mui/material";

// const ProductForm = () => {
//   // State for product form details
//   const [profilePic, setProfilePic] = useState(null);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [packOf, setPackOf] = useState("");
//   const [errors, setErrors] = useState({});
//   const [products, setProducts] = useState([]);



//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeImage = () => {
//     setProfilePic(null);
//   };

//   const handleSubmit = () => {
//     if (!name || !category || !subCategory || !price || !packOf) {
//       setErrors({ message: "Please fill all fields" });
//       return;
//     }
//     const newProduct = {
//       productName: name,
//       description,
//       categoryName: category,
//       subCategoryName: subCategory,
//       productImage: profilePic,
//       packWithPrice: [{ packOf, price }],
//     };
//     setProducts([...products, newProduct]);
//     setName("");
//     setDescription("");
//     setCategory("");
//     setSubCategory("");
//     setPrice("");
//     setPackOf("");
//     setProfilePic(null);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/jpeg": [], "image/png": [], "image/webp": [] },
//   });

//   return (
//     <section className="p-10 bg-[#374152] ">
//       {/* Form Section */}
//       <form>
//         <div className="grid grid-cols-1 mb-3">
//           <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
//             Product Name
//           </h2>
//           <input
//             type="text"
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs">{errors.message}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 mb-3">
//           <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
//             Description
//           </h2>
//           <textarea
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-4 mb-3">
//           <Select
//             value={subCategory}
//             placeholder="Category"
//             onChange={(e) => setCategory(e.target.value)} 
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//           >
//             <MenuItem value="visiting card">Visiting Card</MenuItem>
//             <MenuItem value="other">Other</MenuItem>
//           </Select>
//           <Select
//             value={subCategory}
//             placeholder="SubCategory"
//             onChange={(e) => setSubCategory(e.target.value)}
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//           >
//             <MenuItem value="visiting card">Visiting Card</MenuItem>
//             <MenuItem value="other">Other</MenuItem>
//           </Select>

//           <Select
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//           >
//             <MenuItem value="10.99">10.99</MenuItem>
//             <MenuItem value="45.99">45.99</MenuItem>
//             <MenuItem value="85.99">85.99</MenuItem>
//           </Select>
//         </div>

//         <div className="grid grid-cols-2 gap-4 items-center">
//           <div className="font-semibold text-gray-200">Profile Picture</div>
//           <div
//             {...getRootProps()}
//             className="bg-[#374152] w-full h-32 rounded-md flex flex-col p-2 items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
//           >
//             <input {...getInputProps()} />
//             <SlCloudUpload className="text-3xl text-gray-200" />
//             <p className="text-sm text-gray-200">
//               {isDragActive
//                 ? "Drop your images here..."
//                 : "Drag your images here"}
//             </p>
//             <p className="text-xs text-gray-200">
//               (Only *.jpeg, *.webp, and *.png images will be accepted)
//             </p>
//           </div>
//         </div>

//         {profilePic && (
//           <div className="flex justify-center items-center p-3 pl-30">
//             <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-md relative">
//               <img
//                 src={profilePic}
//                 alt="Profile"
//                 className="w-full h-full p-0.5 object-fill"
//               />
//               <button
//                 onClick={removeImage}
//                 type="button"
//                 className="absolute top-1 right-1 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600 max-sm:p-0"
//               >
//                 <MdCancel className="text-sm max-sm:text-sm" />
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="flex justify-end mt-4">
//           <Button variant="contained" color="primary" type="submit">
//             Save
//           </Button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ProductForm;


// import React, { useState } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { useDropzone } from "react-dropzone";
// import { SlCloudUpload } from "react-icons/sl";
// import { MdCancel } from "react-icons/md";
// import { Button } from "@mui/material";

// const ProductForm = () => {
//   // State for product form details
//   const [profilePic, setProfilePic] = useState(null);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState(""); // categoryId
//   const [subCategory, setSubCategory] = useState(""); // subCategoryId
//   const [price, setPrice] = useState("");
//   const [packOf, setPackOf] = useState("");
//   const [errors, setErrors] = useState({});
//   const [products, setProducts] = useState([]);

//   // Dropzone for image upload
//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };



  

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/jpeg": [], "image/png": [], "image/webp": [], "image/svg+xml": [], "image/gif": [] },
//   });

//   const removeImage = () => {
//     setProfilePic(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       return;
//     }
//     try {
//       const token = localStorage.getItem("token");
  
//       // Create FormData for file upload
//       const formData = new FormData();
//       formData.append("categoryName", categoryName);
//       formData.append("productName", productName);
//       formData.append("description", description);
//       formData.append("subCategoryName", subCategoryName);
//       // Append the file if available.
//       if (file) {
//         formData.append("productImage", file);
//       }
  
//       const response = await axios.post(
//         "https://api.packpin.in/admin/create-product",
//         formData,
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
  
//       console.log("Category added successfully!", response.data);
  
//       const newProduct = {
//         productName: productName,
//         description,
//         categoryId: category,
//         subCategoryId: subCategory,
//         productImage: profilePic,
//         priceAndPack: [{ packOf, price }],
//       };
//       setProducts([...products, newProduct]);
  
//       // Reset form fields
//       setName("");
//       setDescription("");
//       setCategory("");
//       setSubCategory("");
//       setPrice("");
//       setPackOf("");
//       setProfilePic(null);
//       setFile(null);
//       setErrors({});
//     } catch (error) {
//       console.error("Error adding category:", error.response || error);
//     }
//   };
  

//   return (
//     <section className="p-10 bg-[#374152]">
//       <form onSubmit={handleSubmit}>
//         {/* Product Name */}
//         <div className="grid grid-cols-1 mb-3">
//           <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
//             Product Name
//           </h2>
//           <input
//             type="text"
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs">{errors.message}</p>
//           )}
//         </div>

//         {/* Description */}
//         <div className="grid grid-cols-1 mb-3">
//           <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
//             Description
//           </h2>
//           <textarea
//             className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         {/* Category, SubCategory, Price and PackOf */}
//         <div className="grid grid-cols-2 gap-2 mb-3">
//           <div className="flex flex-col">
//             <label className="text-[14px] font-[500] text-gray-200">
//               Select Category:
//             </label>
//             <Select
//               value={category}
//               displayEmpty
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             >
//               <MenuItem value="" disabled>
//                 Select Category
//               </MenuItem>
//               <MenuItem value="cat1">Category 1</MenuItem>
//               <MenuItem value="cat2">Category 2</MenuItem>
//             </Select>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[14px] font-[500] text-gray-200">
//               Select SubCategory:
//             </label>
//             <Select
//               value={subCategory}
//               displayEmpty
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             >
//               <MenuItem value="" disabled>
//                 Select SubCategory
//               </MenuItem>
//               <MenuItem value="subCat1">SubCategory 1</MenuItem>
//               <MenuItem value="subCat2">SubCategory 2</MenuItem>
//             </Select>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[14px] font-[500] text-gray-200">
//               Select Price:
//             </label>
//             <Select
//               value={price}
//               displayEmpty
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             >
//               <MenuItem value="" disabled>
//                 Select Price
//               </MenuItem>
//               <MenuItem value="10.99">10.99</MenuItem>
//               <MenuItem value="45.99">45.99</MenuItem>
//               <MenuItem value="85.99">85.99</MenuItem>
//             </Select>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-[14px] font-[500] text-gray-200">
//               Select PackOf:
//             </label>
//             <Select
//               value={packOf}
//               displayEmpty
//               onChange={(e) => setPackOf(e.target.value)}
//               className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
//             >
//               <MenuItem value="" disabled>
//                 Select PackOf
//               </MenuItem>
//               <MenuItem value="1">1</MenuItem>
//               <MenuItem value="4">4</MenuItem>
//               <MenuItem value="8">8</MenuItem>
//             </Select>
//           </div>
//         </div>

//         {/* Product Image */}
//         <div className="grid grid-cols-2 gap-4 items-center">
//           <div className="font-semibold text-gray-200">Product Image</div>
//           <div
//             {...getRootProps()}
//             className="bg-[#374152] w-full h-32 rounded-md flex flex-col p-2 items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
//           >
//             <input {...getInputProps()} />
//             <SlCloudUpload className="text-3xl text-gray-200" />
//             <p className="text-sm text-gray-200">
//               {isDragActive
//                 ? "Drop your images here..."
//                 : "Drag your images here"}
//             </p>
//             <p className="text-xs text-gray-200">
//               (Only *.jpeg, *.webp, and *.png images will be accepted)
//             </p>
//           </div>
//         </div>

//         {profilePic && (
//           <div className="flex justify-center items-center p-3">
//             <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-md relative">
//               <img
//                 src={profilePic}
//                 alt="Product"
//                 className="w-full h-full p-0.5 object-fill"
//               />
//               <button
//                 onClick={removeImage}
//                 type="button"
//                 className="absolute top-1 right-1 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600 p-1"
//               >
//                 <MdCancel className="text-sm" />
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="flex justify-end mt-4">
//           <Button variant="contained" color="primary" type="submit">
//             Save
//           </Button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ProductForm;













import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { MdCancel } from "react-icons/md";
import { Button } from "@mui/material";
import axios from "axios";

const ProductForm = () => {
  // State for product form details
  const [profilePic, setProfilePic] = useState(null); // for preview
  const [file, setFile] = useState(null); // for the actual file
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // categoryId
  const [subCategory, setSubCategory] = useState(""); // subCategoryId
  const [price, setPrice] = useState("");
  const [packOf, setPackOf] = useState("");
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);

  // Dropzone for image upload (accepting SVG as well)
  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });

  const removeImage = () => {
    setProfilePic(null);
    setFile(null);
  };

  // Combined submit handler for product creation
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      // Create FormData for file upload and product data
      const formData = new FormData();
      formData.append("productName", name);
      formData.append("description", description);
      formData.append("categoryId", category);
      formData.append("subCategoryId", subCategory);
      if (file) {
        formData.append("productImage", file);
      }
      // Append packWithPrice as JSON string
      formData.append("packWithPrice", JSON.stringify([{ packOf, price }]));

      const response = await axios.post(
        "https://api.packpin.in/admin/create-product",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Product created successfully!", response.data);
    
      setProducts([...products, response.data.data]);

      // Reset form fields
      setName("");
      setDescription("");
      setCategory("");
      setSubCategory("");
      setPrice("");
      setPackOf("");
      setProfilePic(null);
      setFile(null);
      setErrors({});
    } catch (error) {
      console.error("Error creating product:", error.response || error);
      setErrors({ message: "Error creating product" });
    }
  };

  return (
    <section className="p-10 bg-[#374152]">
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="grid grid-cols-1 mb-3">
          <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
            Product Name
          </h2>
          <input
            type="text"
            className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)] 
              focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 mb-3">
          <h2 className="text-[14px] font-[500] mb-1 text-gray-200">
            Description
          </h2>
          <textarea
            className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)]
              focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Category, SubCategory, Price and PackOf */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex flex-col">
            <label className="text-[14px] font-[500] text-gray-200">
              Select Category:
            </label>
            <Select
              value={category}
              displayEmpty
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)]
                focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="679b54d429bdaa61b495532f">Letterhead</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-[500] text-gray-200">
              Select SubCategory:
            </label>
            <Select
              value={subCategory}
              displayEmpty
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)]
                focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            >
              <MenuItem value="" disabled>
                Select SubCategory
              </MenuItem>
              <MenuItem value="679c9fe302400d9190f82fcf">Visiting Card</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-[500] text-gray-200">
              Select Price:
            </label>
            <Select
              value={price}
              displayEmpty
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)]
                focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            >
              <MenuItem value="" disabled>
                Select Price
              </MenuItem>
              <MenuItem value="10.99">10.99</MenuItem>
              <MenuItem value="45.99">45.99</MenuItem>
              <MenuItem value="85.99">85.99</MenuItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-[500] text-gray-200">
              Select PackOf:
            </label>
            <Select
              value={packOf}
              displayEmpty
              onChange={(e) => setPackOf(e.target.value)}
              className="w-full h-[35px] text-white border border-[rgba(0,0,0,0.8)]
                focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
            >
              <MenuItem value="" disabled>
                Select PackOf
              </MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="8">8</MenuItem>
            </Select>
          </div>
        </div>

        {/* Product Image */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="font-semibold text-gray-200">Product Image</div>
          <div
            {...getRootProps()}
            className="bg-[#374152] w-full h-32 rounded-md flex flex-col p-2 
              items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
          >
            <input {...getInputProps()} />
            <SlCloudUpload className="text-3xl text-gray-200" />
            <p className="text-sm text-gray-200">
              {isDragActive ? "Drop your images here..." : "Drag your images here"}
            </p>
            <p className="text-xs text-gray-200">
              (Only *.jpeg, *.webp, *.png, and *.svg images will be accepted)
            </p>
          </div>
        </div>

        {profilePic && (
          <div className="flex justify-center items-center p-3">
            <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-md relative">
              <img
                src={profilePic}
                alt="Product"
                className="w-full h-full p-0.5 object-fill"
              />
              <button
                onClick={removeImage}
                type="button"
                className="absolute top-1 right-1 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600 p-1"
              >
                <MdCancel className="text-sm" />
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

export default ProductForm;
