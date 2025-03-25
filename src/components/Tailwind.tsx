// import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";

const Tailwind = () => {
  const contributeBtn = () => {
    alert("Thank you for clicking! , You are appreciated.");
  };
  return (
    <div>
      <div className="bg-[#210F37] w-1/2 m-auto text-[#DCA06D]">
        <h1 className="">
          {" "}
          Mahmoud Abdulmajeed Taiye <GiEternalLove />
        </h1>
        <p className="text-center">
          He is a junior Developer with knowledge from basic HTML and CSS , He
          has a versatile knowledge about vanilla Javascript , and has been
          learning React for the past 2 Months. The learning process has been
          very intriguing and fun. He also aspire to add back-end knowledge to
          his packages. <GiEternalLove /> <FaInstagram />
        </p>

        <button
          onClick={contributeBtn}
          className="bg-[#A55B4B] p-[15px] block m-auto rounded-md"
        >
          Click to contribute
        </button>
      </div>
    </div>
  );
};

export default Tailwind;
