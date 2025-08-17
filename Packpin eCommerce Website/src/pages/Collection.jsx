import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import SubCategoryItem from "../components/SubCategroyItem";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const Collection = () => {
  const { search, showSearch, getCartCount } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [subCategoryApi, setSubCategoryApi] = useState([]);
  const { categoryId } = useParams();

  // Toggle category filters
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Toggle subcategory filters
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
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

  // All
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

  return (
    <div className="pt-2">
      {/* <NavigationButtons/> */}
      <div className="flex fle-col">
        {/* Filter Section */}
        <div className="flex flex-col pt-16 max-sm:pt-5">
          <div className="bg-white sticky top-10 z-0 p-2 scroll-smooth">
            <p className="mb-1 text-sm font-medium text-center max-sm:text-sm">
              Categories
            </p>
            <div className="flex flex-col gap-2 rounded-md overflow-y-auto scroll-smooth">
              {subCategoryApi.map((item, index) =>
                item === "All" ? (
                  <SubCategoryItem key={index} id={index} name={item} />
                ) : (
                  <SubCategoryItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.category}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto pt-5">
          <div className="flex justify-end text-base sm:text-xl mb-4 max-sm:text-xs lg:flex-row max-sm:flex-col">
            {/* <Title text1="ALL" text2="COLLECTIONS" /> */}
            {/* Sorting Dropdown */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 max-sm:text-xs w-30 max-sm:p-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Render Products */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-sm:grid-cols-1">
            {filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                image={item.image}
                description={item.description}
                price={item.price}
                sizes={item.sizes}
              />
            ))}
            {getCartCount() ? (
              <Link
                to={"/cart"}
                className="sticky bottom-10 w-full bg-gray-400 rounded-xl
           text-black text-xl font-medium py-3 shadow-lg sm:hidden gap-2 flex items-center justify-center"
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
    </div>
  );
};

export default Collection;
