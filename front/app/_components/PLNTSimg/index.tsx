'use client';

export default function PLNTSimg() {
    return (
        <div>
            <div className="relative w-full h-[22.6875rem]">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2F74a412355115859c52542c8f64afd34a.jpg&w=1920&q=80')",
                    }}
                >

                    <div className="relative z-10 flex flex-col items-start justify-end h-full ml-8 text-white p-4 md:p-10">
                        <h1 className="text-4xl md:text-7xl font-serif">
                            <span className="font-normal">PLNTS</span> <span className="semibold">Doctor</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

