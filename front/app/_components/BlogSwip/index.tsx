"use client";

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface BlogCard {
    _id: string;
    title: string;
    img: string;
    category: string;
}

export default function BlogSwip() {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [blogCards, setBlogCards] = useState<BlogCard[]>([]);
    const itemsPerPage: number = 9;

    useEffect(() => {
        fetchBlogCards(activeCategory);
    }, [activeCategory]);

    const fetchBlogCards = async (category: string): Promise<void> => {
        try {
            const response = await fetch(
                `http://localhost:3001/api/blogcards?category=${category}`
            );
            const data: BlogCard[] = await response.json();
            setBlogCards(data);
        } catch (error) {
            console.error('Error fetching blog cards:', error);
        }
    };

    const paginatedData = blogCards.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(blogCards.length / itemsPerPage);

    const handleCategoryChange = (category: string): void => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePrevPage = (): void => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = (): void => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mx-auto px-4 sm:px-8 lg:px-24 xl:px-64 py-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl mb-6 font-serif text-customText text-center">
                All blogs lined up
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {['all', 'inspiration', 'tips'].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full border-2 ${activeCategory === category
                            ? 'bg-customText text-white border-customText'
                            : 'bg-transparent text-customText border-customText'
                            } hover:bg-customHover hover:border-customHover hover:text-white transition duration-300`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedData.map((item) => (
                    <div key={item._id} className="relative">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 sm:h-52 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 text-white p-2 sm:p-4 w-full font-bold text-sm sm:text-base">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-2 mt-6">
                <button
                    onClick={handlePrevPage}
                    className={`p-2 rounded-full border ${currentPage === 1
                        ? 'border-gray-300 text-gray-300'
                        : 'border-customText text-customText'
                        } hover:bg-customHover hover:border-customHover hover:text-white`}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-2 py-1 sm:px-3 sm:py-1 rounded ${currentPage === index + 1
                            ? 'text-customText'
                            : 'text-gray-400'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={handleNextPage}
                    className={`p-2 rounded-full border ${currentPage === totalPages
                        ? 'border-gray-300 text-gray-300'
                        : 'border-customText text-customText'
                        } hover:bg-customHover hover:border-customHover hover:text-white`}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
