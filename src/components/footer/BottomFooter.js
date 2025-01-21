import React from 'react'
import whiteLogo from "../../assets/logo/white-logo.png";
export default function BottomFooter() {
  return (
    <div>
    {/* Bottom section with logo and copyright */}
    <div className="border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            src={whiteLogo}
            alt="Logo"
            width={80}
            height={80}
            className="mr-2"
          />
          <span className="font-lato font-semibold text-[14px] text-footerText">
            © 2023 Paw-some Pet Foods. All rights reserved.
          </span>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#" className=" hover:text-white font-lato font-semibold text-[14px] text-footerText  mr-4">
            Privacy Policy
          </a>
          <a href="#" className=" hover:text-white font-lato font-semibold text-[14px] text-footerText ">
            Terms of Service
          </a>
        </div>
      </div>
    </div></div>
  )
}
