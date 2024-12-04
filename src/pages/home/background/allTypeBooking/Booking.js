import React, { useState } from "react";
import Guests from "../../../../components/svg/Guests";
import airplane from "../../../../images/icon/airplane.png";
import car from "../../../../images/icon/car.png";
import hotel from "../../../../images/icon/hotel.png";
import house from "../../../../images/icon/house.png";
import travelLuggage from "../../../../images/icon/travel-luggage.png";
import Flight from "./Flight";
export default function Booking() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="">
      <div className="w-full border border-[#f1f1f1] px-4 py-6 bg-white rounded-[25px]">
        <div className="flex justify-between gap-20">
          <div className="flex">
            <div  onClick={() => handleTabClick("tab1")}
              className={`flex-1  flex items-center gap-2 pr-10 pl-2  text-center font-manrope font-bold text-[16px] text-heading  ${
                activeTab === "tab1"
                  ? "text-blue-500 border-b-2 border-blue-500 pb-4"
                  : "text-gray-600 border-b-2 border-transparent pb-4"
              } focus:outline-none`}
            >
              <div className="flex items-center cursor-pointer">
                <img src={airplane} alt="" className="w-[24px] h-[14px]" />
              </div>
              <button>Flight</button>
            </div>

            {/* <div onClick={() => handleTabClick("tab2")}
              className={`flex-1  flex items-center gap-2 pr-10 pl-2  text-center font-manrope font-bold text-[16px] text-heading  ${
                activeTab === "tab2"
                  ? "text-blue-500 border-b-2 border-blue-500 pb-4"
                  : "text-gray-600 border-b-2 border-transparent pb-4"
              } focus:outline-none`}
            >
              <div className="flex items-center cursor-pointer">
                <img src={car} alt="" className="w-[24px] h-[14px]" />
              </div>
              <button >Car</button>
            </div> */}

            <div onClick={() => handleTabClick("tab3")}
              className={`flex-1  flex items-center gap-2 pr-10 pl-2  text-center font-manrope font-bold text-[16px] text-heading  ${
                activeTab === "tab3"
                  ? "text-blue-500 border-b-2 border-blue-500 pb-4"
                  : "text-gray-600 border-b-2 border-transparent pb-4"
              } focus:outline-none`}
            >
              <div className="flex items-center cursor-pointer">
                <img src={hotel} alt="" className="w-[18px] h-[18px]" />
              </div>
              <button >Hotel</button>
            </div>

            {/* <div onClick={() => handleTabClick("tab4")}
              className={`flex-1  flex items-center gap-2 pr-10 pl-2  text-center font-manrope font-bold text-[16px] text-heading  ${
                activeTab === "tab4"
                  ? "text-blue-500 border-b-2 border-blue-500 pb-4"
                  : "text-gray-600 border-b-2 border-transparent pb-4"
              } focus:outline-none`}
            >
              <div className="flex items-center cursor-pointer">
                <img src={house} alt="" className="w-[34px] h-[18px]" />
              </div>
              <button>
                Rental
              </button>
            </div> */}
            <div   onClick={() => handleTabClick("tab5")}
              className={`flex-1  flex items-center gap-2 pr-2 pl-2  text-center font-manrope font-bold text-[16px] text-heading  ${
                activeTab === "tab5"
                  ? "text-blue-500 border-b-2 border-blue-500 pb-4"
                  : "text-gray-600 border-b-2 border-transparent pb-4"
              } focus:outline-none`}
            >
              <div className="flex items-center cursor-pointer">
                <img src={travelLuggage} alt="" className="w-[68px] h-[18px]" />
              </div>
              <button >Packages</button>
            </div>
          </div>

          <div className="flex gap-1 items-start text-[14px] font-[500] leading-[26px] text-gray font-manrope">
            <Guests></Guests>
            <p>Need help?</p>
          </div>
        </div>

        <div className="p-4">
          {activeTab === "tab1" && (
            <div>

              <Flight></Flight>
            </div>
          )}
          {/* {activeTab === "tab2" && <div>Content for Tab 2</div>} */}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
          {/* {activeTab === "tab4" && <div>Content for Tab 4</div>} */}
          {activeTab === "tab5" && <div>Content for Tab 5</div>}
        </div>
      </div>
    </div>
  );
}
