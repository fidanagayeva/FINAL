'use client';

import Link from 'next/link';

export default function Gift() {
  return (
    <div className="p-4 sm:p-6 md:p-10 ml-2 sm:ml-5 bg-customBG min-h-screen 
                    mb-[-9rem] lg:mb-[-20rem]">
      <div className="flex items-center text-xs sm:text-sm space-x-1 sm:space-x-2 text-customText">
        <Link href="/" className="hover:underline">
          PLNTS.com
        </Link>
        <span>/</span>
        <span className="text-customText underline">Plant gifts</span>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-victor-serif text-customText">
          Plant gifts
        </h1>
        <p className="mt-4 text-sm sm:text-base text-customText leading-snug max-w-prose">
          Whoever the plant lover in your life is, we've got you covered!
          Give a present that keeps on growing and with the right accessories you cannot go wrong.
          We have amazing PLNTS sets and plant essentials! Perfect gifts for every occasion.
        </p>
        <hr className="mt-6 border-t border-customText" />
      </div>
    </div>
  );
}
