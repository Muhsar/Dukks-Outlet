import React from "react";
import Carousel from "react-material-ui-carousel";
import { products } from ".pages/productsList";
import { Link } from "react-router-dom";
import Products from '../components/Landing/Products';
export default function Landing() {
  const { others, shoes } = products;
  const preview = [
    others[14],
    shoes[7],
    others[16],
    shoes[90],
    others[18],
    shoes[16],
  ];
  console.log(preview)
  return (
    <>
      <main className="bg-gray-800 relative">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-50 dark:text-white rounded-lg bg-pink-500 hover:bg-pink-700 px-3 py-1 font-black text-3xl">
              DO
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-gray-100 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Watch
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Product
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Contact
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Career
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div className=" bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex sm:flex-row flex-col relative py-16">
            <div className="sm:hidden block sm:w-1/3 lg:w-3/5 relative">
              <Carousel
                animation="slide"
                interval={6000}
                swipe={true}
                indicatorContainerProps={{
                  className: "sr-only",
                  style: {
                    display: "none", // 5
                  },
                }}
              >
                {products.headers.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="max-w-xs md:max-w-sm m-auto sm:h-80 h-96 object-center object-cover"
                  />
                ))}
              </Carousel>
            </div>
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-100">
                Dukks
                <span className="text-5xl sm:text-7xl">Outlet</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Your home of quality assured products.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  View Products
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <Carousel
                animation="slide"
                interval={6000}
                swipe={true}
                indicatorContainerProps={{
                  className: "sr-only",
                  style: {
                    display: "none", // 5
                  },
                }}
              >
                {products.headers.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="max-w-xs md:max-w-sm m-auto sm:h-96 h-96 object-center object-cover"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <Products />
        {/* <div className="mt-5 lg:mt-16 mx-auto container bg-gray-800">
          <h1 className="lg:text-5xl text-2xl text-center f-m-w text-gray-100 font-extrabold">
            Our Products
          </h1>
          <div className="flex flex-row justify-between px-4 text-lg sm:text-xl py-4">
            <h1 className="lg:text-3xl text-xl text-center f-m-w text-gray-100 font-medium">
              All Collections
            </h1>
            <Link className="text-pink-700" to="/products">
              View All
            </Link>
          </div>
          <div className="py-4 h-full grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 items-center bg-gray-800 justify-between xl:px-0 px-4">
          {
            preview?.map((item,index)=>(
            <div className="h-full lg:mb-0 mb-4 col-span-1 bg-gray-800 text-gray-100 shadow rounded-lg">
              <div className="w-full h-96 relative">
                <img
                  src={item.image}
                  className="absolute w-full h-full inset-0 object-center object-cover z-10"
                />
                <div className="left-0 px-3 flex items-center mb-3 justify-between bottom-0 w-full absolute z-20 pt-4">
                  <h4 className="f-m-m px-6 py-3 rounded-md bg-gray-800 text-gray-100"># 30000</h4>
                </div>
              </div>
              <div className="mt-12 p-2">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  {item.name}
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                </p>
                <div className="mt-3">
                  <a>
                    <p className="text-pink-700 underline cursor-pointer text-base font-semibold">
                      View Details
                    </p>
                  </a>
                </div>
              </div>
            </div>
            ))
          }
          </div>
        </div> */}
      </main>
    </>
  );
}
