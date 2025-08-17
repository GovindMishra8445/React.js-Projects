import React from "react";
import GstIcon from "../../assets/GST invoice- icon.png"
import SinglePOC from "../../assets/Single POC - icon.png"
import DropShipping from "../../assets/Drop-Shipping Facilities icon.png"
import CustomerService from "../../assets/Customer Service icon.png"
export default function Experience() {
  return (
    <>
      <div className="flex flex-row justify-start items-center px-20 py-10 bg-gray-200 pt-24 pb-24">  
        <div className="grid grid-cols-2 gap-8 pr-80 max-sm:grid-cols-1 max-sm:gap-8">
          <div className=" flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-bold">Why Printo?</h2>
          </div>
          <div className="grid grid-cols-2 gap-20 pl-20 max-sm:grid-cols-1 max-sm:gap-8 max-sm:pl-0 ">
            <div className="">
              <img src={GstIcon} className="max-w-20 max-h-10" />
              <h1 className="font-bold text-2xl pb-2">  GST invoice</h1>
              <p>
                We facilitate PO base orders and Invoicing. GST reconciliation is
                quick and easy with Printo.
              </p>
            </div>
            <div>
              <img src={SinglePOC} className="max-w-20 max-h-10" />
              <h1 className="font-bold text-2xl pb-2">Single POC</h1>
              <p>
                We designate a Single Point of Contact (POC) responsible for all
                your print needs, ensuring swift order handling and issues without
                unnecessary handovers.
              </p>
            </div>
            <div>
              <img src={DropShipping} className="max-w-20 max-h-10" />
              <h1 className="font-bold text-2xl pb-2"> Drop-Shipping Facilities</h1>
              <p>
                We deliver to multiple locations handling inventory, storage and
                order fulfillment, saving you time and logistical hassles.
              </p>
            </div>
            <div>
              <img src={CustomerService} className="max-w-20 max-h-10" />
              <h1 className="font-bold text-2xl pb-2">  CustomerService</h1>
              <p>
                We emphasize exceptional customer service, being responsive,
                helpful, and adaptable to unique business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
