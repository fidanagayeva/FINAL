"use client";

import { useEffect, useState } from "react";
import Layout from "../../_featured/layout/layout";
import { Info } from "../../_components/Info/index";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import AddCart from "@/app/_featured/sidebar/AddCart";
import DetailCards from "@/app/_components/DetailCards";

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

const HeartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74.84 74.84"
        fill="none"
        stroke="currentColor"
        className="text-customGreen"
        strokeWidth="2.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="32"
        height="32"
    >
        <path d="M41.17,14.08l-7.77,7.17.13-.14c-.99,1.08-1.63,2.44-1.63,3.98,0,3.07,2.44,5.51,5.51,5.51s5.51-2.44,5.51-5.51c0-1.63-.63-2.98-1.63-3.98l.14.14-8.52-7.85,1.7,1.57c-4.7-4.7-9.13-6.06-13.29-6.06-8.95,0-16.09,7.23-16.09,16.09v.09c0,1.45.18,2.89.45,4.25,4.7,19.25,31.72,36.6,31.72,36.6h0s27.02-17.26,31.72-36.6c.36-1.36.45-2.8.45-4.25v-.09c0-8.95-7.23-16.09-16.09-16.09-4.25,0-8.86,1.54-13.83,6.6" />
    </svg>
);

interface SaleCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    price2: number;
    sale: string;
    size?: string;
    text1?: string;
    text2?: string;
}

export default function DetailSale() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const [salecard, setSalecard] = useState<SaleCard | null>(null);
    const [error, setError] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchSalecardDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/salecards/${slug}`);
                setSalecard(response.data);
            } catch (error: any) {
                console.error("Error fetching salecard details:", error.message);
                setError("Error fetching salecard details.");
            }
        };

        fetchSalecardDetails();

        const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(storedCart);
    }, [slug]);

    const handlePlantSaleClick = () => {
        router.push("/sale");
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const addToCart = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to be logged in to add items to your cart.");
            return;
        }

        const newItem = { ...salecard, quantity };
        const updatedCart = [...cartItems, newItem];
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        setIsSidebarOpen(true);
    };

    if (error) return <p>{error}</p>;

    const price = salecard?.price2 || 0;
    const totalPrice = quantity * price;

    return (
        <div className="bg-background">
            <Layout>
                <Info />
                <div className="p-5 sm:p-10 md:p-20 mx-4 md:mx-[3rem]">
                    <h2 onClick={handlePlantSaleClick} className="text-customText cursor-pointer hover:underline">
                        Sales
                    </h2>
                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="relative w-full md:w-1/2 pr-0 md:pr-4 overflow-hidden">
                            <div className="w-full h-[20rem] md:w-[29rem] md:h-[33rem] overflow-hidden">
                                <img
                                    src={salecard?.image || "/placeholder-image.png"}
                                    alt={salecard?.title || "Product Image"}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                            {salecard?.sale && (
                                <div className="absolute bottom-[20rem] bg-customPLNTS text-white text-sm px-2 py-1">
                                    Sale {salecard.sale}
                                </div>
                            )}
                        </div>
                        <div className="w-1/2">
                            <h1 className="flex justify-between items-center text-5xl font-victor-serif text-customText mb-4">
                                <span>{salecard?.title}</span>
                                <div className="flex items-center justify-center w-12 h-12 border-[1px] border-customText rounded-full">
                                    <HeartIcon />
                                </div>
                            </h1>
                            <p className="text-customText">{salecard?.description}</p>
                            <div className="flex items-center gap-2">
                                {salecard?.price ? (
                                    <p className="text-customText line-through">€{salecard.price.toFixed(2)}</p>
                                ) : null}

                                {salecard?.price2 ? (
                                    <p className="text-customPLNTS">€{salecard.price2.toFixed(2)}</p>
                                ) : null}
                            </div>

                            <div className="flex items-center mt-2 gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} />
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-custombgclr">
                                <h2 className="text-lg text-customText font-semibold mb-2">1. Size</h2>
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-customText rounded-full flex items-center justify-center text-white font-semibold">
                                        {salecard?.size}
                                    </div>
                                </div>
                                <hr className="border-customText mb-4" />
                                <p className="text-base text-customText">Salecard ({salecard?.size})</p>
                                <div className="flex flex-col md:flex-row items-center mt-4 w-full">
                                    <div className="flex items-center w-[7rem] bg-white p-2">
                                        <button onClick={decreaseQuantity} className="px-3 py-1">-</button>
                                        <span className="mx-2 text-lg">{quantity}</span>
                                        <button onClick={increaseQuantity} className="px-3 py-1">+</button>
                                    </div>
                                    <div className="ml-auto mb-[-3.5rem] text-customText text-right">
                                        <p className="text-lg">€{totalPrice.toFixed(2)}</p>
                                        <p>Total: €{totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={addToCart}
                                    className="mt-4 px-4 py-2 bg-customText text-white rounded-3xl flex gap-3 items-center"
                                >
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
                            <p className="mt-4 text-customText">{salecard?.text1}</p>
                            <p className="mt-2 text-customText">{salecard?.text2}</p>
                        </div>
                    </div>
                </div>
                {isSidebarOpen && (
                    <AddCart
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        toggleSidebar={() => setIsSidebarOpen(false)}
                    />
                )}
                <DetailCards/>
            </Layout>
        </div>
    );
}