import { CircleMinus, CirclePlus, Trash } from "lucide-react";

const CartCard = ({name, price, quantity}) => {
    return (
        // <div className="border border-gray-400 hover:border-gray-600 shadow-2xl rounded-2xl p-5">
            <div className="flex gap-2 justify-around border border-gray-400 hover:border-gray-600 shadow-2xl rounded-2xl p-5 w-[80%]">
                <div className="w-[7rem] h-[7rem] border rounded-xl">
                    <img src={""} />
                </div>
                <div className="flex flex-col justify-between mt-2">
                    <div className="text-xl font-semibold font-toto">{name}</div>
                    <div className="flex items-center gap-10">
                        <div className="text-lg font-semibold font-toto">Price: {price}</div>
                        <div className="flex items-center justify-center gap-5 border rounded-full py-0.5 px-2">
                            <div>
                                <CircleMinus size={"1.2rem"} />
                            </div>
                            <div className="text-lg font-semibold font-toto">{quantity}</div>
                            <div>
                                <CirclePlus size={"1.2rem"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center my-2">
                    <div className="text-lg font-semibold mt-1 text-[#8b0000]">
                        <Trash />
                    </div>
                    <div className="text-lg font-semibold font-toto">Final Price: {quantity * price}</div>
                </div>
            </div>
        // </div>
    );
}

export default CartCard;