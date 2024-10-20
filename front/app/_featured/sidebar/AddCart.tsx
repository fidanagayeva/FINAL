'use client';

import { FaTimes } from 'react-icons/fa';
import { TbTrash } from 'react-icons/tb';
import { useEffect, useState } from 'react';

interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
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

    const increaseQuantity = (id: string) => {
        const updatedCart = cartItems.map(item => {
            if (item._id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id: string) => {
        const updatedCart = cartItems.map(item => {
            if (item._id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
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
                    <h2 className="text-customText text-3xl font-semibold font-victor-serif">
                        Hi {firstName}!
                        <span className="block text-customText text-3xl font-semibold font-victor-serif">This is your shopping cart</span>
                    </h2>

                    <FaTimes
                        onClick={toggleSidebar}
                        className="text-2xl cursor-pointer text-customText"
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
                                        className="w-[5rem] h-[7rem] object-cover mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="text-[1rem] text-customText font-bold mb-10">{item.title}</h3>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => decreaseQuantity(item._id)}
                                                className="bg-white border border-customText w-8 h-8 rounded-full flex items-center justify-center text-customText">-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item._id)}
                                                className="bg-white border border-customText w-8 h-8 rounded-full flex items-center justify-center text-customText">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <TbTrash
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-customText text-xl cursor-pointer mb-10"
                                    />
                                    <p className='text-customText'>€{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
