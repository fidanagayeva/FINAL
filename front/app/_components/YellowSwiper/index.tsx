"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { LiaChevronRightSolid, LiaChevronLeftSolid } from 'react-icons/lia';
import { useState } from 'react';
import { IoStarSharp } from "react-icons/io5";

export default function YellowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const totalItems = 5;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems); 
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems); 
  };

  return (
    <div className="relative w-full">
      <Carousel
        selectedItem={activeIndex} 
        infiniteLoop
        showArrows={false} 
        showThumbs={false}
        showStatus={false}
        className="bg-customHover text-white mb-10"
      >
        <div className="flex flex-col items-center justify-center h-[28rem] p-6 sm:h-[24rem] md:h-[26rem]">
          <h3 className="text-[0.9rem]">4.5 out of 5 stars, based on 20,800+ reviews</h3>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-white mt-10 text-xl" />
            ))}
          </div>
          <div className="text-center mt-4 mx-[10rem] sm:mx-6">
            <h2 className="text-4xl font-victor-serif font-bold">
              I am very happy with my order. Fast delivery, healthy plants and very good packaging. Recommend!
            </h2>
          </div>
          <p className="mt-5">- Anna M.</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[28rem] p-6 sm:h-[24rem] md:h-[26rem]">
          <h3 className="text-[0.9rem]">4.5 out of 5 stars, based on 20,800+ reviews</h3>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-white mt-10 text-xl" />
            ))}
          </div>
          <div className="text-center mt-4 mx-[10rem] sm:mx-6">
            <h2 className="text-4xl font-victor-serif font-bold">
             Everything came in a very good condition. It was my first two plants that I ordered online and I was very sceptic at the beginning, but now I don’t regret it at all.
            </h2>
          </div>
          <p className="mt-5">- Tasnim Saleh</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[28rem] p-6 sm:h-[24rem] md:h-[26rem]">
          <h3 className="text-[0.9rem]">4.5 out of 5 stars, based on 20,800+ reviews</h3>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-white mt-10 text-xl" />
            ))}
          </div>
          <div className="text-center mt-4 mx-[10rem] sm:mx-6">
            <h2 className="text-4xl font-victor-serif font-bold">
            It’s so nice when you get hand written thank you on the note:) Make me feel special!
            </h2>
          </div>
          <p className="mt-5">- Olha Karpenko</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[28rem] p-6 sm:h-[24rem] md:h-[26rem]">
          <h3 className="text-[0.9rem]">4.5 out of 5 stars, based on 20,800+ reviews</h3>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-white mt-10 text-xl" />
            ))}
          </div>
          <div className="text-center mt-4 mx-[10rem] sm:mx-6">
            <h2 className="text-4xl font-victor-serif font-bold">
             I got my plants delivered without any delays and they came in top form, weren't dry ,unhealthy looking or injured from the journey. Packaging was good. Keep up the good work guys.
            </h2>
          </div>
          <p className="mt-5">- Ruthie W</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[28rem] p-6 sm:h-[24rem] md:h-[26rem]">
          <h3 className="text-[0.9rem]">4.5 out of 5 stars, based on 20,800+ reviews</h3>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-white mt-10 text-xl" />
            ))}
          </div>
          <div className="text-center mt-4 mx-[10rem] sm:mx-6">
            <h2 className="text-4xl font-victor-serif font-bold">
            Bought a variegata deliciosa monstera and it is absolutely stunning and shipped perfectly with no damage and on time! Excellent service!
            </h2>
          </div>
          <p className="mt-5">- Karel Verlinde</p>
        </div>
      </Carousel>

      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/4 p-2 bg-customHover rounded-full text-white hover:text-customHover border border-white hover:bg-white"
        onClick={handlePrev} 
      >
        <LiaChevronLeftSolid />
      </button>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/4 p-2 bg-customHover rounded-full text-white hover:text-customHover border border-white hover:bg-white"
        onClick={handleNext} 
      >
        <LiaChevronRightSolid />
      </button>
    </div>
  );
}
