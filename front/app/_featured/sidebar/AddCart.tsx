'use client';

import { FaTimes, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: string;
}

interface AddCartProps {
    toggleSidebar: () => void;
}

export default function AddCart({ toggleSidebar }: AddCartProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(storedFirstName);
        }

        const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(storedCart); 
    }, []); 

    const removeFromCart = (id: string) => {
        const updatedCart = cartItems.filter((item) => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-[27rem] bg-white shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0`}
            >
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">
                        Hi {firstName}!
                        <span className="block text-lg">This is your shopping cart</span>
                    </h2>

                    <FaTimes
                        onClick={toggleSidebar}
                        className="text-xl cursor-pointer text-customText"
                    />
                </div>

                <div className="p-4">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg">{item.title}</h3>
                                        <p>€{item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <FaTrash
                                    onClick={() => removeFromCart(item._id)}
                                    className="text-red-500 cursor-pointer"
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
