import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay ,FreeMode, Pagination } from "swiper/modules";

import "./styles.css";
import Boninie from "../../../assets/banners/Boninie.jpg";
import Drools from "../../../assets/banners/Drools.jpg";
import Jungle from "../../../assets/banners/Jungle.jpg";
import Lara from "../../../assets/banners/Lara.jpg";
import RoyalCanin from "../../../assets/banners/Royal-Canin.jpg";
import Sheba from "../../../assets/banners/Sheba.jpg";
import Whiskas from "../../../assets/banners/Whiskas.jpg";
import zoCiat from "../../../assets/banners/zoi-cat-brand-logo.png";
import ToroToro from "../../../assets/banners/Toro-Toro.jpg";
import BonaCibo from "../../../assets/banners/BonaCibo.jpg";
import Nekko from "../../../assets/banners/Nekko.jpg";
import SmartHeart from "../../../assets/banners/Smart-Heart.jpg";
import me from "../../../assets/banners/me-o.jpg";

export default function Brands() {
  const brandsData = [
    { id: 1, image: Boninie },
    { id: 2, image: Drools },
    { id: 3, image: Jungle },
    { id: 4, image: Lara },
    { id: 5, image: RoyalCanin },
    { id: 6, image: Sheba },
    { id: 7, image: Whiskas },
    { id: 8, image: zoCiat },
    { id: 9, image: ToroToro },
    { id: 10, image: BonaCibo },
    { id: 11, image: Nekko },
    { id: 12, image: SmartHeart },
    { id: 13, image: me },
  ];

  return (
    <div className="container">
      <div>
        <h1 className="font-lato text-[28px] md:text-[42px] font-[700] text-heading pb-[20px] border-b border-[#f1f1f1] mb-[10px]">
        Feature Brands
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[Autoplay , FreeMode, Pagination]}
          className="mySwiper"
        >
          {brandsData.map((item) => (
       <SwiperSlide
       key={item.id}
       style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "200px", 
  
       }}
     >
       <div
         style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           padding: "10px",
           height: "100%",
           width: "100%", 
         }}
       >
         <img
           src={item.image}
           alt={`Image ${item.id}`}
           style={{
             width: "auto",
             height: "200px", 
             maxWidth: "100%",
             maxHeight: "100%",
             objectFit: "contain",
           }}
         />
       </div>
     </SwiperSlide>
     
          ))}
        </Swiper>
      </div>
    </div>
  );
}
