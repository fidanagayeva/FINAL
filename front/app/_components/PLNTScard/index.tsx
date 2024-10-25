'use client';

import React, { useEffect, useState } from 'react';

interface Card {
    image: string;
    title: string;
}

export default function PLNTScard() {
    const [cardsData, setCardsData] = useState<Card[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/plntscards'); 
                const data: Card[] = await response.json();
                setCardsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-[20rem] py-8"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <div key={index} className="relative overflow-hidden shadow-md">
                        <img
                            src={card.image}
                            className="w-full h-[150px] md:h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                        />
                        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-bold text-center">
                            {card.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
