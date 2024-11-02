import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Account from "../assets/Account.png";
import Canva from "../assets/Canva.png";
import MaterialUi from "../assets/MaterialUI.png";

const FindWork = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <div className="ml-[130px]">
          <h1 className="text-4xl leading-relaxed text-gray-500">
            The latest freelance work!
          </h1>
          <h1 className="flex text-5xl font-bold gap-3">
            Recently Posted<h1 className="text-blue-500 ">Works</h1>
          </h1>
        </div>
        <div className="flex gap-4 mr-[150px] mt-5">
          <HiOutlineArrowNarrowLeft className="w-9 cursor-pointer text-blue-500 h-9 shadow-md rounded-full bg-white" />
          <HiOutlineArrowNarrowRight className="text-white w-9 h-9 cursor-pointer shadow-md bg-blue-500 rounded-full" />
        </div>
      </div>
      <div className="flex m-32 justify-between items-center gap-5">
        {/* First container */}
        <div className="w-[290px] h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <img
            className="w-[70px] h-[70px] mt-2"
            src={MaterialUi}
            alt="Loading..."
          />
          <h1 className="mt-6 text-xl leading-relaxed font-semibold ">Logo Design</h1>
          <p className="text-center text-gray-500 tracking-wide w-[200px]">Need a professional logo with writing underneath for our jewellery company</p>
          <div className="flex gap-20 mt-7" >
            <h1 className="text-center tracking-wide font-bold text-gray-500">Highest bid <br />$500</h1>
            <button className="text-sky-500 underline decoration-blue-500">Apply now</button>
          </div>
        </div>

        {/* Second container */}
        <div className="w-[290px] h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <img
            className="w-[70px] h-[70px] mt-2"
            src={Canva}
            alt="Loading..."
          />
          <h1 className="mt-6 text-xl leading-relaxed font-semibold ">Graphic Design</h1>
          <p className="text-center text-gray-500 tracking-wide w-[200px]">We need a graphic designer with UI/UX skills for our Furniture company</p>
          <div className="flex gap-20 mt-7" >
            <h1 className="text-center tracking-wid font-bold text-gray-500">Highest bid <br />$500</h1>
            <button className="text-sky-500 underline decoration-blue-500">Apply now</button>
          </div>
        </div>

        {/* Third container */}
        <div className="w-[290px] h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <img
            className="w-[70px] h-[70px] mt-2"
            src={Account}
            alt="Loading..."
          />
          <h1 className="mt-6 text-xl leading-relaxed font-semibold ">Need a SEO</h1>
          <p className="text-center text-gray-500 w-[200px]">Need a SEO for our company who will let our company to a higher level</p>
          <div className="flex gap-20 mt-7" >
            <h1 className="text-center tracking-wide font-bold text-gray-500">Highest bid <br />$300</h1>
            <button className="text-sky-500 underline decoration-blue-500">Apply now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWork;
