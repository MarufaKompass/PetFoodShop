import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NavbarList({ menuItems }) {
  console.log("menuItems", menuItems);

  const [openMenu, setOpenMenu] = useState(null);
  return (
    <div>
      <nav className="bg-gray-800 text-black  ">
        <ul className="flex space-x-6 ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className=" relative"
              onMouseEnter={() => setOpenMenu(item.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.path || "#"}
                className="hover:text-yellow-400 flex items-center py-4"
              >
                {item.title}
                {item?.children?.length > 0 &&
                  (openMenu === item.id ? (
                    <ChevronUp className="w-[22px] h-[22px] ml-2" />
                  ) : (
                    <ChevronDown className="w-[22px] h-[22px] ml-2" />
                  ))}
              </Link>

              {/* Dropdown Submenu */}
              {item.children && (
                <ul
                  className={`absolute left-30  w-64 bg-primary text-white shadow-lg rounded-lg transition-opacity duration-300 py-3 px-3 z-50 ${
                    openMenu === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.children.map((child) => (
                    <li
                      key={child.id}
                      className="px-4 py-2 font-lato font-semibold text-[13px]"
                    >
                      <Link to={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
