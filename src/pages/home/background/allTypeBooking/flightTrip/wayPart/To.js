import React, { useEffect, useRef, useState } from 'react'
import Search from '../../../../../../components/svg/Search';

export default function To() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
    <div
      className="border border-[#f1f1f1] bg-white px-4 py-2 rounded-[16px] cursor-pointer"
      onClick={toggleDropdown}
    >
      <span className="text-[12px] font-[600] leading-[-6px] text-heading font-manrope">
        To
      </span>
      <p className="text-[18px] font-[700] leading-[-6px] text-heading font-manrope">
        India
      </p>
      <p className="text-[12px] font-[500] leading-[-6px] text-gray font-manrope">
      Chhatrapati Shivaji....
      </p>
    </div>

    {isDropdownOpen && (
      <div className="absolute top-full mt-2 rounded-sm bg-white border border-[#f1f1f1] shadow-lg z-10 w-[450px] py-3">
        <div className="border-b-2 border-[#f1f1f1] pb-1 relative">
          <div className="absolute top-[7px] left-[6px]">
            <Search></Search>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className=" pl-7  input input-bordered  border-[#f1f1f1] input-sm max-w-xs border-none focus:outline-none focus:ring-0 !important"
          />
        </div>

        <div className="mt-1">
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
            <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
            Dhaka, Bangladesh
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
              Hazrat Shahjalal International Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          Chittagong, Bangladesh
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
           
              Shah Amanat International Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          Sylhet, Bangladesh
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
              Osmani International Airport
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          Mumbai,India
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
  
              Chhatrapati Shivaji Maharaj International Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          New Delhi, India
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">

              Indira Gandhi International Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          London, United Kingdom
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
           
              Heathrow Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          Los Angeles, USA
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
      
              Los Angeles International Airport 
            </p>
          </div>
          <div className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
          <p className="text-[15px] font-[400] leading-[22px] text-heading font-manrope">
          Singapore
            </p>
            <p className="text-[13px] font-[400] leading-[18px] text-gray font-manrope">
         
              Singapore Changi Airport 
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
