import React from "react";
import img1 from "../assets/Fund1.gif";
import img2 from "../assets/Fund2.gif";
import img3 from "../assets/Fund3.gif";

function Fund() {
  return (
    <>
      <div className="mt-14 flex flex-col justify-center items-center text-center">
        <p className="mb-24 text-lg">
          Hubnex Techfund supports startups at every development step, catering
          to their global needs.
        </p>
        <h1 className="text-5xl font-bold mb-14">
          Hubnex Tech Fund’s Services
        </h1>
        <p className="mb-20 text-lg max-w-5xl">
          Hubnex Tech Fund supports startups in accessing government grants and
          loans, along with real-life examples of startups that have
          successfully obtained government funding with our assistance.
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-10 bg-black p-20 sm:mb-0 xs:mb-[500px] ms:mb-[500px]">
        {/* card1 */}
        <div className="flex flex-col justify-center items-center text-center w-64 gap-2 px-3 pr-9 text-white bg-black border-r-4 border-dotted border-white ...">
          <img src={img1} alt="" className="w-52 h-44" />
          <h1 className="font-medium text-md">STRATEGIC MENTORSHIP</h1>
          <p className="text-sm text-start">
            Hubnex Invest offers strategic guidance for government grants and
            loan applications. Our team of experts assists startups in
            identifying relevant funding opportunities, understanding
            application requirements, and preparing compelling proposals.
          </p>
        </div>
        {/* card2 */}
        <div className="flex flex-col justify-center items-center text-center w-64 gap-2 mt-5 px-5 text-white bg-black  mb-0 pb-5">
          <img src={img2} alt="" className="w-52 h-44" />
          <h1 className="font-medium text-md">APPLICATION SUPPORT</h1>
          <p className="text-sm text-start">
            We streamline government grant applications, ensuring compliance and
            increasing success rates. Our goal is to streamline the application
            process and increase the likelihood of success for startups seeking
            government funding.
          </p>
        </div>
        {/* card3 */}
        <div className="flex flex-col justify-center items-center text-center w-64 gap-2 px-4  text-white bg-black border-l-4 border-dotted border-white ... ">
          <img src={img3} alt="" className="w-52 h-44" />
          <h1 className="font-medium text-md">NETWORKING & ADVOCACY</h1>
          <p className="text-sm text-start">
            Hubnex Invest advocates for startups, facilitating access to funding
            and policy discussions We connect startups with relevant
            stakeholders and provide advocacy support to ensure their voices are
            heard in policy discussions and decision-making processes.
          </p>
        </div>
      </div>
    </>
  );
}

export default Fund;

