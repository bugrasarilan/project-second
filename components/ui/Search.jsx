import React from "react";
import OutsideClikHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchmodal }) => {
  // setIsSearchmodal headr'ın içinden props olarak yolladık ve burada kullandık
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClikHandler onOutsideClick={() => setIsSearchmodal(false)}>
        <div className="w-full h-full grid place-content-center relative">
         <div className="relative z-50 md:w-[600px] w-[370px]   bg-white border-2 p-10 rounded-3xl">   {/* md:w-[600px] w-[370px] search çerçevesi 768px üstüne çıktığında 600 pxlik genişlik alıyor ama 768 altına düşerse ekren boyutu 370 px alcaksın   */}
            <Title addClass="text-[40px] text-center">Title </Title>
            {/*addClass props olarak geldi */}
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10 "
            />
            
              <ul>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer">
                  <div className="relative flex">
                    <Image
                     src="/images/1-Alize-süperlanamaxi.jpg"
                      alt="ss"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold"> yün</span>
                  <span className="font-bold"> $10</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer">
                  <div className="relative flex">
                    <Image
                     src="/images/2-Alize-diva.jpg"
                      alt="ss"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold"> yün</span>
                  <span className="font-bold"> $10</span>
                </li>

                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer">
                  <div className="relative flex">
                    <Image
                       src="/images/3-Bonbon.jpg"
                      alt="ss"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold"> yün</span>
                  <span className="font-bold"> $10</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer">
                  <div className="relative flex">
                    <Image
                       src="/images/4-Alize-lanagold.jpg"
                      alt="ss"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold"> yün</span>
                  <span className="font-bold"> $10</span>
                </li>

              </ul>
              <button
              className="absolute  top-4 right-4"
              onClick={() => setIsSearchmodal (false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
           
          </div>
        </div>
      </OutsideClikHandler>
    </div>
  );
};

export default Search;
