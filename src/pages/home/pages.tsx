import { CarouselTransition } from "./components/CarouselTransition";
import Products from "./components/Products";
import ServiceCart from "./components/ServiceCart";

export default function Home() {
  return (
    <>
      <div className="homeheader flex lg:flex-row flex-col lg:justify-around gap-10 items-center py-28 px-10">
        <div className="flex lg:flex-col flex-col md:items-start md:w-[40%]">
          <h2 className="text-secondary md:text-[2rem] lg:text-[2.5rem]  font-semibold">
            100% Organic Foods
          </h2>
          <h1 className="text-primary lg:text-[4rem] md:text-[3.5rem] text-[2.5rem]  font-bold">
            Organic Veggies & Fruits Foods
          </h1>
          <div className="border bg-white rounded-full mt-3 flex flex-row outline-primary border-secondary outline-offset-4">
            <input
              type="text"
              placeholder="search"
              className="text-sm md:text-xl font-thin md:px-5 px-3 py-2 md:py-3 rounded-full outline-none flex-grow"
            />
            <button className="rounded-full min-w-[10%] bg-primary hover:bg-secondary border border-secondary font-medium text-white px-4 py-2 md:px-5 md:py-3">
              Submit Now
            </button>
          </div>
        </div>
        <div className="sm:p-3 flex justify-center items-center">
          <div className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem]">
            <CarouselTransition />
          </div>
        </div>
      </div>
      <section className="p-5">
        <ServiceCart></ServiceCart>
      </section>
      {/* products */}
      <section>
        <Products></Products>
      </section>
    </>
  );
}
