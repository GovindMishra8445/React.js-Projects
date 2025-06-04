import React from "react";
import orderIcon from "../../assets/order-icons.png";
import orderedIcon from "../../assets/ordered-icon.png";
import wallet from "../../assets/wallet-icon.png";

const DashboardBoxes = () => {
  return (
    <div className="p-4">
      <h1 className="text-[20px] font-[600] text-white mb-5">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
        {[
          {
            bg: "bg-[#0D9488]",
            text: "Today Orders",
            amount: "₹0.00",
            img: orderIcon,
          },
          {
            bg: "bg-[#FB923C]",
            text: "Yesterday Orders",
            amount: "₹118.48",
            img: orderIcon,
          },
          {
            bg: "bg-[#3B82F6]",
            text: "This Month",
            amount: "₹5834.38",
            img: orderedIcon,
          },
          {
            bg: "bg-[#0891B2]",
            text: "Last Month",
            amount: "₹22613.70",
            img: wallet,
          },
          {
            bg: "bg-[#059669]",
            text: "All-Time Sales",
            amount: "₹459924.25",
            img: wallet,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-4 rounded-md border shadow-rose-200 inset-shadow-transparent text-white font-extrabold flex flex-col items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <img src={item.img} className="w-12 h-12" alt="Order Icon" />
            <div className="text-center font-serif">
              <h3 className="text-lg">{item.text}</h3>
              <h3 className="text-xl font-bold">{item.amount}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10">
        <div className="rounded-md border border-[rgba(0,0,0,0.1)] bg-[#FFFFFF] hover:bg-[#f1f1f1] p-4 flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2 ">
          <div className="flex justify-center">
            <img
              src={orderIcon}
              className="rounded-full bg-[#FFEDD5] p-4 w-12 h-12"
              alt="Order Icon"
            />
          </div>
          <div className="pl-5 flex flex-col justify-center">
            <h3 className="text-xs sm:text-base md:text-lg lg:text-xl text-start">
              Today Order
            </h3>
            <h3 className="text-extrabold sm:text-lg md:text-xl lg:text-2xl text-start">
              663
            </h3>
          </div>
        </div>
        <div className="rounded-md border border-[rgba(0,0,0,0.1)] bg-[#FFFFFF] hover:bg-[#f1f1f1] p-4 flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2">
          <div className="flex justify-center">
            <img
              src={orderIcon}
              className="rounded-full bg-[#DBEAFE] p-4 w-12 h-12"
              alt="Order Icon"
            />
          </div>
          <div className="pl-5 flex flex-col justify-center">
            <h3 className="text-xs sm:text-base md:text-lg lg:text-xl text-start">
              Orders Pending
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-start">
              213
            </h3>
          </div>
        </div>
        <div className="rounded-md border border-[rgba(0,0,0,0.1)] bg-[#FFFFFF] hover:bg-[#f1f1f1] p-4 flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2">
          <div className="flex justify-center">
            <img
              src={orderIcon}
              className="rounded-full bg-[#CCFBF1] p-4 w-12 h-12"
              alt="Order Icon"
            />
          </div>
          <div className="pl-5 flex flex-col justify-center">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-start">
              Orders Processing
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-start">
              95
            </h3>
          </div>
        </div>
        <div className="rounded-md border border-[rgba(0,0,0,0.1)] bg-[#FFFFFF] hover:bg-[#f1f1f1] p-4 flex flex-row max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2">
          <div className="flex justify-center">
            <img
              src={orderIcon}
              className="rounded-full bg-[#D1FAE5] p-4 w-12 h-12"
              alt="Order Icon"
            />
          </div>
          <div className="pl-5 flex flex-col justify-center">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-start">
              Orders Delivered
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-start">
              270
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBoxes;
