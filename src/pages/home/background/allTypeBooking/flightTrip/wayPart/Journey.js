import React, { useState, useEffect, useRef } from "react";
import Calendar from "../../../../../../components/calander/Calender";
import dayjs from "dayjs";
export default function Journey() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
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
        className=" bg-white px-4 py-2 cursor-pointer  border-r-2 border-[#f1f1f1]"
        onClick={toggleDropdown}
      >
        <span className="text-[12px] font-[600] leading-[-6px] text-heading font-manrope ">
          Journey Date
        </span>
        <div className="text-center">
        {selectedDate ? (
          <p className="text-[12px] pr-[8px] text-gray font-manrope">
            <strong>{selectedDate.format("DD MMM YYYY")}</strong>
          </p>
        ) : (
          <p className="text-red-500">No date selected</p>
        )}
      </div>
        <p className="text-[12px] font-[500] leading-[-6px] text-gray font-manrope pt-[-6px]">
        {selectedDate.format("dddd")}
        </p>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full mt-2 rounded-sm bg-white z-10 w-[350px]  py-3">
          <div className="h-[100%]">
          
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}></Calendar>
          </div>
        </div>
      )}
    </div>
  );
}
