import React from "react";
import img1 from "../assets/email2.png";
import img2 from "../assets/phone1.png";
import img3 from "../assets/location1.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

function Getintouch() {
  const cards = [
    {
      img: img1,
      title: "Get In Touch",
      description:
        "For any questions or concerns, you can reach us via email at",
    },
    {
      img: img2,
      title: "Call Us",
      description:
        "We're available by phone at +91 788989900 during business hours",
    },
    {
      img: img3,
      title: "Currently Remote",
      description: "Gurugram, Haryana\nCurrently Online",
    },
  ];

  return (
    <>
      {/* Top Section */}
      <div className="relative mt-14 mb-48">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-gradient-to-t from-gray-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get In Touch!
          </h1>
          <p className="text-sm sm:text-base mt-2">
            Ready to grow your startup faster?
          </p>
        </div>

        {/* Cards Section */}
        <div className="absolute top-[60%] left-0 right-0 flex flex-wrap justify-center gap-4 px-4 mt-6 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-start items-start px-6 pt-4 w-44 sm:w-52 h-44 sm:h-48 shadow-lg rounded-lg"
            >
              <img src={card.img} alt={card.title} className="w-10 h-10 mb-4" />
              <h1 className="text-base sm:text-lg font-medium mb-2">
                {card.title}
              </h1>
              <p className="text-xs sm:text-sm whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="flex justify-center items-center flex-col gap-6 sm:gap-8 mb-16 mt-96 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-16">
          We’re here to help
        </h1>
        <h4 className="text-sm sm:text-lg md:text-xl">
          Have a question, idea, or ready to invest in your startup? Reach out.
        </h4>
      </div>

      {/* Form Section */}
      <div className="p-4 sm:p-6">
        <form className="max-w-2xl mx-auto">
          {/* Input Fields */}
          <div className="grid gap-4 mb-5 sm:grid-cols-1 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="border border-gray-300 text-sm rounded-2xl block w-full py-4 pl-6"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-300 text-sm rounded-2xl block w-full py-4 pl-6"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="border border-gray-300 text-sm rounded-2xl block w-full py-4 pl-6"
              placeholder="Email"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="block py-4 pl-6 w-full text-sm rounded-2xl border border-gray-300"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-5">
            <textarea
              rows="4"
              className="block pb-8 pt-3 pl-6 w-full text-sm rounded-2xl border border-gray-300"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Services Section */}
          <h1 className="mb-2 text-lg font-semibold">Services</h1>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  IT Strategy & Planning
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  Cloud Solutions
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  Designs
                </label>
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  Application Development & Management
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  System Integration & Automation
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="ms-2 text-sm font-medium text-gray-900">
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12 mb-10">
            <button className="bg-black text-white rounded-2xl py-3 sm:py-4 px-12 sm:px-16 text-base sm:text-xl font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>

     {/* Banner */}
           <div className="relative max-h-full">
             <img src={banner} alt="" className="w-full" />
     
             <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col  justify-center items-center">
               <p className="text-xl ms:text-[8px] xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold px-1  ">
               Unleash the best opportunities to gear up your startup journey with
            Hubnex!
               </p>
     
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

export default Getintouch;
