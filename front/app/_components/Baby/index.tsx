"use client";

import { PiArrowBendDoubleUpRightThin } from "react-icons/pi";
import Link from 'next/link';

export default function Baby() {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[60rem]">
            <div className="w-full md:w-[40%] h-[20rem] md:h-full">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fplnts-api%2Fmain%2FBabyplnts_banner_photo_a02f0cf3ea.jpg&w=750&q=75"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full md:w-[60%] bg-customBaby text-customBabyText flex flex-col items-center p-6 md:px-12 md:py-14 space-y-8">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FBaby_PLNTS_rose_a1b8ae50a5.png&w=1920&q=75"
                    alt=""
                    className="w-full md:w-[36rem] lg:w-[40rem] h-[4rem] md:h-[6rem] lg:h-[7rem] mt-6 md:mt-[4rem] lg:mt-[5rem] object-contain"
                    style={{ zIndex: 1 }}
                />

                <div className="flex flex-col md:flex-row w-full gap-8">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-sm md:text-base max-w-md mx-auto md:ml-6 lg:ml-12 leading-relaxed">
                            Is your room already full of plants, but would you like even more green in your home? Then baby plants are ideal.
                            Buy a small baby houseplant and let it grow into a big, strong houseplant! With the right care and a lot of love,
                            you can enjoy your plant for a very long time.
                        </p>
                        <Link href="/care">
                            <button className="mt-4 md:mt-6 px-6 ml-10 mb-20 py-2 border border-customBabyText text-customBabyText rounded-full hover:bg-customBabyText hover:text-customBaby transition duration-300">
                                Shop all BabyPLNTS
                            </button>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center mb-20 md:mb-0">
                        <div className="relative">
                            <img
                                src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F2_d8cada1bef.png&w=320&q=75"
                                alt=""
                                className="object-cover w-[14rem] md:w-[18rem] lg:w-[20rem] h-[17rem] md:h-[22rem] lg:h-[24rem] mt-[-4rem] md:mt-[-4rem] lg:mt-[-7rem]"
                            />
                            <div className="absolute bottom-4 left-4 text-left text-customBabyText">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Baby Pilea</h2>
                                <p className="text-xs md:text-sm">Moon Valley</p>
                                <p className="text-xs md:text-sm">€5.25</p>
                                <Link href="/care">
                                    <button className="mt-2 px-4 py-1 border border-customBabyText text-customBabyText rounded-full text-xs md:text-sm hover:bg-customBabyText hover:text-customBaby transition duration-300">
                                        Shop now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-8">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="relative flex justify-center items-center">
                            <img
                                src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F1_40ecfe8f63.png&w=320&q=75"
                                alt=""
                                className="object-cover w-[12rem] md:w-[13rem] lg:w-[14.5rem] h-[12rem] md:h-[13rem] lg:h-[14.5rem] mt-[-3rem] md:mt-[-4rem] lg:mt-[-7rem]"
                            />
                            <PiArrowBendDoubleUpRightThin
                                className="absolute bottom-[-2rem] md:bottom-auto md:left-auto ml-[17rem] md:ml-[20rem] text-4xl md:text-5xl lg:text-6xl text-customBabyText hidden md:block"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-xs md:text-sm lg:text-base mx-4 md:mx-0 lg:mr-[8rem] text-center md:text-left leading-relaxed">
                            The plant is known for its deeply textured and veined leaves, which resemble the surface of the moon.
                            This unique structure gives it a captivating appearance, making it a favorite among indoor plant enthusiasts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
