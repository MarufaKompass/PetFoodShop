import React from "react";
import product01 from "../../assets/products/product-03.jpg";
import product02 from "../../assets/products/product-04.jpg";
import product03 from "../../assets/products/product-05.jpg";


export default function RecommendedProducts() {
  const recommendedProducts = [
    {
      id: 4,
      name: "Pet Grooming Brush",
      price: 3000.00,
      image: product01,
    },
    { id: 5, name: "Dog Chew Toy", price: 1600.00, image:product02 },
    {
      id: 6,
      name: "Cat Scratching Post",
      price: 1400.00,
      image: product03,
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl  mb-4  font-lato text-[18px] font-bold text-heading">Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-sm">{product.name}</h3>
                <p className="text-primary font-semibold">
                  {product.price.toFixed(2)} ৳
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-primary btn-sm border-none rounded-none  font-lato text-[13px] font-bold text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
