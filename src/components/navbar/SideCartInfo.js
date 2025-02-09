import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";
import { Minus, Plus, X } from "lucide-react";
import cart1 from "../../assets/products/product-04.jpg";
import cart2 from "../../assets/products/product-03.jpg";
export default function SideCartInfo({ toggleSidebar, isSidebarOpen }) {
  const initialProducts = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 190.0,
      image: cart1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 490.0,
      image: cart2,
      quantity: 1,
    },
  ];
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, change) => {
    setProducts(
      products
        .map((product) =>
          product.id === id
            ? { ...product, quantity: Math.max(0, product.quantity + change) }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="mt-3 border-b border-[#f1f1f1] pb-1">
          <button
            className="absolute top-9 right-4 text-black "
            onClick={toggleSidebar}
          >
            <X size={24} />
          </button>
          <div className="p-4">
            <h2 className="text-heading text-[24px] text-lato font-bold">
              Cart (3)
            </h2>
          </div>
        </div>
        <div>
          <div className="fixed inset-y-0 right-0 top-20 w-96 bg-base-200 shadow-xl p-4 overflow-y-auto">
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card card-side bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm font-lato text-heading">
                      {product.name}
                    </h3>
                    <p className="text-primary font-bold">
                      {product.price.toFixed(2)} ৳
                    </p>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="border border-[#f1f1f1] rounded-full p-1.5"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-lato text-heading">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="border border-[#f1f1f1] rounded-full p-1.5"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div>
                        <Trash />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4 fixed bottom-5 w-[90%]">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold font-lato">Subtotal:</span>
                <span className="text-lg font-bold text-primary font-lato">
                  {total.toFixed(2)} ৳
                </span>
              </div>
              <Link to="/checkout">
                <button className="btn btn-primary btn-block" onClick={toggleSidebar}>Checkout</button>
              </Link>
              <Link to="/cart">
                <button className="btn btn-secondary btn-block mt-3" onClick={toggleSidebar}>
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
