
import Image from "next/image";
import Slider from "react-slick";
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
       src="/images/1-Alize-süperlanamaxi.jpg"
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
       src="/images/2-Alize-diva.jpg"
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
       src="/images/3-Bonbon.jpg"
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
       src="/images/4-Alize-lanagold.jpg"
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
       src="/images/5-Alize-cottongold.jpg"
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
