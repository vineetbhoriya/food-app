import React from "react";
import image1 from "../../../components/accets/featur-1.jpg";
import image2 from "../../../components/accets/featur-2.jpg";
import image3 from "../../../components/accets/featur-3.jpg";
import { Link } from "react-router-dom";

const Images = [image1, image2, image3];
const ImageData = [
  {
    imageSrc: image1,
    color: "#FFB524",
    btnTxt: "fresh Apples",
    offers: "20% off",
    href: "/",
  },
  {
    imageSrc: image2,
    color: "#45595B",
    btnTxt: "taste fruits",
    offers: "Free Delivery",
    href: "/",
  },
  {
    imageSrc: image3,
    color: "#81C408",
    btnTxt: "Exotic vegetables",
    offers: "discount 30$",
    href: "/",
  },
];

export default function OfferCarts() {
  return (
    <div>
      <div className="mx-auto max-w-7xl h-[90vh] py-16 px-4 sm:px-6 lg:px-8  flex md:flex-row md:space-x-8 flex-col items-center md:space-y-0 space-y-5 justify-between">
        {ImageData.map((item, index) => {
          let buttonColorClass;
          let offerTextColorClass;
          if (index === 0) {
            buttonColorClass = "bg-primary";
            offerTextColorClass = "text-white";
          } else if (index === 1) {
            buttonColorClass = "bg-white";
            offerTextColorClass = "text-primary";
          } else if (index === 2) {
            buttonColorClass = "bg-secondary";
            offerTextColorClass = "text-white";
          }

          return (
            <div key={index} className="flex flex-col  border-2 border-secondary rounded-2xl relative">
              <div className="">
                <img
                  src={item.imageSrc}
                  alt="image"
                  className="h-full rounded-2xl w-full object-cover object-center"
                />
              </div>
              <div
                className={`p-5 py-[3rem]`}
                style={{ backgroundColor: item.color }}
              ></div>
              {/* button */}
              <div className="absolute inset-0 flex flex-col  items-center justify-end bottom-10 cursor-pointer">
                <Link to={item.href}>
                  <div
                    className={`lg:px-12 md:px-9 px-6 flex flex-col  items-center capitalize font-semibold text-xl text-white justify-center  py-10 rounded-lg ${buttonColorClass}`}
                  >
                    <p className={`lg:text-2xl ${offerTextColorClass}`}>
                      {item.btnTxt}
                    </p>
                    <p className="text-[#45595B] font-medium text-md">
                      {item.offers}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
