// import React, { useContext, useEffect } from "react";
// import { GrView } from "react-icons/gr";
// import { RxUpdate } from "react-icons/rx";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { FaPlus } from "react-icons/fa6";
// import { Button } from "@mui/material";
// import Tooltip from "@mui/material/Tooltip";
// import { MyContext } from "../../App";

// const SubCategory = () => {
//   const context = useContext(MyContext);

//    useEffect(() => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found. Please log in first.");
//         return;
//       }

//       fetch("https://api.packpin.in/admin/create-subcategory", {
//         headers: {
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("Fetched products:", data);
//           if (data && data.data) {
//             setProducts(data.data);
//           }
//         })
//         .catch((err) => console.error("Error fetching products:", err));
//     }, []);

//   return (
//     <>
//       <div className="flex items-center bg-[#1f2a38] justify-between px-5 py-5 rounded-md shadow-md">
//         <h1 className="text-[20px] font-[600] text-white">All Sub-Category</h1>
//         <button
//           className="btn-blue !capitalize rounded-md flex items-center gap-2"
//           onClick={() =>
//             context.setIsOpenDialogFromProduct({
//               open: true,
//               model: "Add Sub-Category",
//             })
//           }
//         >
//           <FaPlus fontSize="small" />
//           Add-SubCategory
//         </button>
//       </div>
//       <div className="card my-5 shadow-md sm:rounded-lg bg-white">
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-5">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="px-4 py-2">
//                   S.No.
//                 </th>
//                 <th scope="col" className="px-4 py-2">
//                   Category Name
//                 </th>
//                 <th scope="col" className="px-4 py-2">
//                   Sub Category Name
//                 </th>
//                 <th scope="col" className="px-4 py-2">
//                   Product Name
//                 </th>
//                 <th scope="col" className="px-4 py-2">
//                   Product Image
//                 </th>
//                 <th scope="col" className="px-4 py-2">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2, 3, 4, 5].map((item) => (
//                 <tr
//                   key={item}
//                   className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
//                 >
//                   <th
//                     scope="row"
//                     className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {item}
//                   </th>
//                   <td className="px-4 py-2">Example</td>
//                   <td className="px-4 py-2">Example</td>
//                   <td className="px-4 py-2">$XXX</td>
//                   <td className="px-4 py-2 img !w-[20px] !h-[20px] rounded-md overflow-hidden group">
//                     <img
//                       src="/src/assets/Dashboard-Icons.png"
//                       className="w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
//                       alt="Product Icon"
//                     />
//                   </td>
//                   <td className="px-4 py-2 flex flex-row gap-2">
//                     <div className="flex items-center gap-1">
//                       <Tooltip title="View Product Details" placement="top">
//                         <span>
//                           <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
//                             <GrView />
//                           </Button>
//                         </span>
//                       </Tooltip>
//                       <Tooltip
//                         title="Update Product Details"
//                         placement="top-start"
//                       >
//                         <span>
//                           <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
//                             <RxUpdate />
//                           </Button>
//                         </span>
//                       </Tooltip>
//                       <Tooltip
//                         title="Delate Product Details"
//                         placement="top-start"
//                       >
//                         <span>
//                           <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
//                             <RiDeleteBinLine />
//                           </Button>
//                         </span>
//                       </Tooltip>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SubCategory;

import React, { useContext, useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App";
import axios from "axios";
import ViewSubCategoryDetails from "../ViewProductDetails/ViewSubCategoryDetails";

// Utility function to highlight matched search text
const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-blue-500 text-white">
        {part}
      </span>
    ) : (
      part
    )
  );
};

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

const SubCategory = () => {
  const context = useContext(MyContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in first.");
      setLoading(false);
      return;
    }
    axios
      .get("https://api.packpin.in/admin/get-all-category", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Fetched categories:", response.data);
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
        }
      })
      .catch((err) => console.error("Error fetching categories:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteCategory = (categoryId) => {
    alert("Category deleted successfully!");
    setCategories((prev) =>
      prev.filter((category) => category._id !== categoryId)
    );
  };

  const handleViewDetails = (category) => {
    setSelectedCategory(category);
    setUpdateMode(false);
    setIsViewModalOpen(true);
  };

  const handleUpdateDetails = (category) => {
    setSelectedCategory(category);
    setUpdateMode(true);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedCategory(null);
    setUpdateMode(false);
  };

  // Filter categories by name based on search input
  const filteredCategories = categories.filter((cat) =>
    cat.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center bg-[#1f2a38] justify-between px-5 py-5 rounded-md shadow-md sticky top-0 z-10">
        <h1 className="text-[20px] font-[600] text-white max-sm:text-[10px]">
          All Sub-Category
        </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by SubCategory"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-sm:hidden p-2 border rounded-md text-white bg-[#1f2a38] hover:border-blue-500 focus:outline-none cursor-pointer"
          />
          <button
            className="btn-blue !capitalize rounded-md flex items-center gap-2 max-sm:!py-1 max-sm:!px-2 max-sm:!text-[10px] max-sm:gap-1"
            onClick={() =>
              context.setIsOpenDialogFromProduct({
                open: true,
                model: "Add Sub-Category",
              })
            }
          >
            <FaPlus fontSize="small" />
            Add-SubCategory
          </button>
        </div>
      </div>
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 border-collapse p-3">
            <thead className="text-xs uppercase bg-[#1f2a38] text-white border-b">
              <tr>
                <th className="px-4 py-4">S.No.</th>
                <th className="px-2 py-2">Category Name</th>
                <th className="px-4 py-4">Description</th>
                <th className="px-4 py-4">Image</th>
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
                  </tr>
                ))
              ) : filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <tr
                    key={category._id}
                    className="border-b bg-[#1f2a38] group"
                  >
                    <td className="px-4 py-2 text-white">{index + 1}</td>
                    <td className="px-2 py-2 text-blue-500 uppercase">
                      {highlightText(category.categoryName, searchTerm)}
                    </td>
                    <td className="px-2 py-2 text-white">
                      <ExpandableText
                        text={category.categoryDescription}
                        limit={20}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <img
                        src={category.categoryImage}
                        alt="Category-Image"
                        className="w-[80px] h-[80px] object-cover rounded-md border border-transparent group-hover:scale-105 hover:border-red-500 transition-transform duration-300 ease-in-out cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-2 text-white">
                      {new Date(category.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-white">
                      {new Date(category.updatedAt).toLocaleString()}
                    </td>
                    <td className="px-2 py-10 flex gap-2 items-center">
                      <Tooltip title="View SubCategory Details" placement="top">
                        <span
                          onClick={() => handleViewDetails(category)}
                          style={{ cursor: "pointer" }}
                        >
                          <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]">
                            <GrView />
                          </Button>
                        </span>
                      </Tooltip>
                      <Tooltip title="Update Category" placement="top">
                        <Button
                          className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]"
                          onClick={() => handleUpdateDetails(category)}
                        >
                          <RxUpdate />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete Category" placement="top">
                        <Button
                          className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]"
                          onClick={() => handleDeleteCategory(category._id)}
                        >
                          <RiDeleteBinLine />
                        </Button>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 bg-[#1f2a38] dark:bg-gray-700 text-white">
                    <span className="inline-block mr-2 text-2xl animate-bounce">
                      😞
                    </span>
                    Oops, no products.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ViewSubCategoryDetails
        open={isViewModalOpen}
        handleClose={handleCloseViewModal}
        category={selectedCategory}
        updateMode={updateMode}
      />
    </>
  );
};

export default SubCategory;
