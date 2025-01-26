import React from "react";
import product01 from "../../assets/products/product-01.jpg";
import product02 from "../../assets/products/product-02.jpg";
import Star from "../../components/svg/Star";
import Cart from "../../components/svg/Cart";
export default function Product({ product }) {
  return (
    <div>
      <div>
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
              <div
                variant="destructive"
                className="absolute top-2 left-2 flex items-center text-[#fff] badge bg-badgeHot px-3 py-3 font-bold text-leto text-[12px]"
              >
                {/* <Flame className="w-4 h-4 mr-1" /> */}
                Hot Sell
              </div>
            )}
            {product.isNew && (
              <div
                variant="destructive"
                className="absolute top-2 left-2 flex items-center text-[#fff] badge bg-badgeGreen px-3 py-3 font-bold text-leto text-[12px]"
              >
                {/* <Flame className="w-4 h-4 mr-1" /> */}
                New
              </div>
            )}
          </div>
          <div className="p-4">
            <p className="font-lato font-medium text-textCategory text-gray pb-1">
              {product.category}
            </p>
            <h3 className="font-lato text-textTitle font-semibold mb-2 leading-[24px]">
              {product.name}
            </h3>
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
      </div>
    </div>
  );
}
