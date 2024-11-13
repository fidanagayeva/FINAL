'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ReadMore() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-custombgclr p-8">
            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="font-victor-serif text-[33px] text-customText leading-[33px] text-primary md:text-[45px] md:leading-[45px] grow text-left !text-4xl">
                    {t('heading')}
                </h2>
                <button className="text-customText text-sm font-bold flex items-center mt-4 md:mt-0 md:ml-4 self-center md:self-auto">
                    {isOpen ? t('readLess') : t('readMore')}
                    <svg
                        className={`ml-2 w-4 h-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="mt-6 mx-auto text-customText text-left max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">
                        {t('houseplants.title')}
                    </h1>
                    <p className="mt-4 mb-3">{t('houseplants.content1')}</p>
                    <p className="mt-4 mb-4">{t('houseplants.content2')}</p>
                    <p className="mt-4 mb-4">{t('houseplants.content3')}</p>

                    <h1 className="text-3xl md:text-3xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">
                        {t('houseplants.specialPlants')}
                    </h1>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.monstera.title')}</h2>
                    <p className="mb-4">{t('houseplants.monstera.content')}</p>

                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.calathea.title')}</h2>
                    <p className="mb-4">{t('houseplants.calathea.content')}</p>

                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.ficus.title')}</h2>
                    <p className="mb-4">{t('houseplants.ficus.content')}</p>

                    <h1 className="text-3xl md:text-3xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">
                        {t('houseplants.care.title')}
                    </h1>
                    <p className="mt-4 mb-4">{t('houseplants.care.content')}</p>

                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.light.title')}</h2>
                    <p className="mb-4">{t('houseplants.light.content')}</p>

                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.water.title')}</h2>
                    <p className="mb-4">{t('houseplants.water.content')}</p>

                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>{t('houseplants.nutrition.title')}</h2>
                    <p className="mb-4">{t('houseplants.nutrition.content')}</p>
                </div>
            )}
        </div>
    );
}
