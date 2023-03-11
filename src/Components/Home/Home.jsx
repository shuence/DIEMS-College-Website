import React, { useEffect } from "react";
import { useState } from "react";
import leftArrow from "../../assests/images/leftArrow.png";
import rightArrow from "../../assests/images/rightArrow.png";
import slides from "../../Data/sliderData";

const Home = () => {
 const [currentSlide, setCurrentSlide,nextSlide] = useState(0);


  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    };
   const interval = setInterval(() => {
     nextSlide();
   }, 3000);
   return () => clearInterval(interval);
 }, [currentSlide, nextSlide, setCurrentSlide]);


  return (
    <>
      <div className="">
        <div className="rounded shadow-md items-center overflow-hidden relative flex gap-4 px-0 py-4 m-6 bg-gray-300">
          <div
            className="flex transition-transform gap-10 ease-out duration-500"
            style={{ transform: `translateX(-${setCurrentSlide * 100}%)` }}
          >
            <div className="flex flex-1 flex-col gap-10 ml-10 mr-15 px-8">
              <span className="mt-10">{slides[currentSlide].heading}</span>
              <span>{slides[currentSlide].des}</span>
            </div>
            <div className="m-auto py-4 px-4 relative">
              <img
                className="m-4 p-3 max-h-50 rounded-2xl duration-500"
                src={slides[currentSlide].url}
                alt=""
                height={600}
                width={700}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <img
                  src={leftArrow}
                  alt=""
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
                    )
                  }
                />
              </button>
              <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <img
                  src={rightArrow}
                  alt=""
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
                    )
                  }
                />
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex justify-center items-center gap-2">
              {slides.map((slides, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${
                    slides === index ? "p-4" : "bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
