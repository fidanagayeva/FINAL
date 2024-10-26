"use client";

import Link from 'next/link'; 
import { useEffect, useState } from 'react';
import { PiInstagramLogoLight } from "react-icons/pi";
import { LiaChevronRightSolid } from 'react-icons/lia'; 

interface Card {
    id: number;
    image: string;
    instagramLink: string;
}

export default function InstaCards() {
    const [cards, setCards] = useState<Card[]>([]);

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

    return (
        <div className="p-6">
            <div className="flex justify-end items-center mb-6 mr-12 text-customText hover:text-customHover transition duration-300 cursor-pointer">
                <Link href="https://www.instagram.com/plnts_com/#" target="_blank" className="flex items-center">
                    < PiInstagramLogoLight className="mr-2 text-2xl" />
                    <span className="text-lg">Join our community!</span>
                    <LiaChevronRightSolid className="text-xl ml-2" />
                </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4"> 
                {cards.map((card) => (
                    <div key={card.id} className="relative overflow-hidden transition-transform cursor-pointer flex flex-col items-start">
                        <Link href={card.instagramLink} target="_blank"> 
                            <img
                                src={card.image}
                                alt={`Instagram link for ${card.instagramLink}`}
                                className="w-[23.75rem] h-[23.75rem] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
