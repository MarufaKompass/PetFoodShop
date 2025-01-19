import React, { useState } from "react";
import Star from "../../../components/svg/Star";
import Cart from "../../../components/svg/Cart";
import bestProduct01 from "../../../assets/products/product-01.jpg";
import bestProduct02 from "../../../assets/products/product-02.jpg";
import bestProduct03 from "../../../assets/products/product-03.jpg";
import bestProduct04 from "../../../assets/products/product-04.jpg";
import bestProduct05 from "../../../assets/products/product-05.jpg";
import bestProduct06 from "../../../assets/products/product-06.jpg";
export default function BestSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Magic Coat Deluxe Love Pet Glove",
      category: "Toys",
      price: 9.99,
      rating: 4.5,
      image: bestProduct01,
      isHotSell: true
    },
    {
      id: 2,
      name: "WholeHearted Grain Free All Life Stages Duck",
      category: "Wet Food",
      price: 29.99,
      rating: 4.8,
      image: bestProduct03,
    },
    {
      id: 3,
      name: "The Proudest Rainbow Be Proud Dress",
      category: "Furniture",
      price: 59.99,
      rating: 4.2,
      image: bestProduct02,
      isNew: true 
    },
    {
      id: 4,
      name: "Bird Seed Mix",
      category: "Food",
      price: 14.99,
      rating: 4.6,
      image: bestProduct04,
    },
    {
      id: 5,
      name: "Hamster Exercise Wheel",
      category: "Toys",
      price: 19.99,
      rating: 4.3,
      image: bestProduct05,
      isNew: true 
    },
    {
      id: 6,
      name: "Fish Tank Decor",
      category: "Accessories",
      price: 24.99,
      rating: 4.1,
      image: bestProduct06,
      isHotSell: true 
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-[30px]">
          <h1 className=" font-lato text-[28px] md:text-[48px] font-[700] text-heading  border-b border-[#f1f1f1] pb-[30px] ">
          Best Selling Products 
          </h1>
         
        </div>
      <div className="flex justify-end mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-[#f1f1f1] rounded-none w-[16%]  focus:outline-none focus:ring-0"
        >
          <option value="" disabled selected>
            Select category
          </option>
          <option value="All" className="font-lato font-medium text-[14px] text-gray">All Categories</option>
          <option value="Toys" className="font-lato font-medium text-[14px] text-gray">Toys</option>
          <option value="Food" className="font-lato font-medium text-[14px] text-gray">Food</option>
          <option value="Furniture" className="font-lato font-medium text-[14px] text-gray">Furniture</option>
          <option value="Accessories" className="font-lato font-medium text-[14px] text-gray">Accessories</option>
        </select>
      </div>
      <div className="grid  grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8   px-8 xs:px-0">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
          <div className="relative">
          <img
              src={product.image}
              alt={product.name}
              className="w-full h-[12.4rem] pt-[10px] px-[4px]"
            />
            {product.isHotSell && (
                <div variant="destructive" className="absolute top-2 left-2 flex items-center text-[#fff] badge bg-badgeHot px-3 py-3 font-bold text-leto text-[12px]">
                  {/* <Flame className="w-4 h-4 mr-1" /> */}
                  Hot Sell
                </div>
              )}
            {product.isNew && (
                <div variant="destructive" className="absolute top-2 left-2 flex items-center text-[#fff] badge bg-badgeGreen px-3 py-3 font-bold text-leto text-[12px]">
                  {/* <Flame className="w-4 h-4 mr-1" /> */}
                  New
                </div>
              )}
          </div>
            <div className="p-4">
              <p className="font-lato font-medium text-textCategory text-gray pb-1">{product.category}</p>
              <h3 className="font-lato text-textTitle font-semibold mb-2 leading-[24px]">{product.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 font-lato font-medium text-textCategory text-gray pb-1">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <button variant="outline" size="sm" className="flex gap-1">
                  <Cart />
                  {/* <p>Add to Cart</p> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
