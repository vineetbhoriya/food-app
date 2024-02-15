import { CarouselTransition } from "./components/CarouselTransition";
import ServiceCart from "./components/ServiceCart";

export default function Home() {
  return (
    <>
      <div className="homeheader">
        <div className="flex lg:flex-col items-start">
          <h2 className="text-secondary text-[1.5rem] font-semibold">
            100% Organic Foods
          </h2>
          <h1 className="text-primary text-[4rem] font-bold">
            Organic Veggies & <br /> Fruits Foods
          </h1>
          <div className="border bg-white rounded-full mt-3  outline-primary border-secondary outline-offset-4">
            <input
              type="text"
              placeholder="search"
              className="text-xl  font-thin px-5 ps-5 rounded-full outline-none"
            />
            <button className="rounded-full bg-primary hover:transition-all hover:ease-in border-secondary border font-medium hover:bg-secondary h-full text-white px-5 py-4">
              Submit Now
            </button>
          </div>
        </div>
        <div className=" w-[30%]">
          <CarouselTransition />
        </div>
      </div>
      <section className="w-full h-[50vh] flex justify-center ">
        <ServiceCart></ServiceCart>
      </section>
    </>
  );
}
