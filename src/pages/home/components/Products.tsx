import { Button, Grid } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Oranges from "../../../components/accets/best-product-1.jpg";
import Raspberries from "../../../components/accets/best-product-2.jpg";
import Banana from "../../../components/accets/best-product-3.jpg";
import Apricots from "../../../components/accets/best-product-4.jpg";
import Grapes from "../../../components/accets/best-product-5.jpg";
import Apple from "../../../components/accets/best-product-6.jpg";

const products = [
  {
    id: 1,
    name: "Oranges",
    imageSrc: Oranges,
    imageAlt: "Oranges",
    price: "$4.99 / kg",
    description: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 2,
    name: "Raspberries",
    imageSrc: Raspberries,
    imageAlt: "Raspberries",
    price: "$4.99 / kg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    name: "Banana",
    imageSrc: Banana,
    imageAlt: "Banana",
    price: "$4.99 / kg",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    name: "Apricots",
    imageSrc: Apricots,
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

const Buttons = [
  {
    id: 1,
    name: "All Products",
  },
  {
    id: 2,
    name: "Vegetables",
  },
  {
    id: 3,
    name: "Fruits",
  },
  {
    id: 4,
    name: "Bread",
  },
  {
    id: 5,
    name: "Milk Products",
  },
];
export default function Products() {
    const [activeButton, setActiveButton] = React.useState(1);
    const handleButtonClick = (id: number) => {
        setActiveButton(id);
    };
    return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center md:space-y-0 space-y-5 justify-between">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Our Organic Products
        </h2>
        <div className="flex lg:flex-row flex-wrap md:gap-x-10 gap-x-3 gap-y-3">
          {Buttons.map((btn) => (
            <div key={btn.id}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: activeButton === btn.id ? "#FFB524" : "gray",
                  color: "white",
                  borderRadius: "2rem",
                  boxShadow: "none",
                }}
                onClick={() => handleButtonClick(btn.id)}
              >
                {btn.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
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
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
