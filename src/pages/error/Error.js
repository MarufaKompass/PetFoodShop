import React, { useState } from "react";
import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";
import error from '../../assets/images/404.jpg';
export default function Error() {
  return (
    <div>
<div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-primary font-lato">404</h1>
          <p className="mt-2 text-3xl font-bold text-base-content font-lato">Oops! Page Not Found</p>
          <p className="mt-2 text-xl text-base-content/70 font-lato">Looks like this page has gone for a walk!</p>
        </div>

        <div className="flex justify-center">
          <img
            src={error}
            alt="Confused dog"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="mt-6 text-base-content/70 font-lato">
          <p className="text-lato text-heading font-medium text-[18px]">Don't worry, even the best-trained pages can get lost sometimes.</p>
          <p className="text-lato text-heading font-medium text-[18px]">Let's get you back on the right track!</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary text-[15px] text-lato font-medium  ">
            <Home className="w-5 h-5 mr-2 " />
            Go to Homepage
          </Link>
         
        </div>
{/* 
        <div className="mt-8">
          <p className="text-base-content/70">If you believe this is a mistake, please contact our support team.</p>
          <Link href="/contact" className="link link-primary">
            Contact Support
          </Link>
        </div> */}
      </div>
    </div>
    </div>
  );
}
