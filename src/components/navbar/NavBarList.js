import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NavbarList() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const shopRoute = routes.find((route) => route.path === "/shop");
  console.log("shopRoute", shopRoute);

  return (
    <div>
      <ul className="hidden md:flex gap-12">
        <li className="text-textTitle text-heading font-semibold font-lato">
          <Link to="/">Home</Link>
        </li>

        <li className="text-textTitle text-heading font-semibold font-lato">
          <Link to="/about">About</Link>
        </li>

        <li className="text-textTitle text-heading font-semibold font-lato relative">
          <div
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <div className="flex gap-1">
              <Link to="/shop">Shop</Link>
              {showSubMenu ? <ChevronUp /> : <ChevronDown />}
            </div>

            {shopRoute?.children && (
              <ul
                className={`absolute -left-6 bg-white shadow-md rounded-md p-2 w-40 z-20 transition-all duration-300 transform ${
                  showSubMenu
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {shopRoute.children.map((child, index) => (
                  <li
                    key={index}
                    className="text-textColor hover:text-textColor text-[14px] px-4 py-2 border-b border-[#f1f1f1]"
                  >
                    <Link to={child.path}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>

        <li className="text-textTitle text-heading font-semibold font-lato">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
