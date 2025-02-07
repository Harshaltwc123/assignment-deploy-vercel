import React from "react";
import landing1 from "../assets/landing1.png";

function Landing() {
  return (
    <div className="flex justify-end bg-black ">
      <div className="md:pl-10 sm:pl-8 ms:pl-4 sm:mt-14 xs:mt-4">
        <h1 className="xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl xs:text-xs ms:text-[10px] font-bold text-white mt-14 text-left">Unlocking Investment Opportunities with Hubnex Invest</h1>
        <p className="mt-5 xl:text-xl md:text-sm sm:text-xs xs:text-xs ms:text-[8px] text-left text-white ">Empowering Startup with Technology and  Guidance</p>
       <div className="flex md:gap-4 sm:gap-2 xs:gap-2 ms:gap-1 xl:mt-10 lg:mt-8 md:mt-8 sm:mt-4 xs:mt-5">
       <button className="mt-5 xl:px-4 xl:py-2 lg:px-4 lg:py-2 md:px-3 md:py-1 sm:px-1 sm:py-1 xs:px-1 xs:py-1 ms:px-1 ms:py-0 xl:text-lg md:text-sm sm:text-xs xs:text-xs ms:text-[6px]  border-2 border-white text-white sm:rounded-lg xs:rounded-md ms:rounded-md  hover:bg-white hover:text-black">
          Book Demo
        </button>
        <button className="mt-5 xl:px-4 xl:py-2 lg:px-4 lg:py-2 md:px-3 md:py-1 sm:px-1 sm:py-1 xs:px-1 xs:py-1 ms:px-1 ms:py-0  xl:text-lg md:text-sm sm:text-xs xs:text-xs ms:text-[6px] bg-purple-500 text-white sm:rounded-lg xs:rounded-md ms:rounded-md hover:bg-purple-600">
          Get Started
        </button>
       </div>
      </div>
      <img src={landing1} alt="landing1" className="xl:w-[1000px] xl:h-[700px] lg:w-[650px] lg:h-[500px] md:w-[530px] md:h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[350px] ms:w-[200px] ms:h-[250px]" />
    </div>
  );
}

export default Landing;
