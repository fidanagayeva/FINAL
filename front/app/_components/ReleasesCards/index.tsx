"use client";

import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const HeartIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74.84 74.84"
        fill="none"
        stroke="currentColor"
        className="text-customText hover:text-customHover"
        strokeWidth="2.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
    >
        <path d="M41.17,14.08l-7.77,7.17.13-.14c-.99,1.08-1.63,2.44-1.63,3.98,0,3.07,2.44,5.51,5.51,5.51s5.51-2.44,5.51-5.51c0-1.63-.63-2.98-1.63-3.98l.14.14-8.52-7.85,1.7,1.57c-4.7-4.7-9.13-6.06-13.29-6.06-8.95,0-16.09,7.23-16.09,16.09v.09c0,1.45.18,2.89.45,4.25,4.7,19.25,31.72,36.6,31.72,36.6h0s27.02-17.26,31.72-36.6c.36-1.36.45-2.8.45-4.25v-.09c0-8.95-7.23-16.09-16.09-16.09-4.25,0-8.86,1.54-13.83,6.6" />
    </svg>
);

interface HouseCard {
    _id: string;
    title: string;
    description?: string;
    image: string;
    text1: string;
    price: number;
    price2?: number;
    size: string;
    sale: boolean;
}

export default function ReleasesCards() {
    const [houseCards, setHouseCards] = useState<HouseCard[]>([]);
    const [wishlist, setWishlist] = useState<HouseCard[]>([]);

    useEffect(() => {
        const fetchHouseCards = async () => {
            try {
                const response = await fetch("http://localhost:3001/housecards");
                const data: HouseCard[] = await response.json();
                setHouseCards(data);
            } catch (error) {
                console.error("Error fetching house cards:", error);
            }
        };

        fetchHouseCards();
    }, []);

    const handleAddToWishlist = (card: HouseCard) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Zəhmət olmasa, wishlist-ə əlavə etmək üçün daxil olun.');
            return;
        }
        setWishlist((prev) => {
            const updatedWishlist = [...prev, card];
            localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    return (
        <div className="flex flex-col md:flex-row p-4 md:p-20">
            <div className="relative mr-10 w-full md:w-1/2 mb-4 md:mb-0">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPhilodendron_background_b5ef215490.jpg&w=640&q=75"
                    className="w-full h-[51rem] object-cover"
                    alt="Background"
                />
                <div className="absolute top-6 left-6 text-white font-semibold">
                    <span className="font-victor-serif italic ml-4 text-6xl">New</span>
                    <span className="italic text-4xl">releases</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.258-1.jpg&w=320&q=80"
                        className="w-[26rem] h-[36rem] object-cover"
                        alt="Centered Plant"
                    />
                    <div className="absolute top-[8.5rem] right-[7rem] w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md z-20">
                        <HeartIcon />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {houseCards.slice(0, 6).map((card) => (
                    <div
                        key={card._id}
                        className="relative overflow-hidden transition-transform cursor-pointer"
                    >
                        <div className="relative group">
                            <div className="overflow-hidden mt-4">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-[13.5rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                />
                            </div>

                            <div
                                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-20"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToWishlist(card); 
                                }}
                            >
                                <HeartIcon />
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                        </div>

                        <div className="text-start relative z-10">
                            <h2 className="text-[0.97rem] text-customText font-semibold">{card.title}</h2>
                            <p className="text-customText text-[0.95rem] italic">{card.description}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-customText line-through">€{card.price.toFixed(2)}</p>
                                {card.price2 && (
                                    <p className="text-customPLNTS">€{card.price2.toFixed(2)}</p>
                                )}
                            </div>
                            <div className="flex justify-start mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="text-customText text-[0.7rem]" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="col-span-3 flex justify-center mt-6">
                    <Link href="/houseplants">
                        <button className="px-6 py-2 w-[20rem] text-customText hover:text-white border border-customText rounded-3xl 
                        hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md">
                            Shop all our releases
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
