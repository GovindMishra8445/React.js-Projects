import React, { useContext, useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Button, Tooltip } from "@mui/material";
import { MyContext } from "../../App";
import ViewCategoryDetails from "../ViewProductDetails/ViewCategoryDetails";

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

// A reusable text to display truncated text with a toggle for "See More"/"See Less"
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

const Category = () => {
  const context = useContext(MyContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in first.");
      setLoading(false);
      return;
    }
    fetch("https://api.packpin.in/admin/get-all-category", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        if (data && data.categories) {
          setCategories(data.categories);
        }
      })
      .catch((err) => console.error("Error fetching categories:", err))
      .finally(() => setLoading(false));
  }, []);

  // Handler for opening the view modal
  const handleViewDetails = (category) => {
    setSelectedCategory(category);
    setIsViewModalOpen(true);
  };

  // Handler for closing the view modal
  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedCategory(null);
  };
  // Filter categories by name based on search input
  const filteredCategories = categories.filter((cat) =>
    cat.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center bg-[#1f2a38] justify-between px-5 py-5 rounded-md shadow-md sticky top-0 z-10">
        <h1 className="text-[20px] font-[600] text-white max-sm:text-[10px]">
          All Categories
        </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by Category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-sm:hidden p-2 border rounded-md text-white bg-[#1f2a38] hover:border-blue-500 focus:outline-none cursor-pointer"
          />
          <button
            className="btn-blue !capitalize rounded-md flex items-center gap-2 max-sm:!py-1 max-sm:!px-2 max-sm:!text-[10px] max-sm:gap-1"
            onClick={() =>
              context.setIsOpenDialogFromProduct({
                open: true,
                model: "Add Category",
              })
            }
          >
            <FaPlus fontSize="small" />
            Add Category
          </button>
        </div>
      </div>
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse p-3">
            <thead className="text-xs text-gray-700 uppercase bg-[#1f2a38] dark:bg-gray-700 dark:text-white border-b dark:border-gray-700">
              <tr>
                <th className="px-4 py-4 text-white">S.No.</th>
                <th className="px-2 py-4 text-white">Category Name</th>
                <th className="px-4 py-4 text-white">Description</th>
                <th className="px-4 py-4 text-white">Image</th>
                <th className="px-4 py-4 text-white">Created At</th>
                <th className="px-4 py-4 text-white">Updated At</th>
                <th className="px-4 py-4 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(8)].map((_, i) => (
                  <tr
                    key={i}
                    className="border-b bg-[#1f2a38] dark:border-gray-700"
                  >
                    <td className="px-2 py-2">
                      <div className="h-2 w-5 bg-gray-300 animate-pulse rounded"></div>
                    </td>
                    <td className="py-2">
                      <div className="h-5 w-24 bg-gray-300 animate-pulse rounded"></div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
                    </td>
                    <td className=" py-2">
                      <div className="w-[80px] h-[80px] bg-gray-300 animate-pulse rounded-md"></div>
                    </td>
                    <td className=" py-2">
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
                    className="border-b bg-[#1f2a38] dark:border-gray-700 group"
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
                      <Tooltip title="View Category Details" placement="top">
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
                        <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]">
                          <RxUpdate />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete Category" placement="top">
                        <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]">
                          <RiDeleteBinLine />
                        </Button>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-4 bg-[#1f2a38] dark:bg-gray-700 text-white"
                  >
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
      <ViewCategoryDetails
        open={isViewModalOpen}
        handleClose={handleCloseViewModal}
        category={selectedCategory}
      />
    </>
  );
};

export default Category;
