import React , {useState} from "react";
import { Link } from "react-router-dom";
import NavbarList from "./NavBarList";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo/logo.png";
import CartIcon from "../svg/Cart";
import WishList from "../svg/WishList";
import User from "../svg/User";
import SideCartInfo from "./SideCartInfo";
import menuItems from "./menuItems"
import { Menu, X } from "lucide-react"
export default function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <div className="container ">
        <div className="grid grid-cols-3  py-4">

          
          <div className="">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="Logo" width={80} height={80} />
            </Link>
          </div>




          <div className="flex items-center ">
            <NavbarList menuItems={menuItems}></NavbarList>
          </div> 
          
          {/* <div className="md:hidden sm:flex">
            <MobileMenu menuItems={menuItems} isOpen={isMobileMenuOpen}> </MobileMenu>
          </div>  */}


       




          <div className=" flex justify-end flex gap-3">
            <div className="relative" onClick={toggleSidebar}>
              <div className=" rounded-full p-[10px] bg-[#0c318e]">
                <CartIcon></CartIcon>
                <div className="w-6 h-6 bg-[#e59142] text-[#fff] text-lato font-bold rounded-[50%] absolute bottom-12 left-7 flex items-center justify-center">
                  <span className="text-[13px]">2</span>
                </div>
              </div>
            </div>

            <Link to="/wishList" className="relative ">
              <div className=" rounded-full p-[10px] bg-[#0c318e]">
                <WishList></WishList>
                <div className="w-6 h-6 bg-[#e59142] text-[#fff] text-lato font-bold rounded-[50%] absolute bottom-12 left-7 flex items-center justify-center">
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

            <div className="rounded-full p-[10px] bg-[#0c318e] cursor-pointer" >
              <User></User>
            </div>
{/* 

            <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >

              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div> */}



               <SideCartInfo isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar }></SideCartInfo>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
