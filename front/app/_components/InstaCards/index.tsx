"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiInstagramLogoLight } from "react-icons/pi";
import { LiaChevronRightSolid, LiaChevronLeftSolid } from 'react-icons/lia';

interface Card {
    id: number;
    image: string;
    instagramLink: string;
}

export default function InstaCards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3001/cards');
                const data: Card[] = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCards();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % (cards.length));
    };

    return (
        <div className="relative">
            <div className="flex justify-end items-center my-6 mr-12 text-customText hover:text-customHover transition duration-300 cursor-pointer">
                <Link href="https://www.instagram.com/plnts_com/#" target="_blank" className="flex items-center">
                    <PiInstagramLogoLight className="mr-2 text-2xl" />
                    <span className="text-lg">Join our community!</span>
                    <LiaChevronRightSolid className="text-xl ml-2" />
                </Link>
            </div>

            <div className="relative w-full">
                <div className="flex overflow-hidden relative">
                    <div className="flex transition-transform duration-300 gap-2" style={{ transform: `translateX(-${(currentIndex * (100 / itemsToShow))}%)` }}>
                        {cards.concat(cards).map((card) => (
                            <div key={card.id} className="relative flex-none w-full h-[23.75rem] sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)]">
                                <Link href={card.instagramLink} target="_blank">
                                    <img
                                        src={card.image}
                                        alt={`Instagram link for ${card.instagramLink}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center my-6">
                    <div className="flex items-center">
                        <button className="bg-background rounded-full p-2 hover:bg-customHover border border-customText hover:border-customHover" onClick={prevSlide}>
                            <LiaChevronLeftSolid className="text-customText hover:text-background" />
                        </button>
                        <div className="flex mx-4">
                            {cards.map((_, index) => (
                                <div key={index} className={`h-1 w-8 mx-1 ${index === currentIndex ? 'bg-customText' : 'bg-[#D6D3D1]'}`}></div>
                            ))}
                        </div>
                        <button className="bg-background rounded-full p-2 hover:bg-customHover border border-customText hover:border-customHover" onClick={nextSlide}>
                            <LiaChevronRightSolid className="text-customText hover:text-background" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
