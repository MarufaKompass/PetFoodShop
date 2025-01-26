import React from "react";
import TwoGrid from "../../components/svg/TwoGrid";
import FourGrid from "../../components/svg/FourGrid";
import Product from "./Product";
import cart1 from "../../assets/products/product-01.jpg";
import cart2 from "../../assets/products/product-02.jpg";
import cart3 from "../../assets/products/product-03.jpg";
import cart4 from "../../assets/products/product-04.jpg";
import cart5 from "../../assets/products/product-05.jpg";
import cart6 from "../../assets/products/product-06.jpg";

export default function Products() {
  
  const products = [
    {
      id: 1,
      name: "Bluetooth Headphones",
      price: 49.99,
      category: "Electronics",
      inStock: true,
      rating: 4.5,
      description:
        "Comfortable over-ear headphones with noise-canceling feature and long battery life.",
      image: cart1,
    },
    {
      id: 2,
      name: "Smart LED Light Bulb",
      price: 19.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.3,
      description:
        "Energy-efficient smart bulb compatible with Alexa and Google Assistant.",
      image: cart2,
    },
    {
      id: 3,
      name: "Portable Power Bank",
      price: 29.99,
      category: "Electronics",
      inStock: true,
      rating: 4.6,
      description: "10,000mAh fast-charging power bank with dual USB ports.",
      image: cart3,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 39.99,
      category: "Gaming",
      inStock: true,
      rating: 4.7,
      description: "Ergonomic gaming mouse with customizable RGB lighting.",
      image: cart4,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      price: 59.99,
      category: "Health & Fitness",
      inStock: true,
      rating: 4.4,
      description:
        "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
      image: cart5,
    },
    {
      id: 6,
      name: "Noise-Canceling Earbuds",
      price: 69.99,
      category: "Electronics",
      inStock: false,
      rating: 4.8,
      description: "True wireless earbuds with active noise cancellation.",
      image: cart6,
    },
    {
      id: 7,
      name: "Laptop Cooling Pad",
      price: 24.99,
      category: "Accessories",
      inStock: true,
      rating: 4.2,
      description: "Cooling pad with adjustable fan speeds and LED lights.",
      image: cart1,
    },
    {
      id: 8,
      name: "4K Action Camera",
      price: 99.99,
      category: "Cameras",
      inStock: false,
      rating: 4.5,
      description:
        "Waterproof action camera with 4K video and image stabilization.",
      image: cart2,
    },
    {
      id: 9,
      name: "Smartwatch",
      price: 129.99,
      category: "Electronics",
      inStock: true,
      rating: 4.6,
      description: "Feature-packed smartwatch with GPS and health tracking.",
      image: cart3,
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      price: 34.99,
      category: "Electronics",
      inStock: true,
      rating: 4.3,
      description: "Compact speaker with powerful sound and long battery life.",
      image: cart4,
    },
    {
      id: 11,
      name: "Electric Kettle",
      price: 49.99,
      category: "Kitchen Appliances",
      inStock: true,
      rating: 4.5,
      description: "Fast-boiling electric kettle with auto shut-off feature.",
      image: cart5,
    },
    {
      id: 12,
      name: "Wireless Keyboard",
      price: 39.99,
      category: "Accessories",
      inStock: true,
      rating: 4.4,
      description: "Ergonomic wireless keyboard with quiet keys.",
      image: cart6,
    },
    {
      id: 13,
      name: "Adjustable Laptop Stand",
      price: 29.99,
      category: "Accessories",
      inStock: true,
      rating: 4.5,
      description: "Aluminum laptop stand with adjustable height and angle.",
      image: cart1,
    },
    {
      id: 14,
      name: "Smart Plug",
      price: 14.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.3,
      description:
        "Smart plug compatible with voice assistants and scheduling.",
      image: cart2,
    },
    {
      id: 15,
      name: "Digital Thermometer",
      price: 19.99,
      category: "Health & Fitness",
      inStock: true,
      rating: 4.6,
      description: "Quick and accurate digital thermometer for all ages.",
      image: cart3,
    },
    {
      id: 16,
      name: "Wireless Charger",
      price: 25.99,
      category: "Accessories",
      inStock: true,
      rating: 4.4,
      description: "Fast wireless charger compatible with most smartphones.",
      image: cart4,
    },
    {
      id: 17,
      name: "Portable Blender",
      price: 34.99,
      category: "Kitchen Appliances",
      inStock: false,
      rating: 4.2,
      description: "Rechargeable portable blender for smoothies and shakes.",
      image: cart5,
    },
    {
      id: 18,
      name: "Electric Toothbrush",
      price: 39.99,
      category: "Health & Fitness",
      inStock: true,
      rating: 4.5,
      description: "Rechargeable electric toothbrush with multiple modes.",
      image: cart6,
    },
    {
      id: 19,
      name: "Cordless Vacuum Cleaner",
      price: 89.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.7,
      description: "Lightweight cordless vacuum cleaner with powerful suction.",
      image: cart1,
    },
    {
      id: 20,
      name: "Smart Doorbell",
      price: 149.99,
      category: "Home Improvement",
      inStock: false,
      rating: 4.6,
      description: "Video doorbell with motion detection and two-way audio.",
      image: cart2,
    },
    {
      id: 21,
      name: "HD Webcam",
      price: 49.99,
      category: "Electronics",
      inStock: true,
      rating: 4.3,
      description: "1080p HD webcam with built-in microphone.",
      image: cart3,
    },
    {
      id: 22,
      name: "Car Phone Mount",
      price: 19.99,
      category: "Accessories",
      inStock: true,
      rating: 4.4,
      description: "Universal car phone mount with 360-degree rotation.",
      image: cart4,
    },
    {
      id: 23,
      name: "Air Purifier",
      price: 79.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.5,
      description: "HEPA air purifier for clean and fresh air.",
      image: cart5,
    },
    {
      id: 24,
      name: "Gaming Headset",
      price: 59.99,
      category: "Gaming",
      inStock: true,
      rating: 4.7,
      description: "Over-ear gaming headset with surround sound and mic.",
      image: cart6,
    },
    {
      id: 25,
      name: "Smart Scale",
      price: 29.99,
      category: "Health & Fitness",
      inStock: true,
      rating: 4.3,
      description: "Bluetooth smart scale with body composition tracking.",
      image: cart1,
    },
    {
      id: 26,
      name: "Electric Shaver",
      price: 49.99,
      category: "Personal Care",
      inStock: true,
      rating: 4.5,
      description: "Rechargeable electric shaver with precision blades.",
      image: cart2,
    },
    {
      id: 27,
      name: "Digital Alarm Clock",
      price: 24.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.4,
      description: "LED alarm clock with USB charging and snooze feature.",
      image: cart3,
    },
    {
      id: 28,
      name: "Smart Thermostat",
      price: 149.99,
      category: "Home Improvement",
      inStock: true,
      rating: 4.6,
      description: "Programmable smart thermostat with remote control.",
      image: cart4,
    },
    {
      id: 29,
      name: "Waterproof Phone Case",
      price: 14.99,
      category: "Accessories",
      inStock: true,
      rating: 4.3,
      description: "Universal waterproof phone case for beach and pool use.",
      image: cart5,
    },
    {
      id: 30,
      name: "Electric Scooter",
      price: 299.99,
      category: "Electronics",
      inStock: false,
      rating: 4.7,
      description: "Foldable electric scooter with long battery range.",
      image: cart5,
    },
  ];

  return (
    <div className="container py-24">
      <div class="grid grid-cols-4 gap-20">
        <div class="col-span-3 ...">
          <div className="flex justify-between">
            <p>Showing 13-14 of 28 results</p>
            <div className="flex gap-3">
              <TwoGrid></TwoGrid>
              <FourGrid></FourGrid>
            </div>
          </div>

          <div  className="grid  grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8   px-8 xs:px-0 my-20">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
        <div class="...">Price filter</div>
      </div>
    </div>
  );
}
