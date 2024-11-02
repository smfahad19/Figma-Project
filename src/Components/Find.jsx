import React from "react";
import Findimg from "../assets/Findimg.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";

const Find = () => {
  return (
    <div className="flex justify-between items-center text-center">
      <div className="flex ml-[100px] mt-[150px]">
        <img className="w-[580px] mb-56" src={Findimg} alt="Loading..." />
        <img
          className="h-24 mt-[210px] ml-[-140px]"
          src={frame1}
          alt="Loading..."
        />
        <img
          className="h-24 w-32 mt-[30px] ml-[-250px]"
          src={frame2}
          alt="Loading..."
        />
      </div>
      <div className="w-[410px] mr-[130px] mt-[-90px]">
      <h1 className="font-bold text-6xl">
        Find The Best <br /> <div className="flex leading-relaxed gap-4"><h1 className="text-sky-500 ">Freelancer</h1>Here</div>
      </h1>
      <p className="text-right text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        nesciunt est at sequi! Enim vitae laudantium explicabo nesciunt
        laboriosam, voluptate atque eum quod eos, inventore repudiandae ipsum in
        reiciendis omnis. Nesciunt totam modi, deserunt maiores vitae a
        dignissimos voluptate accusamus mollitia aperiam similique.
      </p>
      </div>
    </div>
  );
};

export default Find;
