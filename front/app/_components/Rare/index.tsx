"use client";


import { PiArrowBendDoubleUpRightThin } from "react-icons/pi";
import Link from 'next/link';

export default function Rare() {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[60rem]">
            <div className="w-full md:w-[60%] bg-customRare text-customRareText flex flex-col items-center p-6 md:px-12 md:py-14 space-y-8">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FTEST_Rare_PLNTS_baby_formaat_39ad9ed5f2.png&w=1920&q=75"
                    alt=""
                    className="w-full md:w-[36rem] lg:w-[40rem] h-[4rem] md:h-[6rem] lg:h-[7rem] mt-6 md:mt-[4rem] lg:mt-[5rem] object-contain"
                    style={{ zIndex: 1 }}
                />

                <div className="flex flex-col md:flex-row w-full gap-8">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-sm md:text-base max-w-md mx-auto md:ml-6 lg:ml-12 leading-relaxed">
                            Rare plants are the real gems from our online shop. This is the place where you can find the most special plant species and special varieties from all over the world. These plants are so special that there are often very few in stock. So be quick… Are you a true plant geek and do you want to turn your house into a real green jungle? Then choose our rare plants!
                        </p>
                        <Link href="/care">
                        <button className="mt-4 md:mt-6 px-6 ml-10 mb-32 py-2 border border-customRareText text-customRareText rounded-full hover:bg-customRareText hover:text-customRare transition duration-300">
                            Shop all RarePLNTS
                        </button>
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="relative">
                            <img
                                src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F4_7c643d03d7.png&w=320&q=75"
                                alt=""
                                className="object-cover w-[14rem] md:w-[18rem] lg:w-[20rem] h-[17rem] md:h-[22rem] lg:h-[24rem] mt-[-4rem] md:mt-[-4rem] lg:mt-[-10rem]"
                            />
                            <div className="absolute bottom-4 left-4 text-left text-customRareText">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Monstera</h2>
                                <p className="text-xs md:text-sm">Thai Constellation</p>
                                <p className="text-xs md:text-sm">€59.95</p>
                                <Link href="/care">
                                <button className="mt-2 px-4 py-1 border border-customRareText text-customRareText rounded-full text-xs md:text-sm hover:bg-customRareText hover:text-customRare transition duration-300">
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
                                src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F3_34a05907ff.png&w=320&q=75"
                                alt=""
                                className="object-cover w-[12rem] md:w-[13rem] lg:w-[14.5rem] h-[12rem] md:h-[13rem] lg:h-[14.5rem] mt-[-3rem] md:mt-[-4rem] lg:mt-[-7rem]"
                            />
                            <PiArrowBendDoubleUpRightThin className="absolute bottom-[-2rem] md:bottom-auto md:left-auto ml-[17rem] md:ml-[20rem] text-4xl md:text-5xl lg:text-6xl text-customRareText" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-xs md:text-sm lg:text-base mx-4 md:mx-0 lg:mr-[8rem] text-center md:text-left leading-relaxed">
                          Variegation is extremely rare, as it is a difficult process to create genetic mutations!
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%] h-[20rem] md:h-full">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FRare_PLNTS_banner_9e654f879e.jpg&w=640&q=75"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
