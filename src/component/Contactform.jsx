// import React from "react";

// function Contactform() {
//   return (
//     <>
//       <div className="bg-black w-full flex flex-wrap justify-around items-center">
//         <div className="flex flex-col justify-center items-start gap-10 text-white bg-black py-16 max-w-lg px-9">
//           <h1 className="font-medium text-4xl text-start">
//             Are you ready to turn your entrepreneurial dreams into reality?{" "}
//           </h1>
//           <h1 className="font-medium text-4xl text-start">
//             Join our Startup Program{" "}
//           </h1>
//           <button className="py-2 px-8 text-white bg-blue-700 font-medium rounded-md">
//             Book Demo
//           </button>
//         </div>
//         <div className="bg-black text-white flex flex-col justify-center items-start gap-4 py-16 max-w-sm px-2">
//           <p className="text-start text-xs">
//             For more information or to sign up, our team is ready to assist you
//             and answer any questions you may have.
//           </p>
//           <div className="flex flex-col gap-2 justify-start items-start">
//           <form action="">
//             <input type="text" placeholder="First Name *" required className="pr-20 mb-2 text-white bg-black border-b-2 bordder-white pb-2" /><br />
//             <input type="text" placeholder="Last Name *" required className="pr-20 mb-2 text-white bg-black border-b-2 bordder-white pb-2"/><br />
//             <input type="email" placeholder="Email *" required className="pr-20 mb-2 text-white bg-black border-b-2 bordder-white pb-2"/><br />
//             <input type="txet" placeholder="Phone Number *" required className="pr-20 mb-2 text-white bg-black border-b-2 bordder-white pb-2"/><br />
//             <textarea
//               name="Message"
//               placeholder="Message *" className="pr-24 mb-2 text-white bg-black border-b-2 bordder-white"
//               required
//             ></textarea><br />
//             <button className="py-2 px-8 text-white mr-36 bg-blue-700 font-medium rounded-md">
//               Submit
//             </button>
//           </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contactform;

import React, { useState } from "react";

function Contactform() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-black w-full flex flex-wrap justify-around items-center">
      <div className="flex flex-col justify-center items-start gap-10 text-white bg-black py-16 max-w-lg px-9">
        <h1 className="font-medium text-4xl text-start">
          Are you ready to turn your entrepreneurial dreams into reality?
        </h1>
        <h1 className="font-medium text-4xl text-start">Join our Startup Program</h1>
        <button className="py-2 px-8 text-white bg-blue-700 font-medium rounded-md">
          Book Demo
        </button>
      </div>
      <div className="bg-black text-white flex flex-col justify-center items-start gap-4 py-16 max-w-sm px-2">
        <p className="text-start text-xs">
          For more information or to sign up, our team is ready to assist you
          and answer any questions you may have.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="pr-20 mb-2 text-white bg-black border-b-2 border-white pb-2"
          /><br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="pr-20 mb-2 text-white bg-black border-b-2 border-white pb-2"
          /><br />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="pr-20 mb-2 text-white bg-black border-b-2 border-white pb-2"
          /><br />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="pr-20 mb-2 text-white bg-black border-b-2 border-white pb-2"
          /><br />
          <textarea
            name="message"
            placeholder="Message *"
            required
            value={formData.message}
            onChange={handleChange}
            className="pr-24 mb-2 text-white bg-black border-b-2 border-white"
          ></textarea>
          <br />
          <button type="submit" className="py-2 px-8 text-white bg-blue-700 font-medium rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactform;
