'use client';

import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface WishlistItem {
  _id: string;
  title: string;
  image: string;
  price: number;
}

export default function Overview() {
  const [firstName, setFirstName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeSection, setActiveSection] = useState('overview');
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const token = localStorage.getItem('token');
    const storedOrders = JSON.parse(localStorage.getItem('orderItems') || '[]');
    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems') || '[]');

    if (storedFirstName && token) {
      setFirstName(storedFirstName);
      setIsLoggedIn(true);
      setOrderItems(storedOrders);
      setWishlistItems(storedWishlist);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('wishlistItems');
    setIsLoggedIn(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (!email || !password) {
      setErrorMessage('Oops! Email or password is empty. Please check again.');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('firstName', 'User');
      localStorage.setItem('token', 'dummyToken');
      setFirstName('User');
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage("Oops! That’s not the correct email or password. Give it another try.");
    }
  };

  const handleCreateAccountClick = () => {
    router.push('/authpage');
  };

  const handleAddToWishlist = (item: WishlistItem) => {
    setWishlistItems(prev => {
      const updatedWishlist = [...prev, item];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="bg-background p-10 flex-1">
            <h2 className="text-[2.7rem] font-semibold font-victor-serif text-customText">Account overview</h2>
            <p className="mb-10 text-customText">This is your account overview.</p>
            <h3 className="text-[2rem] font-victor-serif text-customText mb-4">Your latest order</h3>
            <p className="mb-2 text-customText">You’ve not ordered anything yet.</p>
            <div className="flex items-center">
              <a href="#" className="text-customChevron underline">
                View all your orders
              </a>
              <FaChevronRight className="ml-2 text-customChevron" />
            </div>

            <h3 className="text-[2rem] font-victor-serif text-customText mb-4">
              A selection from your wishlist
            </h3>
            <p className="mb-2 text-customText">
              <span className="font-bold">Oops!</span> something went wrong!
            </p>
            <p className="mb-8 text-customText">You have not selected any favourites yet.</p>

            <h3 className="text-[2rem] font-victor-serif text-customText mb-4">Recently viewed items</h3>
            <div className="flex items-center justify-center bg-[#f8f5ec] border border-customText p-10">
              <p className="text-customText">No recently viewed items</p>
            </div>
          </div>
        );
      case 'personalDetails':
        return (
          <div className="bg-background p-10 flex-1">
            <h2 className="text-[2.7rem] font-semibold font-victor-serif text-customText">Personal details</h2>
            <p className="mb-7 text-customText">
              This is your personal detail page, here you can see an overview of your personal information.
            </p>
            {firstName && (
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2">
                  <h3 className="text-[1.9rem] font-semibold font-victor-serif text-customText">Basics</h3>
                  <div className="mb-5">
                    <p className="text-[0.9rem] font-bold text-customText">Name:</p>
                    <p className="text-[0.9rem] text-customText">{firstName}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[0.9rem] font-bold text-customText">Newsletter</p>
                    <p className="text-[0.9rem] text-customText">Yes</p>
                  </div>

                  <div className="flex items-center">
                    <a href="#" className="text-customChevron underline">
                      Update personal details
                    </a>
                    <FaChevronRight className="ml-2 text-customChevron" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                  <h3 className="text-[1.9rem] font-semibold font-victor-serif text-customText">Addresses</h3>
                  <div className="mb-6">
                    <p className="text-[0.9rem] font-bold text-customText">Shipping address</p>
                    <p className="text-[0.9rem] text-customText">No address configured</p>
                    <div className="flex items-center">
                      <a href="#" className="text-customChevron underline">
                        Add shipping address
                      </a>
                      <FaChevronRight className="ml-2 text-customChevron" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[0.9rem] font-bold text-customText">Billing address</p>
                    <p className="text-[0.9rem] text-customText">No address configured</p>
                    <div className="flex items-center">
                      <a href="#" className="text-customChevron underline">
                        Add billing address
                      </a>
                      <FaChevronRight className="ml-2 text-customChevron" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="bg-background p-10 flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[2.7rem] font-semibold font-victor-serif text-customText">
                My orders
              </h2>
              <button
                onClick={() => {
                  setOrderItems([]);
                  localStorage.removeItem('orderItems');
                }}
                className="bg-customText hover:bg-customHover text-white py-2 px-4 rounded-3xl"
              >
                Cancel orders
              </button>
            </div>

            {orderItems.length === 0 ? (
              <p className="mb-10 text-customText">You've not ordered anything yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {orderItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[9rem] h-[12rem] object-cover mb-4"
                    />
                    <h3 className="text-[1.25rem] font-bold text-customText mb-2">
                      {item.title}
                    </h3>
                    <p className="text-customText">Quantity: {item.quantity}</p>
                    <p className="text-customText">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'wishlist':
        return (
          <div className="bg-background p-10 flex-1">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[2.5rem] font-semibold font-victor-serif text-customText">Wishlist</h2>
              <button
                onClick={() => setWishlistItems([])}
                className="bg-customText hover:bg-customHover text-white py-2 px-4 rounded-3xl transition"
              >
                Cancel Wishlist
              </button>
            </div>
            <p className="mb-10 text-customText">
              Welcome to your personal jungle oasis! Browse your wishlist and let your green thumb run wild as you curate the ultimate indoor garden that will make all your plant parent friends green with envy.
            </p>
            {wishlistItems.length === 0 ? (
              <p className="mb-2 text-customText">
                <span className="font-bold">Oops!</span> your wishlist is empty!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {wishlistItems.map(item => (
                  <div key={item._id} className="bg-white w-52 border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-lg">
                    <img src={item.image} alt={item.title} className="w-32 h-44 object-cover mb-2" />
                    <h3 className="text-lg font-semibold text-customText text-center">{item.title}</h3>
                    <p className="text-customText text-center">{item.description}</p>
                    <p className="text-customText text-center">€{item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'restock':
        return (
          <div className="bg-background p-10 flex-1">
            <h2 className="text-[2.7rem] font-semibold font-victor-serif text-customText">Restock notifications</h2>
            <p className="mb-10 text-customText">Good news! You will be notified as soon as our popular products are back in stock. We will send you an email as soon as they are available, so keep your inbox. This page contains an overview of the products you have subscribed to.</p>
            <p className="mb-2 text-customText">
              <span className="font-bold">Oops!</span> something went wrong!
            </p>
          </div>
        );
      case 'dataPrivacy':
        return (
          <div className="bg-background p-10 flex-1">
            <h2 className="text-[2.7rem] font-semibold font-victor-serif text-customText">Data and Privacy</h2>
            <h3 className="text-[2rem] font-victor-serif text-customText mb-4">Cookies</h3>
            <p className="mb-2 text-customText">It's not just plants that are important. Cookies make sure that plant owners have the best experience on our site. If you continue we can assume you are happy with the cookies. If you have any questions about our cookie policy, get in touch. We are more than happy to assist you.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const AccountIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 74.84 74.84" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <path d="M60.31,47.85c.19,0,.37.01.56.01,6.67,0,12.08-5.41,12.08-12.08,0-5.15-3.22-9.53-7.76-11.27-.8-5.01-5.12-8.84-10.36-8.84s-9.56,3.83-10.36,8.84c-4.53,1.74-7.76,6.12-7.76,11.27,0,6.67,5.41,12.08,12.08,12.08,2.2,0,4.26-.6,6.04-1.63v20.57" />
      <polyline points="1.89 33.36 26.18 8.04 42.77 25.33"></polyline>
      <polyline points="42.77 60.11 30.87 60.11 30.87 43.66 21.48 43.66 21.48 60.11 9.59 60.11 9.59 33.36 26.18 16.06 38.72 29.14"></polyline>
    </svg>
  );

  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74.84 74.84"
      fill="none"
      stroke="currentColor"
      className=""
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

  const OrdersIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
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
        <path d="M50.92,34.93v-18.48c0-.9-.73-1.63-1.63-1.63H14.48c-.9,0-1.63.73-1.63,1.63v3.84" />
        <path d="M12.85,39.23v3.8c0,.9.73,1.64,1.64,1.64h56.53c.9,0,1.64-.73,1.64-1.64v-11.87c0-.5-.23-.98-.63-1.29l-10.22-7.99c-.29-.23-.64-.35-1.01-.35h-2.76c-.9,0-1.64.73-1.64,1.64v10.12c0,.9.73,1.64,1.64,1.64h9.13" />
        <line x1="4.6" y1="34.29" x2="20.85" y2="34.29" />
        <line x1="4.85" y1="25.34" x2="21.1" y2="25.34" />
        <line x1="2.18" y1="29.85" x2="18.44" y2="29.85" />
        <circle cx="21.62" cy="55.25" r="4.77" />
        <circle cx="63.85" cy="54.83" r="4.77" />
      </g>
    </svg>
  );

  const HeartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74.84 74.84"
      fill="none"
      stroke="currentColor"
      className=""
      strokeWidth="2.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
      height="32"
    >
      <path d="M41.17,14.08l-7.77,7.17.13-.14c-.99,1.08-1.63,2.44-1.63,3.98,0,3.07,2.44,5.51,5.51,5.51s5.51-2.44,5.51-5.51c0-1.63-.63-2.98-1.63-3.98l.14.14-8.52-7.85,1.7,1.57c-4.7-4.7-9.13-6.06-13.29-6.06-8.95,0-16.09,7.23-16.09,16.09v.09c0,1.45.18,2.89.45,4.25,4.7,19.25,31.72,36.6,31.72,36.6h0s27.02-17.26,31.72-36.6c.36-1.36.45-2.8.45-4.25v-.09c0-8.95-7.23-16.09-16.09-16.09-4.25,0-8.86,1.54-13.83,6.6" />
    </svg>
  );

  const RestockIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74.84 74.84"
      fill="none"
      stroke="currentColor"
      className=""
      strokeWidth="2.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
      height="32"
    >
      <path d="M24.56,59.57c0,7.1,5.76,12.86,12.86,12.86s12.86-5.76,12.86-12.86v-.04h16.05c-12.12-3.62-11.61-12.81-11.61-12.81v-11.76c0-6.61-3.68-12.35-9.11-15.29h0c-11.33-5.99-12.65-8.66-12.65-8.66-.76-1.23-1.13-2.67-.84-4.16.5-2.62,2.73-4.42,5.29-4.43h.02s0,0,0,0h.02c2.56.01,4.79,1.81,5.29,4.43.28,1.49-.08,2.92-.84,4.16,0,0-1.33,2.68-12.65,8.66h0c-5.43,2.94-9.11,8.69-9.11,15.29v11.76s.5,9.19-11.61,12.81h10.54" />
      <path d="M60.3,42.94c.34-.06.69-.09,1.05-.09,3.32,0,6.01,2.69,6.01,6.01,0,1.79-.78,3.4-2.03,4.5" />
      <path d="M60.3,37.39c.35-.03.69-.05,1.05-.05,6.36,0,11.52,5.16,11.52,11.52,0,2.55-.83,4.91-2.24,6.82" />
      <path d="M14.54,42.94c-.34-.06-.69-.09-1.05-.09-3.32,0-6.01,2.69-6.01,6.01,0,1.79.78,3.4,2.03,4.5" />
      <path d="M14.54,37.39c-.35-.03-.69-.05-1.05-.05-6.36,0-11.52,5.16-11.52,11.52,0,2.55.83,4.91,2.24,6.82" />
    </svg>
  );

  const DataIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
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
        <circle cx="47.32" cy="46.63" r="9.37" />
        <path d="M21.49,46.83v3.63c0,.71.58,1.29,1.29,1.29h4.14,0c.5,2.14,1.33,4.15,2.43,5.98h0s-2.93,2.94-2.93,2.94c-.5.5-.5,1.32,0,1.82l5.4,5.4c.5.5,1.32.5,1.82,0l2.93-2.93v-.02c1.74,1.04,3.64,1.83,5.65,2.34,0,0,0,4.14,0,4.14,0,.71.58,1.29,1.29,1.29h7.64c.71,0,1.29-.58,1.29-1.29,0,0,0-4.14,0-4.14,2.12-.53,4.11-1.38,5.91-2.5h0s2.93,2.94,2.93,2.94c.5.5,1.32.5,1.82,0l5.4-5.4c.5-.5.5-1.32,0-1.82l-3.04-3.04h-.01c1.02-1.76,1.79-3.67,2.26-5.7h0s4.14,0,4.14,0c.71,0,1.29-.58,1.29-1.29v-7.64c0-.71-.58-1.29-1.29-1.29,0,0-4.29,0-4.29,0-.51-1.89-1.27-3.68-2.25-5.33h0s2.93-2.93,2.93-2.93c.5-.5.5-1.32,0-1.82l-5.4-5.4c-.5-.5-1.32-.5-1.82,0l-2.93,2.93h0c-1.74-1.04-3.64-1.84-5.67-2.35v-.02s0-4.14,0-4.14c0-.71-.58-1.29-1.29-1.29h-3.69" />
        <circle cx="22.01" cy="22.15" r="7.36" />
        <path d="M30.67,36.41c-1.42.88-2.98,1.55-4.65,1.97h0s0,3.26,0,3.26c0,.56-.46,1.01-1.01,1.01h-6.01c-.56,0-1.01-.46-1.01-1.01v-3.26h0c-1.58-.4-3.07-1.02-4.43-1.84h0s-2.3,2.32-2.3,2.32c-.39.39-1.04.39-1.43,0l-4.25-4.25c-.39-.39-.39-1.04,0-1.43l2.3-2.3" />
        <path d="M7.87,30.87c-.86-1.44-1.51-3.02-1.91-4.7h0s-3.26,0-3.26,0c-.56,0-1.01-.46-1.01-1.01v-6.01c0-.56.46-1.01,1.01-1.01h3.38,0c.42-1.57,1.07-3.05,1.9-4.4h.01s-2.3-2.3-2.3-2.3c-.39-.39-.39-1.04,0-1.43l4.25-4.25c.39-.39,1.04-.39,1.43,0l2.39,2.39h0c1.31-.77,2.73-1.35,4.23-1.73h0v-3.27c0-.56.46-1.01,1.01-1.01h6.01c.56,0,1.01.46,1.01,1.01v3.26h0c1.59.41,3.09,1.04,4.45,1.86h0s2.3-2.31,2.3-2.31c.39-.39,1.04-.39,1.43,0l4.25,4.25c.39.39.39,1.04,0,1.43l-2.3,2.3h0c.77,1.3,1.37,2.7,1.77,4.19h0s3.38,0,3.38,0c.56,0,1.01.46,1.01,1.01v6.01c0,.56-.46,1.01-1.01,1.01h-3.26,0c-.37,1.6-.98,3.1-1.78,4.48h0s2.39,2.39,2.39,2.39c.39.39.39,1.04,0,1.43l-4.25,4.25c-.39.39-1.04.39-1.43,0l-2.3-2.3" />
      </g>
    </svg>
  );

  const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 74.84 74.84" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
      <polyline points="31.13 59.77 15.13 59.77 8.93 24.07 30.33 24.07 57.33 24.07 57.33 15.07 3.23 15.07 3.23 24.07"></polyline>
      <polyline points="29.43 59.77 45.53 59.77 47.04 50.9"></polyline>
      <path d="M65.27,43.14c-9.77,3.03-15.48.91-17.21.2-3.37-1.39-5.14-3.88-5.14-3.88-.83-1.19-1.27-2.6-1.07-4.1.36-2.64,2.49-4.56,5.05-4.71h.02s0,0,0,0h.02c2.55-.13,4.88,1.55,5.52,4.14.36,1.47.08,2.92-.62,4.2,0,0-1.05,2.35-5.2,4.51-1.93,1-12,5.44-18.46-6" />
      <path d="M66.13,48.2s3.58-2.83,5.48-7.36c-4.46-2.06-9.01-1.75-9.01-1.75" />
    </svg>
  );


  return (
    <div className={`flex flex-col bg-background md:flex-row min-h-screen ${isLoggedIn ? 'pl-14' : ''}`}>
      {isLoggedIn ? (
        <div className="bg-customHiclr p-10 w-full md:w-[27.5%] text-white h-[30rem]">
          <h1 className="text-4xl mb-8 text-center font-victor-serif">Hi {firstName}!</h1>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AccountIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('overview')}>Account overview</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <UserIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('personalDetails')}>Personal details</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <OrdersIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('orders')}>My orders</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <HeartIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('wishlist')}>Wishlist</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <RestockIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('restock')}>Restock notifications</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DataIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={() => setActiveSection('dataPrivacy')}>Data and Privacy</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <LogoutIcon />
                  <a href="#" className="text-white text-[1.25rem] font-victor-serif ml-4" onClick={handleLogout}>Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex min-h-screen w-full bg-background">
          <div className="w-1/2 flex flex-col justify-center p-10 mb-[20rem]">
            <div className="font-victor-serif font-bold text-customText text-[4rem]">
              Your PLNTS account
            </div>
            <h2 className="mb-8 mt-[3rem] text-customText font-bold md:mb-6">Log in with email</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[0.9rem] text-customText mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 bg-white border-2 border-customBorderclr focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[0.9rem] text-customText mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-3 bg-white border-2 border-customBorderclr focus:outline-none"
                />
              </div>
              {errorMessage && <p className="customtextRed text-sm mb-4">{errorMessage}</p>}
              <div className="flex items-center justify-between">
                <button className="bg-customText text-white py-2 px-4 rounded-3xl w-[17rem]" type="submit">
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div className="w-[1px] mt-44 mb-20 bg-gray-400"></div>

          <div className="w-1/2 flex items-center justify-center p-10">
            <p className="text-center">
              No account yet?{' '}
              <button
                onClick={handleCreateAccountClick}
                className="text-customText underline hover:text-customHover hover:border-customHover"
              >
                Create one here!
              </button>
            </p>
          </div>
        </div>
      )}

      {isLoggedIn && renderContent()}
    </div>
  );
}
