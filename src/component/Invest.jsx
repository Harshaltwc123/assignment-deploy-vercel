import React from "react";
import img1 from "../assets/Invest1.png";
import img2 from "../assets/Invest2.png";
import img3 from "../assets/Invest3.png";
import Rating from "../assets/Rating.png";
import Testimonials1 from "../assets/Testimonials1.png";
import Testimonials2 from "../assets/Testimonials2.png";
import Testimonials3 from "../assets/Testimonials3.png";

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

      {/* Testimonials */}
      <div className="bg-black text-white py-10">
        <h1 className="font-semibold text-3xl pb-12">Testimonials</h1>
        <div className="flex flex-wrap justify-evenly items-center gap-4">
          {/* card1 */}
          <div className="bg-zinc-800 max-w-xs p-4 rounded-xl">
            <div className="flex justify-end pb-2">
              <img src={Rating} alt="" className="h-3" />
            </div>
            <p className="text-sm">
              “Partnering with Hubnex Invest was a game-changer for our startup.
              Their network, resources, and investment have accelerated our
              growth and opened doors to new opportunities. We're proud to be
              part of the Hubnex Invest community and grateful for their
              unwavering support."
            </p>
            <div className="flex justify-evenly items-center pt-4 pr-16">
              <img
                src={Testimonials1}
                alt=""
                className="rounded-full w-20 h-20"
              />
              <ul className="flex flex-col gap-2 justify-start items-start">
                <li>Verma S</li>
                <li className="text-xs">Founder C, Startup Z</li>
              </ul>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-zinc-800 max-w-xs p-4 rounded-xl">
            <div className="flex justify-end pb-2">
              <img src={Rating} alt="" className="h-3" />
            </div>
            <p className="text-sm">
              “Hubnex Invest’s support was instrumental in turning our vision
              into reality. Their guidance, mentorship,and investment empowered
              us to overcome challenges and achieve our goals. We’re grateful
              for their partnership and support on our Journey to success.”
            </p>
            <div className="flex justify-evenly items-center pt-8 pr-16">
              <img
                src={Testimonials2}
                alt=""
                className="rounded-full w-20 h-20"
              />
              <ul className="flex flex-col gap-2 justify-start items-start">
                <li>Jayasree M</li>
                <li className="text-xs">Founder A, Startup X</li>
              </ul>
            </div>
          </div>
          {/* card3 */}
          <div className="bg-zinc-800 max-w-xs p-4 rounded-xl">
            <div className="flex justify-end pb-2">
              <img src={Rating} alt="" className="h-3" />
            </div>
            <p className="text-sm">
              “As an investor, I’ve been impressed by the caliber of startups
              supported by Hubnex Invest. Their rigorous selection process and
              strategic support have resulted in a portfolio of high potential
              ventures with compelling growth prospects.”
            </p>
            <div className="flex justify-evenly items-center pt-8 pr-16">
              <img
                src={Testimonials3}
                alt=""
                className="rounded-full w-20 h-20"
              />
              <ul className="flex flex-col gap-2 justify-start items-start">
                <li>Anirudh  H</li>
                <li className="text-xs">Founder B, Startup  Y</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invest;
