import React , {useState} from "react";
import { Link } from "react-router-dom";
import NavbarList from "./NavBarList";
import logo from "../../assets/logo/logo.png";
import CartIcon from "../svg/Cart";
import WishList from "../svg/WishList";
import User from "../svg/User";
import SideCartInfo from "./SideCartInfo";
export default function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <div className="container ">
        <div className="navbar bg-white py-8">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="Logo" width={80} height={80} />
            </Link>
          </div>

          <div className="navbar-middle">
            <NavbarList></NavbarList>
          </div>

          <div className="navbar-end flex gap-3">
            <Link to="/cart" className="relative">
              <div className=" rounded-full p-[10px] bg-[#0c318e]">
                <CartIcon></CartIcon>
                <div className="w-6 h-6 bg-[#e59142] text-[#fff] text-lato font-bold rounded-[50%] absolute bottom-8 left-7 flex items-center justify-center">
                  <span className="text-[13px]">0</span>
                </div>
              </div>
            </Link>

            <Link to="/wishList" className="relative ">
              <div className=" rounded-full p-[10px] bg-[#0c318e]">
                <WishList></WishList>
                <div className="w-6 h-6 bg-[#e59142] text-[#fff] text-lato font-bold rounded-[50%] absolute bottom-8 left-7 flex items-center justify-center">
                  <span className="text-[13px]">3</span>
                </div>
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
         <div className="relative">

            <div className="rounded-full p-[10px] bg-[#0c318e] cursor-pointer" onClick={toggleSidebar}>
              <User></User>
            </div>
           <SideCartInfo isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar }></SideCartInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
