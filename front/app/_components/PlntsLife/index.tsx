import Link from 'next/link';

export default function PlntsLife() {
    return (
        <div className="relative flex flex-wrap p-4 sm:p-10 md:p-16 lg:p-20 mt-10 mb-10 lg:mb-[30rem]">
            <div className="w-full lg:w-[45%] pr-4 flex flex-col items-center lg:items-start">
                <h1 className="text-center lg:text-left text-customText font-victor-serif text-4xl sm:text-5xl lg:text-6xl lg:text-[64px]">
                    PLNTS <span className="italic">for life</span>
                </h1>
                <Link href="/houseplants">
                    <button className="px-6 py-2 mt-6 text-customText hover:text-white border border-customText rounded-3xl 
                          hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md">
                        Shop all our PLNTS
                    </button>
                </Link>
                <p className="mt-6 sm:mt-10 md:mt-16 lg:mt-24 text-center lg:text-left text-customText">
                    Whether you are a seasoned plant lover or just starting out on <br /> your green journey,
                    we are here to help you care for your green friends. Each plant has its own unique
                    needs, so understanding their specific care requirements is crucial to their well-being.
                </p>
                <a href="#" className="mt-2 text-customText font-bold inline-block hover:text-customHover text-center lg:text-left">
                    Discover our plant care guides &rarr;
                </a>
            </div>
            <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
                <img
                    src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_for_life_background_67f551596d.jpg&w=828&q=75"
                    alt="Main plant image"
                    className="w-full h-auto lg:w-[43.875rem] lg:h-[32.5rem]"
                />
            </div>

            <div className="absolute left-0 mt-10 lg:mt-[41rem] translate-y-[-50%] flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-[20.375rem] h-[20rem] lg:h-[27.5rem] mb-8 lg:mb-0 hidden lg:block">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FStep_1_053834698a.png&w=384&q=75"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative w-full lg:w-[20.375rem] h-[20rem] lg:h-[27.5rem] ml-0 lg:ml-10 mb-8 lg:mb-0 hidden lg:block">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fplnts-api%2Fmain%2FPLNTS_5713_2_7d36099d97.jpg&w=384&q=75"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-[-3rem] right-[-0.5rem] flex items-center text-4xl lg:text-[50px] text-customHover font-chicle">
                        1
                        <svg className="stroke-[2px] sm:stroke-[3px] relative max-sm:hidden sm:pr-20 md:pr-28 lg:pr-28 xl:top-6 xl:pr-16 2xl:pr-10 3xl:top-8 3xl:pr-8 max-lg:stroke-[4px]" width="388" height="91" viewBox="0 0 388 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M368.997 35.6015C346.557 42.8777 325.484 53.5776 302.244 58.1081C282.106 62.0339 261.873 65.7216 241.594 68.5929C211.231 72.8919 180.587 70.502 150.184 68.8729C100.42 66.2063 50.2971 60.1738 1.6157 48.9773"
                                stroke="#DEBE48" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M357.22 28.9218L381.29 30.2261L365.266 46.8814"
                                stroke="#DEBE48" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>

                <div className="relative w-full lg:w-[20.375rem] h-[20rem] lg:h-[27.5rem] ml-0 lg:ml-10 hidden lg:block">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FStep_3_540a06134b.png&w=384&q=75"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-[-3rem] right-[-0.5rem] flex items-center text-4xl lg:text-[50px] text-customHover font-chicle">
                        2
                        <svg className="stroke-[2px] sm:stroke-[3px] relative max-sm:hidden sm:pr-20 md:pr-28 lg:pr-28 xl:top-6 xl:pr-16 2xl:pr-10 3xl:top-8 3xl:pr-8 max-lg:stroke-[4px]" width="388" height="91" viewBox="0 0 388 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M368.997 35.6015C346.557 42.8777 325.484 53.5776 302.244 58.1081C282.106 62.0339 261.873 65.7216 241.594 68.5929C211.231 72.8919 180.587 70.502 150.184 68.8729C100.42 66.2063 50.2971 60.1738 1.6157 48.9773"
                                stroke="#DEBE48" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M357.22 28.9218L381.29 30.2261L365.266 46.8814"
                                stroke="#DEBE48" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>

                <div>
                    <span className="absolute bottom-[-1.5rem] right-[1.5rem] flex items-center text-4xl lg:text-[50px] text-customHover font-chicle">
                        3
                    </span>
                </div>
            </div>
        </div>
    );
}
