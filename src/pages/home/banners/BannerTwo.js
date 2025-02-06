import React from 'react'
import bannerTwo from "../../../assets/images/bannerTwo.jpg"
export default function BannerTwo() {
  return (
  <div className='container'>
      <div className="flex justify-center my-10">
     <img src={bannerTwo} alt="banner"  className="w-100 rounded-[20px]" />
    </div>
  </div>
  )
}
