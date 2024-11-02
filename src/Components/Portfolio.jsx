import React from "react";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "img11",
    img: img13,
    desTitle: "Bunny.Design",
    des: "UI/UX Designer",
  },
  {
    id: 2,
    name: "img12",
    img: img12,
    desTitle: "Bhaskar Tiwari",
    des: "Graphic Designer",
  },
  {
    id: 3,
    name: "img13",
    img: img11,
    desTitle: "Aksara Joshi",
    des: "Graphic Designer",
  },
];

const Portfolio = () => {
  return (
    <div className="mb-[100px]">
      <div className="gap-3 text-center">
        <h2 className="text-3xl font-semibold text-gray-500 mt-[150px] mb-[10px]">Logos, website, book covers & more!</h2>
        <h1 className="text-5xl font-semibold mb-[90px]">
          Checkout The Best <span className="text-sky-500">Portfolios</span>{" "}
          Here
        </h1>
      </div>
      <div className="grid mr-[100px] ml-[100px] grid-cols-3 gap-6">
        {data.map((item) => {
          return (
            <div className="relative rounded-lg ml-[100px] w-[300px] bg-white h-[350px] shadow-xl">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover  w-full rounded"
              />
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl mt-[20px] font-semibold ml-[20px]">
                    {item.desTitle}
                  </h1>
                  <FaArrowRightLong  className="text-blue-500 text-2xl mt-[25px] mr-[20px]"/>
                </div>
              <p className="ml-[20px] ">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
