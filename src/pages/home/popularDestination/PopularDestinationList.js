import React from "react";
import destination1 from "../../../images/home/destination/destination1.jpeg";
import destination2 from "../../../images/home/destination/destination2.jpeg";
import destination3 from "../../../images/home/destination/destination3.jpeg";
import destination4 from "../../../images/home/destination/destination4.jpeg";
import Arrow from "../../../components/svg/Arrow";

export default function PopularDestinationList() {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-8">
        <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
          <div>
            <img
              src={destination1}
              alt="destination1"
              className="w-full h-[140px] px-4 my-4 rounded-[40px]"
            />
          </div>

          <div>
            <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Paris, France
            </p>
       
            <div className="flex justify-between">
            <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
            Marc Foujols - Rive Droite
            </p>
            
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
          </div>
        </div>


        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination2}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Tokyo, Japan 
              </p>
         
              
            <div className="flex justify-between">
            <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              23 special wards, 26 cities, 1 district
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination3}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Bangkok, Thailand
              </p>
           
              
            <div className="flex justify-between">
            <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              Located in South-East Asia, Thailand
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination4}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Barcelona, Spain
              </p>
            
              
            <div className="flex justify-between">
            <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              Barcelona is located on the northeast 
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
          <div>
            <img
              src={destination1}
              alt="destination1"
              className="w-full h-[140px] px-4 my-4 rounded-[40px]"
            />
          </div>

          <div>
            <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
            New York City, USA 
            </p>
          
            <div className="flex justify-between">
            <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
            Times Square, Central Park
            </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination2}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Sydney, Australia 
              </p>
            
              <div className="flex justify-between">
              <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              Sydney Opera House, Harbour Bridge
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination3}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Dubai, United Arab Emirates
              </p>
            
              <div className="flex justify-between">
              <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              Burj Khalifa, luxury shopping
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="border rounded-[40px] border-[#f1f1f1] pb-4 cursor-pointer">
            <div>
              <img
                src={destination4}
                alt="destination1"
                className="w-full h-[140px] px-4 my-4 rounded-[40px]"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold leading-[26px] text-heading font-manrope pl-7 ">
              Istanbul, Turkey
              </p>
              <div className="flex justify-between">
              <p className="text-[14px] font-normal leading-[26px] text-gray font-manrope pl-7  ">
              Europe and Asia, with rich
              </p>
              <div className="pr-5">
                <Arrow></Arrow>
              </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
