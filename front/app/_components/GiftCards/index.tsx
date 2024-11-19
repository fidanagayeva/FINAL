"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { VscListFilter } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import {
    FaChevronDown,
    FaChevronUp,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

interface GiftCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
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

export default function GiftCards() {
    const [giftcards, setGiftcards] = useState<GiftCard[]>([]);
    const [wishlist, setWishlist] = useState<GiftCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sortedData, setSortedData] = useState<GiftCard[]>([]);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [filters, setFilters] = useState({
        size: [],
        characteristics: [],
        color: [],
        location: [],
        material: [],
        plantFamily: [],
        room: [],
        shape: [],
        standing: [],
        style: [],
        waterCare: [],
    });

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (e) => {
        const selectedOption = e.target.value;

        if (selectedOption === "default") {
            fetchGiftcards(currentPage);
            return;
        }

        let sortedArray = [...giftcards];
        if (selectedOption === "a-z") {
            sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedOption === "z-a") {
            sortedArray.sort((a, b) => b.title.localeCompare(a.title));
        }
        setGiftcards(sortedArray);
    };

    useEffect(() => {
        const initialFilters = { ...filters };
        searchParams.forEach((value, key) => {
            if (key === "page") {
                setCurrentPage(Number(value));
            } else if (filters.hasOwnProperty(key)) {
                initialFilters[key] = value.split(",");
            }
        });
        setFilters(initialFilters);
    }, []);

    const fetchGiftcards = async (page: number) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page) });
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    params.append(key, filters[key].join(","));
                }
            });
            const response = await axios.get(
                `http://localhost:3001/api/giftcards?${params}`
            );
            setGiftcards(response.data.giftcards);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching giftcards:", error);
            setError("Error fetching giftcards.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGiftcards(currentPage);
    }, [currentPage, filters]);

    useEffect(() => {
        const params = new URLSearchParams();
        params.set("page", String(currentPage));
        Object.keys(filters).forEach((key) => {
            if (filters[key].length > 0) {
                params.set(key, filters[key].join(","));
            }
        });
        router.push(`/gifts?${params.toString()}`, { shallow: true });
    }, [filters, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleCardClick = (id: string) => {
        router.push(`/gifts/${id}`);
    };

    const handleAddToWishlist = (giftcard: GiftCard) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You are not logged in. Please log in to add items to your wishlist.");
            return;
        }
        setWishlist((prev) => {
            const updatedWishlist = [...prev, giftcard];
            localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    const handleFilterChange = (event, filterType) => {
        const { value, checked } = event.target;
        setFilters((prevFilters) => {
            const newValues = checked
                ? [...prevFilters[filterType], value]
                : prevFilters[filterType].filter((item) => item !== value);
            return { ...prevFilters, [filterType]: newValues };
        });
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="container mx-auto p-7">
            <div className="flex flex-col items-end p-2">
                <div className="flex flex-col md:flex-row items-end gap-2 mb-2 w-full justify-end mt-14 md:mt-0">
                    <div className="flex flex-col md:flex-row w-full md:w-auto justify-end items-center">
                        <button
                            className="border border-customText font-bold text-customText  mr-4 px-4 py-2 flex items-center"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            Filter
                            <VscListFilter className="ml-2" />
                        </button>
                        <div className="relative w-full md:w-auto mt-2 md:mt-0 flex md:justify-end justify-center">
                            <select
                                className="border font-bold border-customText bg-background text-customText px-4 py-2"
                                onChange={handleSortChange}
                            >
                                <option value="default">Sorting</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                    <p className="text-customText text-sm">
                        Showing 1-20 of 54 results
                    </p>
                </div>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50"
                        onClick={closeSidebar}
                        style={{ pointerEvents: "auto" }}
                    ></div>
                )}

                <div
                    className={`fixed top-0 right-0 w-[27rem] h-full bg-white shadow-lg z-50 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300`}
                >
                    <button className="absolute top-7 right-4" onClick={closeSidebar}>
                        <AiOutlineClose className="text-customText w-4 h-4" />
                    </button>
                    <h2 className="p-4 text-4xl text-customText font-victor-serif">
                        Filter Plant Gifts
                    </h2>
                    <hr className="bg-customText w-[full] mb-3 ml-4 mr-4 h-[0.15rem]" />
                    <div className="overflow-y-auto h-[calc(100%-60px)]">
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(0)}
                            >
                                Size
                                {activeAccordion === 0 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 0 && (
                                <div className="flex space-x-2 mt-2">
                                    {["S", "M", "L"].map((size) => (
                                        <label key={size} className="block cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value={size}
                                                checked={filters.size.includes(size)}
                                                onChange={(e) => handleFilterChange(e, "size")}
                                                className="hidden"
                                            />
                                            <span
                                                className={`w-9 h-9 rounded-full border border-gray-400 hover:border-customText hover:bg-customText text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 ${filters.size.includes(size)
                                                    ? "bg-customText text-white"
                                                    : "bg-white"
                                                    }`}
                                            >
                                                {size}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <hr className="bg-customText w-[full] my-4 mx-4 h-[0.11rem]" />
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(1)}
                            >
                                Characteristics
                                {activeAccordion === 1 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 1 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {[
                                        "Easy",
                                        "Air purifying",
                                        "Pet friendly",
                                        "Hanging plant",
                                    ].map((char) => (
                                        <label
                                            key={char}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{char}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={char}
                                                    checked={filters.characteristics.includes(char)}
                                                    onChange={(e) =>
                                                        handleFilterChange(e, "characteristics")
                                                    }
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.characteristics.includes(char)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <hr className="bg-customText w-[full] my-4 mx-4 h-[0.11rem]" />
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(2)}
                            >
                                Color
                                {activeAccordion === 2 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 2 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Orange", "Black", "Green", "Brown"].map((color) => (
                                        <label
                                            key={color}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{color}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={color}
                                                    checked={filters.color.includes(color)}
                                                    onChange={(e) => handleFilterChange(e, "color")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.color.includes(color)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <hr className="bg-customText w-[full] my-4 mx-4 h-[0.11rem]" />
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(3)}
                            >
                                Location
                                {activeAccordion === 3 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 3 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Sun", "Partial sun", "(Half) shade"].map((loc) => (
                                        <label
                                            key={loc}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{loc}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={loc}
                                                    checked={filters.location.includes(loc)}
                                                    onChange={(e) => handleFilterChange(e, "location")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.location.includes(loc)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <hr className="bg-customText w-[full] my-4 mx-4 h-[0.15rem]" />
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(4)}
                            >
                                Plant Family
                                {activeAccordion === 4 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 4 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {[
                                        "Caladium",
                                        "Calathea",
                                        "Ctenanthe",
                                        "Ficus",
                                        "Monstera",
                                        "Nephrolepis",
                                        "Pilea",
                                        "Peperomia",
                                        "Platycerium",
                                        "Rhaphidophora",
                                        "Sansevieria",
                                        "Strelitzia",
                                        "Stromanthe",
                                    ].map((plantFamily) => (
                                        <label
                                            key={plantFamily}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{plantFamily}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={plantFamily}
                                                    checked={filters.plantFamily.includes(plantFamily)}
                                                    onChange={(e) => handleFilterChange(e, "plantFamily")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.plantFamily.includes(plantFamily)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <hr className="bg-customText w-[full] my-4 mx-4 h-[0.11rem]" />
                        <div className="px-4 py-2">
                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(5)}
                            >
                                Material
                                {activeAccordion === 5 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 5 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Terracotta", "Eco"].map((material) => (
                                        <label
                                            key={material}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{material}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={material}
                                                    checked={filters.material.includes(material)}
                                                    onChange={(e) => handleFilterChange(e, "material")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.material.includes(material)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <hr className="bg-customText w-[full] my-4 h-[0.11rem]" />

                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(6)}
                            >
                                Shape
                                {activeAccordion === 6 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 6 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Round"].map((shape) => (
                                        <label
                                            key={shape}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{shape}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={shape}
                                                    checked={filters.shape.includes(shape)}
                                                    onChange={(e) => handleFilterChange(e, "shape")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.shape.includes(shape)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <hr className="bg-customText w-[full] my-4 h-[0.15rem]" />

                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(7)}
                            >
                                Standing or Hanging
                                {activeAccordion === 7 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 7 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Standing"].map((standing) => (
                                        <label
                                            key={standing}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{standing}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={standing}
                                                    checked={filters.standing.includes(standing)}
                                                    onChange={(e) => handleFilterChange(e, "standing")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.standing.includes(standing)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <hr className="bg-customText w-[full] my-4 h-[0.11rem]" />

                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(8)}
                            >
                                Style
                                {activeAccordion === 8 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 8 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Nature", "Basic", "Fun"].map((style) => (
                                        <label
                                            key={style}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{style}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={style}
                                                    checked={filters.style.includes(style)}
                                                    onChange={(e) => handleFilterChange(e, "style")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.style.includes(style)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <hr className="bg-customText w-[full] my-4 h-[0.15rem]" />

                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(9)}
                            >
                                Water Care
                                {activeAccordion === 9 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 9 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Weekly", "Be-weekly"].map((waterCare) => (
                                        <label
                                            key={waterCare}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span className="text-customText">{waterCare}</span>
                                            <span className="relative">
                                                <input
                                                    type="checkbox"
                                                    value={waterCare}
                                                    checked={filters.waterCare.includes(waterCare)}
                                                    onChange={(e) => handleFilterChange(e, "waterCare")}
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.waterCare.includes(waterCare)
                                                                ? "translate-x-5"
                                                                : "translate-x-0"
                                                            }
                                ml-1 // Add left margin for spacing
                            `}
                                                    />
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                            <hr className="bg-customText w-[full] my-4 h-[0.11rem]" />

                            <h3
                                className="font-semibold text-customText flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(10)}
                            >
                                Room
                                {activeAccordion === 10 ? (
                                    <FaChevronUp className="transition-transform duration-300 text-customText" />
                                ) : (
                                    <FaChevronDown className="transition-transform duration-300 text-customText" />
                                )}
                            </h3>
                            {activeAccordion === 10 && (
                                <div className="flex flex-col mt-2 space-y-2">
                                    {["Bathroom", "Bedroom", "Livingroom", "Office"].map(
                                        (room) => (
                                            <label
                                                key={room}
                                                className="flex items-center justify-between cursor-pointer"
                                            >
                                                <span className="text-customText">{room}</span>
                                                <span className="relative">
                                                    <input
                                                        type="checkbox"
                                                        value={room}
                                                        checked={filters.room.includes(room)}
                                                        onChange={(e) => handleFilterChange(e, "room")}
                                                        className="sr-only"
                                                    />
                                                    <span
                                                        className={`flex items-center justify-start w-[2.81rem] h-[1.38rem] bg-background rounded-full border border-customftrgrn transition-transform duration-300`}
                                                    >
                                                        <span
                                                            className={`w-4 h-4 rounded-full bg-customftrgrn transition-all duration-300 
                                ${filters.room.includes(room)
                                                                    ? "translate-x-5"
                                                                    : "translate-x-0"
                                                                }
                                ml-1 // Add left margin for spacing
                            `}
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        <hr className="bg-customText w-[full] mt-4 mb-10 mx-4 h-[0.11rem]" />
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden transition-transform"
                        >
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
                            <div
                                key={giftcard._id}
                                className="relative overflow-hidden transition-transform cursor-pointer"
                                onClick={() => handleCardClick(giftcard._id)}
                            >
                                <div className="relative group">
                                    <div className="overflow-hidden">
                                        <img
                                            src={giftcard.image}
                                            alt={giftcard.title}
                                            className="w-full h-[22.28rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        />
                                    </div>

                                    <div
                                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToWishlist(giftcard);
                                        }}
                                    >
                                        <HeartIcon />
                                    </div>

                                    <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"></div>
                                </div>

                                <div className="text-start relative z-10">
                                    <h2 className="text-[0.97rem] text-customText font-semibold">
                                        {giftcard.title}
                                    </h2>
                                    <p className="text-customText text-[0.95rem] italic">
                                        {giftcard.description}
                                    </p>
                                    <p className="text-[0.9rem] text-customText">
                                        €{giftcard.price.toFixed(2)}
                                    </p>
                                    <div className="flex justify-start mt-2">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className="text-customText text-[0.7rem]"
                                            />
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
                            className={`relative px-3 py-1 mx-1 rounded transition ${currentPage === index + 1
                                ? "text-customText"
                                : "text-black hover:text-customText"
                                }`}
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
