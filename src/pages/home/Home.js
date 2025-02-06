import React from "react";

import Background from "./background/Background";
import BestSellingProducts from "./bestSellingProducts/BestSellingProducts";
import Categories from "./categories/Categories";
import FastDeliveryProcess from "./fastDelivery/FastDeliveryProcess";
import SomeImages from "./someImages/SomeImages";
import Banners from "./banners/Banners";
import Product from "./product/Product";
import BannerTwo from "./banners/BannerTwo";
import Brands from "./brand/Brands";

export default function Home() {
  return (
    <div>
      <Background></Background>
      <div className="bg-[#f8f8f8]">
        <Categories></Categories>
      </div>
      <Product></Product>
      <Banners></Banners>
      <BestSellingProducts></BestSellingProducts>
      <BannerTwo></BannerTwo>
      <Brands></Brands>
      <FastDeliveryProcess></FastDeliveryProcess>
      <SomeImages></SomeImages>
    </div>
  );
}
