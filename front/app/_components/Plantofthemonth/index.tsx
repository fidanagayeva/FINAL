'use client';

import { useState } from 'react';
import { LiaChevronRightSolid, LiaChevronLeftSolid } from "react-icons/lia";
import Link from 'next/link';

export default function Plantofthemonth() {
    const images = [
        "https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHomepage_test_cfec07502b.jpg&w=750&q=75",
        "https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPOTM_Okt_13_8f3dfb66c1.jpg&w=750&q=75",
        "https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPOTM_Okt_27_68dfbf4e1e.jpg&w=750&q=75"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);

    const nextImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
        }, 300);
    };

    const prevImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(true);
        }, 300);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const diff = currentX - startX;
        if (diff > 50) {
            prevImage();
        } else if (diff < -50) {
            nextImage();
        }
        setCurrentX(0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setCurrentX(0);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setCurrentX(e.clientX);
        }
    };

    return (
        <div className="bg-customNewBg flex flex-col min-h-screen">
            <h1 className="text-[9rem] font-chicle text-center text-customHover mb-8 z-10 relative">
                Plant of the Month
            </h1>

            <div className="flex w-full relative flex-col md:flex-row">
                <div
                    className="flex items-center justify-center w-full md:w-1/2 p-8 md:p-16 mt-[-28rem] relative"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <img
                        src={images[currentIndex]}
                        className={`w-[50rem] max-h-[70rem] object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <button onClick={prevImage} className="absolute w-10 h-10 left-1/2 bottom-[22rem] transform -translate-x-1/2 bg-white/30 hover:bg-customHover hover:border-customHover border border-white shadow-md rounded-full mr-16 flex items-center justify-center">
                        <LiaChevronLeftSolid className="text-white" />
                    </button>
                    <button onClick={nextImage} className="absolute w-10 h-10 left-1/2 bottom-[22rem] transform -translate-x-1/2 bg-white/30 border border-white hover:bg-customHover hover:border-customHover shadow-md rounded-full ml-16 flex items-center justify-center">
                        <LiaChevronRightSolid className="text-white" />
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-start justify-end mt-[-9rem]">
                        <img
                            src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPOTM_Okt_30_2e2777f7e5.jpg&w=256&q=75"
                            className="w-[25rem] max-h-[15rem] object-cover"
                        />
                    </div>
                    <div className="text-customPLNTS pr-5 md:pr-20 py-4 md:py-16">
                        <h1 className="text-7xl font-victor-serif mb-4">Anthurium Clarinervium</h1>
                        <p className="mb-6 pr-5 md:pr-40">
                            This month, we're shining the spotlight on a special green companion that might just be the plant that made you fall in love with a whole family of greenery. Meet the Anthurium Clarinervium, a stunning variety known for its large, heart-shaped leaves, deep green foliage, and luxurious, eye-catching veins. This beauty truly wears its striking features like an accessory, captivating anyone who encounters it. The veins on its leaves stand out brilliantly against the rich, dark green background, creating a dramatic and elegant contrast. New leaves emerge in a mesmerizing bronze hue, slowly transitioning to green, a process that is as enchanting to witness as it sounds. The leathery texture of the leaves adds the perfect finishing touch, making the Anthurium Clarinervium a true botanical treasure. And this month, you can bring this treasure home with a fantastic discount!
                        </p>
                        <div className="flex space-x-4">
                            <button className="flex items-center text-customPLNTS">
                                <LiaChevronRightSolid className="text-customPLNTS mr-2" />
                                Discover more
                            </button>
                            <Link href="/pots"> 
                            <button className="bg-customNewBg border border-customPLNTS text-customPLNTS py-2 px-4 rounded-3xl hover:bg-customPLNTS hover:text-customNewBg transition duration-300">
                                Shop with discount
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-end space-y-4 md:space-x-4 p-4 md:pr-20 mb-20 w-full'>
                <div className='w-full mt-4 md:w-[15rem] h-[19rem]'>
                    <img src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHomepage_test_cfec07502b.jpg&w=750&q=75" alt="" className="w-full h-full object-cover" />
                </div>
                <div className='w-full md:w-[15rem] h-[19rem]'>
                    <img src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPOTM_Okt_13_8f3dfb66c1.jpg&w=750&q=75" alt="" className="w-full h-full object-cover" />
                </div>
                <div className='w-full md:w-[15rem] h-[19rem]'>
                    <img src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPOTM_Okt_27_68dfbf4e1e.jpg&w=750&q=75" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
