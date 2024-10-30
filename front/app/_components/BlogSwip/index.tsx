"use client";

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const data = {
    all: [
        { id: 1, title: 'How to keep your houseplant small?How to keep your houseplant small?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fshutterstock_2061262208_1_94a25b4240.jpg&w=640&q=75' },
        { id: 2, title: 'Most Wanted Ficus Varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Ficus_varieties_2ab42a1a38.png&w=640&q=75' },
        { id: 3, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBanners_Carlijn_dde0a7e9b7.png&w=640&q=75' },
        { id: 4, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBeautiful_houseplants_28d03a52cc.jpg&w=640&q=75' },
        { id: 5, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBanner_green_houseplants_3d6f8c5c2f.png&w=640&q=75' },
        { id: 6, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Aglaonema_varieties_banner_6d2492e063.jpg&w=640&q=75' },
        { id: 7, title: 'Most wanted Anthurium varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Anthurium_varieties_banner_afbcf99faf.jpg&w=640&q=75' },
        { id: 8, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Ffertilizers_banner_20aa02a5cd.jpg&w=640&q=75' },
        { id: 9, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Calathea_varieties_2024_banner_14bc0583a9.png&w=640&q=75' },
        { id: 10, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMom_and_daughter_plants_d583817b65.png&w=640&q=75' },
        { id: 11, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FCat_with_plant_cabd83f2f4.png&w=640&q=75' },
        { id: 12, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHanging_plant_propagation_banner_599aa33582.png&w=640&q=75' },
        { id: 13, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBanner_Top_8_houseplants_full_sun_8323edb857.jpg&w=640&q=75' },
        { id: 14, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fhow_to_get_rid_of_aphids_banner_4f7f3de4bd.png&w=640&q=75' },
        { id: 15, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_spider_mite_banner_4707a8d7ec.png&w=640&q=75' },
        { id: 16, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_whitefly_banner_77696b6376.png&w=640&q=75' },
        { id: 17, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_thrips_banner_909bcbc57d.png&w=640&q=75' },
        { id: 18, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_mealybugs_banner_7ae2cf0b2d.png&w=640&q=75' },
    ],
    inspiration: [
        { id: 1, title: 'Epiphyte growing in tree12 pretty plants that grow as an epiphyte', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Calathea_varieties_2024_banner_14bc0583a9.png&w=640&q=75' },
        { id: 2, title: 'What is an epiphyte and which epiphyte plants are the prettiest?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBanner_Top_8_houseplants_full_sun_8323edb857.jpg&w=640&q=75' },
        { id: 3, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHouseplant_that_grow_on_stems_banner_1a94f0544a.jpg&w=640&q=75' },
        { id: 4, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fcceaec5424a22da63c942519fc91e1f0.webp&w=640&q=75' },
        { id: 5, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F826cb4ec4c064009476b0ec4e63e2689.png&w=640&q=75' },
        { id: 6, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FTop_3_plant_books_banner_5f41885602.png&w=640&q=75' },
        { id: 7, title: 'Most wanted Anthurium varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F0706536c26de4706a09380ddf7cce6dc.jpg&w=640&q=75' },
        { id: 8, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F1677733397544eacf7e08eac0eb873d8.jpg&w=640&q=75' },
        { id: 9, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F68c114d1384ea8678c1e5bf2b8c3a158.jpg&w=640&q=75' },
        { id: 10, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F9394575464e832ba3b247c11294df54f.jpg&w=640&q=75' },
        { id: 11, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fda084cccb7fbc0b32dd60aa182a0ec21.jpg&w=640&q=75' },
        { id: 12, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fd1f43e487731cf6d55906ef2a14c0c49.jpg&w=640&q=75' },
        { id: 13, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fccadedc723205c6b0c849fd73e6087c9.jpg&w=640&q=75' },
        { id: 14, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fc6e965967f24942ee9fe4d5c2ad3d34e.png&w=640&q=75' },
        { id: 15, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F83b2ac062f1d96e86a8fdaa72283877b.jpg&w=640&q=75' },
        { id: 16, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fdf09178674fbaf4735b478689719af56.jpg&w=640&q=75' },
        { id: 17, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_thrips_banner_909bcbc57d.png&w=640&q=75' },
        { id: 18, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F787e1feadfe1fa91393dfcbc1a857770.jpg&w=640&q=75' },
    ],
    tips: [
        { id: 1, title: 'How to keep your houseplant small?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fshutterstock_2061262208_1_94a25b4240.jpg&w=640&q=75' },
        { id: 2, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Ffertilizers_banner_20aa02a5cd.jpg&w=640&q=75' },
        { id: 3, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHanging_plant_propagation_banner_599aa33582.png&w=640&q=75' },
        { id: 4, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fhow_to_get_rid_of_aphids_banner_4f7f3de4bd.png&w=640&q=75' },
        { id: 5, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_spider_mite_banner_4707a8d7ec.png&w=640&q=75' },
        { id: 6, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_whitefly_banner_77696b6376.png&w=640&q=75' },
        { id: 7, title: 'Most wanted Anthurium varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_thrips_banner_909bcbc57d.png&w=640&q=75' },
        { id: 8, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHow_to_get_rid_of_mealybugs_banner_7ae2cf0b2d.png&w=640&q=75' },
        { id: 9, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FFungas_gnats_biologicoal_pest_control_banner_a99dab5e9d.png&w=640&q=75' },
        { id: 10, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fpexels_vlada_karpovich_4451739_4878f69b32.jpg&w=640&q=75' },
        { id: 11, title: 'Most wanted Begonia varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F18604975681ea6775c6a0c7572012b03.jpg&w=640&q=75' },
        { id: 12, title: 'Top 10 beautiful houseplants', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F1677733397544eacf7e08eac0eb873d8.jpg&w=640&q=75' },
        { id: 13, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fda084cccb7fbc0b32dd60aa182a0ec21.jpg&w=640&q=75' },
        { id: 14, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F106aa8bb0b8343ab1883513224c103bc.jpg&w=640&q=75' },
        { id: 15, title: 'Most wanted Aglaonema varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fdcf78e9b4e5b606a4ba7a684b4a65a34.jpg&w=640&q=75' },
        { id: 16, title: 'Fertilizers, what do I need to know?', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F1e9c5101a97e8b2f933a50c2036e0555.jpg&w=640&q=75' },
        { id: 17, title: 'Top 10 green houseplants in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F5d57ad1fb1f083e3c5e66e4f59bc7d4e.jpg&w=640&q=75' },
        { id: 18, title: 'Most wanted Calathea varieties in 2024', img: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F007d14294a473f15fef1bb2d544c7d99.png&w=640&q=75' },
    ],
};

export default function BlogSwip() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const filteredData = data[activeCategory];

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="px-[18rem] py-[3rem]">
            <h1 className="text-4xl md:text-7xl mb-6 font-serif text-customText text-center">
                All blogs lined up
            </h1>
            <div className="flex space-x-4 mb-6 justify-center">
                {['all', 'inspiration', 'tips'].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full border-2 ${activeCategory === category
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
                    <div key={item.id} className="relative">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 text-white p-4 w-full font-bold text-base">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-2 mt-6">
                <button
                    onClick={handlePrevPage}
                    className={`p-2 rounded-full border transition duration-300 ${currentPage === 1
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
                        className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'text-customText' : 'text-gray-400'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={handleNextPage}
                    className={`p-2 rounded-full border transition duration-300 ${currentPage === totalPages
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
};

