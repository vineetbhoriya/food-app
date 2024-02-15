import { Carousel } from "@material-tailwind/react";
import image1 from "../../../components/accets/hero-img-1.png";
import image0 from "../../../components/accets/hero-img-2.jpg";
import image2 from "../../../components/accets/unsplash/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import image3 from "../../../components/accets/unsplash/dan-gold-4_jhDO54BYg-unsplash.jpg";
import image4 from "../../../components/accets/unsplash/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";
import image5 from "../../../components/accets/unsplash/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
const images = [
  { url: image0, text: "vegetables" },
  { url: image1, text: "Fruites" },
  { url: image2, text: "Food" },
  { url: image3, text: "vegetables" },
  { url: image4, text: "Fruites" },
  { url: image5, text: "vegetables" },
];

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      placeholder={"asda"}
      className="rounded-xl"
      autoplay
      autoplayDelay={2000}
      loop
    >
      {images.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item.url}
            alt={`image ${index + 1}`}
            className="h-full w-full object-contain"
          />
          <button className="bg-secondary bg-opacity-50 absolute inset-0 m-auto w-[60%] h-[5rem] capitalize rounded-lg text-white font-semibold text-2xl">
            {item.text}
          </button>
        </div>
      ))}
    </Carousel>
  );
}
