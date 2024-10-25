export default function PLNTSprb() {
    return (
        <div className="flex flex-col items-center my-10 text-customText mx-auto">
            <div className="text-center mb-4 w-full max-w-[48rem]">
                <h1 className="text-[3.3rem] text-start font-victor-serif font-semibold leading-tight">
                    Plant problems? PLNTS Doctor to the rescue!
                </h1>
            </div>
            <div className="text-start mb-4 max-w-[48rem]">
                Is your beauty showing some signs that she isn't not so happy anymore? Think about drooping or yellow leaves, maybe even some weird, unfamiliar spots on her foliage? Hopefully our wise PLNTS Doctor can help you with that, so your beauty can recover and become bigger and stronger than ever! To identify the different diseases or bugs, we've set up an itchy image list under 'diseases & pests' to help you recognize these annoying bugs of course with helpful tips to save your green bestie!
            </div>

            <div className="container mx-auto px-4 sm:px-8 md:px-[27.5rem] py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { src: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2Fa1a4dc3e6c008a0ab86d372f4c4a9d27.png&w=1080&q=80', title: 'Hanging leaves' },
                        { src: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F8dbfb601590830bacad8b60e72de968f.png&w=1080&q=80', title: 'Yellow Leaves' },
                        { src: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F4f45a8d34c111c36678eb4a6ca62c2f3.png&w=1080&q=80', title: 'Root rot' },
                        { src: 'https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F000b9cf1205234249a772cf9081bc079.png&w=1080&q=80', title: 'Diseases & pests' },
                    ].map((card, index) => (
                        <div key={index} className="relative overflow-hidden shadow-md">
                            <img
                                src={card.src}
                                className="w-full h-full md:h-full object-cover transition-transform duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-white text-lg font-bold text-center mt-2">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
