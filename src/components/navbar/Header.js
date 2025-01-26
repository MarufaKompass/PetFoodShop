import React from "react";
import { Link } from "react-router-dom";
import NavbarList from "./NavBarList";
export default function Header() {
  return (
    <div>
      <div className="container ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Pet Commerce
            </Link>
          </div>

          <div className="navbar-middle">
            <NavbarList></NavbarList>
          </div>

          <div className="navbar-end">
            <Link to="/cart" className="relative pr-5">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <div className="w-4 h-4 bg-[#e59142] text-[#fff] font-bold rounded-[50%] absolute bottom-4 left-4 flex items-center justify-center">
                  <span className="text-[12px]">0</span>
                </div>
              </div>
            </Link>
            <Link to="/wishList" className="relative pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <div className="w-4 h-4 bg-[#e59142] text-[#fff] font-bold rounded-[50%] absolute bottom-4 left-4 flex items-center justify-center">
                <span className="text-[12px]">0</span>
              </div>
            </Link>
            {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/placeholder.svg" alt="User Avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/account" className="justify-between">
                My Account
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-user"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
