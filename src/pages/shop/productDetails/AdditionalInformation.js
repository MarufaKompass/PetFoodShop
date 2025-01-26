import React, { useState } from "react";

export default function AdditionalInformation() {
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    name: "Classic Comfort Tee",
    price: 29.99,
    description:
      "Experience unparalleled comfort with our Classic Comfort Tee. Made from premium, breathable cotton, this versatile t-shirt is perfect for any casual occasion. The relaxed fit and reinforced seams ensure both style and durability, making it an essential addition to your wardrobe.",
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Premium 100% cotton fabric",
      "Relaxed fit",
      "Reinforced seams for durability",
      "Pre-shrunk to minimize shrinkage",
    ],
    rating: 4.5,
    reviews: 128,
    images: [
      "/placeholder.svg?height=460&width=460&text=Image+1",
      "/placeholder.svg?height=460&width=460&text=Image+2",
      "/placeholder.svg?height=460&width=460&text=Image+3",
      "/placeholder.svg?height=460&width=460&text=Image+4",
    ],
    additionalInfo: {
      material: "100% Cotton",
      weight: "150g",
      care: "Machine wash cold, tumble dry low",
      origin: "Made in USA",
    },
    comments: [
      {
        id: 1,
        author: "John D.",
        content: "Great fit and very comfortable. Highly recommended!",
        rating: 5,
      },
      {
        id: 2,
        author: "Sarah M.",
        content: "Nice quality, but sizing runs a bit large.",
        rating: 4,
      },
      {
        id: 3,
        author: "Mike R.",
        content: "Excellent value for money. Will buy again.",
        rating: 5,
      },
    ],
  };

  const tabContent = {
    description: (
      <div>
        <p className="font-lato font-medium  text-heading  text-[15px] mb-4">
          {product.description}
        </p>
        <h4 className="font-lato font-semibold  text-heading  text-[17px]  mb-2">
          Key Features:
        </h4>
        <ul className="list-disc list-inside text-gray-600">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="font-lato font-medium  text-heading  text-[15px]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    comments: (
      <div>
        {product.comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 pb-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center justify-between mb-2 font-lato font-medium  text-heading  text-[15px]">
              <h4 className="font-semibold font-lato  text-heading  text-[14px]">
                {comment.author}
              </h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < comment.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="font-lato font-medium  text-heading  text-[15px]">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    ),
    additionalInfo: (
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(product.additionalInfo).map(([key, value]) => (
          <div key={key}>
            <h4 className="font-semibold font-lato text-heading  text-[15px]">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </h4>
            <p className="font-lato font-medium  text-heading  text-[14px]">
              {value}
            </p>
          </div>
        ))}
      </div>
    ),
    reviews: (
      <div>
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-lato font-medium  text-heading  text-[15px]">
            {product.rating} out of 5 ({product.reviews} reviews)
          </p>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="font-lato font-medium  text-heading  text-[15px] mr-2">
              5 star
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <span className="font-lato font-medium  text-heading  text-[15px] ml-2">
              70%
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-lato font-medium  text-heading  text-[15px] mr-2">
              4 star
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="font-lato font-medium  text-heading  text-[15px] ml-2">
              20%
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-lato font-medium  text-heading  text-[15px] mr-2">
              3 star
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "5%" }}
              ></div>
            </div>
            <span className="font-lato font-medium  text-heading  text-[15px] ml-2">
              5%
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-lato font-medium  text-heading  text-[15px] mr-2">
              2 star
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "3%" }}
              ></div>
            </div>
            <span className="font-lato font-medium  text-heading  text-[15px] ml-2">
              3%
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-lato font-medium  text-heading  text-[15px] mr-2">
              1 star
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "2%" }}
              ></div>
            </div>
            <span className="font-lato font-medium  text-heading  text-[15px] ml-2">
              2%
            </span>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div>
      <div className="mt-12">
        <div className="border-b border-[#f1f1f1]">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {["description", "comments", "additionalInfo", "reviews"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "border-primary font-lato font-bold  text-heading  text-[16px]"
                      : "border-transparent font-lato font-medium text-heading text-[16px]"
                  }      whitespace-nowrap py-4 px-1 border-b-2 font-lato font-semibold text-heading text-[15px]`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>
        <div className="mt-8">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}
