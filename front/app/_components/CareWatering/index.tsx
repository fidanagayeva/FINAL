'use client';
import Link from 'next/link';
import { FaSeedling } from 'react-icons/fa';
import { GiWateringCan } from "react-icons/gi";
import { CiPillsBottle1 } from "react-icons/ci";
import { useEffect, useState } from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
}

export default function CareWatering() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3001/carecards');
                const data: Card[] = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div>
            <div className="flex p-14">
                <div className="w-2/5">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FWatering_7d6600f806.png&w=1080&q=75"
                        alt="Plant Care"
                        className="w-[32rem] h-[44rem] object-cover"
                    />
                </div>
                <div className="w-3/5 p-4 mx-12 flex flex-col justify-start">
                    <h1 className="text-5xl font-bold font-victor-serif text-customText leading-tight">
                        We are happy to help you care for your plants!
                    </h1>

                    <div className="mt-6 p-4 w-[35rem] border border-custombgclr bg-custombgclr">
                        <div className="flex space-x-6 items-center">
                            <div className="flex items-center text-customText">
                                <GiWateringCan className="mr-2 text-2xl" />
                                <span>Watering</span>
                            </div>
                            <div className="flex items-center text-customText">
                                <FaSeedling className="mr-2" />
                                <span>Potting soil and substrates</span>
                            </div>
                            <div className="flex items-center text-customText">
                                <CiPillsBottle1 className="mr-2 text-xl" />
                                <span>Plant nutrition</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mt-8 mb-4 text-customText">Watering</h2>
                    <p className="mt-2 text-customText text-base">
                        Watering your houseplants sounds easy. Yet it is something that many people struggle with, especially when it comes to doing it the right way. There are so many factors that make it difficult to know exactly when and how often to water, let alone how much each plant needs.
                    </p>
                    <div className="mt-4 flex space-x-4">
                        <Link href="/care">
                            <button className="px-6 py-2 mt-6 text-customText hover:text-white border border-customText rounded-3xl 
                              hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md">
                                Shop watering tools
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-customCareBg mt-[-13rem] min-h-[23rem] flex flex-col justify-end p-4'>
                <Link href="/care"> 
                    <h2 className="text-sm font-bold text-end text-white mb-4 cursor-pointer mr-11">All care products</h2>
                </Link>
                <div className="flex justify-end space-x-4 mr-10">
                    {cards.slice(0, 3).map((card) => (
                        <div key={card.id} className="relative overflow-hidden transition-transform cursor-pointer flex flex-col items-start">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-[10rem] h-[15rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <h3 className="text-base font-semibold text-white text-center max-w-[8rem] truncate">{card.title}</h3>
                            <p className="text-sm text-white italic">{card.description}</p>
                            <div className="flex justify-between items-center mt-1">
                                <span className="font-bold text-white">€{card.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
