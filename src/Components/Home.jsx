import React from "react";
import firstimg from "../assets/firstImg.png";
import { IoSearch } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuFileSearch } from 'react-icons/lu';
import { VscGitStashApply } from "react-icons/vsc";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mb-32">
          <h1 className="text-5xl leading-relaxed font-bold w-[450px] mr-48">
            Are you looking for Freelancers?
          </h1>
          <p className="w-[400px] tracking-widest">
            Hire Great Freelancer, Fast. Spacelance helps you hire elite
            freelancer at a moment's notice
          </p>
        </div>
        <img
          src={firstimg}
          alt="Loading Error..."
          className="h-[480px] w-[480px] ml-[-150px]"
        />
      </div>
      <div className="flex mt-[-130px] gap-3 ml-72">
        <button className="bg-sky-500 text-white w-[150px] font-bold rounded-md h-14">
          Hire a freelancer
        </button>
        <div className="flex w-[300px]">
          <input
            className="w-full h-14 px-4 rounded-l-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="search"
            placeholder="Search freelance work"
          />
          <button className="h-14 bg-sky-500 rounded-r-md flex items-center px-2">
            <IoSearch className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex items-center shadow-xl justify-between bg-white m-12 h-44 rounded-md">
        <div className="justify-between ml-36 gap-56 flex">
          <div className="w-[230px] h-full flex flex-col justify-center items-center text-center">
            <RiLockPasswordLine className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out" />
            <h1 className="text-3xl font-bold text-black">Create Account</h1>
            <p>First, you have to create an account here.</p>
          </div>

          <div className="w-[190px] h-full flex flex-col justify-center items-center text-center">
          <LuFileSearch className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out" />
            <h1 className="text-3xl font-bold text-black">Search work</h1>
            <p>Search the best <br /> freelance work here</p>
          </div>
          <div className="w-[220px] h-full flex flex-col justify-center items-center text-center">
            <VscGitStashApply className="text-3xl w-[50px] h-[40px] rounded-full bg-[#e0f7fa] hover:cursor-pointer hover:shadow-xl hover:transition duration-200 ease-in-out"/>
            <h1 className="text-3xl font-bold text-black">Save and apply</h1>
            <p>Apply or save <br /> and start your work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
 