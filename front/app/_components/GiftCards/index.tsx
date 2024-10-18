'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeartIcon = () => (
    <svg
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

interface GiftCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export default function GiftCards() {
    const [giftcards, setGiftcards] = useState<GiftCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const router = useRouter();

    const fetchGiftcards = async (page: number) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3001/api/giftcards?page=${page}&limit=10`);
            setGiftcards(response.data.giftcards);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching giftcards:', error);
            setError('Error fetching giftcards.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGiftcards(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleCardClick = (id: string) => {
        router.push(`/gifts/${id}`); 
    };

    return (
        <div className="container mx-auto p-7">
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="relative overflow-hidden transition-transform">
                            <Skeleton height={320} />
                            <Skeleton height={20} className="mt-2" />
                            <Skeleton height={15} className="mt-1" />
                            <Skeleton height={15} className="mt-1" />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {error && <p>{error}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {giftcards.map((giftcard) => (
                            <div key={giftcard._id} onClick={() => handleCardClick(giftcard._id)} className="relative overflow-hidden transition-transform cursor-pointer">
                                <div className="relative group">
                                    <div className="overflow-hidden">
                                        <img
                                            src={giftcard.image}
                                            alt={giftcard.title}
                                            className="w-full h-[22.28rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-20">
                                        <HeartIcon />
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                                </div>
                                <div className="text-start relative z-10">
                                    <h2 className="text-[0.97rem] text-customText font-semibold">{giftcard.title}</h2>
                                    <p className="text-customText text-[0.95rem] italic">{giftcard.description}</p>
                                    <p className="text-[0.9rem] text-customText">€{giftcard.price.toFixed(2)}</p>
                                    <div className="flex justify-start mt-2">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} className="text-customText text-[0.7rem]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <div className="flex items-center justify-center mt-10 mb-10 relative">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded disabled:opacity-50 hover:text-customText transition"
                >
                    <FaChevronLeft className="text-customText" />
                </button>

                <div className="flex items-center mx-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`relative px-3 py-1 mx-1 rounded transition ${currentPage === index + 1 ? 'text-customText' : 'text-black hover:text-customText'}`}
                        >
                            {index + 1}
                            {currentPage === index + 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[0.1rem] w-full bg-customText" />
                            )}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded disabled:opacity-50 hover:text-customText transition"
                >
                    <FaChevronRight className="text-customText" />
                </button>
            </div>
        </div>
    );
}
