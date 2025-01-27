import React, { useEffect, useState, useRef } from "react";

import slider from "../../../assets/home/slider/slide.jpg";
import slider0 from "../../../assets/home/slider/slide0.jpg";
import slider1 from "../../../assets/home/slider/slide1.jpg";
import slider2 from "../../../assets/home/slider/slide2.jpg";
import slider3 from "../../../assets/home/slider/slide3.jpg";
import slider4 from "../../../assets/home/slider/slide4.jpg";
export default function Background() {
  const images = [slider, slider0, slider1, slider2, slider3, slider4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX); 
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const endX = e.touches[0].clientX;
    const diff = startX - endX;

   
    if (diff > 50) {
      nextSlide(); // Swipe left
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide(); // Swipe right
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false); // End dragging state
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
    
      <div
        className="relative w-full  h-screen overflow-hidden"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Images */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000  ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="w-2/6 md:h-screen    bg-primary rounded-tr-[70%] rounded-br-[0%] rounded-bl-[0%] rounded-tl-[0%] flex items-center justify-center text-white text-3xl  ">
              <div>
              <h1 className="text-[55px] text-white font-bold leading-[65px] font-lato">Healthier Dog <br></br> Food
                   A Reality.</h1>
                   <p className="text-[15px] text-white font-semibold font-lato" >Expertly-crafted reicipes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
            className="p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
          >
            &#9664;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
          >
            &#9654;
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "border-2 border-white shadow-lg "
                  : "bg-primary border border-transparent"
              }`}
            ></button>
          ))}
        </div>
        <div className=" absolute bottom-0 w-screen bg-[#f8f8f8] h-[15%] rounded-t-[100%]"></div>
      </div>
    </div>
  );
}
