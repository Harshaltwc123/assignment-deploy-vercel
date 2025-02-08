import React from "react";
import Fund from "../component/Fund";
import img from "../assets/Fund4.png";
import Animated from "../component/Animated";
import Cards from "../component/Cards";

function Whatweoffer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <img
          src={img}
          className="w-full h-auto object-cover"
          alt="What We Offer"
        />

        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center gap-4 px-4">
          <h1 className="text-1xl ms:text-[10px] xs:text-xs sm:text-sm md:text-md lg:text-xl xl:text-3xl font-bold text-white max-w-7xl">
            Empowering Startups from Ideation to Success
          </h1>

          <p className="text-white ms:text-[8px] xs:text-[9px] sm:text-[9px] md:text-[10px] lg:text-sm xl:text-sm max-w-6xl">
            Hubnex Tech Fund offers expert support and tailored solutions to
            accelerate growth
          </p>
        </div>
      </div>
      <div>
        <Fund/>
        <Animated/>
        <Cards/>
      </div>
    </>
  );
}

export default Whatweoffer;
