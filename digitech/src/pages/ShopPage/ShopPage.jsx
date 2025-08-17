import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import banner from "../../../public/banner.png";
import { Heart } from "lucide-react";
import ProductCard from "../../components/Card/ProductCard";

const AlmondData = [
    {
        dryfruitsName: "Cashews",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Cashews_collection_slider.png?v=1723033847'
    },
    {
        dryfruitsName: "Almonds",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Almonds_collection_slider.png?v=1723033848'
    },
    {
        dryfruitsName: "Pista",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Pista_collection_slider.png?v=1723033847'
    },
    {
        dryfruitsName: "Dried Anjeer",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Dried_anjeer_collection_slider.png?v=1723033847'
    },
    {
        dryfruitsName: "Raisins",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Raisins_collection_slider.png?v=1723033847'
    },
    {
        dryfruitsName: "Dates",
        img: 'https://cdn.shopify.com/s/files/1/0585/4376/7652/files/Dates_collection_slider.png?v=1723033847'
    },
    
]

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

const ShopPage = () => {
    return (
        <>
        <TopHeader/>
        <Header />
        <div className="flex justify-center lg:my-6 md:my-4 my-2">
            <img src={banner} />
        </div>
        <h1 className="text-center lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-medium lg:my-10 md:my-7 my-3 font-toto">Shop by Dryfruits</h1>
        <div className="lg:flex md:flex grid grid-cols-3 items-center justify-center lg:gap-5 md:gap-4 gap-3">
            {
                AlmondData.map((almond, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={almond.img} className="lg:h-[7rem] lg:w-[12rem] object-cover" />
                        <h1 className="font-toto">{almond.dryfruitsName}</h1>
                    </div>
                ))
            }
        </div>
        <div className="w-[100%] lg:my-10 md:my-7 my-4 flex lg:flex-row md:flex-col flex-col">
            <div className="lg:w-[30%] md:w-[100%] w-[100%] flex lg:justify-start md:justify-center justify-center">
                <div className="lg:w-[16rem] md:w-[40rem] w-[24rem] lg:h-[20rem] md:h-[4rem] h-[3rem] lg:mx-10 md:mx-5 mx-2 my-2 bg-white">
                    <div className="flex lg:flex-col md:flex-row lg:gap-8 md:gap-4 gap-2 overflow-x-auto py-3">
                        <div className="flex lg:flex-col md:flex-row gap-2 lg:items-start md:items-center items-center">
                            <div className="text-lg w-[4rem] font-toto">Sort by</div>
                            <select className="border lg:p-3 md:p-2 p-1 lg:w-full rounded-lg">
                                <option className="font-toto">Featured</option>    
                            </select>
                        </div>
                        <div className="flex lg:flex-col md:flex-row gap-2 lg:items-start md:items-center items-center">
                            <div className="text-lg w-[4rem] font-toto">Filter by</div>
                            <select className="border lg:p-3 md:p-2 p-1 lg:w-full rounded-lg">
                                <option className="font-toto">Availability</option>    
                            </select>
                            <select className="border lg:p-3 md:p-2 p-1 lg:w-full rounded-lg">
                                <option className="font-toto">Price</option>    
                            </select>    
                            <select className="border lg:p-3 md:p-2 p-1 lg:w-full rounded-lg">
                                <option className="font-toto">Product Type</option>    
                            </select>    
                        </div>
                    </div>
                </div>               
            </div>
            <div className="lg:w-[70%] md:w-[100%] w-[100%] lg:mt-2">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2">
                    {products.map((product, index) => (
                        <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default ShopPage;
