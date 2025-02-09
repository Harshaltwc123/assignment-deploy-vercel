import React from "react";
import img1 from "../assets/Implements1.png";
import img2 from "../assets/Implements2.png";
import img3 from "../assets/Implements3.png";
import img4 from "../assets/Implements4.png";
function Implements() {
  return (
    <>
      <div className="w-full text-white flex flex-col justify-center items-center bg-zinc-800 pt-4 px-4">
        <h1 className="font-semibold text-3xl pb-5">Successful Technology Implements</h1>
        <p className="max-w-2xl">
          Hubnex invest offer a comprehensive suite of technology enablement
          services tailored to meet the specific requirements of each startup we
          work with.
        </p>

        <div className="flex pb-2 flex-wrap justify-center items-center text-center">
          <div className="flex flex-wrap gap-4 items-center justify-center">
              {/* card1 */}
          <div className="bg-zinc-800 py-6 px-2 max-w-xs flex flex-col items-center">
            <img src={img1} alt="" className="w-48 h-28 rounded-md" />
            <h1 className="font-semibold pb-4 pt-1">
              Cloud-Native <br /> Application Development
            </h1>
            <p className="max-w-56 text-xs">
              We help a SaaS startup build a cloud-native subscription platform
              with expertise in cloud architecture, containerization, and
              microservices for scalable, cost-effective deployment.
            </p>
          </div>
            {/* card2 */}
            <div className="bg-zinc-800 py-6 px-2 max-w-xs flex flex-col items-center">
            <img src={img2} alt="" className="w-48 h-28 rounded-md" />
            <h1 className="font-semibold pb-4 pt-1">
              Cloud-Native <br /> Application Development
            </h1>
            <p className="max-w-56 text-xs">
              We help a SaaS startup build a cloud-native subscription platform
              with expertise in cloud architecture, containerization, and
              microservices for scalable, cost-effective deployment.
            </p>
          </div>
          </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {/* card3 */}
            <div className="bg-zinc-800 py-6 px-2 max-w-xs flex flex-col items-center">
            <img src={img3} alt="" className="w-48 h-28 rounded-md" />
            <h1 className="font-semibold pb-4 pt-1">
              Cloud-Native <br /> Application Development
            </h1>
            <p className="max-w-56 text-xs">
              We help a SaaS startup build a cloud-native subscription platform
              with expertise in cloud architecture, containerization, and
              microservices for scalable, cost-effective deployment.
            </p>
          </div>
            {/* card4 */}
            <div className="bg-zinc-800 py-6 px-2 max-w-xs flex flex-col items-center">
            <img src={img4} alt="" className="w-48 h-28 rounded-md" />
            <h1 className="font-semibold pb-4 pt-1">
              Cloud-Native <br /> Application Development
            </h1>
            <p className="max-w-56 text-xs">
              We help a SaaS startup build a cloud-native subscription platform
              with expertise in cloud architecture, containerization, and
              microservices for scalable, cost-effective deployment.
            </p>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Implements;
