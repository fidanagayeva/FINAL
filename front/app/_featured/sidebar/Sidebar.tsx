'use client';

import React, { useRef, useEffect, useState } from 'react';

export const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsVisible(false);
                setTimeout(() => toggleSidebar(), 300);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleSidebar]);

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-[100]" onClick={toggleSidebar}></div>

            <div
                ref={sidebarRef}
                className={`fixed right-0 top-0 h-full w-[27rem] bg-white shadow-lg z-[200] p-6 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-victor-serif text-customText text-primary md:text-[65px] md:leading-[65px] mb-6 flex flex-row items-center justify-between text-2xl">Hi!</h2>
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            setTimeout(toggleSidebar, 300);
                        }}
                        className="text-customText mb-4 text-2xl focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <form className="space-y-4 ml-2">
                    <div>
                        <p className="mb-8 text-customText font-bold md:mb-6">
                            Log in with email
                        </p>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full p-2 border border-black focus:ring-gray-500 focus:border-gray-500 bg-white text-black placeholder-gray-500"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full p-2 border border-black  focus:ring-gray-500 focus:border-gray-500 bg-white text-black placeholder-gray-500"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <a
                            href="#"
                            className="text-sm text-customText underline hover:text-customHover hover:border-customHover"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-customText text-white py-2 px-4 rounded-3xl hover:bg-customHover transition duration-200"
                    >
                        Log in
                    </button>
                </form>


                <div className="mt-4 ml-2 text-sm">
                    <p className="text-left">
                        No account yet?{' '}
                        <a href="#" className=" text-customText underline hover:text-customHover hover:border-customHover">
                            Create one here!
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
