import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderProduct01 from "../../../assets/products/product-01.jpg";
import sliderProduct02 from "../../../assets/products/product-02.jpg";
import sliderProduct03 from "../../../assets/products/product-03.jpg";
import sliderProduct04 from "../../../assets/products/product-04.jpg";
import sliderProduct05 from "../../../assets/products/product-05.jpg";
import sliderProduct06 from "../../../assets/products/product-06.jpg";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Categories() {
  const [categories] = useState([
    {
      id: 1,
      image: sliderProduct01,
      title: "Dog Food",
      category: "Food",
      star: 4.5,
      price: "$25.00",
    },
    {
      id: 2,
      image: sliderProduct02,
      title: "Cat Toys",
      category: "Toys",
      star: 4.2,
      price: "$12.00",
    },
    {
      id: 3,
      image: sliderProduct03,
      title: "Bird Seeds",
      category: "Food",
      star: 4.8,
      price: "$18.00",
    },
    {
      id: 4,
      image: sliderProduct04,
      title: "Fish Tank",
      category: "Aquarium",
      star: 4.0,
      price: "$80.00",
    },
    {
      id: 5,
      image: sliderProduct05,
      title: "Reptile Supplies",
      category: "Reptiles",
      star: 4.3,
      price: "$35.00",
    },
    {
      id: 6,
      image: sliderProduct06,
      title: "Dog Food",
      category: "Food",
      star: 4.5,
      price: "$25.00",
    },
    {
      id: 7,
      image: sliderProduct01,
      title: "Cat Toys",
      category: "Toys",
      star: 4.2,
      price: "$12.00",
    },
    {
      id: 8,
      image: sliderProduct02,
      title: "Bird Seeds",
      category: "Food",
      star: 4.8,
      price: "$18.00",
    },
    {
      id: 9,
      image: sliderProduct03,
      title: "Fish Tank",
      category: "Aquarium",
      star: 4.0,
      price: "$80.00",
    },
    {
      id: 10,
      image: sliderProduct04,
      title: "Reptile Supplies",
      category: "Reptiles",
      star: 4.3,
      price: "$35.00",
    },
  ]);
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className=" font-lato text-[28px] md:text-[48px] font-[700] text-heading  border-b border-[#777575] pb-[30px] mb-[30px]">
          Shop by Category
        </h2>

        {/* <Swiper
          spaceBetween={30}
          slidesPerView={6}
          navigation={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Navigation]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="w-48 cursor-pointer">
                <div className="flex items-center justify-center rounded-tl-[100px] rounded-tr-[10px] rounded-br-[100px] rounded-bl-[100px] w-48 h-48  shadow-md p-4 bg-[#fff]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="rounded-full w-32 h-32 flex justify-center items-center "
                  />
                </div>

                <div className="flex justify-center mt-3">
                  <div>
                    <h3 className="font-lato font-bold text-[18px] text-heading  text-center ">
                      {category.title}
                    </h3>
                    <span className="font-lato font-medium text-textCategory text-gray flex justify-center">
                      {category.category}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
  spaceBetween={30}
  slidesPerView={6}
  navigation={true}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, FreeMode, Navigation]}
  className="mySwiper"
>
  {categories.map((category) => {
    // Generate a random background color
    const randomBgColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '#003039 ')}`;

    return (
      <SwiperSlide key={category.id}>
        <div className="w-48 cursor-pointer">
          <div
            className="flex items-center justify-center rounded-tl-[100px] rounded-tr-[10px] rounded-br-[100px] rounded-bl-[100px] w-48 h-48 shadow-md p-4"
            style={{ backgroundColor: randomBgColor }} // Set random background color
          >
            <img
              src={category.image}
              alt={category.title}
              className="rounded-full w-32 h-32 flex justify-center items-center"
            />
          </div>

          <div className="flex justify-center mt-3">
            <div>
              <h3 className="font-lato font-bold text-[18px] text-heading text-center">
                {category.title}
              </h3>
              <span className="font-lato font-medium text-textCategory text-gray flex justify-center">
                {category.category}
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

      </div>
    </div>
  );
}
