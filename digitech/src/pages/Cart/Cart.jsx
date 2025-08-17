import { CircleMinus, CirclePlus, Trash } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import CartCard from "../../components/Card/CartCard";
import ProductCard from "../../components/Card/ProductCard";

const orderProducts = [
    {
      name: "Almonds 1KG",
      price: 1299,
      image: "",
      quanity: 1,
    },
    {
      name: "Cashews",
      price: 600,
      image: "",
      quanity: 1,
    },
    {
      name: "Pistachios",
      price: 700,
      image: "",
      quanity: 2,
    },
    {
      name: "Walnuts",
      price: 800,
      image: "",
      quanity: 1,
    },
];

const Cart = () => {
    return (
        <>
        <TopHeader/>
        <Header />
        <div className="text-center lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-medium lg:my-10 md:my-7 my-3 font-toto">Your Shopping Cart</div>
        <div className="w-[100%] flex gap-5 px-5 justify-center">
            <div className="w-[60%] h-auto flex flex-col gap-3">
                {
                    orderProducts.map((product, index) => (
                        <CartCard key={index} quantity={product.quanity} name={product.name} price={product.price} image={product.image} />
                    ))
                }
            </div>
            <div className="w-[30%] h-[20rem] border-2 border-[#8b0000] rounded-2xl">
                <h1 className="text-center lg:text-[2rem] md:text-[1.5rem] text-[1rem] lg:my-4 md:my-3 my-2 font-toto">Order Summary</h1>
                <div className="flex justify-between px-10">
                    <h1 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1rem] font-toto">SubTotal</h1>
                    <h1 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1rem] font-toto">1000</h1>
                </div>
                <div className="flex justify-between px-10">
                    <h1 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1rem] font-toto">Discount</h1>
                    <h1 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1rem] font-toto">0</h1>
                </div>
                <hr className="my-2 w-[95%] mx-auto" />
                <div className="flex justify-between px-10">
                    <h1 className="lg:text-[1.4rem] md:text-[1.3rem] text-[1.1rem] font-toto">Final Total</h1>
                    <h1 className="lg:text-[1.3rem] md:text-[1.2rem] text-[1rem] font-toto">1000</h1>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Cart;