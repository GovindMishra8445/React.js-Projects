// import React, { useContext, useEffect, useState } from "react";

// function ViewSubCategoryDetails({ open, handleClose, category, updateMode }) {
//   const [loading, setLoading] = useState(true);
//   return (
//     <div className="card my-5 shadow-md sm:rounded-lg bg-white">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left text-gray-500 border-collapse p-3">
//           <thead className="text-xs uppercase bg-[#1f2a38] text-white border-b">
//             <tr>
//               <th className="px-4 py-4">S.No.</th>
//               <th className="px-2 py-2">Category Name</th>
//               <th className="px-4 py-4">Description</th>
//               <th className="px-4 py-4">Image</th>
//               <th className="px-4 py-4">Created At</th>
//               <th className="px-4 py-4">Updated At</th>
//               <th className="px-4 py-4">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               [...Array(8)].map((_, i) => (
//                 <tr key={i} className="border-b bg-[#1f2a38]">
//                   <td className="px-2 py-2">
//                     <div className="h-2 w-5 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                   <td className="py-2">
//                     <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                   <td className="py-2">
//                     <div className="w-[80px] h-[80px] bg-gray-300 animate-pulse rounded-md"></div>
//                   </td>
//                   <td className="py-2">
//                     <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                   <td className="px-4 py-2">
//                     <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                   <td className="px-4 py-2">
//                     <div className="h-4 w-40 bg-gray-300 animate-pulse rounded"></div>
//                   </td>
//                 </tr>
//               ))
//             ) : categories.length > 0 ? (
//               categories.map((category, index) => (
//                 <tr key={category._id} className="border-b bg-[#1f2a38] group">
//                   <td className="px-4 py-2 text-white">{index + 1}</td>
//                   <td className="px-2 py-2 text-blue-500 uppercase">
//                     {category.categoryName}
//                   </td>
//                   <td className="px-2 py-2 text-white">
//                     <ExpandableText
//                       text={category.categoryDescription}
//                       limit={20}
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <img
//                       src={category.categoryImage}
//                       alt="Category-Image"
//                       className="w-[80px] h-[80px] object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
//                     />
//                   </td>
//                   <td className="px-4 py-2 text-white">
//                     {new Date(category.createdAt).toLocaleString()}
//                   </td>
//                   <td className="px-4 py-2 text-white">
//                     {new Date(category.updatedAt).toLocaleString()}
//                   </td>
//                   <td className="px-2 py-10 flex gap-2 items-center">
//                     <Tooltip title="View Category Details" placement="top">
//                       <span style={{ cursor: "pointer" }}>
//                         <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
//                           <GrView />
//                         </Button>
//                       </span>
//                     </Tooltip>
//                     <Tooltip title="Update Category" placement="top">
//                       <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
//                         <RxUpdate />
//                       </Button>
//                     </Tooltip>
//                     <Tooltip title="Delete Category" placement="top">
//                       <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
//                         <RiDeleteBinLine />
//                       </Button>
//                     </Tooltip>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center p-4">
//                   No categories available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ViewSubCategoryDetails;

// import React, { useEffect, useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import { Button, Tooltip } from "@mui/material";
// import { GrView } from "react-icons/gr";
// import { RxUpdate } from "react-icons/rx";
// import { RiDeleteBinLine } from "react-icons/ri";
// import axios from "axios";


// function ViewSubCategoryDetails({ open, handleClose, category, updateMode }) {

//    const [loading, setLoading] = useState(true);
//     const [subCategories, setSubCategories] = useState([]);


//   if (!category) return null;



//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.error("No token found. Please log in first.");
//       setLoading(false);
//       return;
//     }
//     axios
//       .get("https://api.packpin.in/admin/subcategory-with-category", {
//         headers: {
//           // Use `Bearer ${token}` if your API requires it.
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("Fetched categories:", response.data);
//         if (response.data && response.data.categories) {
//           setSubCategories(response.data.categories);
//         }
//       })
//       .catch((err) => console.error("Error fetching categories:", err))
//       .finally(() => setLoading(false));
//   }, []);


