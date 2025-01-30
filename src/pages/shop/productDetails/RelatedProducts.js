import React from "react";
import product01 from "../../../assets/products/product-01.jpg";
import product02 from "../../../assets/products/product-02.jpg";
import product03 from "../../../assets/products/product-03.jpg";
import product04 from "../../../assets/products/product-04.jpg";

export default function RelatedProducts() {
  const relatedProducts = [
    { id: 1, name: "Hill's Science Diet", price: 590.99, image: product01 },
    { id: 2, name: "Purina Pro Plan", price: 790.99, image: product02 },
    { id: 3, name: "Blue Buffalo", price: 340.99, image: product03 },
    { id: 4, name: "Taste of the Wild", price: 140.99, image: product04 },
  ];

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16">
            <h3 className="font-lato font-bold  text-heading  text-[28px]  mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-fit"
                  />
                  <div className="p-4">
                    <h4 className="font-lato font-bold  text-heading  text-[17px] mb-2">
                      {product.name}
                    </h4>
                    <p className="font-lato font-medium  text-semibold  text-[15px] ">
                      {product.price} ৳
                    </p>
                    <button className="mt-4 w-full bg-gray-800 text-heading py-2 px-4 rounded-full font-bold hover:bg-gray-700 transition duration-200 border border-[#f1f1f1] rounded-none">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
