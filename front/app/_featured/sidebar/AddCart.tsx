'use client';

import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

export default function AddCart({ toggleSidebar }) {
    const [firstName, setFirstName] = useState('');
    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(storedFirstName);
        }
        setTimeout(() => setIsOpen(true), 10);
    }, []);

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={() => {
                    setIsOpen(false); 
                    setTimeout(toggleSidebar, 300); 
                }}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-[27rem] bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-customText text-3xl font-semibold font-victor-serif">
                        Hi {firstName}! <span className="block text-customText text-[1.4rem] font-semibold font-victor-serif">This is your shopping cart</span>
                    </h2>

                    <FaTimes
                        onClick={() => {
                            setIsOpen(false); 
                            setTimeout(toggleSidebar, 300); 
                        }}
                        className="text-xl mb-9 cursor-pointer text-customText"
                    />
                </div>

            </div>
        </div>
    );
}
