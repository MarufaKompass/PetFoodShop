import React from 'react';
import Background from './background/Background';
import FeaturedTour from './featuredTours/FeaturedTour';
import PopularDestination from './popularDestination/PopularDestination';
import Banner from './banner/Banner'
import BannerAdd from './banner/BannerAdd';

export default function Home() {
  return (
    <div >
   <Background></Background>
   <Banner></Banner>
   <FeaturedTour></FeaturedTour>
   <BannerAdd></BannerAdd>
   <PopularDestination></PopularDestination>
  </div>
  )
}
