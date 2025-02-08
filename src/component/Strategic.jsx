import React from "react";
import img1 from "../assets/Strategic1.png";
import img2 from "../assets/Strategic2.png";
import img3 from "../assets/Strategic3.png";
import img4 from "../assets/Strategic4.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

function Strategic() {
  return (
    <>
      <div className="relative pt-6">
        <img src={img1} alt="" className="w-full " />
        <div className="absolute xl:top-72 lg:top-48 md:top-40 sm:top-32 xs:top-28 ms:top-24 xl:left-56 lg:left-40 md:left-32 sm:left-24 xs:left-20 ms:left-12  transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl ms:text-[18px] text-white font-semibold">
            Strategic <br /> Guidance
          </h1>
        </div>
      </div>

       {/* cards */}
      <div className="bg-black text-white text-xl flex flex-col items-center px-6 pt-4 pb-20">
        <p className="max-w-2xl xs:text-xl ms:text-lg">
          Hubnex Invest offers strategic guidance to startups, helping them
          define their vision, strategy, and roadmap for succeeding their goals
        </p>
        <div className="flex flex-row flex-wrap gap-12 justify-center">
          {/* card1 */}
          <div className="bg-black text-white max-w-lg text-2xl flex flex-col items-center px-6 py-16">
            <img src={img2} alt="" />
            <h1 className="font-semiboldpt-1 pb-2">Strategic Guidance</h1>
            <p className="xs:text-lg ms:text-sm">
              Startups receive tailored strategic guidance from our expert team,
              helping them navigate challenges and seize opportunities
              effectively
            </p>
          </div>
          {/* card2 */}
          <div className="bg-black text-white max-w-lg text-2xl flex flex-col items-center px-6 py-16">
            <img src={img3} alt="" />
            <h1 className="font-semibold pt-1 pb-2">Access to resources</h1>
            <p className="xs:text-lg ms:text-sm">
              Startups receive personalized strategic guidance from our expert
              team, helping them navigate challenges and seize opportunities
              effectively
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="bg-black text-white max-w-lg text-2xl flex flex-col items-center px-6 py-16">
            <img src={img4} alt="" />
            <h1 className="font-semibold pt-1 pb-2">Mentorship</h1>
            <p className="xs:text-lg ms:text-sm">
            Hubnex Invest provides mentorship programs connecting startups with experienced industry professionals for valuable insights and support.
            </p>
          </div>
      </div>
<div className="bg-black pb-4">
<h className="text-x text-white text-center">Our Step towards strategic  planning</h>

</div>

      {/* Banner */}
      <div className="relative max-h-full">
        <img src={banner} alt="" className="w-full" />

        <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col  justify-center items-center">
          <p className="text-xl ms:text-[8px] xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold px-1  ">
            Unlock Your Startup's Potential with our expert Strategic Guidance
            Today!
          </p>
          <h2 className="md:text-md sm:text-sm xs:text-xs ms:text-[8px] ">
            With Hubnex strategies strive towards productivity
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-6">
            <li>
              <img src={images1} alt="" className="h-6 ms:h-3 xs:h-3 sm:h-4 md:h-5 lg:h-7 xl:h-8" />
            </li>
            <li>
              <img src={images2} alt="" className="h-6 ms:h-3 xs:h-3 sm:h-4 md:h-5 lg:h-7 xl:h-8" />
            </li>
          </ul>

          <button className="bg-white ms:text-xs xs:text-md sm:text-lg text-black sm:py-1 md:py-2 px-10 ms:px-2 xs:px-6 sm:px-12 md:px-16 font-bold rounded-md mt-4 hover:bg-gray-200 transition duration-300">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Strategic;
