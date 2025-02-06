import React, { useState } from "react";
import product01 from "../../../assets/products/product-01.jpg";
import product02 from "../../../assets/products/product-02.jpg";
import product03 from "../../../assets/products/product-03.jpg";
import product04 from "../../../assets/products/product-04.jpg";
import product05 from "../../../assets/products/product-05.jpg";
import product06 from "../../../assets/products/product-06.jpg";
import Star from "../../../components/svg/Star";
import RelatedProducts from "./RelatedProducts";
import AdditionalInformation from "./AdditionalInformation";
import { Plus, Minus } from "lucide-react";
export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const product = {
    name: "Classic Comfort Tee",
    price: 290.99,
    description:
      "Experience unparalleled comfort with our Classic Comfort Tee. Made from premium, breathable cotton, this versatile t-shirt is perfect for any casual occasion.",
    colors: ["White", "Black", "Gray"],
    sizes: ["250gm", "500gm", "1kg", "2kg"],
    features: [
      "Breed-specific food (e.g., large vs. small breeds).",
      "Age-specific formulas (puppy, adult, senior).",
      "Natural or organic ingredients",
      "Immune system boosters (antioxidants).",
    ],
    rating: 4.5,
    reviews: 128,
    images: [product01, product02, product03, product04, product05, product06],
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="lg:w-1/2">
              <div className="relative aspect-square mb-4 flex justify-center items-center border border-[#f1f1f1]">
                
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="fit"
                />

              </div>
              <div className="flex gap-4 space-x-2 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0  w-28 h-28 relative rounded-none overflow-hidden p-2 ${
                      index === currentImageIndex ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-lato font-bold  text-heading  text-[15px]">
                    Price :
                  </span>
                  <span className="font-lato font-semibold  text-heading  text-[15px]">
                    {" "}
                    {product.price} ৳
                  </span>
                </div>
                <div>
                  <span className="font-lato font-bold  text-heading  text-[15px]">
                    Availability :
                  </span>
                  <span className="font-lato font-bold  text-[#008000]  text-[15px]">
                    {" "}
                    In Stock
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-lato font-bold  text-heading  text-[15px] ">
                  Select Quantity:
                </span>
                <div className="flex justify-center w-[140px] border border-[#f1f1f1] py-1 mt-4">
                  <button className="btn btn-ghost btn-circle btn-sm pl-4 ">
                    <Minus size={16} />
                  </button>
                  <input
                    className="mx-2  text-center w-12  border-none px-2"
                    type="text"
                    value="1"
                  />
                  <button className="btn btn-ghost btn-circle btn-sm pr-4">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-lato font-bold  text-heading  text-[15px]">
                  Weight :
                </span>
                <div className="flex items-center mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={` text-gray py-2 px-4 rounded-[60px] font-medium mr-2 hover:bg-gray-400 cursor-pointer border border-[#f1f1f1] ${
                        size === selectedSize ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Features:</span>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Product Rating:</span>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-primary hover:text-heading text-white text-[15px] py-2 px-4 font-semibold hover:bg-white  transition duration-200  hover:border hover:border-[#f1f1f1] font-lato">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full  bg-primary hover:text-heading text-white text-[15px] py-2 px-4 font-semibold hover:bg-white  transition duration-200  hover:border hover:border-[#f1f1f1] font-lato">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AdditionalInformation></AdditionalInformation>
          </div>
          <RelatedProducts></RelatedProducts>
        </div>
      </div>
    </div>
  );
}
