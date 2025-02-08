
import img from "../assets/Collaboration.png";
import img1 from "../assets/Collabrative1.png";
import img2 from "../assets/Collabrative2.png";
import img3 from "../assets/Collabrative3.png";
import img4 from "../assets/Collabrative4.png";
import img5 from "../assets/Collabrative5.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

import React from 'react'

function Collaboration() {
  return (
    <>
    <div className="mb-32">
         <h1 className="text-5xl font-bold text-center mt-28 max-w-4xl mx-auto mb-32">
           At Hubnex Labs, innovation, collaboration, and growth Thrive!
         </h1>
         <img src={img} alt="" className="w-full" />
         <p className="mt-28 px-9">
           At hubnex invest our values are more than just words—they’re the
           foundation of everything we do. They guide our decisions, inspire our
           actions, and unite us as a team.Our team is our greatest asset. Get to
           know the people who make Hubnexlabs a dynamic and inspiring place to
           work. From our seasoned leaders to our newest hires, each team member
           brings unique skills and perspectives to the table .We believe that
           diversity drives innovation. At Hubnexlabs, we are committed to
           creating an inclusive environment where everyone feels valued and
           empowered.
         </p>
       </div>
       <div>
       <h1 className="text-5xl font-bold text-center">
          Collaborative Hubnex’s Success
         </h1>
         {/* card1 */}
         <div className="flex flex-wrap justify-center my-8 gap-4">
           <div className="bg-white my-6 px-8 gap-4 py-8 flex items-start flex-col max-w-64 mx-auto text-[12px] border-black  rounded-lg shadow-2xl ">
             <img src={img1} alt="" />
             <h1 className="text-xl font-medium">Tech Innovations</h1>
             <p>
               With the support of Hubnex Invest's technology enablement
               services, this startup, specializing in cutting-edge AI solutions,
               overcame scaling challenges, optimized their product architecture,
               and expanded their customer base, resulting in a 200% revenue
               increase within the first year.
             </p>
           </div>
          
           {/* card2 */}
       
           <div className="bg-white my-6 px-8 gap-4 py-8 flex items-start flex-col max-w-64 mx-auto text-[12px] border-black  rounded-lg shadow-2xl ">
             <img src={img2} alt="" />
             <h1 className="text-xl font-medium">Tech Innovations</h1>
             <p>
               With the support of Hubnex Invest's technology enablement
               services, this startup, specializing in cutting-edge AI solutions,
               overcame scaling challenges, optimized their product architecture,
               and expanded their customer base, resulting in a 200% revenue
               increase within the first year.
             </p>
           </div>
          
           {/* card3 */}
         
           <div className="bg-white my-6 px-8 gap-4 py-8 flex items-start flex-col max-w-64 mx-auto text-[12px] border-black  rounded-lg shadow-2xl ">
             <img src={img3} alt="" />
             <h1 className="text-xl font-medium">Tech Innovations</h1>
             <p>
               With the support of Hubnex Invest's technology enablement
               services, this startup, specializing in cutting-edge AI solutions,
               overcame scaling challenges, optimized their product architecture,
               and expanded their customer base, resulting in a 200% revenue
               increase within the first year.
             </p>
           </div>
          
           {/* card4 */}
           <div className="bg-white my-6 px-8 gap-4 py-8 flex items-start flex-col max-w-64 mx-auto text-[12px] border-black  rounded-lg shadow-2xl ">
             <img src={img4} alt="" />
             <h1 className="text-xl font-medium">Tech Innovations</h1>
             <p>
               With the support of Hubnex Invest's technology enablement
               services, this startup, specializing in cutting-edge AI solutions,
               overcame scaling challenges, optimized their product architecture,
               and expanded their customer base, resulting in a 200% revenue
               increase within the first year.
             </p>
           </div>
          {/* card5 */}
           <div className="bg-white my-6 px-8 gap-4 py-8 flex items-start flex-col max-w-64 mx-auto text-[12px] border-black  rounded-lg shadow-2xl ">
             <img src={img5} alt="" />
             <h1 className="text-xl font-medium">Tech Innovations</h1>
             <p>
               With the support of Hubnex Invest's technology enablement
               services, this startup, specializing in cutting-edge AI solutions,
               overcame scaling challenges, optimized their product architecture,
               and expanded their customer base, resulting in a 200% revenue
               increase within the first year.
             </p>
           </div>
       </div>
       </div>


        {/* Banner */}
      <div className="relative max-h-full">
        <img src={banner} alt="" className="w-full" />

        <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col  justify-center items-center">
          <p className="text-xl ms:text-[8px] xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold px-1  ">
          Empower innovation, partner with Hubnex Tech
          </p>
          <h2 className="md:text-md sm:text-sm xs:text-xs ms:text-[8px] ">
          Fund to shape the future of technology!
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
  )
}

export default Collaboration
