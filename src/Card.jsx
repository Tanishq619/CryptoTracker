import React from "react";
import bnb from "./bnb-bnb-logo.png";
export default function Card({ heading, para }) {
  return (
    <div className="md:mx-20 ml-16 sm:pt-4 sm:text-xs sm:w-[100%] w-[70%] h-[7rem] rounded-lg flex  px-3 py-2 justify-between gap-4 items-center bg-gray-100 shadow-md shadow-gray-400 cursor-pointer hover:bg-gray-200">
      <img
        src={bnb}
        width=" 70px"
        className=" bg-blue-100 p-2 rounded-xl"
      ></img>

      <div className="grow  p-2">
        <p className="font-light">{heading}</p>
        <h4 className="text-md font-md w-[90%]">{para}</h4>
      </div>
    </div>
  );
}
