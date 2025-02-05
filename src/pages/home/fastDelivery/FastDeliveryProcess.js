import React from "react";

import delivery from "../../../assets/support/fast-delivery.png";
import returns from "../../../assets/support/return.png";
import reviews from "../../../assets/support/reviews.png";
import customerService from "../../../assets/support/customer-service.png";

export default function FastDeliveryProcess() {
  return (
    <div className="bg-[#e59142]">
      <div className="container py-20">
        <div className="grid grid-cols-4">
          <div className="flex gap-3">
            <div classname="flex items-center justify-center">
              <img src={delivery} alt="delivery" className="w-16 h-16 " />
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-lato font-bold text-[26px] text-white">
                  Fast Shipping
                </p>
                <p className="font-lato font-bold text-[14px] text-white">
                  Free Shipping Above Rs.1000
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div classname="flex items-center justify-center">
              <img src={returns} alt="returns" className="w-16 h-16 " />
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-lato font-bold text-[26px] text-white  ">
                  Easy Returns{" "}
                </p>
                <p className="font-lato font-bold text-[14px] text-white">
                  Easy Exchange & Return Policy
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div classname="flex items-center justify-center">
              <img src={reviews} alt="reviews" className="w-16 h-16 " />
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-lato font-bold text-[26px] text-white ">
                  Reviews & Ratings
                </p>
                <p className="font-lato font-bold text-[14px] text-white">
                  Our Best Customer Ratings 4.8
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div classname="flex items-center justify-center">
              <img
                src={customerService}
                alt="customerService"
                className="w-16 h-16 "
              />
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-lato font-bold text-[26px] text-white  ">
                  Customer Support
                </p>
                <p className="font-lato font-bold text-[14px] text-white">
                  0454-343-3431367{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
