import React from "react";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import cart1 from "../../assets/products/product-03.jpg";
import cart2 from "../../assets/products/product-04.jpg";
import cart3 from "../../assets/products/product-05.jpg";
import RecommendedProducts from "./RecommendedProducts";
export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Deluxe Dog Collar",
      price: 300.00,
      quantity: 2,
      image: cart1,
    },
    { id: 2, name: "Cat Toy Set", price: 1500.00, quantity: 1, image: cart2 },
    {
      id: 3,
      name: "Premium Pet Food Bowl",
      price: 1000.00,
      quantity: 1,
      image: cart3,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + tax;
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <ShoppingCart className="mr-2  font-lato text-[26px] font-bold text-heading" /> Your Cart Summary
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-between border-b border-[#f1f1f1] pb-4">
                <p className=" flex w-2/5 font-lato  text-[16px] font-bold text-heading">
                  Product
                </p>
                <p className="flex justify-center  w-1/5 font-lato text-[16px] font-bold text-heading">
                  Price
                </p>
                <p className="flex justify-center w-1/5 font-lato  text-[16px] font-bold text-heading">
                  Quantity
                </p>
                <p className="flex justify-center w-1/5 font-lato  text-[16px] font-bold text-heading">
                  Subtotal
                </p>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-24"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="  font-lato text-[14px] font-bold text-heading">{item.name}</span>
                      <button className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center">
                        <Trash2 size={16} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button className="btn btn-ghost btn-circle btn-sm">
                      <Minus size={16} />
                    </button>
                    <input
                      className="mx-2 border text-center w-12"
                      type="text"
                      value={item.quantity}
                    />
                    <button className="btn btn-ghost btn-circle btn-sm">
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.price.toFixed(2)} ৳
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {(item.price * item.quantity).toFixed(2)} ৳
                  </span>
                </div>
              ))}
            </div>

            {/* Recommended Products */}
            <RecommendedProducts></RecommendedProducts>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className=" mb-4 font-lato text-[18px] font-bold text-heading">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} ৳</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-lato text-[14px] font-medium text-heading">Shipping Charge</span>
                <span className="font-lato text-[14px] font-medium text-heading">{tax.toFixed(2)} ৳</span>
              </div>
             
              <div className="flex justify-between mb-2 border-t border-[#f1f1f1] py-3">
                <span className="font-lato text-[15px] font-bold text-heading">Total</span>
                <span className="font-lato text-[15px] font-bold text-heading">{total.toFixed(2)} ৳</span>
              </div>

              <div className="form-control mt-4">
                  <label className="label">
                    <span className=" font-lato text-[14px] font-bold text-heading">Coupon Code</span>
                  </label>
                  <div className="flex gap-3">
                    <input type="text" placeholder="Enter code" className="input input-bordered flex-grow rounded-none focus:outline-none border-[#f1f1f1]" />
                  <div>
                  <button className="btn rounded-none bg-primary text-white hover:bg-[#ce823b] font-lato text-[14px]">Add Coupon</button>
                  </div>
                  </div>
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="font-lato text-[14px] font-bold text-heading">Shipping Method</span>
                  </label>
                  <select className="select select-bordered w-full rounded-none focus:outline-none border-[#f1f1f1]">
                    <option disabled selected>
                      Select shipping method
                    </option>
                    <option>Inside Dhaka (60.00 ৳)</option>
                    <option>Outside Dhaka (150.00 ৳)</option>
                  </select>
                </div>
          
        

              
              <button className="btn bg-primary text-white hover:bg-[#ce823b] rounded-none  btn-block mt-4 flex items-center justify-center  font-lato text-[16px]">
                Proceed to Checkout <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
