'use client';

import Link from 'next/link';

export default function Sales() {
  return (
    <div className="p-4 sm:p-6 md:p-10 ml-2 sm:ml-5 bg-customBG min-h-screen mb-[-9rem] lg:mb-[-20rem]">
      <div className="flex flex-col items-center text-xs sm:text-sm space-x-1 sm:space-x-2 text-customText md:flex-row md:justify-start">
        <Link href="/" className="hover:underline">
          PLNTS.com
        </Link>
        <span className='hidden md:block'>/</span>
        <span className="text-customText underline">Sale</span>
      </div>

      <div className="mt-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-victor-serif text-customText">
          Sale
        </h1>
        <p className="mt-4 text-sm sm:text-base text-customText leading-snug max-w-prose">
          With limited quantities available, it's first-come, first-served. Don't miss the chance to score your favorite pot or plant accessories for less. Browse our sale page and fill your cart with the items you love. Happy shopping and saving!
        </p>
        <hr className="mt-6 border-t border-customText" />
      </div>
    </div>
  );
}
