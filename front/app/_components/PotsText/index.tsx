'use client';

import Link from 'next/link';

export default function PotsText() {
  return (
    <div className="p-4 sm:p-6 md:p-10 ml-2 sm:ml-5 bg-customBG min-h-screen 
                    mb-[-9rem] lg:mb-[-20rem]">
      <div className="flex items-center text-xs sm:text-sm space-x-1 sm:space-x-2 text-customText">
        <Link href="/" className="hover:underline">
          PLNTS.com
        </Link>
        <span>/</span>
        <span className="text-customText underline">Pots</span>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-victor-serif text-customText">
          Pots
        </h1>
        <p className="mt-4 text-sm sm:text-base text-customText leading-snug max-w-prose">
        A suitable pot for every plant! In our online shop you will find the most beautiful plant pots for your indoor plant. In different styles and sizes, for every interior. Be inspired by our extensive collection and mix and match. The perfect flower pot shows off your plant to its fullest and ensures that your plant is happy and can grow well.Read less
        </p>
        <hr className="mt-6 border-t border-customText" />
      </div>
    </div>
  );
}
