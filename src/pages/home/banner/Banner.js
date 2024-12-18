import React from 'react'
import banner from "../../../images/home/banner/banner.jpg";
export default function Banner() {
  return (
    <div className="container pt-48 px-48">
        <img src={banner} alt="banner" className="h-72 w-full rounded-[30px]" />
    </div>
  )
}
