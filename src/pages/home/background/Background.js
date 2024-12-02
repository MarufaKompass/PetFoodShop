import React from "react";
import backgroundImage from "../../../images/home/background.png";
import BackgroundContent from "./BackgroundContent";
export default function Background() {
  return (
    <div>
      <div className="relative h-[50rem]">
        <div
          className="bg-cover bg-center h-[54rem] border-b-2 border-[#f1f1f1]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="absolute top-28 ">
          <BackgroundContent></BackgroundContent>
        </div>
      </div>
    </div>
  );
}
