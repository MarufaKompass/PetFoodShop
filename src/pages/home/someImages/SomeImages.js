import React from 'react'
 import image1 from "../../../assets/images/image1.jpg";
 import image2 from "../../../assets/images/image2.jpg";
 import image3 from "../../../assets/images/image3.jpg";
 import image4 from "../../../assets/images/image4.jpg";
 import image5 from "../../../assets/images/image5.jpg";
 import image6 from "../../../assets/images/image6.jpg";

export default function SomeImages() {
  return (

<div className="border-b-4 border-t-4">
<div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1" >
   <div class="relative">
  <img src={image1} alt="image1" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
 
  </div>
</div>
   <div class="relative">
  <img src={image2} alt="image2" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
  </div>
</div>
   <div class="relative">
  <img src={image3} alt="image3" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
  </div>
</div>
   <div class="relative">
  <img src={image4} alt="image4" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
  </div>
</div>
   <div class="relative">
  <img src={image5} alt="image5" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
  </div>
</div>
   <div class="relative">
  <img src={image6} alt="image6" class="w-full h-56" />
  <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
  </div>
</div>
     
    </div>
</div>
  )
}
