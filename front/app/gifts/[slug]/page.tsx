"use client";

import { useEffect, useState } from "react";
import Layout from "../../_featured/layout/layout";
import { Info } from "../../_components/Info/index";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 filled" fill="#134A21" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const CartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74.84 74.84"
        fill="none"
        stroke="currentColor"
        className="text-white"
        strokeWidth="2.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="28"
        height="28"
    >
        <path d="M14.31,21.63c-.63-3.37-.02-5.89.15-7.26.24-1.95-.46-3.96-2.04-5.14-.01,0-.03-.02-.04-.03-2.24-1.65-5.23-1.43-7.2.38h-.02s0,.02,0,.02v.02c-1.96,1.83-2.39,4.79-.91,7.15.84,1.34,2.14,2.18,3.6,2.58,0,0,1.98.51,9.02.45h-1.16,54.28c.81,0,1.48.67,1.48,1.48l-5.98,31.46H20.22l-5.98-31.46.07.36Z" />
        <circle cx="28.35" cy="61.99" r="4.77" />
        <circle cx="57.49" cy="61.99" r="4.77" />
    </svg>
);

interface GiftCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    size?: string;
    text1?: string;
    text2?: string;
}

const GiftCardComponent = ({ giftcard }) => {
    const [quantity, setQuantity] = useState(1);
    const price = giftcard?.price || 0;
    const totalPrice = quantity * price;

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="w-1/2">
            <h1 className="text-5xl font-victor-serif text-customText mb-4">{giftcard?.title}</h1>
            <p className="text-lg text-customText">€{price.toFixed(2)}</p>
            <p className="text-customText">{giftcard?.description}</p>

            <div className="flex items-center mt-2 gap-1">
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                ))}
            </div>

            <div className="mt-6 p-4 bg-custombgclr max-w-full sm:max-w-md md:max-w-lg">
                <h2 className="text-lg text-customText font-semibold mb-2">1. Size</h2>

                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-customText rounded-full flex items-center justify-center text-white font-semibold">
                        {giftcard?.size}
                    </div>
                </div>

                <hr className="border-customText mb-4" />

                <p className="text-base text-customText">Giftcard ({giftcard?.size})</p>
                <div className="flex flex-col md:flex-row items-center mt-4 w-full">
                    <div className="flex items-center w-[7rem] bg-white p-2">
                        <button onClick={decreaseQuantity} className="px-3 py-1">-</button>
                        <span className="mx-2 text-lg">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-3 py-1">+</button>
                    </div>

                    <div className="ml-auto mb-[-3.5rem] text-customText text-right">
                        <p className="text-lg">€{totalPrice.toFixed(2)}</p>
                        <p className="mt-10">Total: €{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-customText text-white rounded-3xl flex gap-3 items-center">
                    <CartIcon />
                    Add to cart
                </button>
            </div>


            <div className="flex flex-col mt-7">
                <div className="flex items-center mb-2">
                    <span className="text-customText text-xl font-bold mr-3">✓</span>
                    <p>Straight from the nursery</p>
                </div>

                <div className="flex items-center mb-2">
                    <span className="text-customText text-xl font-bold mr-3">✓</span>
                    <p>The largest range of baby plants</p>
                </div>

                <div className="flex items-center">
                    <span className="text-customText text-xl font-bold mr-3">✓</span>
                    <p>250,000+ PLNTS Community followers</p>
                </div>
            </div>

            <p className="mt-4 text-customText">{giftcard?.text1}</p>
            <p className="mt-2 text-customText">{giftcard?.text2}</p>
        </div>
    );
};

export default function DetailGifts() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const [giftcard, setGiftcard] = useState<GiftCard | null>(null);
    const [error, setError] = useState<string>("");

    const fetchGiftcardDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/giftcards/${slug}`);
            setGiftcard(response.data);
        } catch (error) {
            console.error("Error fetching giftcard details:", error.response ? error.response.data : error.message);
            setError("Error fetching giftcard details.");
        }
    };

    useEffect(() => {
        fetchGiftcardDetails();
    }, [slug]);

    if (error) return <p>{error}</p>;

    const handlePlantGiftsClick = () => {
        router.push('/gifts');
    };

    return (
        <div className="bg-background">
            <Layout>
                <Info />
                <div className="p-5 sm:p-10 md:p-20 mx-4 md:mx-[3rem]">
                    <h2
                        onClick={handlePlantGiftsClick}
                        className="text-customText cursor-pointer hover:underline"
                    >
                        Plant Gifts
                    </h2>
                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="relative w-full md:w-1/2 pr-0 md:pr-4 overflow-hidden">
                            <div className="w-full h-[20rem] md:w-[29rem] md:h-[33rem] overflow-hidden">
                                <img
                                    src={giftcard?.image}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                        </div>
                        <GiftCardComponent giftcard={giftcard} />
                    </div>
                </div>
            </Layout>
        </div>
    );
}
