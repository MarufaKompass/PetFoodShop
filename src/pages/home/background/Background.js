import React from "react";
import backgroundImage from "../../../images/home/background.jpeg";
export default function Background() {
  return (
    <div>
      <div className="relative h-[50rem]">
        <div
          className="bg-cover bg-center h-[50rem]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black h-[50rem] bg-opacity-10"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1>Your Content Here</h1>
        </div>
      </div>
    </div>
  );
}
