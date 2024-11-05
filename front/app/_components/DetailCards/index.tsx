"use client";

import { useEffect, useState, useRef } from "react";
import { FaStar } from 'react-icons/fa';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

interface DetailCard {
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

SwiperCore.use([Navigation]);

const HeartIcon = ({ onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74.84 74.84"
      fill="none"
      stroke="currentColor"
      className="text-customText hover:text-customHover cursor-pointer"
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

export default function DetailCards() {
    const [detailCards, setDetailCards] = useState<DetailCard[]>([]);
    const [wishlist, setWishlist] = useState<CareCard[]>([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchDetailCards = async () => {
            try {
                const response = await fetch("http://localhost:3001/detailcards");
                const data: DetailCard[] = await response.json();
                setDetailCards(data);
            } catch (error) {
                console.error("Error fetching detail cards:", error);
            }
        };

        fetchDetailCards();
    }, []);

    const handleAddToWishlist = (card: CareCard) => {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You are not logged in. Please log in to add items to your wishlist.');
          return;
        }
        setWishlist((prev) => {
          const updatedWishlist = [...prev, card];
          localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
          return updatedWishlist;
        });
      };

    return (
        <div className="py-8 px-4 md:px-16">
            <div className="relative mb-4">
                <div className="p-0">
                    <h2 className="text-5xl font-victor-serif font-semibold text-start text-customText mb-4">Recommended for you</h2>
                    <div className="relative group w-[13rem]">
                        <div className="overflow-hidden">
                            <img
                                src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fa%2Fs%2Fas.145-1-1006.jpg&w=192&q=80"
                                className="w-full h-[17rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                        </div>
                        <div
                            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full shadow-md z-20"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            <HeartIcon onClick={() => console.log("Heart clicked!")} />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                    </div>
                    <div className="text-start relative z-10 mt-2">
                        <h2 className="text-[0.97rem] text-customText font-semibold">
                            Potting Soil
                        </h2>
                        <p className="text-customText text-[0.95rem] italic">
                            5 liter
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-customText">€6.45</p>
                        </div>
                        <div className="flex justify-start mt-2">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-customText text-[0.7rem]" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-5xl font-victor-serif font-semibold text-start text-customText mb-4">Recently Viewed</h2>
            <div className="relative">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={false}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 6,
                        },
                    }}
                    className="mySwiper"
                >
                    {detailCards.map((card) => (
                        <SwiperSlide key={card._id}>
                            <div className="p-0">
                                <div className="relative group">
                                    <div className="overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-[15rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute bottom-3 bg-customPLNTS text-white text-sm px-2 py-1">
                                        Sale {card.sale}
                                    </div>

                                    <div
                                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full shadow-md z-20"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToWishlist(card);
                                        }}
                                    >
                                        <HeartIcon onClick={() => console.log("Heart clicked!")} />
                                    </div>

                                    <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                                </div>
                                <div className="text-start relative z-10 mt-2">
                                    <h2 className="text-[0.97rem] text-customText font-semibold">
                                        {card.title}
                                    </h2>
                                    {card.description && (
                                        <p className="text-customText text-[0.95rem] italic">
                                            {card.description}
                                        </p>
                                    )}

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
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                    <button
                        className="swiper-button-prev bg-white/30 shadow-md p-2 mb-24 hover:bg-customHover/70"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <span className="text-2xl">&lt;</span>
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                    <button
                        className="swiper-button-next bg-white/30 shadow-md p-2 mb-24 hover:bg-customHover/70"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <span className="text-2xl">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