//   return (
//     <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
//       <DialogTitle>
//         {updateMode
//           ? "Update Sub-Category Details"
//           : "View Sub-Category Details"}
//       </DialogTitle>
//       <DialogContent>
//         <div className="card my-2 shadow-md sm:rounded-lg bg-white">
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
//             <table className="w-full text-sm text-left text-gray-500 border-collapse p-3">
//               <thead className="text-xs uppercase bg-[#1f2a38] text-white border-b">
//                 <tr>
//                   <th className="px-4 py-4">S.No.</th>
//                   <th className="px-2 py-2">Category Name</th>
//                   <th className="px-2 py-2">subCategory Name</th>
//                   <th className="px-4 py-4">subCategory Description</th>
//                   <th className="px-4 py-4">subCategory Image</th>
//                   <th className="px-4 py-4">Created At</th>
//                   <th className="px-4 py-4">Updated At</th>
//                   <th className="px-4 py-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   [...Array(8)].map((_, i) => (
//                     <tr key={i} className="border-b bg-[#1f2a38]">
//                       <td className="px-2 py-2">
//                         <div className="h-2 w-5 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                       <td className="py-2">
//                         <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                       <td className="px-2 py-2">
//                         <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                       <td className="py-2">
//                         <div className="w-[80px] h-[80px] bg-gray-300 animate-pulse rounded-md"></div>
//                       </td>
//                       <td className="py-2">
//                         <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                       <td className="px-4 py-2">
//                         <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                       <td className="px-4 py-2">
//                         <div className="h-4 w-40 bg-gray-300 animate-pulse rounded"></div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : data.length > 0 ? (
//                   data.map((subCategories, index) => (
//                     <tr
//                       key={subCategories._id}
//                       className="border-b bg-[#1f2a38] group"
//                     >
//                       <td className="px-4 py-2 text-white">{index + 1}</td>
//                       <td className="px-2 py-2 text-blue-500 uppercase">
//                         {subCategories.categoryName}
//                       </td>
//                       <td className="px-2 py-2 text-blue-500 uppercase">
//                         {subCategories.subCategoryName}
//                       </td>
//                       <td className="px-2 py-2 text-white">
//                         <ExpandableText
//                           text={subCategories.subCategoryDescription}
//                           limit={20}
//                         />
//                       </td>
//                       <td className="px-4 py-2">
//                         <img
//                           src={subCategories.subCategoryImage}
//                           alt="Category-Image"
//                           className="w-[80px] h-[80px] object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
//                         />
//                       </td>
//                       <td className="px-4 py-2 text-white">
//                         {new Date(category.createdAt).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2 text-white">
//                         {new Date(subCategories.updatedAt).toLocaleString()}
//                       </td>
//                       <td className="px-2 py-10 flex gap-2 items-center">
//                         <Tooltip title="View Category Details" placement="top">
//                           <span
//                             onClick={() => handleViewDetails(category)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
//                               <GrView />
//                             </Button>
//                           </span>
//                         </Tooltip>
//                         <Tooltip title="Update Category" placement="top">
//                           <Button
//                             className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]"
//                             onClick={() => handleUpdateDetails(category)}
//                           >
//                             <RxUpdate />
//                           </Button>
//                         </Tooltip>
//                         <Tooltip title="Delete Category" placement="top">
//                           <Button
//                             className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]"
//                             onClick={() => handleDeleteCategory(category._id)}
//                           >
//                             <RiDeleteBinLine />
//                           </Button>
//                         </Tooltip>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-center p-4">
//                       No categories available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {/* Optionally, you can include additional action buttons here if needed */}
//           <div className="flex justify-end mt-4">
//             <Button variant="contained" onClick={handleClose}>
//               Close
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ViewSubCategoryDetails;









