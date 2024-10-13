'use client';

import React, { useState } from 'react';
import { FaChevronRight, FaTimes, FaChevronDown, FaChevronLeft } from 'react-icons/fa';


const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 74.84 74.84"
    fill="none"
    stroke="currentColor"
    className="text-customGreen"
    strokeWidth="2.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
  >
    <path d="M43.41,29.29c2.29-1.88,3.29-3.43,3.29-3.43,1.59-2.57,2.34-5.54,1.76-8.64-1.04-5.45-5.69-9.19-11.01-9.21h-.04c-5.32.02-9.97,3.76-11.01,9.21-.59,3.1.17,6.07,1.76,8.64,0,0,4.44,6.52,14.67,8.98,7.04,1.4,12.78,5.45,15.5,10.75,1.23,2.02,1.96,4.39,1.96,6.92v.96c0,7.35-6.01,13.36-13.36,13.36h-19.01c-7.35,0-13.36-6.01-13.36-13.36v-.96c0-2.23.56-4.33,1.53-6.18,2.36-5.25,7.63-9.38,14.24-11.12" />
  </svg>
);

const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-customGreen"
    viewBox="0 0 74.84 74.84"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
  >
    <g>
      <path d="M47.69,30.15s-2.64-14.7,13.21-14.18c0,0,3.1,14.7-13.21,14.18Z" />
      <path d="M46.25,30.14s2.16-9.93-8.58-9.93c0,0-2.51,9.87,8.58,9.93Z" />
      <line x1="47.69" y1="30.15" x2="54.3" y2="23.03" />
      <line x1="46.25" y1="30.14" x2="41.58" y2="25.17" />
    </g>
    <path d="M70.52,61.03c-.19,1.68-1.52,3.57-3.61,4.86-1.98,1.22-4.24,1.58-5.8,1.12l.07.02c-3.68-1.16-4.74-2.14-4.74-2.14-.48-.43-.82-.99-.89-1.66-.12-1.18.6-2.23,1.69-2.56h0s0,0,0,0h0c1.12-.21,2.25.39,2.68,1.5.25.63.21,1.28-.03,1.89,0,0-.31.85-1.81,2.56l.06-.08c-.6.76-1.39,1.46-2.34,2.05-1.98,1.22-4.24,1.58-5.8,1.12l.07.02c-3.68-1.16-4.74-2.14-4.74-2.14-.48-.43-.82-.99-.89-1.66-.12-1.18.6-2.23,1.69-2.56h0s0,0,0,0h0c1.12-.21,2.25.39,2.68,1.5.25.63.21,1.28-.03,1.89,0,0-.49,1.35-3.23,4.07l.06-.05c-1.18,1.13-3.35,1.84-5.67,1.67-3.47-.27-8.54-4.91-5.28-7.83.98-.86,1.28-1.92.52-3.27-1.96-3.5-2.87-5.17-4.21-6.86s-2.36-1.32-4.23-.76c-2.02.61-6.29,3.63-11.1-6.72-4.37-10.53,1.18-11.61,3.03-12.62,1.71-.93,2.69-1.4,2.44-3.54s-.8-3.97-1.92-7.82c-.43-1.49-1.39-2.02-2.69-1.92-1.78.12-3.74.8-3.74.8-14.97,5.19-5.55,28.62-5.55,28.62,0,0,8.44,19.5,20.81,17.33" />
    <path d="M37.93,39s4.09,2.14,1.64,7.77c0,0,5.27-1.24,5.89-5.07h0c5.93.84,12.18-1.03,16.74-5.59,7.72-7.72,7.72-20.22,0-27.94-7.72-7.72-20.22-7.72-27.94,0-7.72,7.72-7.72,20.22,0,27.94,1.13,1.13,2.36,2.09,3.67,2.89Z" />
  </svg>

);


