import React from "react";
import img1 from "../assets/Right.png";

function Mission() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-black py-16 px-4">
        <h1 className="font-semibold text-3xl">
          Our Mission for the Startup Founders
        </h1>

        <div className="flex flex-wrap justify-center items-center pb-4">
          <div className=" gap-9 flex flex-wrap flex-col mt-12 border-r-2 lg:border-white ms:border-black px-9 pt-4">
            {/* card1 */}
            <div className=" flex gap-5 max-w-sm justify-center items-center">
              <div className="bg-black rounded-3xl px-2 py-2 w-11 h-9  border-2 border-purple-700">
                <img src={img1} alt="" className="w-9" />
              </div>
              <p className="text-start text-sm">
                We offer them strategic partner who invested in their success
                and growth
              </p>
            </div>
            {/* card2 */}
            <div className=" flex gap-5 max-w-sm justify-center items-center">
              <div className="bg-black rounded-3xl px-2 py-2 w-10 h-9  border-2 border-purple-700">
                <img src={img1} alt="" className="w-9" />
              </div>
              <p className="text-start text-sm">
                We empower startups through strategic support and investment.
              </p>
            </div>
          </div>
          <div className=" gap-9 flex flex-wrap flex-col mt-12 border-l-0 lg:border-white ms:border-black px-9">
            {/* card3 */}
            <div className=" flex gap-5 max-w-sm justify-center items-center">
              <div className="bg-black rounded-3xl px-2 py-2 w-16 h-9  border-2 border-purple-700">
                <img src={img1} alt="" className="w-9" />
              </div>
              <p className="text-start text-sm">
                We offer startups have access to experience guidance technology
                enablement, investment opportunities to fuel their journey to
                success
              </p>
            </div>
            {/* card4 */}
            <div className=" flex gap-5 max-w-sm justify-center items-center">
              <div className="bg-black rounded-3xl px-2 py-2 w-11 h-9  border-2 border-purple-700">
                <img src={img1} alt="" className="w-9" />
              </div>
              <p className="text-start text-sm">
                We believe in the power of startups to drive innovation and
                change in the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
