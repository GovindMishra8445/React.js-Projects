import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import SubCategoryItem from "../components/SubCategroyItem";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import allicon from "../assets/all-icon.png";

const Collection = () => {
  const { search, showSearch, getCartCount } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [subCategoryApi, setSubCategoryApi] = useState([]);
  const { categoryId } = useParams();

  // All Product API

  useEffect(() => {
    axios
      .post("https://api.packpin.in/users/get-product", {
        categoryId: categoryId,
      })
      .then((response) => {
        setAllProduct(response.data.productData);
        setFilteredProducts(response.data.productData);
        setProducts(response.data.productData);
        console.log(response.data.productData);
      })
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  const handleSetAllProduct = () => {
    setFilteredProducts(allProduct);
    console.log("Product on all", allProduct);
  };

  const handleSubCatProduct = (subCatId) => {
    axios
      .post("https://api.packpin.in/users/get-cat-subcat-product", {
        categoryId: categoryId,
        subCategoryId: subCatId,
      })
      .then((response) => {
        setFilteredProducts(response.data.productData);
        console.log(response.data.productData);
      })
      .catch((error) => console.error("Error fetching categories: ", error));
  };

  const applyFilter = () => {
    let tempProducts = [...products];

    if (showSearch && search) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    const sortedProducts = [...filteredProducts];
    switch (sortType) {
      case "low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilteredProducts(sortedProducts);
  }, [sortType]);

  useEffect(() => {
    axios
      .post("https://api.packpin.in/users/get-subcategory", {
        categoryId: categoryId,
      })
      .then((response) => {
        console.log(response.data.data);
        setSubCategoryApi(["All", ...response.data.data]);
      })
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);
  console.log("Product", filteredProducts);

  return (
    <div className="px-2">
      <div className="flex flex-row">
        <div className="flex flex-row pt-16 max-sm:pt-5">
          <div className=" sticky top-10 z-0 p-2 max-h-[500px] overflow-y-auto scroll-smooth rounded-md">
            <p className="mb-1 text-sm font-medium text-center max-sm:text-sm">
              Categories
            </p>
            <div className="flex flex-col gap-2 rounded-md">
              {subCategoryApi.map((item, index) =>
                item === "All" ? (
                  <div key="all" onClick={handleSetAllProduct}>
                    <SubCategoryItem id="all" name={item} image={allicon} />
                  </div>
                ) : (
                  <div
                    key={item._id}
                    onClick={() => handleSubCatProduct(item._id)}
                  >
                    <SubCategoryItem
                      id={item._id}
                      image={item.subCategoryImage}
                      name={item.subCategoryName}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-5">
          <div className="flex justify-end text-base sm:text-xl mb-4 max-sm:text-xs lg:flex-row max-sm:flex-col">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 max-sm:text-xs w-30 max-sm:p-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-sm:grid-cols-1 sticky top-10 z-0 p-2 max-h-[700px] overflow-y-auto scroll-smooth">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.productName}
                id={item._id}
                image={item.productImage}
                description={item.description}
                price={item.packWithPrice[0].price}
                packSize={item.packWithPrice[0]}
              />
            ))}
          </div>
          {getCartCount() ? (
            <Link
              to={"/cart"}
              className="w-full bg-gray-400 rounded-sm sticky bottom-10
                      text-black text-xl font-medium py-1 shadow-lg sm:hidden gap-2 flex items-center justify-center"
            >
              <FiShoppingCart className="text-xl" />
              {getCartCount() ? `Buy Now (${getCartCount()})` : ""}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
