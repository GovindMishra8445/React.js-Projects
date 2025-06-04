import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Products = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [packOf, setPackOf] = useState(0);

  console.log("This is product id", productId);

  useEffect(() => {
    axios
      .post("https://api.packpin.in/users/get-product-daitels", {
        productId: productId,
      })
      .then((response) => {
        console.log(response.data.Product);
        const product = response.data.Product;
        setProductData(product);
        setImage(product.productImage[0]);
        if (product.packWithPrice && product.packWithPrice.length > 0) {
          setPrice(product.packWithPrice[0].price);
          setPackOf(product.packWithPrice[0].packOf);
        }
      })
      .catch((error) =>
        console.error("Error fetching product details: ", error)
      );
  }, [productId]);

  console.log(productData);

  // Function to handle size selection
  const handlePackAndPrice = (item) => {
    setPrice(item.price);
    setPackOf(item.packOf);
  };

  const handleAddToCartBtn = (id, productName, packOf, price, productImage) => {
    addToCart(id, productName, packOf, price, productImage);
    setTimeout(() => {
      toast.success("Item Added In your Cart!");
    });
  };

  return Object.keys(productData).length > 0 ? ( // Check if productData is not empty
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-start sm:w-[18.7%] w-full gap-2 sm:gap-3 overflow-visible">
            <img
              onClick={() => setImage}
              src={productData.productImage}
              className="w-[44%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              alt=""
            />
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*------------> Product Details <------------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {productData.productName}
          </h1>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Pack Off</p>
            <div className="flex gap-2">
              {productData.packWithPrice.map(
                (
                  item,
                  index // Optional chaining to avoid errors
                ) => (
                  <button
                    key={index}
                    onClick={() => handlePackAndPrice(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item.packOf === item.packOf
                        ? "border-orange-500"
                        : ""
                    }`}
                    disabled={index === 0 && item.price === 0}
                  >
                    {item.packOf}
                  </button>
                )
              )}
            </div>
          </div>
          <button
            onClick={() =>
              handleAddToCartBtn(
                productData._id,
                productData.productName,
                packOf,
                price,
                productData.productImage
              )
            }
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!price} // Disable if no size is selected
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>30 days return policy available on this product.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0">Loading...</div> // Show a loading state
  );
};

export default Products;
