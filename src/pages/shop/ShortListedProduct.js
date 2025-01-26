import React from "react";
import TwoGrid from "../../components/svg/TwoGrid";
import FourGrid from "../../components/svg/FourGrid";
import Product from "./Product";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
import product1 from "../../assets/products/product-03.jpg";
import product2 from "../../assets/products/product-04.jpg";
import product3 from "../../assets/products/product-05.jpg";
export default function ShortListedProduct() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      category: "Electronics",
      rating: 4.5,
      inStock: true,
      image: product1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      category: "Home Appliances",
      rating: 4.2,
      inStock: false,
      image: product2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 150,
      category: "Fashion",
      rating: 4.8,
      inStock: true,
      image: product3,
    },
    {
      id: 4,
      name: "Product 4",
      price: 300,
      category: "Beauty",
      rating: 4.0,
      inStock: true,
      image: product1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      category: "Books",
      rating: 3.9,
      inStock: true,
      image: product2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 400,
      category: "Sports",
      rating: 4.7,
      inStock: false,
      image: product3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 250,
      category: "Toys",
      rating: 4.3,
      inStock: true,
      image:product1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 350,
      category: "Kitchen",
      rating: 4.6,
      inStock: true,
      image: product2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 500,
      category: "Gaming",
      rating: 4.9,
      inStock: false,
      image: product3,
    },
    {
      id: 10,
      name: "Product 10",
      price: 450,
      category: "Gardening",
      rating: 4.4,
      inStock: true,
      image: product1,
    },
  ];

  return (
    <div className="">
      <div className="pl-2">
        <span className="font-bold text-heading  text-[20px]">Products</span>
      </div>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className='flex'
          >
            <img
              src={product.image}
              alt={product.name}
              className="w- [80px], h-[80px]"
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p> {product.category}</p>
            <p>{product.rating} ★</p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
