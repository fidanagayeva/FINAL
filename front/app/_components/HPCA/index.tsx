import Link from 'next/link';

export default function HPCA() {
    return (
        <div className="container mx-auto px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="relative overflow-hidden">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FHouseplants_category_172980df8c.png&w=384&q=75"
                        className="w-[17rem] h-[24rem] object-cover"
                        alt="Houseplants"
                    />
                    <h3 className="absolute top-4 left-0 right-0 p-4 text-white text-4xl font-victor-serif text-center">
                        Houseplants
                    </h3>
                    <Link href="/houseplants"> 
                        <button
                            className="absolute w-[15rem] bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-2 mb-6 bg-white/30 text-white border border-white rounded-3xl 
                      hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md"
                        >
                            See all
                        </button>
                    </Link>
                </div>
                <div className="relative overflow-hidden">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPots_category_2dfd0477a6.png&w=384&q=75"
                        className="w-[17rem] h-[24rem] object-cover"
                        alt=""
                    />
                    <h3 className="absolute top-4 left-0 right-0 p-4 text-white text-4xl font-victor-serif text-center">
                        Pots
                    </h3>
                    <button
                        className="absolute w-[15rem] bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-2 mb-6 bg-white/30 text-white border border-white rounded-3xl 
                          hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md"
                    >
                        See all
                    </button>
                </div>
                <div className="relative overflow-hidden">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FCare_77b766fd2e.jpg&w=384&q=75"
                        className="w-[17rem] h-[24rem] object-cover"
                        alt=""
                    />
                    <h3 className="absolute top-4 left-0 right-0 p-4 text-white text-4xl font-victor-serif text-center">
                        Care
                    </h3>
                    <button
                        className="absolute w-[15rem] bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-2 mb-6 bg-white/30 text-white border border-white rounded-3xl 
                          hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md"
                    >
                        See all
                    </button>
                </div>
                <div className="relative overflow-hidden">
                    <img
                        src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FAccessories_homepage_1575887715.png&w=384&q=75"
                        className="w-[17rem] h-[24rem] object-cover"
                        alt=""
                    />
                    <h3 className="absolute top-4 left-0 right-0 p-4 text-white text-4xl font-victor-serif text-center">
                        Accessories
                    </h3>
                    <button
                        className="absolute w-[15rem] bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-2 mb-6 bg-white/30 text-white border border-white rounded-3xl 
                          hover:bg-customHover hover:border-customHover transition duration-300 backdrop-blur-md"
                    >
                        See all
                    </button>
                </div>
            </div>
        </div>
    );
}
