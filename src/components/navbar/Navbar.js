import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
export default function Navbar() {
  return (
    <div>
      <header className="shadow-md ">
        {/* Top section */}
        <div className="border-b border-[#f1f1f1] bg-[#e59142]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-[15px] text-[#fff] font-poppins">Email: info@petcommerce.com</span>
            <span className="text-[15px] text-[#fff] font-poppins">Customer Support: +1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-4">
          

          </div>
        </div>
        </div>

        {/* Main navigation */}
        <Header></Header>
      </header>
    </div>
  );
}
