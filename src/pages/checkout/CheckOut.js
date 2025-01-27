import React  from "react";

import OrderSummary from "./OrderSummary";


export default function CheckOut() {

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-base-content mb-8 text-left">
          Checkout
        </h1>
        <div className="bg-base-100 shadow-xl rounded-box">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:p-8">
            {/* Shipping Information */}
            <div className="space-y-6 sm:space-y-5">
              <h2 className="text-2xl font-semibold text-base-content text-heading text-lato font-bold text-[24px]">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="form-control">
                    <label className="label" htmlFor="firstName">
                      <span className="text-heading text-[14px] text-lato font-semibold  ">
                        First Name
                      </span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      //   className="input input-bordered w-full"
                      className="input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]  placeholder:text-sm placeholder:font-normal placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="lastName">
                      <span className=" text-heading text-lato font-semibold text-[14px]">
                        Last name
                      </span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="form-control">
                    <label className="label" htmlFor="firstName">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        Phone Number
                      </span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter Phone Number"
                      required
                      //   className="input input-bordered w-full"
                      className="input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]  placeholder:text-sm placeholder:font-normal placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="lastName">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        Email Address
                      </span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="form-control">
                    <label className="label" htmlFor="firstName">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        Country/Region
                      </span>
                    </label>
                    <input
                      id="firstName"
                      name="country"
                      type="text"
                      placeholder="Country"
                      required
                      //   className="input input-bordered w-full"
                      className="input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]  placeholder:text-sm placeholder:font-normal placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="district">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        District
                      </span>
                    </label>
                    <input
                      id="district"
                      name="district"
                      type="text"
                      placeholder="District"
                      required
                      className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px]"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="address">
                    <span className="text-heading text-lato font-semibold text-[14px]">
                      Address
                    </span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="Address"
                    className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px] w-full"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="form-control">
                    <label className="label" htmlFor="city">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        City
                      </span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="City"
                      className="input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px] w-full  placeholder:text-sm placeholder:font-normal placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="state">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        State / Province
                      </span>
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      placeholder="State/Province"
                      className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500  input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px] w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="zip">
                      <span className="text-heading text-lato font-semibold text-[14px]">
                        ZIP / Postal code
                      </span>
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      placeholder="ZIP / Postal code"
                      className=" placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 input input-bordered w-full border-[#878383] focus:outline-none rounded-[4px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <OrderSummary></OrderSummary>
          </div>

          <div className="divider"></div>


        </div>
      </div>
    </div>
  );
}