export const CartSidebar = ({ toggleSidebar }) => {
  const [currentView, setCurrentView] = useState('menu');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleMenuClick = () => {
    setCurrentView('menu');
  };

  const handleHouseplantsClick = () => {
    setCurrentView('houseplants');
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col p-0 overflow-y-auto">
      {currentView === 'menu' ? (
        <div className="bg-customText w-full flex items-center justify-between py-4 px-4">
          <h1 className="text-white text-xl font-serif mx-auto">Menu</h1>
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src="https://plnts.com/_next/image?url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fplnts-api%2Fmain%2FHouseplants_db71ce9e40.jpg&w=1080&q=75"
            alt="Houseplants"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bg-[#134A2199] bg-opacity-80 flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
              <FaChevronLeft className="text-white text-xl mr-2" />
              <h1 className="text-white text-xl font-sans cursor-pointer" onClick={handleMenuClick}>
                Menu
              </h1>
            </div>
            <button onClick={toggleSidebar} className="text-white text-2xl">
              <FaTimes />
            </button>
          </div>

          <div className="absolute bottom-4 left-4">
            <h1 className="text-white text-3xl font-bold">Houseplants</h1>
          </div>
        </div>

      )}

      <div className="flex flex-col bg-background p-4 space-y-4">
        {currentView === 'menu' ? (
          <>
            <div className="flex justify-between items-center cursor-pointer" onClick={handleHouseplantsClick}>
              <div className="flex items-center">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_houseplant_e7c11bf671.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a className="text-customText text-[1.25rem] font-victor-serif">Houseplants</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_pot_239f458f8b.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a href="#" className="text-customText text-[1.25rem] font-victor-serif">Pots</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_care_7cd86dd4d9.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a href="#" className="text-customText text-[1.25rem] font-victor-serif">Care</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_accessories_d70e00fb75.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a href="#" className="text-customText text-[1.25rem] font-victor-serif">Accessories</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_gift_3c952cfa6b.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a href="#" className="text-customText text-[1.25rem] font-victor-serif">Gifts</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center mb-10">
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FPLNTS_sale_370cbc1853.png&w=828&q=75"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mr-4"
                />
                <a href="#" className="text-customtextRed text-[1.25rem] font-victor-serif">PLNTS Week</a>
              </div>
              <FaChevronRight className="mb-10" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="#" className="text-customText text-[1.15rem] font-victor-serif">Inspiration</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>
            <hr className='bg-gray-50 w-full h-1' />
            <div className="flex justify-between items-center">
              <div className="flex items-center mb-4">
                <a href="#" className="text-customText text-[1.15rem] font-victor-serif">PLNTS Doctor</a>
              </div>
              <FaChevronRight className="text-customText" />
            </div>

            <div className="flex items-center">
              <UserIcon />
              <a href="#" className="ml-4 text-customText text-[1.25rem] font-victor-serif">Login / Register</a>
            </div>

            <div className="flex items-center">
              <CustomIcon />
              <a href="#" className="text-customText text-[1.25rem] font-victor-serif ml-4">Customer service</a>
            </div>

            <div className="flex items-center">
              <img
                src="https://plnts.com/_next/static/media/eu.9e870f69.svg"
                alt=""
                className="w-8 h-8 object-cover rounded-full mr-4"
              />
              <span className="text-customText text-[1.25rem] font-victor-serif">EN (€)</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col p-4">
            <a href="#" className="text-customText text-[0.9rem] border-b w-[9rem] border-customText pb-1 mb-6 block">
              Shop all houseplants
            </a>
            <a href="#" className="text-customText text-[0.9rem] border-b w-[13rem] border-customText pb-1 mb-10 block">
              Shop the newest houseplants
            </a>

            <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
              <div className="flex items-center mb-3">
                <a className="text-customText font-semibold text-[1.35rem]">By size</a>
              </div>
              <FaChevronDown className={`text-customText transition-transform duration-300 ${isAccordionOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>

            {isAccordionOpen && (
              <div className="mt-2">
                <ul className="ml-1 mb-5 space-y-2">
                  <li><a href="#" className="text-customText text-[1rem]">Tubers and seeds</a></li>
                  <li><a href="#" className="text-customText text-[1rem]">Baby houseplants (S)</a></li>
                  <li><a href="#" className="text-customText text-[1rem]">Medium houseplants (M, L)</a></li>
                  <li><a href="#" className="text-customText text-[1rem]">Large houseplants (XL, XXL)</a></li>
                </ul>
              </div>
            )}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <a href="#" className="text-customText font-semibold text-[1.35rem]">By plant family</a>
              </div>
              <FaChevronDown className="text-customText" />
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <a href="#" className="text-customText font-semibold text-[1.35rem]">By placement area</a>
              </div>
              <FaChevronDown className="text-customText" />
            </div>
            <div className="flex justify-between items-center mb-[2.5rem]">
              <div className="flex items-center">
                <a href="#" className="text-customText font-semibold text-[1.35rem]">By characeristic</a>
              </div>
              <FaChevronDown className="text-customText" />
            </div>
            <div className="flex items-center mb-2">
              <UserIcon />
              <a href="#" className="ml-4 text-customText text-[1rem] font-victor-serif">Login / Register</a>
            </div>

            <div className="flex items-center mb-3">
              <CustomIcon />
              <a href="#" className="text-customText text-[1rem] font-victor-serif ml-4">Customer service</a>
            </div>

            <div className="flex items-center mb-2">
              <img
                src="https://plnts.com/_next/static/media/eu.9e870f69.svg"
                alt=""
                className="w-8 h-8 object-cover rounded-full mr-4"
              />
              <span className="text-customText text-[1rem] font-victor-serif">EN (€)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
