"use client";

import React, { useState } from 'react';

export default function ReadMore() {
    const [isOpen, setIsOpen] = useState(false);

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
                    Plants, pots, care products and accessories
                </h2>
                <button className="text-customText text-sm font-bold flex items-center mt-4 md:mt-0 md:ml-4 self-center md:self-auto">
                    {isOpen ? 'Read less' : 'Read more'}
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
                    <h1 className="text-3xl md:text-5xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">Houseplants</h1>
                    <p className="mt-4 mb-3">
                        Looking for the perfect plant for your (living)room? We've got you
                        covered. You can easily buy the most beautiful plants in our online
                        shop. With a few steps, you can order your favorites and receive
                        them delivered fresh from the nursery to your home.
                    </p>
                    <p className="mt-4 mb-4">
                        With a choice from a diverse range of green house plants, air-purifying plants, hanging plants, special and popular plants, we have something for everyone.
                    </p>
                    <p className="mt-4 mb-4">
                        Choose your favorite from a diverse range of green house plants, air-purifying plants, hanging plants, special and popular plants, we have something for everyone. At PLNTS you can find a wide range of plants that give your home a boost. Whether you have green fingers or are looking for a plant that is easy to care for: we are happy to help you find the perfect PLNTS match!
                    </p>
                    <h1 className="text-3xl md:text-3xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">The most special plants</h1>
                    <p className="mt-4 mb-4">
                        Small plant, or large plant? You can also easily order the most special house plants online at PLNTS. Our RarePLNTS are striking and original, so that they really pop out of your interior. If you are looking for a special houseplant, it is useful to think carefully about your wishes in advance. The location where the plant will be placed and the amount of time you want to spend on caring for the plant have a major influence on making the best choice. It is also useful to think about the desired size of your new houseplant. Use our handy filter options and find your perfect plant!
                    </p>
                    <h1 className="text-3xl md:text-3xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">Our top 3 favorite plants / Most popular plants</h1>
                    <p className="mt-4 mb-4">
                        In our webshop you will find more than 230 house plants. In this jungle of plants you naturally want the best in your room. If we look at the trends, you can't really ignore the Monstera, Calathea and Ficus family. These plant families are real eye-catchers and make your house an attractive home.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Monstera</h2>
                    <p className="mb-4">
                        The Monstera is a beautiful tropical plant family, of which the leaves can become enormous in some variants. Thanks to the large leaves, this plant is an excellent air purifier. The Monstera plant family contains all kinds of species: from large houseplants to rare plants. The Monstera Deliciosa is one of the most famous species. This beautiful plant originates from Mexico and is nicknamed the Swiss Cheese Plant. The Deliciosa is a fine air purifier, but beware: this plant is a bit poisonous for your pet.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Calathea</h2>
                    <p className="mb-4">
                        The Calathea plant family is very big. They come in all different shapes and sizes, all with their own unique properties. The Calathea plant is super easy to care for, pet friendly and is an excellent air purifier. The Zebra Plant, Calathea Zebrina, is one of the most popular in the family. The large green leaves are supported by striped stems that reveal why this plant is called 'Zebra'.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Ficus</h2>
                    <p className="mb-4">
                        Beauty and elegance. The Ficus is a perfect addition to your home. A Ficus is easy to care for, but can be a little stubborn at times. So give your Ficus a little extra love once in a while, that will make her happy! In our online shop you will find the Ficus in all shapes and sizes. Get to know one of the nicest plants from the Ficus plant family: the Ficus Robusta. This plant also has a nice nickname. It is also called 'Rubber Tree Plant' because of its oval-shaped and leathery leaves. A tough, but elegant appearance!
                    </p>
                    <h1 className="text-3xl md:text-3xl font-semibold scroll-mt-[67px] md:scroll-mt-[75px] lg:scroll-mt-[140px] font-victor-serif">The best care for your plant</h1>
                    <p className="mt-4 mb-4">
                        Found your favorite new plant? Time to order her and have her delivered to your home! Every plant is unique and therefore needs unique care. Some plants are easygoing types, but there are certainly some plants that can be a bit stubborn. To give your plant a long and happy life, we recommend that you take a good look at what your green friend needs.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Light</h2>
                    <p className="mb-4">
                        You have sun and shade lovers and so do plants! How much light your plant needs depends on the species. For example, some plants can greatly enjoy (in)direct sunlight, but others will be happier with a little shade. Keep this in mind when you are looking for the perfect spot in your home.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Water</h2>
                    <p className="mb-4">
                        How much water your houseplant needs differs per species. However, there are a number of factors that you can take into account. Plants need more water under some circumstances, such as with lower humidity (heating/air conditioning), a lot of sunlight, a higher temperature and during the flowering period. In winter it is also a lot colder, so plants need less water.
                    </p>
                    <h2 className='font-victor-serif mt-2 mb-1 text-lg font-semibold'>Nutrition</h2>
                    <p className="mb-4">
                        In addition to light and water, your houseplants can also use some extra love once in a while. Occasionally remove all yellow leaves and remove the dry flowers. This makes your plant look prettier and they can put their energy into the living leaves. Your plant will also be very happy with a plant sprayer! Spray the plant regularly to improve humidity, keep the leaves clean and reduce the risk of pests. Finally, we recommend that you give the plant some plant nutrition once every 1 to 2 weeks during the growth period.
                    </p>
                </div>
            )}
        </div>
    );
}
