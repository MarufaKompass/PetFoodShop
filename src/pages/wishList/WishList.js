import React from "react";
import { Trash2 } from "lucide-react";
import cart1 from "../../assets/products/product-03.jpg";
import cart2 from "../../assets/products/product-04.jpg";
import cart3 from "../../assets/products/product-05.jpg";

export default function WishList() {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 49.99,
      category: "Electronics",
      inStock: true,
      description:
        "Comfortable over-ear headphones with noise-canceling feature and long battery life.",
      image: cart1,
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      price: 19.99,
      category: "Home & Kitchen",
      inStock: true,
      description:
        "Durable, eco-friendly water bottle with double-wall insulation to keep beverages cold or hot.",
      image: cart2,
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      price: 129.99,
      category: "Furniture",
      inStock: false,
      description:
        "Adjustable office chair with lumbar support and breathable mesh backrest.",
      image: cart3,
    },
  ];

  return (
    <main className="flex-grow container mx-auto px-24 py-20">
      <h2 className="text-3xl font-bold mb-6">
        My Wishlist ({products.length} items)
      </h2>

      <div className="flex flex-col gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center space-x-4 border-b py-4 border-[#f1f1f1]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <div className="flex items-center mt-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
              <button className="px-6 py-2 bg-primary rounded-none font-lato text-[14px] font-bold text-white cursor-pointer">
                Add to Cart
              </button>
              <button className="btn btn-ghost btn-sm text-red-500">
                <Trash2 className="h-4 w-4 mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
