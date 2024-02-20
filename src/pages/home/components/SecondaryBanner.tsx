import React from "react";
import image1 from "../../../components/accets/baner-1.png";

export default function SecondaryBanner() {
  return (
    <div className="flex flex-row justify-around items-center h-auto py-24 my-12  bg-secondary">
      <div className="flex flex-col items-start space-y-5 w-1/3">
        <div className="flex flex-col items-start space-y-3">
          <h1 className="lg:text-6xl text-white">Fresh Exotic Fruits</h1>
          <h1 className="lg:text-6xl text-gray-600">in Our Store</h1>
        </div>
        <div className="flex flex-col items-start space-y-5">
          <p className="capitalize text-gray-700 font-medium">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <button className="px-10 py-3 hover:bg-primary rounded-full border-2">
            Buy
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="">
          <img src={image1} alt="image" />
        </div>
        <div className="absolute top-2  left-7 text-4xl w-36 h-36 flex items-center justify-center rounded-full bg-white text-gray-700 font-semibold">
          1.50$
        </div>
      </div>
    </div>
  );
}
