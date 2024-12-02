import React from "react";
import FeaturedTorList from "./FeaturedTorList";

export default function FeaturedTour() {
  return (
    <div className="container">
    <div className="py-24">
    <div>
        <h1 className="text-[52px] font-[700] leading-[61px] text-heading font-manrope">
          Our Featured Tour Packages
        </h1>
        <p className="text-[20px] font-[500] leading-[26px] text-gray font-manrope pb-10">
          Favorite destinations based on customer reviews
        </p>
      </div>

      <FeaturedTorList></FeaturedTorList>
    </div>
    </div>
  );
}
