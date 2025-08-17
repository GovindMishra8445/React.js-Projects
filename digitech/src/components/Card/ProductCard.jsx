import { Heart } from "lucide-react";

 const products = [
    {
      id: 1,
      name: "Almonds 1KG",
      price: 1299,
      image: "",
    },
    {
      id: 2,
      name: "Cashews",
      price: 600,
      image: "",
    },
    {
      id: 3,
      name: "Pistachios",
      price: 700,
      image: "",
    },
    {
      id: 4,
      name: "Walnuts",
      price: 800,
      image: "",
    },
    {
      id: 1,
      name: "Almonds 1KG",
      price: 1299,
      image: "",
    },
    {
      id: 2,
      name: "Cashews",
      price: 600,
      image: "",
    },
    {
      id: 3,
      name: "Pistachios",
      price: 700,
      image: "",
    },
    {
      id: 4,
      name: "Walnuts",
      price: 800,
      image: "",
    },
    {
      id: 1,
      name: "Almonds 1KG",
      price: 1299,
      image: "",
    },
    {
      id: 2,
      name: "Cashews",
      price: 600,
      image: "",
    },
    {
      id: 3,
      name: "Pistachios",
      price: 700,
      image: "",
    },
    {
      id: 4,
      name: "Walnuts",
      price: 800,
      image: "",
    },
  ];

const ProductCard = ({image, name, price}) => {
    return (
        <div className="flex flex-col items-center lg:gap-3 md:gap-2 gap-1 lg:my-0 md:my-1 my-2">
            <div className="border lg:h-[12rem] md:h-[11rem] h-[10rem] lg:w-[12rem] md:w-[11rem] w-[10rem] bg-cover">
                <img src={image} alt={name} />
                <button className="rounded-full lg:p-2.5 md:p-2 p-1.5 bg-[#8B0000] text-white mt-1 cursor-pointer relative float-right top-[-1.5rem] right-[.2rem] font-toto">
                    <Heart size={'1.2rem'} />
                </button>
            </div>
            <h1 className="h-[1rem] text-lg font-regular text-black font-toto">
            {name}
            </h1>
            <h1 className="h-[1rem] text-lg font-medium text-black font-toto">
            Price: Rs. {price}
            </h1>
            {/* <div className="flex items-center gap-8"> */}
            <button className="py-2 px-6 rounded-lg bg-[#8B0000] text-white mt-1 cursor-pointer font-toto">
            Add to Cart
            </button>
            {/* </div> */}
        </div>
    );
}

export default ProductCard;