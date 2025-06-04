// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { SlCloudUpload } from "react-icons/sl";
// import { MdCancel } from "react-icons/md";
// import { Button } from "@mui/material";

// const CategoryForm = () => {
//   const [profilePic, setProfilePic] = useState(null);
//   const [name, setName] = useState(""); // For Product Name
//   const [description, setDescription] = useState("");
//   const [errors, setErrors] = useState({});


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

//   const validate = () => {
//     let newErrors = {};
//     if (!/^[A-Za-z ]{2,50}$/.test(name)) {
//       newErrors.name =
//         "Invalid name. Only letters and spaces allowed (2-50 characters).";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       console.log("Product updated successfully!");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/jpeg": [],
//       "image/png": [],
//       "image/webp": [],
//     },
//   });

//   return (
//     <section className="p-5 bg-gray-100 m-5">
//       <form className="form">
//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h2 className="text-[14px] font-[500] mb-1">Category Name</h2>
//             <input
//               type="text"
//               className="w-full h-[35px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs">{errors.name}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h2 className="text-[14px] font-[500] mb-1">Description</h2>
//             <textarea
//               className="w-full h-[100px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4 items-center">
//           <div className="font-semibold">Profile Picture</div>
//           <div
//             {...getRootProps()}
//             className="bg-gray-100 w-full h-32 rounded-md hover:bg-gray-200 flex flex-col p-2 items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
//           >
//             <input {...getInputProps()} />
//             <SlCloudUpload className="text-3xl text-gray-500" />
//             <p className="text-sm text-gray-700">
//               {isDragActive
//                 ? "Drop your images here..."
//                 : "Drag your images here"}
//             </p>
//             <p className="text-xs text-gray-600">
//               (Only *.jpeg, *.webp, and *.png images will be accepted)
//             </p>
//           </div>
//         </div>

//         {profilePic ? (
//           <div className="flex justify-center items-center p-3 pl-30">
//             <div className="w-20 h-20 border border-gray-300 flex items-center justify-center rounded-md relative">
//               {profilePic ? (
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="w-full h-full p-0.5 object-fill"
//                 />
//               ) : (
//                 "No image selected"
//               )}
//               {profilePic && (
//                 <button
//                   onClick={removeImage}
//                   className="absolute top-1 right-1 bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600 max-sm:p-0"
//                 >
//                   <MdCancel className="text-sm max-sm:text-sm" />
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </form>
//       <div className="flex justify-end mt-4">
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Save Changes
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default CategoryForm;



// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { SlCloudUpload } from "react-icons/sl";
// import { MdCancel } from "react-icons/md";
// import { Button } from "@mui/material";

// const CategoryForm = () => {
//   const [profilePic, setProfilePic] = useState(null);
//   const [name, setName] = useState(""); // For Category Name
//   const [description, setDescription] = useState("");
//   const [errors, setErrors] = useState({});
  
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

//   const validate = () => {
//     let newErrors = {};
//     if (!/^[A-Za-z ]{2,50}$/.test(name)) {
//       newErrors.name =
//         "Invalid name. Only letters and spaces allowed (2-50 characters).";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Modified handleSubmit to include API call
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const payload = {
//           name,
//           description,
//           image: profilePic, // assuming the API accepts the base64 image data
//         };
//         const response = await fetch("https://api.packpin.in/admin/add-category", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });
//         if (!response.ok) {
//           console.error("Failed to add category", response);
//           // You might want to set error state to show a message to the user.
//         } else {
//           console.log("Category added successfully!");
//           // Optionally, clear the form after successful submission
//           setName("");
//           setDescription("");
//           setProfilePic(null);
//           setErrors({});
//         }
//       } catch (error) {
//         console.error("Error adding category:", error);
//       }
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/jpeg": [],
//       "image/png": [],
//       "image/webp": [],
//     },
//   });

//   return (
//     <section className="p-5 bg-gray-100 m-5">
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h2 className="text-[14px] font-[500] mb-1">Category Name</h2>
//             <input
//               type="text"
//               className="w-full h-[35px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs">{errors.name}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h2 className="text-[14px] font-[500] mb-1">Description</h2>
//             <textarea
//               className="w-full h-[100px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4 items-center">
//           <div className="font-semibold">Profile Picture</div>
//           <div
//             {...getRootProps()}
//             className="bg-gray-100 w-full h-32 rounded-md hover:bg-gray-200 flex flex-col p-2 items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
//           >
//             <input {...getInputProps()} />
//             <SlCloudUpload className="text-3xl text-gray-500" />
//             <p className="text-sm text-gray-700">
//               {isDragActive
//                 ? "Drop your images here..."
//                 : "Drag your images here"}
//             </p>
//             <p className="text-xs text-gray-600">
//               (Only *.jpeg, *.webp, and *.png images will be accepted)
//             </p>
//           </div>
//         </div>

//         {profilePic ? (
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
//         ) : null}
//         <div className="flex justify-end mt-4">
//           <Button variant="contained" color="primary" type="submit">
//             Save Changes
//           </Button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default CategoryForm;

import React, { useContext, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload } from "react-icons/sl";
import { MdCancel } from "react-icons/md";
import { Button } from "@mui/material";
import { MyContext } from "../../App";

const CategoryForm = () => {
  // State for image preview and raw file
  const [profilePic, setProfilePic] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const context = useContext(MyContext);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const removeImage = () => {
    setProfilePic(null);
    setFile(null);
  };

  const validate = () => {
    let newErrors = {};
    if (!/^[A-Za-z ]{2,50}$/.test(name)) {
      newErrors.name =
        "Invalid name. Only letters and spaces allowed (2-50 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (validate()) {
      try {
        const token = localStorage.getItem("token");

        // Create FormData for file upload
        const formData = new FormData();
        formData.append("categoryName", name);
        formData.append("categoryDescription", description);
        // Append the file if available.
        if (file) {
          formData.append("categoryImage", file);
        }

        const response = await axios.post(
          "https://api.packpin.in/admin/add-category",
          formData,
          {
            headers: {
              // Let axios set Content-Type for FormData automatically.
              "Authorization": token,
            },
          }
        );

        console.log("Category added successfully!", response.data);
        // Clear the form fields after a successful submission.
        setName("");
        setDescription("");
        setProfilePic(null);
        setFile(null);
        setErrors({});
        // Optionally, you can call a context method here to close a modal/form.
      } catch (error) {
        console.error("Error adding category:", error.response || error);
      }
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

  return (
    <section className=" p-8 bg-[#374152]">
      <form className="form " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">Category Name</h2>
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
            <h2 className="text-[14px] font-[500] mb-1 text-gray-200">Description</h2>
            <textarea
              className="w-full h-[100px] text-white border border-[rgba(0,0,0,0.8)] focus:outline-none focus:border-gray-200 rounded-md p-3 text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
              {isDragActive ? "Drop your images here..." : "Drag your images here"}
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

export default CategoryForm;
