import React from "react";
import Oranges from "../../../components/accets/best-product-1.jpg";
import Raspberries from "../../../components/accets/best-product-2.jpg";
import Banana from "../../../components/accets/best-product-3.jpg";
import Apricots from "../../../components/accets/best-product-4.jpg";
import Grapes from "../../../components/accets/best-product-5.jpg";
import Apple from "../../../components/accets/best-product-6.jpg";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Button } from "@mui/material";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Oranges",
      imageSrc: "https://static.toiimg.com/photo/95145877.cms",
      imageAlt: "Oranges",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      id: 2,
      name: "Raspberries",
      imageSrc:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-veg-1613660931.jpg?crop=0.669xw:1.00xh;0.238xw,0&resize=480:*",
      imageAlt: "Raspberries",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      name: "Banana",
      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-1cd0c34a6697f69506119cffd5cb443f-lq",
      imageAlt: "Banana",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      name: "Apricots",
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5d96d524052c897425394aaf/1585934332909-PWGOEXBF8GVE9ZUSRSUI/baby-iceberg-lettuce.jpg",
      imageAlt: "Apricots",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 5,
      name: "Grapes",
      imageSrc: Grapes,
      imageAlt: "Grapes",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      id: 6,
      name: "Apple",
      imageSrc: Apple,
      imageAlt: "Apple",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      id: 7,
      name: "Raspberries",
      imageSrc: Raspberries,
      imageAlt: "Apple",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      id: 8,
      name: "Oranges",
      imageSrc: Oranges,
      imageAlt: "Apple",
      price: "$4.99 / kg",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-800 text-4xl ps-6 font-medium">
        Fresh Organic Vegetables
      </h1>
      <div className="flex items-center justify-center w-full h-full py-36 sm:py-8 px-4">
        {/* Carousel */}
        <CarouselProvider
          naturalSlideHeight={50}
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 right-[10rem] top-[-4rem] ml-8 focus:outline-none  px-8 py-1.5 font-semibold text-primary  cursor-pointer"
              id="prev"
            >
              <ArrowCircleLeftOutlinedIcon style={{ fontSize: "2rem" }} />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <TransitionGroup>
                  {products.map((slide, index) => (
                    <CSSTransition
                      key={slide.id}
                      timeout={500}
                      classNames="slide"
                    >
                      <Slide index={index}>
                        <div className="flex flex-col h-[25rem] items-center space-x-6 mx-4 ease-out border-2 p-1 border-primary">
                          <div className="h-80 w-full flex items-center justify-center overflow-hidden">
                            <img
                              src={slide.imageSrc}
                              alt={slide.imageAlt}
                              className="object-cover object-center h-full w-full" // Ensure the image covers the container
                            />
                          </div>
                          <div className="flex flex-col px-2  py-3 item-center justify-center space-y-3">
                            <h1 className="text-gray-800 text-2xl">
                              {slide.name}
                            </h1>
                            <p className="text-gray-500">{slide.description}</p>
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium text-gray-900">
                                {slide.price}
                              </p>
                              <Button
                                variant="contained"
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={{
                                  backgroundColor: "white",
                                  color: "#81C408",
                                  border: "2px solid #FFB524",
                                  borderRadius: "15px",
                                  boxShadow: "none",
                                  minWidth: "120px",
                                }}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-[2rem] top-[-4rem] ml-8 focus:outline-none px-8 py-1.5 font-semibold text-primary  cursor-pointer"
              id="next"
            >
              <ArrowCircleRightOutlinedIcon style={{ fontSize: "2rem" }} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
