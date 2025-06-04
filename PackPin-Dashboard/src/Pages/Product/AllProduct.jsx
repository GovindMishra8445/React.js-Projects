import React, { useContext, useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Button, Tooltip } from "@mui/material";
import { MyContext } from "../../App";
import ViewProductDetails from "../ViewProductDetails/ViewProductDetails";

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

const AllProduct = () => {
  const context = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in first.");
      setLoading(false);
      return;
    }

    fetch("https://api.packpin.in/admin/all-product", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        if (data && data.data) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedProduct(null);
  };

  // Filter products by productName or categoryName (case‑insensitive)
  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center bg-[#1f2a38] justify-between px-5 py-5 rounded-md shadow-md sticky top-0 z-10">
        <h1 className="text-[20px] font-[600] text-white cursor-pointer max-sm:text-[10px]">
          All Products
        </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-sm:hidden p-2 border rounded-md text-white bg-[#1f2a38] hover:border-blue-500 focus:outline-none cursor-pointer"
          />
          <button
            className="btn-blue !capitalize rounded-md flex items-center gap-2 max-sm:!py-1 max-sm:!px-2 max-sm:!text-[10px] max-sm:gap-1"
            onClick={() =>
              context.setIsOpenDialogFromProduct({
                open: true,
                model: "Add Product",
              })
            }
          >
            <FaPlus fontSize="small" />
            Add Product
          </button>
        </div>
      </div>

      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse p-3">
            <thead className="text-xs text-gray-700 uppercase bg-[#1f2a38] dark:bg-gray-700 dark:text-white border-b dark:border-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 text-white">
                  S.No.
                </th>
                <th scope="col" className="px-2 py-4 text-white">
                  Category Name
                </th>
                <th scope="col" className="px-2 py-4 text-white">
                  Sub Category Name
                </th>
                <th scope="col" className="px-2 py-4 text-white">
                  Product Name
                </th>
                <th scope="col" className="px-2 py-4 text-white">
                  Product Image
                </th>
                <th scope="col" className="px-2 py-4 text-white">
                  Action
                </th>
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
                      <div className="h-2 w-5 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    </td>
                    <td className="py-2">
                      <div className="h-5 w-24 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="h-4 w-32 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    </td>
                    <td className="py-2">
                      <div className="w-[80px] h-[80px] bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded-md"></div>
                    </td>
                    <td className="py-2">
                      <div className="h-5 w-24 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="h-5 w-24 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    </td>
                  </tr>
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr
                    key={product._id}
                    className="border-b bg-[#1f2a38] dark:border-gray-700 group hover:bg-gray-700"
                  >
                    <td className="px-4 py-2 text-white">{index + 1}</td>
                    <td className="px-2 py-2 text-blue-500 uppercase">
                      {highlightText(product.categoryName, searchTerm)}
                    </td>
                    <td className="px-4 py-2 text-white">
                      {product.subCategoryName}
                    </td>
                    <td className="px-4 py-2 text-white">
                      {highlightText(product.productName, searchTerm)}
                    </td>
                    <td className="px-4 py-2">
                      <img
                        src={product.productImage}
                        alt="Product"
                        className="w-[80px] h-[80px] object-cover rounded-md border border-transparent group-hover:scale-105 hover:border-red-500 transition-transform duration-300 ease-in-out cursor-pointer"
                      />
                    </td>
                    <td className="px-2 py-10 flex gap-2 items-center">
                      <Tooltip title="View Product Details" placement="top">
                        <span
                          onClick={() => handleViewDetails(product)}
                          className="cursor-pointer"
                        >
                          <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]">
                            <GrView />
                          </Button>
                        </span>
                      </Tooltip>
                      <Tooltip title="Update Product" placement="top">
                        <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-[#ffffff]">
                          <RxUpdate />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete Product" placement="top">
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
      <ViewProductDetails
        open={isViewModalOpen}
        handleClose={handleCloseViewModal}
        product={selectedProduct}
      />
    </>
  );
};

export default AllProduct;
