import React from "react";
import product01 from "../../assets/products/product-01.jpg";
import product02 from "../../assets/products/product-02.jpg";
import Star from "../../components/svg/Star";
import Cart from "../../components/svg/Cart";
export default function Product() {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div className="border border-[#f1f1f1]">
          <img src={product01} alt="product01"></img>
          <div className="pb-4 pt-2 px-2">
            <p className="font-lato font-medium text-[14px] text-gray">Grooming</p>
            <p className="font-lato font-semibold text-[15px] text-textColor">Magic Coat Deluxe Love Pet Glove</p>
   
       
          <div className="flex mt-[3px]">
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
              <Star></Star>
            </div>
           
          <div className="flex justify-between mt-1">
          <p className="font-lato font-semibold text-[16px] text-textColor">99.00 BDT</p>
          <div className="cursor-pointer">
       <Cart></Cart>   
            </div>
            </div>

          </div>
        </div>
        <div className="border border-[#f1f1f1]">
        <img src={product02} alt="product02"></img>
        <div className="pb-4 pt-2 px-2">
            <p>Chew Toys</p>
            <p>YOULY The Proudest Rainbow Be Proud Dress</p>
            <p>$99.00</p>
          </div>
        </div>
        <div className="border">03</div>
        <div className="border">04</div>
      </div>
    </div>
  );
}
