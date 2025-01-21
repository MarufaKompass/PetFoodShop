import React from "react";
import BottomFooter from "./BottomFooter";

import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#202020] ">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <h2 className="font-lato font-bold text-[20px] text-white  mb-2">
                Paw-some Pet Foods
              </h2>
              <p className="mb-4 font-lato font-semibold text-[14px] text-footerText">
                Providing nutritious and delicious meals for your furry friends
                since 2010.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-footerText hover:text-footerText">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-footerText hover:text-footerText">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-footerText hover:text-footerText">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-lato font-bold text-[18px] text-white  mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-lato font-bold text-[18px] text-white mb-4 uppercase tracking-wider">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Dog Foods
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Cat Foods
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Bird Feeds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Fish Foods
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-lato font-bold text-[18px] text-white mb-4 uppercase tracking-wider">
                Customer Service
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 font-lato font-semibold text-[14px] text-footerText hover:text-white"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <BottomFooter></BottomFooter>
      </footer>
    </div>
  );
}
