import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="grid justify-center items-center">
        <h1 className="mt-[60px] ml-[30px] mb-[20px] text-5xl font-semibold">
          Newsletter Subscription
        </h1>
        <p className="text-xl text-gray-500">
          Subscribe to our newsletter to get new freelance work and projects
        </p>
      </div>
      <div className="grid justify-center items-center mt-[70px]">
        <input className="w-[400px] rounded-md text-lg text-center h-[45px]" type="search" placeholder="Enter Your email address" />
        <button className="flex flex-col mt-[20px] ml-[120px] mb-[100px] rounded-lg w-[180px] font-medium text-white text-lg justify-center items-center h-[45px] bg-sky-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
