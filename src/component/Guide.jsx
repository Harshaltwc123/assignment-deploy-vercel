import React from "react";
import img1 from "../assets/Strategic.png";
import img2 from "../assets/Technology.png";
import img3 from "../assets/Investment.png";
import img4 from "../assets/Ecosystem.png";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <>
      <div className="pt-20 bg-black text-white flex flex-col items-center px-6">
        <h1 className="text-4xl font-semibold">What we guide you with ?</h1>
        <p className="text-2xl mt-10 max-w-5xl ">
          Hubnex Invest acts as a strategic partner and CTO for startups,
          offering comprehensive support and resources throughout their journey.
        </p>
        <div className="flex flex-row flex-wrap gap-12 mb-10 justify-center">
          <div className="flex justify-center flex-wrap gap-12">
            {/* card1 */}
            <div className="flex flex-col items-center mt-10 bg-zinc-800 shadow-xl shadow-purple-600 p-4 max-w-64 rounded-xl">
              <img src={img1} alt="" className="py-5" />
              <h1 className="font-bold text-lg pb-2">Strategic Guidance</h1>
              <p className="text-xs pb-2">
                Hubnex Invest offers strategic guidance to startups, helping
                them define their vision, strategy, and roadmap for succeeding
                their goals
              </p>
              <Link to="/strategic">
              <button className="underline text-xs pb-2 pt-9">Read more</button>
              </Link>
            </div>
            {/* card2 */}
            <div className="flex flex-col items-center mt-10 bg-zinc-800 shadow-xl shadow-purple-600 p-4 max-w-64 rounded-xl">
              <img src={img2} alt="" className="py-5" />
              <h1 className="font-bold text-lg pb-2">Technology Enablement</h1>
              <p className="text-xs pb-2">
                Hubnex Invest provides technology enablement services to turn
                ideas into scalable solutions offering a suitable technical
                assistance to product development and implementation.
              </p>
              <Link to="/technology">
              <button className="underline text-xs pb-2 pt-5">Read more</button>
              </Link>

            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-12">
            {/* card3 */}
            <div className="flex flex-col items-center mt-10 bg-zinc-800 shadow-xl shadow-purple-600 p-4 max-w-64 rounded-xl">
              <img src={img3} alt="" className="py-5" />
              <h1 className="font-bold text-lg pb-2 ">
                Investment Opportunities
              </h1>
              <p className="text-xs pb-2">
                In addition to support services, Hubnex Invest provides
                investment opportunities for startups with promising ideas and
                growth potential.
              </p>
              <Link to="/investment">
              <button className="underline text-xs pb-2 pt-9">Read more</button>
              </Link>
            </div>
            {/* card4 */}
            <div className="flex flex-col items-center mt-10 bg-zinc-800 shadow-xl shadow-purple-600 p-4 max-w-64 rounded-xl">
              <img src={img4} alt="" className="py-5" />
              <h1 className="font-bold text-lg pb-2">Ecosystem Development</h1>
              <p className="text-xs pb-2">
                Hubnex Invest is committed to fostering a vibrant startup
                ecosystem by collaborating with accelerators, incubators,
                venture capital firms, and government agencies.
              </p>
              <Link to="/ecosystem">
              <button className="underline text-xs pb-2 pt-4">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;
