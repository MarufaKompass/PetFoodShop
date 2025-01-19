import React from "react";
import Background from "./background/Background";
import BestSellingProducts from "./bestSellingProducts/BestSellingProducts";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";

export default function Home() {
  return (
    <div>
      <Background></Background>

      <Banner></Banner>
      <div className="bg-[#f1f1f1]">
        <Categories></Categories>
      </div>
      <BestSellingProducts></BestSellingProducts>
    </div>
  );
}
