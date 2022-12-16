import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';


const Carousels = () => {
  return (
    <div>   
    <Carousel infiniteLoop autoPlay> 
<a href> 
 <div className="h-screen w-full   ">
 <div className="relative">
 <div className="absolute top-22 left-0 right-0  h-[550px]  w-full  max-sm:w-auto  max-sm:h-[144px] max-lg:w-auto  max-lg:h-[300px] max-xl:w-full  max-xl:h-[400px]    ">
 <div className="relative h-full w-full  ">
 <Image 
       src="/images/ocean2.jpg"
       alt=""
       layout="fill"
       objectFit="cover"
   />
 </div>
</div>
 </div>
</div>
</a>

<a href> 
 <div className="h-screen w-full   ">
 <div className="relative">
 <div className="absolute top-22 left-0 right-0  h-[550px]  w-full  max-sm:w-auto  max-sm:h-[144px] max-lg:w-auto  max-lg:h-[300px] max-xl:w-full  max-xl:h-[400px]    ">
 <div className="relative h-full w-full  ">
   <Image
       src="/images/mountain.jpeg"
       alt=""
       layout="fill"
       objectFit="cover"
   />
 </div>
</div>
 </div>
</div>
</a>

<a href> 
 <div className="h-screen w-full   ">
 <div className="relative">
 <div className="absolute top-22 left-0 right-0  h-[550px]  w-full  max-sm:w-auto  max-sm:h-[144px] max-lg:w-auto  max-lg:h-[300px] max-xl:w-full  max-xl:h-[400px]    ">
 <div className="relative h-full w-full  ">
   <Image
       src="/images/nature.jpg"
       alt=""
       layout="fill"
       objectFit="cover"
   />
 </div>
</div>
 </div>
</div>
</a>

<a href> 
<div className="h-screen w-full   ">
 <div className="relative">
 <div className="absolute top-22 left-0 right-0  h-[550px]  w-full  max-sm:w-auto  max-sm:h-[144px] max-lg:w-auto  max-lg:h-[300px] max-xl:w-full  max-xl:h-[400px]    ">
 <div className="relative h-full w-full  ">
   <Image
       src="/images/ocean.jpeg"
       alt=""
       layout="fill"
       objectFit="cover"
   />
 </div>
</div>
 </div>
</div>
</a>

<a href> 
<div className="h-screen w-full   ">
 <div className="relative">
 <div className="absolute top-22 left-0 right-0  h-[550px]  w-full  max-sm:w-auto  max-sm:h-[144px] max-lg:w-auto  max-lg:h-[300px] max-xl:w-full  max-xl:h-[400px]    ">
 <div className="relative h-full w-full  ">
   <Image
         src="/images/alaska.jpg"  
       alt=""
       layout="fill"
       objectFit="cover"
   />
 </div>
</div>
 </div>
</div>
</a>


</Carousel>
   </div>

 );
};

export default Carousels;
