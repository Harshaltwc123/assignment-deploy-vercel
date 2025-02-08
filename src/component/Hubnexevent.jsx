import React from "react";
import "../index.css";
import img1 from "../assets/conference.gif";

function Hubnexevent() {
  return (
    <div className="flex flex-col justify-center items-center my-24 space-x-14">
      <h1 className="text-5xl font-bold my-9">Hubnex Events</h1>
      <div className="flex justify-evenly items-center max-w-7xl gap-4 flex-wrap">
        <img src={img1} alt="" />
        <ul className="flex flex-col gap-4 list-disc max-w-md">
          <li className="">
            <p>
              The Hubnex Invest Tech Fund is your gateway to the future of tech
              investment.
            </p>
          </li>
          <li>
            <p>
              This premier event unites startups, investors, and industry
              leaders for immersive knowledge sharing, workshops, and
              networking.
            </p>
          </li>
          <li>
            <p>
              Scale your startup, seize investment opportunities, and expand
              your network at this tech ecosystem event.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hubnexevent;
