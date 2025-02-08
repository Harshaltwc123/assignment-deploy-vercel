import React from "react";
import img from "../assets/Animate1.gif";

function Animated() {
  return (
    <>
      <div className="miniphone:my-[500px]  sm:my-96 md:my-96 lg:my-20 ">
        <div className="flex flex-col justify-center relative items-center text-center">
          {/* Main animated div */}
          <div className="bg-blue-50 bg-opacity-20 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] my-20 sm:my-32 lg:my-52 rounded-full flex justify-center items-center relative">
            <img
              src={img}
              alt="Animated Graphic"
              className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
            />
          </div>

          <div className="absolute z-10 ">
            {/* card1 */}
            <div className="flex justify-evenly items-center flex-wrap ">
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4 border bg-blue-50 border-gray-200 shadow-xl rounded-md">
                <h1 className="font-bold text-start xs:text-md ms:text-sm pb-4">
                  Workshops and Training
                </h1>
                <p className="xs:text-sm ms:text-[10px] text-start">
                  Workshops provide tools for MVP development and scaling
                  operations efficiently.
                </p>
              </div>
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4  border bg-blue-50 border-gray-200 shadow-xl rounded-md">
                <h1 className="font-bold text-start xs:text-[12px] ms:text-[15px] pb-4">
                  Growth Hacking and Marketing
                </h1>
                <p className="xs:text-[11px] ms:text-[9px] text-start">
                  Achieve growth through compelling narratives and optimized
                  digital presence strategies.
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className="flex justify-around gap-96 my-36 items-center flex-wrap">
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4  border bg-blue-50 border-gray-200 shadow-xl rounded-md">
                <h1 className="font-bold text-start xs:text-[14px] ms:text-sm pb-4">
                  Networking and Community
                </h1>
                <p className="xs:text-[11px] ms:text-[10px] text-start">
                  Join a community fostering collaboration, sparking ideas, and
                  opening opportunities.
                </p>
              </div>
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4 border bg-blue-50 border-gray-200 shadow-xl rounded-md py-9">
                <h1 className="font-bold text-start xs:text-md ms:text-sm pb-4">
                  Continuous Support
                </h1>
                <p className="xs:text-sm ms:text-[10px] text-start">
                  Our support continues beyond funding, helping you scale,
                  pivot, and grow.
                </p>
              </div>
            </div>
            {/* card3 */}
            <div className="flex justify-evenly items-center flex-wrap">
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4  border bg-blue-50 border-gray-200 shadow-xl rounded-md">
                <h1 className="font-bold text-start xs:text-md ms:text-sm pb-4">
                  Legal and Administartive Support
                </h1>
                <p className="xs:text-sm ms:text-[10px] text-start">
                  Expert ;egal support ensures your startup stays compliant and
                  protected.
                </p>
              </div>
              <div className="gap-2 xs:w-52 ms:w-44 ms:p-2 xs:p-4 border bg-blue-50 border-gray-200 shadow-xl rounded-md py-7">
                <h1 className="font-bold text-start xs:text-[16px] ms:text-sm pb-4">
                  Investment and Funding
                </h1>
                <p className="xs:text-sm ms:text-[10px] text-start">
                  Connect with investors for seed funding and capital to scale
                  successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Animated;
