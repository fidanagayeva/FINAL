"use client";

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface AccessoriesCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    price2?: number;
    size?: string;
    sale?: string;
}

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

export default function AccessoriesCards() {
    const [accessoriescards, setAccessoriescards] = useState<AccessoriesCard[]>([]);
    const [wishlist, setWishlist] = useState<AccessoriesCard[]>([]);

    useEffect(() => {
        const fetchAccessoriescards = async () => {
            try {
                const response = await fetch('http://localhost:3001/accessoriescards');
                const data: AccessoriesCard[] = await response.json();
                setAccessoriescards(data);
            } catch (error) {
                console.error('Error fetching accessories cards:', error);
            }
        };

        fetchAccessoriescards();
    }, []);

    const handleCardClick = (id: string) => {
        console.log(`Accessories card clicked with ID: ${id}`);
    };

    const handleAddToWishlist = (card: AccessoriesCard) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-14">
            {accessoriescards.map(accessoriescard => (
                <div
                    key={accessoriescard._id}
                    className="relative overflow-hidden transition-transform cursor-pointer"
                    onClick={() => handleCardClick(accessoriescard._id)}
                >
                    <div className="relative group">
                        <div className="overflow-hidden">
                            <img
                                src={accessoriescard.image}
                                alt={accessoriescard.title}
                                className="w-full h-[22.28rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute bottom-3 bg-customPLNTS text-white text-sm px-2 py-1">
                                Sale {accessoriescard.sale}
                            </div>
                        </div>

                        <div
                            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-20"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToWishlist(accessoriescard);
                            }}
                        >
                            <HeartIcon />
                        </div>

                        <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                    </div>

                    <div className="text-start relative z-10">
                        <h2 className="text-[0.97rem] text-customText font-semibold">{accessoriescard.title}</h2>
                        <p className="text-customText text-[0.95rem] italic">{accessoriescard.description}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-customText line-through">€{accessoriescard.price.toFixed(2)}</p>
                            <p className="text-customPLNTS">€{accessoriescard.price2?.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-start mt-2">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-customText text-[0.7rem]" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