import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Button, Tooltip } from "@mui/material";
import { GrView } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";


const ExpandableText = ({ text, limit = 20 }) => {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;
  const shouldTruncate = text.length > limit;
  const displayedText = expanded ? text : text.substring(0, limit);
  return (
    <span>
      {displayedText}
      {shouldTruncate && !expanded && " ... "}
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 ml-1 focus:outline-none cursor-pointer"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </span>
  );
};


function ViewSubCategoryDetails({ open, handleClose, category, updateMode }) {
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // if (!category) {
    //   setLoading(false);
    //   return;
    // }
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in first.");
      setLoading(false);
      return;
    }
    axios
      .get("https://api.packpin.in/admin/subcategory-with-category", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {

        console.log("Fetched subcategories:", response.data);
        
        if (response.data && response.data) {

          console.log("Fetched subcategories:", response.data);
          
          setSubCategories(response.data);
        }
      })
      .catch((err) => console.error("Error fetching subcategories:", err))
      .finally(() => setLoading(false));
  }, []);



  if (!category) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {updateMode ? "Update Sub-Category Details" : "View Sub-Category Details"}
      </DialogTitle>
      <DialogContent>
        <div className="card my-2 shadow-md sm:rounded-lg bg-white">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
            <table className="w-full text-sm text-left text-gray-500 border-collapse">
              <thead className="text-xs uppercase bg-[#1f2a38] text-white border-b">
                <tr>
                  <th className="px-4 py-4">S.No.</th>
                  <th className="px-2 py-2">Category Name</th>
                  <th className="px-2 py-2">Sub-Category Name</th>
                  <th className="px-4 py-4">Sub-Category Description</th>
                  <th className="px-4 py-4">Sub-Category Image</th>
                  <th className="px-4 py-4">Created At</th>
                  <th className="px-4 py-4">Updated At</th>
                  <th className="px-4 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  [...Array(8)].map((_, i) => (
                    <tr key={i} className="border-b bg-[#1f2a38]">
                      <td className="px-2 py-2">
                        <div className="h-2 w-5 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="px-2 py-2">
                        <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="py-2">
                        <div className="w-[80px] h-[80px] bg-gray-300 animate-pulse rounded-md"></div>
                      </td>
                      <td className="py-2">
                        <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="h-4 w-40 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  ))
                ) : subCategories.length > 0 ? (
                  subCategories.map((subCategory, index) => (
                    <tr key={subCategory._id} className="border-b bg-[#1f2a38] group">
                      <td className="px-4 py-2 text-white">{index + 1}</td>
                      <td className="px-2 py-2 text-blue-500 uppercase">
                        {subCategory.categoryName}
                      </td>
                      <td className="px-2 py-2 text-blue-500 uppercase">
                        {subCategory.subCategoryName}
                      </td>
                      <td className="px-2 py-2 text-white">
                        <ExpandableText
                          text={subCategory.subCategoryDescription}
                          limit={20}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <img
                          src={subCategory.subCategoryImage}
                          alt="SubCategory-Image"
                          className="w-[80px] h-[80px] object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-2 text-white">
                        {new Date(subCategory.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 text-white">
                        {new Date(subCategory.updatedAt).toLocaleString()}
                      </td>
                      <td className="px-2 py-10 flex gap-2 items-center">
                        <Tooltip title="View Sub-Category Details" placement="top">
                          <span style={{ cursor: "pointer" }}>
                            <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
                              <GrView />
                            </Button>
                          </span>
                        </Tooltip>
                        <Tooltip title="Update Sub-Category" placement="top">
                          <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
                            <RxUpdate />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete Sub-Category" placement="top">
                          <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[#ffffff]">
                            <RiDeleteBinLine />
                          </Button>
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center p-4">
                      No sub-categories available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewSubCategoryDetails;
