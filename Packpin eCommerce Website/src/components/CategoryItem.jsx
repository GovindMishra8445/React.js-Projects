import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const CategoryItem = ({ image, name, id }) => {
  return (
    <Link to={`/SubCategory/${id}`}>
      <div className="p-2 bg-slate-200 rounded-lg shadow hover:shadow-lg transition duration-300 max-sm:p-02 max-sm:rounded-md max-sm:shadow-sm ">
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-contain mb-2 mix-blend-multiply max-sm:h-10"
        />
        <h3 className="text-xl font-medium text-gray-800 text-center pt-4 max-sm:overflow-hidden  max-sm:flex-wrap max-sm:text-[8px] max-sm:pt-0">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
