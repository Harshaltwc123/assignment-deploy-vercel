import React from "react";
import img1 from "../assets/Promising.gif";
import img2 from "../assets/Empowering.gif";

function Promising() {
  return (
    <>
      <div className=" text-center mt-6 mb-9 flex flex-col justify-center items-center px-9">
        <h1 className="text-5xl font-bold text-center mt-52 max-w-2xl mx-auto">
          Hubnex Labs believe in promising founders
        </h1>
        <img src={img1} alt="" className="mt-12 " />
        <p>
          Hubnexlabs is a leading IT consultancy with expertise in innovative
          solutions for modern challenges. Our client-centric approach enables
          us to design tailored solutions that keep businesses ahead in the
          ever-evolving digital landscape. Hubnex Labs provides industry
          expertise and solution IPs to help customers achieve successful
          business outcomes.HubnexLabs above all else, customer-centric. Hubnex
          labs are in it for the long run and have an unwavering passion for
          client success.
        </p>
      </div>

      <div className=" text-center mt-6 mb-9 flex flex-col justify-center items-center px-9">
        <h1 className="text-5xl font-bold text-center mt-52 max-w-2xl mx-auto">
          Empowering Startups Through Dynamic Support
        </h1>
        <img src={img2} alt="" className="mt-12 " />
        <p>
          Hubnex Tech Fund is a pioneering initiative dedicated to nurturing and
          empowering startups through strategic support and investment by Hubnex
          Labs. Our initiative goes beyond traditional investment models,
          offering startups comprehensive guidance, resources, and opportunities
          to fuel their growth and success
        </p>
      </div>
    </>
  );
}

export default Promising;
