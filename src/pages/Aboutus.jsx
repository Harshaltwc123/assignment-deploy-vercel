import React, { useState, useEffect } from "react";
import img from "../assets/Aboutus1.png";
import Promising from "../component/Promising";
import Focus from "../component/Focus";
import Collaboration from "../component/Collaboration";

function Aboutus() {
  // Define the counters
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  // Increment the counters
  useEffect(() => {
    const incrementCounters = () => {
      if (counter1 < 4000) setCounter1((prev) => prev + 1);
      if (counter2 < 10) setCounter2((prev) => prev + 1);
      if (counter3 < 200) setCounter3((prev) => prev + 1);
      if (counter4 < 600) setCounter4((prev) => prev + 1);
    };

    const interval = setInterval(incrementCounters, 10); // Increment every 10ms
    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, [counter1, counter2, counter3, counter4]); // Dependencies for counter updates

  return (
    <>
    <div className="mt-28">
      {/* Image Section */}
      <div className="relative">
        <img
          src={img}
          alt="About Us Background"
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
        {/* Title Overlay */}
        <div className="absolute top-[30%] left-[5%] sm:left-[10%] md:top-[35%] md:left-[5%] lg:left-[5%] text-center md:text-left max-w-2xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Exceptional IT services, delivering innovative solutions
          </h1>
        </div>

        {/* Counter Section */}
        <div className="w-full absolute top-[90%] bottom-0 left-0 right-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center px-4">
            {/* Counter 1 */}
            <div className="bg-white shadow-lg py-6 px-4 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {counter1}+
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Global Customers
              </p>
            </div>
            {/* Counter 2 */}
            <div className="bg-white shadow-lg py-6 px-4 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {counter2}K
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Global Downloads
              </p>
            </div>
            {/* Counter 3 */}
            <div className="bg-white shadow-lg py-6 px-4 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {counter3}+
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                5-star Reviews
              </p>
            </div>
            {/* Counter 4 */}
            <div className="bg-white shadow-lg py-6 px-4 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {counter4}%
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Return on Investment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Promising/>
    <Focus/>
    <Collaboration/>
    </>
  );
}

export default Aboutus;
