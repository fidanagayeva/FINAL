'use client';

import Link from 'next/link';

export default function AccessoriesText() {
  return (
    <div className="p-4 sm:p-6 md:p-10 ml-2 sm:ml-5 bg-customBG min-h-screen 
                    mb-[-9rem] lg:mb-[-20rem]">
      <div className="flex items-center text-xs sm:text-sm space-x-1 sm:space-x-2 text-customText">
        <Link href="/" className="hover:underline">
          PLNTS.com
        </Link>
        <span>/</span>
        <span className="text-customText underline">Accessories</span>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-victor-serif text-customText">
          Accessories
        </h1>
        <p className="mt-4 text-sm sm:text-base text-customText leading-snug max-w-prose">
        Meet the newest member of your accessories family. Accessories come in all shapes, sizes and styles and we have a huge variety in our shop. So take a good look around and choose the indoor plants that will be the perfect additions to your home!Read less
        </p>
        <hr className="mt-6 border-t border-customText" />
      </div>
    </div>
  );
}
