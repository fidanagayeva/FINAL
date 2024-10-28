'use client';

import { TbTrash } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../_featured/layout/layout';
import Info from '../_components/Info';

interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    size: string;
    description: string;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [firstName, setFirstName] = useState('');
    const freeShippingThreshold = 45;
    const decrementAmount = 15;

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(storedFirstName);
        }

        const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(storedCart);
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const remainingAmount = Math.max(0, freeShippingThreshold - (cartItemCount * decrementAmount));

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

    const handleContinueToPayment = () => {
        localStorage.setItem('orderItems', JSON.stringify(cartItems));

        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    return (
        <Layout>
            <Info />
            <div className="bg-white p-4 my-16 mx-28">
                <h2 className="text-customText text-3xl sm:text-5xl font-semibold font-victor-serif flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                    Hi {firstName}!
                    <span className="ml-0 sm:ml-2 mt-2 sm:mt-0">This is your shopping cart</span>
                </h2>
                <p className='mt-10 text-customText mb-4'>Add another €{remainingAmount.toFixed(2)} and your shipment is free*</p>
                <div className="relative w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="absolute bg-customText h-2 rounded-full"
                        style={{ width: `${Math.min(100, ((freeShippingThreshold - remainingAmount) / freeShippingThreshold) * 100)}%` }}
                    />
                </div>
                {remainingAmount <= 0 && (
                    <p className="text-customText mt-4">Your order ships free!* ✓</p>
                )}
                <div className="flex flex-col md:flex-row justify-between font-bold my-4 mx-4 sm:mx-6 text-customText">
                    <span className="mb-2 md:mb-0">Product</span>
                    <span className="hidden md:block ml-[14rem]">Size</span>
                    <span className="mb-2 md:mb-0">Quantity</span>
                    <span className="mb-2 md:mb-0">Price</span>
                </div>

                <hr className="border-t border-customText mb-2" />

                <div className="p-4">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-start justify-between mt-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[9rem] h-[12rem] object-cover mr-4"
                                    />
                                    <div className="flex flex-col mb-28">
                                        <h3 className="text-[1rem] text-customText font-bold mb-1">{item.title}</h3>
                                        <span className="text-customText">{item.description}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3 font-semibold ml-8">
                                    <div className="">
                                        <span className="text-customText">{item.size}</span>
                                    </div>
                                </div>
                                <div className="flex items-center ml-16">
                                    <button
                                        onClick={() => decreaseQuantity(item._id)}
                                        className="bg-white border border-customText w-8 h-8 rounded-full flex items-center justify-center text-customText">-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item._id)}
                                        className="bg-white border border-customText w-8 h-8 rounded-full flex items-center justify-center text-customText">+</button>
                                </div>
                                <div className="flex items-center">
                                    <p className='text-customText mr-2'>€{(item.price * item.quantity).toFixed(2)}</p>
                                    <TbTrash
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-customText text-2xl cursor-pointer"
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-4 bg-white">
                    <p className="text-left text-[0.75rem] text-customText mb-2">The items in your shopping cart are not reserved!</p>
                    <hr className="border-t border-customText mb-4" />

                    <div className="flex justify-between items-center text-customText text-left">
                        <p className="text-[1rem] font-bold">Total (including VAT)</p>
                        <p className="text-[1rem] text-customText">€{totalPrice.toFixed(2)}</p>
                    </div>

                    <hr className="border-t border-customText my-4" />

                    <div className="flex flex-col items-center md:items-start mb-4">
                        <Link href="/pages" passHref>
                            <button
                                onClick={handleContinueToPayment}
                                className="w-full sm:w-[15rem] bg-customText rounded-3xl hover:bg-customHover text-white py-2"
                            >
                                Continue to payment
                            </button>
                        </Link>
                        <p className="flex items-center text-customText hover:text-customHover cursor-pointer mt-2 text-center md:text-left">
                            <span className="mr-1">&#8592;</span>
                            Continue shopping
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
