import React from "react";
import backgroundImage from "../../../images/home/backgroundImage.png";
import Booking from './allTypeBooking/Booking';
export default function BackgroundContent() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
    <div className="flex justify-center items-center">
    <div>
            <h1 className="  text-[64px]  font-[700] leading-[70px] text-heading font-manrope" >
            Unveil the Beauty<br></br>
            of the World Every Day
            </h1>
            <p className="text-[24px] font-[500] leading-[26px] text-gray font-manrope pb-10 pt-4">
            Travel Without Limits Browse, Book, Explore
        </p>
        <Booking></Booking>
        </div>
    </div>
        <div>
          <img src={backgroundImage} alt="backgroundImage" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}
