import React from "react";
import img1 from "../assets/Invest1.png";
import img2 from "../assets/Invest2.png";
import img3 from "../assets/Invest3.png";

function Invest() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black text-white px-4">
        <h1 className="font-semibold text-3xl pb-3">
          Hubnex Invest Success Stories
        </h1>
        <p className="pb-4 text-sm ">
          Hubnex Invest stories highlight the transformative impact of our
          initiative on startup’s growth and success.
        </p>
        <div className="flex w-full flex-wrap gap-16  px-10 justify-center items-center">
          {/* card1 */}
          <div className="max-w-44 p-4 flex flex-col justify-center items-center">
            <img src={img1} alt="" className="h-28" />
            <h1 className="text-2xl font-medium pt-1">Startup X</h1>
            <h2 className="text-sm py-4">
              Revolutionizing <br />
              Healthcare Delivery
            </h2>
            <p className="text-xs">
              The platform has transformed healthcare delivery, improving access
              to medical services and reducing healthcare disparities in
              underserved communities
            </p>
          </div>
          {/* card2 */}
          <div className="max-w-48 p-4 flex flex-col justify-center items-center">
            <img src={img2} alt="" />
            <h1 className="text-2xl font-medium pt-1">Startup Y</h1>
            <h2 className="text-sm py-4">
              Disrupting the <br />
              E-commerce Landscape
            </h2>
            <p className="text-xs">
              With Hubnex Invest's investment and guidance, Startup Y disrupted
              the e-commerce landscape with its AI-powered recommendation
              engine.
            </p>
          </div>
          {/* card3 */}
          <div className="max-w-44 p-4 flex flex-col justify-center items-center">
            <img src={img3} alt="" />
            <h1 className="text-2xl font-medium pt-1">Startup Z</h1>
            <h2 className="text-sm py-4">
              Innovating in <br />
              Renewable Energy
            </h2>
            <p className="text-xs">
              Hubnex Invest's innovative technologies have garnered industry
              recognition and are paving the way for a greener future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invest;
