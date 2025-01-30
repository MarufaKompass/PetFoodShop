import React from "react";
import Star from "../../components/svg/Star";
import product1 from "../../assets/products/product-03.jpg";
import product2 from "../../assets/products/product-04.jpg";
import product3 from "../../assets/products/product-05.jpg";
export default function ShortListedProduct() {
  const products = [
    {
      id: 1,
      name: "Deluxe Dog Collar",
      price: 100,
      category: "Electronics",
      rating: 4.5,
      inStock: true,
      image: product1,
    },
    {
      id: 2,
      name: "Pedigree",
      price: 200,
      category: "Home Appliances",
      rating: 4.2,
      inStock: false,
      image: product2,
    },
    {
      id: 3,
      name: "Royal Canin",
      price: 150,
      category: "Fashion",
      rating: 4.8,
      inStock: true,
      image: product3,
    },
    {
      id: 4,
      name: "Hill's Science Diet",
      price: 300,
      category: "Beauty",
      rating: 4.0,
      inStock: true,
      image: product1,
    },
    {
      id: 5,
      name: "Purina Pro Plan",
      price: 50,
      category: "Books",
      rating: 3.9,
      inStock: true,
      image: product2,
    },
    {
      id: 6,
      name: "Blue Buffalo",
      price: 400,
      category: "Sports",
      rating: 4.7,
      inStock: false,
      image: product3,
    },
  ];

  return (
    <div className="">
      <div className="pl-2 pb-3">
        <span className="font-bold text-heading text-[22px] ">Products</span>
      </div>

      <div>
        {products.map((product) => (
          <div key={product.id} className="flex gap-4 mb-3 pl-1">
            <div className="border border-[#f1f1f1] flex items-center justify-center rounded-[10px] px-2 py-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-[70px], h-[70px]"
              />
            </div>
            <div className="flex items-center">
              <div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="font-lato font-medium text-textCategory text-gray pb-1">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
                <h2 className="font-lato text-[16px] font-bold text-heading">
                  {product.name}
                </h2>
                <p className="font-lato font-bold  text-heading  text-[15px] pt-[4px]">
                  {product.price} ৳
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
