'use client';

import React from 'react';
import { FaChevronUp } from 'react-icons/fa'; 

export const CartSidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col p-4 overflow-y-auto">
      <button onClick={toggleSidebar} className="self-end mb-4">
        <FaChevronUp className="text-2xl text-customText" />
      </button>
      <div className="flex flex-col space-y-4">
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Houseplants</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Pots</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Care</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Accessories</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Gifts</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">PLNTS Week</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">Inspiration</a>
        <a href="#" className="text-customText text-[1.5rem] font-victor-serif">PLNTS Doctor</a>
        <span className="text-customText text-[1.5rem] font-victor-serif">EN (€)</span>
      </div>
    </div>
  );
};
