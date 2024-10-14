'use client';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Layout from "../_featured/layout/layout";
import { Info } from "../_components/Info";

const AuthPage = () => {
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignupChange = ({ target }) => {
        setSignupData({ ...signupData, [target.name]: target.value });
    };

    const handleLoginChange = ({ target }) => {
        setLoginData({ ...loginData, [target.name]: target.value });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const signupUrl = "http://localhost:3001/api/users";
            const signupResponse = await axios.post(signupUrl, signupData);

            if (signupResponse.status === 201) {
                setModalVisible(true);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else if (error.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    const handleLoginSubmit = async () => {
        try {
            const loginUrl = "http://localhost:3001/api/users/login";
            const loginResponse = await axios.post(loginUrl, loginData);
            localStorage.setItem("token", loginResponse.data.token);

            if (loginResponse.status === 200) {
                router.push("/home");
            } else {
                alert("Error occurred");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else if (error.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <Layout>
            <Info />
            <div className="font-victor-serif ml-14 mt-10 text-[37px] leading-[37px] text-customText text-primary md:text-[65px] md:leading-[65px] px-3 md:px-0">
                Your PLNTS account
            </div>
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="flex flex-col md:flex-row w-full max-w-[73rem] p-2 space-x-0 md:space-x-8">
                    <div className="w-full md:w-[20%] flex justify-center items-center whitespace-nowrap mb-4 md:mb-0">
                        <p className="text-center md:text-left text-sm md:text-3sm">
                            Have an account?{' '}
                            <a className="text-customText font-bold underline hover:text-customHover hover:border-customHover">
                                Login here!
                            </a>
                        </p>
                    </div>

                    <div className="w-[1px] bg-gray-500 hidden md:block"></div>

                    <div className="w-full md:w-[80%]">
                        <h2 className="text-customText font-bold mb-8 text-center md:text-left">Sign up with email.</h2>

                        <form className="flex flex-col" onSubmit={handleSignupSubmit}>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        onChange={handleSignupChange}
                                        value={signupData.firstName}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={handleSignupChange}
                                        value={signupData.lastName}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">Signup Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleSignupChange}
                                        value={signupData.email}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">Login Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleLoginChange}
                                        value={loginData.email}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">Create Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleSignupChange}
                                        value={signupData.password}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-[0.9rem] text-customText mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleLoginChange}
                                        value={loginData.password}
                                        required
                                        className="w-full p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-[0.9rem] text-customText mb-1">Birthdate (optional)</label>
                                <input
                                    type="date"
                                    name="birthdate"
                                    className="w-full md:w-[25rem] p-3 bg-white border-2 border-[#e4e0d8] focus:outline-none"
                                />
                                <p className="text-sm text-customText mt-2 italic">
                                    Enter your date of birth to receive a present on your birthday!
                                </p>
                            </div>

                            <div className="flex flex-col mb-4 space-y-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-customText border-customText focus:ring-green-500"
                                        />
                                        <span className="ml-2">Subscribe to our newsletter (optional)</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-customText border-customText focus:ring-green-500"
                                        />
                                        <span className="ml-2">
                                            I’ve read and accept the{' '}
                                            <a href="#" className="underline text-customText hover:text-customHover">
                                                terms of service
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="underline text-customText hover:text-customHover">
                                                privacy policy
                                            </a>{' '}
                                            of PLNTS.com
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                onClick={handleSignupSubmit}
                                className={`w-full md:w-[25rem] p-3 rounded-3xl font-bold disabled:cursor-not-allowed ${signupData.firstName && signupData.lastName && signupData.email && signupData.password
                                        ? 'bg-customText text-white hover:bg-customHover'
                                        : 'bg-[#8bcca0] text-gray-50'
                                    } transition`}
                                disabled={!signupData.firstName || !signupData.lastName || !signupData.email || !signupData.password}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {modalVisible && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-background p-6 rounded-md shadow-lg text-left max-w-md w-full relative">
                            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Victor Serif, serif', color: '#134A21' }}>
                                Hi {signupData.firstName}!
                            </h2>
                            <p className="text-customText mb-8 leading-relaxed">
                                Thank you for successfully creating an account. <br />
                                To access your account, you must first log in.
                            </p>
                            <button
                                onClick={handleLoginSubmit}
                                className="px-6 py-2 bg-customText text-white rounded-full font-semibold absolute bottom-4 right-4"
                            >
                                Log in
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default AuthPage;
