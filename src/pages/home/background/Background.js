import React from "react";
import backgroundImage from "../../../images/home/background.png";
import BackgroundContent from "./BackgroundContent";
export default function Background() {
  return (
    <div>
      <div className="relative h-[50rem]">
        <div
          className="bg-cover bg-center h-[55rem] "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="absolute top-28 ">
          <BackgroundContent></BackgroundContent>
        </div>
      </div>
    </div>
  );
}
