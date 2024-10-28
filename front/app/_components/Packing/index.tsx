'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { LiaChevronRightSolid, LiaChevronLeftSolid } from 'react-icons/lia';

interface Slide {
    title: string;
    description: string;
    image: string;
}

export default function Packing() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/packing');
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };

        fetchSlides();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + slides.length) % slides.length);
    };

    return (
        <div className="container mx-auto p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
                <div className="md:text-left text-center">
                    <h1 className="text-2xl md:text-5xl font-semibold font-victor-serif text-customText">
                        The journey of your new plant!
                    </h1>
                    <Link href="https://support.plnts.com/hc/en-us/categories/15121391044242-Delivery?_gl=1*rm2k4t*_ga*MTY3MDcwMDU0NS4xNzI4MzE4MjIz*_ga_1HEYB1EYE6*MTczMDA2NzE3NS4yMC4xLjE3MzAwNzIzMjYuMC4wLjE4ODkzNjYxMTg.">
                        <p className="text-md md:text-base text-customText mt-2 cursor-pointer hover:text-customHover">
                            More about shipping &rarr;
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-8 pt-4 space-y-4 md:space-y-0 md:space-x-8">
                    {[0, 1].map((offset) => {
                        const slideIndex = (currentIndex + offset) % slides.length;
                        return (
                            <div key={slideIndex} className="w-full md:w-full mr-[-25rem] text-center md:text-left">
                                <h2 className="text-lg md:text-3xl font-semibold font-victor-serif text-customText">
                                    {slides[slideIndex]?.title}
                                </h2>
                                <p className="text-customText">
                                    {slides[slideIndex]?.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center mt-6 text-customText justify-center md:justify-start"> 
                    <button onClick={prevSlide} className="bg-background rounded-full p-2 hover:bg-customHover border border-customText hover:border-customHover mr-4">
                        <LiaChevronLeftSolid className="text-customText hover:text-background" />
                    </button>
                    <span className="font-semibold mx-2">
                        {`${Math.floor(currentIndex / 2) + 1} / ${Math.ceil(slides.length / 2)}`}
                    </span>
                    <button onClick={nextSlide} className="bg-background rounded-full p-2 hover:bg-customHover border border-customText hover:border-customHover ml-4">
                        <LiaChevronRightSolid className="text-customText hover:text-background" />
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/3 pl-0 md:pl-6">
                {slides.length > 0 && (
                    <img
                        src={slides[currentIndex]?.image}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-[24rem] h-[31rem] transition-opacity duration-500"
                    />
                )}
            </div>
        </div>
    );
}
