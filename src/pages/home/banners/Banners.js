import React from 'react'
import banner from "../../../assets/images/background.png"
export default function Banners() {
  return (
    <div className="flex justify-center my-10">
     <img src={banner} alt="banner"  className="w-100 " />
    </div>
  )
}
