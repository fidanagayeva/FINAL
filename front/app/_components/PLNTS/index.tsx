'use client';

import React from 'react';

const PLNTS = () => {
    return (
        <div className="mt-[7.5rem]">
            <div className="w-full bg-custombgclr text-customText py-3 px-14 text-left">
                <p className="text-sm md:text-base font-medium space-x-4">
                    <span className="font-serif italic hover:text-customHover transition duration-300 cursor-pointer">Free shipping for orders over €75,-</span>
                    <span className="font-serif italic hover:text-customHover transition duration-300 cursor-pointer">30 days PLNTs health guarantee</span>
                    <span className="font-serif italic hover:text-customHover transition duration-300 cursor-pointer">4.5/5 out of 20,800+ reviews</span>
                </p>
            </div>

            <div className="relative w-full h-[100vh]">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FAlgemene_banner_020a93a8ed.jpg&w=1920&q=80')",
                    }}
                >

                    <div className="relative z-10 flex flex-col items-start justify-end h-full ml-4 text-white p-4 md:p-10">
                        <h1 className="text-4xl md:text-6xl font-serif mb-14">
                            <span className="font-normal">PLNTS</span> <span className="italic">Week</span>
                        </h1>
                        <button
                            className="px-6 py-2 bg-white/30 mb-6 text-white border border-white rounded-3xl 
                              hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md"
                        >
                            Check deal
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PLNTS;
