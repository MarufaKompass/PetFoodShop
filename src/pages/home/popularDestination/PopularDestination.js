import React from 'react'
import PopularDestinationList from './PopularDestinationList'

export default function PopularDestination() {
  return (
   <div className="container">
      <div className="py-32">
        <div>
          <h1 className="text-[52px] font-[700] leading-[61px] text-heading font-manrope">
          Popular Destinations
          </h1>
          <p className="text-[20px] font-[500] leading-[26px] text-gray font-manrope pb-10">
          Favorite destinations based on customer reviews
          </p>
        </div>

           <PopularDestinationList></PopularDestinationList>
      </div>
    </div>
  )
}
