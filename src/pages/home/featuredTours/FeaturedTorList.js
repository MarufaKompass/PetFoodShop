import React from "react";
import package1 from "../../../images/home/featured/package1.webp";
import package2 from "../../../images/home/featured/package2.webp";
import package3 from "../../../images/home/featured/package3.webp";
import package4 from "../../../images/home/featured/package4.webp";
import package5 from "../../../images/home/featured/package5.webp";
import Days from "../../../components/svg/Days";
import Guests from "../../../components/svg/Guests";
import Star from "../../../components/svg/Star";
export default function FeaturedTorList() {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div className="relative ">
          <div>
            <img src={package1} alt="package1" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px] shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                10 Days Bay Cruise by Boat in Snake island
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4 ">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  7000 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div>
            <img src={package4} alt="package4" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                5 Days Bay Cruise by Boat in Dubai
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8050 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div>
            <img src={package2} alt="package2" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                2 Days Bay Cruise by Boat in New York
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  6500 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div>
            <img src={package3} alt="package3" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                Panama Canyon Horseshoe Bend 3 days
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8900 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-56">
          <div>
            <img src={package4} alt="package4" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                Top of the Rock Observation Deck Ticket
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8900 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-56">
          <div>
            <img src={package3} alt="package3" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                10 Days Bay Cruise by Boat in Snake island
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8900 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-56">
          <div>
            <img src={package5} alt="package5" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                10 Days Bay Cruise by Boat in Snake island
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8900 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-56">
          <div>
            <img src={package1} alt="package1" className="rounded-[26px]" />
          </div>
          <div className="bg-[#fff] absolute top-[200px] w-[100%] h-[260px]  shadow-md rounded-[26px] px-[20px] py-[30px]">
            <div>
              <p className="text-left text-[22px] font-[650] leading-[31px] text-heading font-manrope">
                5 Days Bay Cruise by Boat in Dubai
              </p>
            </div>

            <div className="flex gap-4 mt-2 pb-2">
              <div className="flex gap-1 justify-center items-center">
                <Days></Days>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  10 Days
                </p>
              </div>

              <div className="flex gap-1 justify-center items-center">
                <Guests></Guests>
                <p className="text-[14px] font-[500] leading-[26px] text-gray font-manrope ">
                  8 Guests
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>

              <div>
                <p className="text-[13px] font-[500] leading-[32px] text-gray font-manrope ">
                  (50 Reviews )
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 border-t-2 border-[#f1f1f1] pt-4">
              <div>
                <h1 className="text-[22px] font-[700] leading-[32px] text-heading font-manrope ">
                  8900 BDT
                  <span className="text-[16px] font-[500] leading-[32px] text-gray font-manrope ">
                    / Package
                  </span>
                </h1>
              </div>
              <div className="flex items-center bg-[#f1f1f1] px-4 py-1 rounded-[50px]">
                <button className="text-[14px] font-[700] leading-[32px] text-heading font-manrope">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// #F09814
