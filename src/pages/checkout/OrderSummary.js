import React from "react";
import Payment from "./Payment";
import bestProduct from "../../assets/products/product-03.jpg";
export default function OrderSummary() {

  return (
    <div>
        <div className="border border-[#f1f1f1] p-4">
      {/* Order Summary */}
      <div className="mt-10 lg:mt-0">
        <h2 className="text-2xl font-semibold text-lato text-heading text-base-content border-b border-[#f1f1f1] pb-3">
          Order Summary
        </h2>
        <div className="mt-4 bg-base-200 rounded-box">
          <ul className="">
            <li className="flex py-6 px-4 sm:px-6 border-b border-[#f1f1f1]">
              <div className="flex-shrink-0 w-24 h-24 bg-base-300 rounded-box overflow-hidden ">
                <img
                  src={bestProduct}
                  alt="Dog food"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="ml-6 flex-1 flex flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] text-lato font-medium text-base-content">
                      Premium Dog Food
                    </h4>
                    <p className="mt-1 text-sm text-lato text-heading text-base-content/70">
                      15kg
                    </p>
                    <p className=" text-sm text-lato text-heading text-base-content/70">
                      2x
                    </p>
                  </div>
                  <p className="mt-1 text-[16px] font-medium text-base-content text-lato text-heading flex items-center">
                    590.99 ৳
                  </p>
                </div>
              </div>
            </li>
            <li className="flex py-6 px-4 sm:px-6 border-b border-[#f1f1f1]">
              <div className="flex-shrink-0 w-24 h-24 bg-base-300 rounded-box overflow-hidden">
                <img
                  src={bestProduct}
                  alt="Dog food"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="ml-6 flex-1 flex flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] text-lato font-medium text-base-content">
                      Premium Dog Food
                    </h4>
                    <p className="mt-1 text-sm text-lato text-heading text-base-content/70">
                      15kg
                    </p>
                    <p className=" text-sm text-lato text-heading text-base-content/70">
                      2x
                    </p>
                  </div>
                  <p className="mt-1 text-[16px] font-medium text-base-content text-lato text-heading flex items-center">
                    590.99 ৳
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <dl className="border-t border-[#f1f1f1] py-6 px-4 space-y-6 sm:px-6">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-lato text-heading font-semibold">
                Subtotal
              </dt>
              <dd className="text-sm font-medium text-base-content">
                590.99 ৳
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm text-lato text-heading font-semibold">
                Shipping
              </dt>
              <dd className="text-sm font-medium text-base-content">
                50.00 ৳
              </dd>
            </div>

            <div className="flex items-center justify-between border-t border-[#f1f1f1] pt-6">
              <dt className="text-base text-lato text-heading font-bold">
                Total
              </dt>
              <dd className="text-base  text-lato text-heading font-bold">
                640.99 ৳
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
     <div>
     <Payment></Payment>
     </div>
    </div>
    
  );
}
