import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import axios from "axios";
import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.packpin.in/users/category")
      .then((response) => {
        console.log(response.data.categories);
        setLatestProducts(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  return (
    <div className="my-5">
      <div className="text-center text-3xl max-sm:text-sm">
        <Title text1={"OUR"} text2={"CATEGORIES"} />
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {latestProducts.map((items, index) => (
          <CategoryItem
            key={index}
            id={items._id}
            image={items.categoryImage}
            name={items.categoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
