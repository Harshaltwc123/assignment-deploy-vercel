import React from "react";
import img1 from "../assets/Event1.png";
import img2 from "../assets/Event2.png";
import img3 from "../assets/Event3.png";
import img4 from "../assets/Event4.png";
import img5 from "../assets/Event5.png";
import img6 from "../assets/Event6.png";
import img7 from "../assets/Event7.png";
import img8 from "../assets/Event8.png";
import img9 from "../assets/Event9.png";
import img10 from "../assets/Event10.png";
import img11 from "../assets/Event11.png";
import img12 from "../assets/Event12.png";
import img13 from "../assets/Event13.png";
import img14 from "../assets/Event14.png";
import img15 from "../assets/Event15.png";
import Hubnexevent from "../component/Hubnexevent";

function Hubnexeducate() {
  return (
    <>
      <div className="relative mb-10">
        <div>
          <div className="flex justify-center items-center">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <img src={img2} alt="" />
            <img src={img14} alt="" />
            <img src={img8} alt="" />
            <img src={img1} alt="" />
            <img src={img12} alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md py-6 sm:py-8 md:py-12 flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Empowering Innovation, Bridging Investments
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
          From Vision to Victory : Entrusting Startups at Every Stage
          </p>
          <button className="bg-black text-white py-2 px-8 sm:px-10 md:px-12 rounded-md mt-4 hover:bg-purple-600 hover:border hover:border-white">
            Apply
          </button>
        </div>
      </div>
      <Hubnexevent/>
    </>
  );
}

export default Hubnexeducate;
