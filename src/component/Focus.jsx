import React from "react";
import img1 from "../assets/Focus.gif";
import img2 from "../assets/Focus1.png";
import img3 from "../assets/Mission.gif";
import img4 from "../assets/Mission1.png";

function Focus() {
  return (
    <>
      {/* Our Focus Section */}
      <div className="text-center mt-36 mb-9 flex flex-col justify-center items-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Our Focus
        </h1>
        <div className="flex flex-col lg:flex-row max-w-6xl gap-8 mt-14 items-center">
          {/* Image */}
          <img
            src={img1}
            alt="Focus"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
          {/* Text List */}
          <div>
            <ul className="space-y-7">
              <li className="flex gap-4 text-start">
                <img src={img2} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  Access to experienced guidance and expertise
                </h4>
              </li>
              <li className="flex gap-4 text-start">
                <img src={img2} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  Investment opportunities for growth and expansion
                </h4>
              </li>
              <li className="flex gap-4 text-start">
                <img src={img2} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  Technology Enablement for building scalable solutions
                </h4>
              </li>
              <li className="flex gap-4 text-start">
                <img src={img2} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  Collaboration and networking opportunities in the startup
                  ecosystem
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="text-center mt-36 mb-9 flex flex-col justify-center items-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Our Mission
        </h1>
        <div className="flex flex-col lg:flex-row max-w-6xl gap-8 mt-14 items-center">
          {/* Image */}
          <img
            src={img3}
            alt="Mission"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
          {/* Text List */}
          <div>
            <ul className="space-y-7">
              <li className="flex gap-4 text-start">
                <img src={img4} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  We offer them strategic partners who are invested in their
                  success and growth
                </h4>
              </li>
              <li className="flex gap-4 text-start">
                <img src={img4} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  We empower startups through strategic support and investment.
                </h4>
              </li>
              <li className="flex gap-4 text-start justify-center items-center">
                <img src={img4} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  Startups have access to experienced guidance, technology
                  enablement, and investment opportunities to fuel their journey
                  to success.
                </h4>
              </li>
              <li className="flex gap-4 text-start">
                <img src={img4} alt="Bullet" className="w-8 h-8" />
                <h4 className="text-lg leading-relaxed">
                  We believe in the power of startups to drive innovation and
                  change in the world.
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Focus;
