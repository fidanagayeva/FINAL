'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaChevronUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { CartSidebar } from '../sidebar/CartSidebar';
import { Sidebar } from '../sidebar/Sidebar';
import AddCart from '../sidebar/AddCart';

const UserIcon = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement> }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 74.84 74.84"
    fill="none"
    stroke="currentColor"
    className="text-customGreen cursor-pointer"
    strokeWidth="2.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
    onClick={onClick}
  >
    <path d="M43.41,29.29c2.29-1.88,3.29-3.43,3.29-3.43,1.59-2.57,2.34-5.54,1.76-8.64-1.04-5.45-5.69-9.19-11.01-9.21h-.04c-5.32.02-9.97,3.76-11.01,9.21-.59,3.1.17,6.07,1.76,8.64,0,0,4.44,6.52,14.67,8.98,7.04,1.4,12.78,5.45,15.5,10.75,1.23,2.02,1.96,4.39,1.96,6.92v.96c0,7.35-6.01,13.36-13.36,13.36h-19.01c-7.35,0-13.36-6.01-13.36-13.36v-.96c0-2.23.56-4.33,1.53-6.18,2.36-5.25,7.63-9.38,14.24-11.12" />
  </svg>
);

const HeartIcon = () => (
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
    <path d="M41.17,14.08l-7.77,7.17.13-.14c-.99,1.08-1.63,2.44-1.63,3.98,0,3.07,2.44,5.51,5.51,5.51s5.51-2.44,5.51-5.51c0-1.63-.63-2.98-1.63-3.98l.14.14-8.52-7.85,1.7,1.57c-4.7-4.7-9.13-6.06-13.29-6.06-8.95,0-16.09,7.23-16.09,16.09v.09c0,1.45.18,2.89.45,4.25,4.7,19.25,31.72,36.6,31.72,36.6h0s27.02-17.26,31.72-36.6c.36-1.36.45-2.8.45-4.25v-.09c0-8.95-7.23-16.09-16.09-16.09-4.25,0-8.86,1.54-13.83,6.6" />
  </svg>
);

const CartIcon = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement> }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 74.84 74.84"
    fill="none"
    stroke="currentColor"
    className="text-customGreen cursor-pointer"
    strokeWidth="2.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
    onClick={onClick}
  >
    <path d="M14.31,21.63c-.63-3.37-.02-5.89.15-7.26.24-1.95-.46-3.96-2.04-5.14-.01,0-.03-.02-.04-.03-2.24-1.65-5.23-1.43-7.2.38h-.02s0,.02,0,.02v.02c-1.96,1.83-2.39,4.79-.91,7.15.84,1.34,2.14,2.18,3.6,2.58,0,0,1.98.51,9.02.45h-1.16,54.28c.81,0,1.48.67,1.48,1.48l-5.98,31.46H20.22l-5.98-31.46.07.36Z" />
    <circle cx="28.35" cy="61.99" r="4.77" />
    <circle cx="57.49" cy="61.99" r="4.77" />
  </svg>
);

const SearchIcon = () => (
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
    <circle cx="32" cy="32" r="25" />
    <path d="M 24 32 A 12 12 0 0 1 32 20" />
    <rect
      x="50"
      y="50"
      width="25"
      height="10"
      rx="2.5"
      transform="rotate(45 50 50)"
      className="text-customGreen"
      fill="none"
    />
  </svg>
);

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 275 65"
    stroke="currentColor"
    style={{ color: 'rgba(19, 74, 33, 1)' }}
    className="w-[85px] transition-size md:w-[105px] lg:w-[145px] fill-customGreen"
  >

    <g className="fill-customGreen">
      <path d="M272.343 58.932a2.564 2.564 0 1 0 1.764.749 2.427 2.427 0 0 0-1.764-.749zM272.597 44.322a4.216 4.216 0 0 0-2.363-.74h-.406v1.509h.406a2.814 2.814 0 0 1 1.54.482 3.672 3.672 0 0 1 1.242 1.34 3.736 3.736 0 0 1 .47 1.835 2.346 2.346 0 0 1-1.306 2.135 10.862 10.862 0 0 1-5.04.826c-2.485 0-4.223-.278-5.168-.827a2.343 2.343 0 0 1-1.318-2.13 2.831 2.831 0 0 1 .117-.872l.045-.124h4.25l.169-.682a5.934 5.934 0 0 0 .06-.842 2.382 2.382 0 0 0-2.516-2.5 3.015 3.015 0 0 0-2.528 1.477 7.256 7.256 0 0 0-.971 4.109 7.967 7.967 0 0 0 2.1 5.859 8.92 8.92 0 0 0 11.518 0 7.968 7.968 0 0 0 2.1-5.859 6.539 6.539 0 0 0-.648-2.954 5.179 5.179 0 0 0-1.753-2.042zM267.14 42.347a7.252 7.252 0 1 0-5.758-2.093 7.835 7.835 0 0 0 5.758 2.093zm-5.138-9.355a18.475 18.475 0 0 1 10.275 0c.907.444 1.349.944 1.349 1.528s-.441 1.085-1.349 1.528a18.464 18.464 0 0 1-10.275 0c-.907-.444-1.348-.944-1.348-1.528s.441-1.084 1.348-1.528zM260.052 12.749a6 6 0 0 0-.772 3.06 4.369 4.369 0 0 0 1.385 3.171 4.924 4.924 0 0 0 .716.58 3.63 3.63 0 0 0-.474.345 3.712 3.712 0 0 0-1.2 2.906v2.925h1.144l.422-1.681h11.743l.422 1.681h1.144V8.543h-1.144l-.422 1.68h-10.011a7.685 7.685 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.329 0-.314.242-.623.72-.917a5.008 5.008 0 0 1 2.531-.5h7.313a2.621 2.621 0 0 0 2.938-2.925V0h-1.144l-.422 1.68h-8.684a4.791 4.791 0 0 0-2.548.719 5.035 5.035 0 0 0-1.835 2.006 6.144 6.144 0 0 0-.664 2.861 4.315 4.315 0 0 0 1.477 3.179 5.337 5.337 0 0 0 .814.62 5.407 5.407 0 0 0-1.52 1.684zm12.959 6.017h-10.006a7.692 7.692 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.33 0-.314.242-.623.72-.917a5.009 5.009 0 0 1 2.531-.5h8.684l.408 1.627z"></path>
    </g>
    <g className="fill-customGreen">
      <path d="M45.875 6.479q-6.421-4.833-21.221-4.833H.718v2.17H.73a18.61 18.61 0 0 1 4.309.5 25.483 25.483 0 0 1 6.043 1.944 20.924 20.924 0 0 1 1.977 1.048 3.019 3.019 0 0 1 .318.205l.074.041.045.033a16.052 16.052 0 0 1 6.118 6.58 1.342 1.342 0 0 1 .136.292c0 .008 0 .012.008.02V3.865h4.9a11.005 11.005 0 0 1 9.048 4.3q3.436 4.3 3.434 12.565s-.085 15.654-13.711 15.654c-6.968 0-10.873-3-12.576-4.782l-.021-.024c-.079-.091-.153-.184-.227-.276-.112-.14-.223-.281-.331-.424-.151-.2-.3-.4-.438-.611-.045-.066-.093-.13-.137-.2a15.423 15.423 0 0 1-.517-.827c-.022-.035-.041-.072-.062-.107a17.23 17.23 0 0 1-.374-.68c.006.014.015.027.021.04l-.023-.042c-.029-.058-.058-.115-.087-.177a15.885 15.885 0 0 1-.834-2.224 15.483 15.483 0 0 1-.611-4.653 16.615 16.615 0 0 1 .219-2.322.151.151 0 0 1 .165.139c.009.049.017.119.021.181a23.334 23.334 0 0 0 3.244 8.652c.265.415.553.835.867 1.241.062-.041.12-.078.178-.119a11.894 11.894 0 0 0 1.857-1.533 11.512 11.512 0 0 0 2.89-6.8c.016-.2.021-.39.025-.6s0-.44-.012-.661c0-.1 0-.193-.012-.288a11.353 11.353 0 0 0-3.612-7.649.248.248 0 0 0-.045-.049c-.169-.152-.334-.3-.508-.444a11.635 11.635 0 0 0-3.682-2.042 9.783 9.783 0 0 0-.409-.132 11.34 11.34 0 0 0-2.575-.448 1.038 1.038 0 0 0-.776.284l-.009.008-.1.095A16.772 16.772 0 0 0 .005 20.476c-.107 5.023 2.163 8 4.933 9.256a1.1 1.1 0 0 0 .1.041v31.693l-.491.119-3.3 1.077-.532.136v1.327h23.35v-1.319l-4.318-1.332V39.818h4.9q14.8 0 21.221-4.838t6.414-14.247q.008-9.413-6.407-14.254zM247.25 39.13a22.924 22.924 0 0 0-5.855-6.138c-2.267-1.619-5.27-3.5-8.926-5.577-3.089-1.767-5.584-3.308-7.414-4.579a18.907 18.907 0 0 1-4.514-4.368 9.122 9.122 0 0 1-1.792-5.514 9.41 9.41 0 0 1 2.326-6.558 7.223 7.223 0 0 1 5.515-2.548 11.721 11.721 0 0 1 6.851 2.086 18.793 18.793 0 0 1 5.071 5.354 25.215 25.215 0 0 1 3.341 7.419l.087.318h4.249V1.685h-2.713l-.092.046c-.1.049-.326.19-1.828 1.267a16.08 16.08 0 0 0-2.854 3.236 20.2 20.2 0 0 0-3.534-2.5 20.881 20.881 0 0 0-10.32-2.923 30.635 30.635 0 0 0-11.93 2.074 16.757 16.757 0 0 0-7.372 5.617 13.57 13.57 0 0 0-2.472 7.925 17.393 17.393 0 0 0 2.6 9.553 24.5 24.5 0 0 0 6.2 6.665 94.347 94.347 0 0 0 9.365 5.837c3.111 1.794 5.409 3.206 7.024 4.319a17.607 17.607 0 0 1 4.125 3.9 7.9 7.9 0 0 1 1.61 4.859 10.269 10.269 0 0 1-2.83 7.585 10.379 10.379 0 0 1-7.621 2.823c-5.463 0-9.975-2.477-13.408-7.36a27.04 27.04 0 0 1-3.6-7.516l-.094-.3h-4.239v17.345h2.712l.094-.049c.15-.078.755-.5 1.827-1.271a15.4 15.4 0 0 0 2.848-3.206 16.224 16.224 0 0 0 3.816 2.568 25.522 25.522 0 0 0 11.784 2.829 34.725 34.725 0 0 0 13.321-2.293 18.477 18.477 0 0 0 8.284-6.268 15.032 15.032 0 0 0 2.78-8.788 15.3 15.3 0 0 0-2.422-8.529zM145.306 39.218L117.814 7.984a22.764 22.764 0 0 0-5.134-4.57 14.188 14.188 0 0 0-7.562-1.735h-9.707v2.076l6.183 1.759v40.675h3.511V18.227l40.18 45.906h3.529V23.901h-3.511z"></path>
    </g>
    <g className="fill-customGreen">
      <path d="M103.229 51.784h-1.653l-.041.386c-.834 7.83-11.726 8.815-12.344 8.864H75.258V5.051l5.3-1.324V1.641H54.511v2.087l5.3 1.324v55.637l-5.3 1.324V64.1h50.591V51.786h-1.873zM145.282 1.679v17.3h3.543v-.431a13.047 13.047 0 0 1 .094-1.584c.007-.074.014-.151.033-.259l.012-.1a15.162 15.162 0 0 1 6.247-10.034l.127-.08a9.036 9.036 0 0 1 4.2-1.739c.092-.007.179-.011.267-.011h4.747v55.987l-5.3 1.319v2.087h26.051v-2.087l-5.3-1.319V4.74h4.7a8.557 8.557 0 0 1 4.471 1.747l.113.075a15.168 15.168 0 0 1 6.261 10.055l.015.119c.015.076.021.157.03.246a12.861 12.861 0 0 1 .091 1.562v.431h3.52v-17.3z"></path>
    </g>
  </svg>
);

export const Header = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  const [isAddCartOpen, setIsAddCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [firstName, setFirstName] = useState('');
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
  };

  const toggleAddCart = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to be logged in to add items to your cart');
      return;
    }
    setIsAddCartOpen(!isAddCartOpen);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setActiveDropdown(null);
    }
  };

  const handleLanguageChange = (languageCode) => {
    console.log('Seçilen dil: ', languageCode);
    setSelectedLanguage(languageCode);
    toggleDropdown('languageDropdown');
  };

  useEffect(() => {
    console.log('Yüklenen dil kodu:', selectedLanguage);
    import(`../../translations/${selectedLanguage}.json`)
      .then((module) => {
        console.log('Yüklenen çeviriler:', module.default);
        setTranslations(module.default);
      })
      .catch((err) => console.error('Çeviri dosyası yüklenemedi:', err));
  }, [selectedLanguage]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }

    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  const handleHeartIconClick = () => {
    if (isLoggedIn) {
      router.push('/account');
    } else {
      alert("You need to be logged in to add items to your cart");
    }
  };

  return (
    <>
      <header key={selectedLanguage} className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center py-4 bg-customBG shadow-md">
        <div className="flex items-center justify-between w-full px-4 md:px-16">
          <div className="flex items-center">
            <button onClick={toggleMobileSidebar} className="md:hidden">
              <FaBars className="text-3xl text-customText" />
            </button>
            <Logo className="ml-2" />
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="flex flex-col justify-center mr-2">
                {firstName && (
                  <span className="text-customText leading-none">
                    Hi
                  </span>
                )}
                {firstName && (
                  <span className="text-customText font-bold leading-none">
                    {firstName}
                  </span>
                )}
              </div>
              <UserIcon onClick={toggleDesktopSidebar} className="hidden md:block" />
            </div>
            <div onClick={handleHeartIconClick} className="cursor-pointer">
              <HeartIcon className="block md:hidden" />
            </div>
            <CartIcon onClick={toggleAddCart} className="block md:hidden" />
            <SearchIcon className="block md:hidden" />
          </div>
        </div>
        <div className="border-b border-customGreen w-full mt-3"></div>
        <nav className="hidden md:flex justify-between items-center w-full mt-4 px-16">
          <div className="flex space-x-6">
            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/');
                }}
                className="text-customText text-[1.25rem] font-victor-serif flex items-center hover:text-customHover"
              >
                Houseplants
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('dropdown1');
                  }}
                  className={`ml-1 text-[0.875rem] transition-transform duration-300 ${activeDropdown === 'dropdown1' ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </a>
              {activeDropdown === 'dropdown1' && (
                <div
                  className="absolute left-0 right-0 top-full mt-2 bg-customBG shadow-lg p-6 flex justify-between w-screen z-50 -ml-[calc((20vw-100%)/2)]"
                  ref={dropdownRef}
                >
                  <div className="grid grid-cols-4 gap-4 w-full text-lg text-black px-14">
                    <div>
                      <h3 className="font-bold text-[1rem] mb-4">By size</h3>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7.7rem] hover:border-customHover whitespace-nowrap">Tubers and seeds</li>
                        <li className="list-none text-[1rem] hover:text-customHover hover:border-b w-[9rem] hover:border-customHover whitespace-nowrap">
                          <span className="text-pink-500 text-[0.9rem]">Baby houseplants (S)</span>
                        </li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[11.7rem] hover:border-customHover whitespace-nowrap">Medium houseplants (M, L)</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[12rem] hover:border-customHover whitespace-nowrap">Large houseplants (XL, XXL)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">By plant family</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[3.7rem] hover:border-customHover whitespace-nowrap">Alocasia</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Philodendron</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.2rem] hover:border-customHover whitespace-nowrap">Monstera</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.5rem] hover:border-customHover whitespace-nowrap">Anthurium</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[2.3rem] hover:border-customHover whitespace-nowrap">Hoya</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5rem] hover:border-customHover whitespace-nowrap">Syngonium</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">By placement area</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7rem] hover:border-customHover whitespace-nowrap">Bathroom plants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.7rem] hover:border-customHover whitespace-nowrap">Bedroom plants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7.9rem] hover:border-customHover whitespace-nowrap">Living room plants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.5rem] hover:border-customHover whitespace-nowrap">Office plants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.1rem] hover:border-customHover whitespace-nowrap">Kitchen plants</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">By characteristic</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7.5rem] hover:border-customHover whitespace-nowrap">Easy houseplants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[12rem] hover:border-customHover whitespace-nowrap">Animal-friendly houseplants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[10.9rem] hover:border-customHover whitespace-nowrap">Air-purifying houseplants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8.3rem] hover:border-customHover whitespace-nowrap">Shade houseplants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7rem] hover:border-customHover whitespace-nowrap">Houseplant sets</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.5rem] hover:border-customHover whitespace-nowrap">Hanging plants</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6rem] hover:border-customHover whitespace-nowrap">Hybrid plants</li>
                        <li className="list-none text-[0.9rem] text-gray-700 hover:text-customHover hover:border-b w-[7.5rem] hover:border-customHover whitespace-nowrap">Rare houseplants</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[27rem] h-[262px] pr-10">
                    <img
                      src="https://plnts.com/_next/image?url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fplnts-api%2Fmain%2FHouseplants_db71ce9e40.jpg&w=640&q=75"
                      alt=""
                      className="w-full h-auto"
                    />
                    <h2 className="text-black text-[1rem] mt-2">Shop the newest houseplants</h2>
                    <hr className="border-black w-[14rem] mb-6" />
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onClick={() => toggleDropdown('dropdown2')}
                className="text-customText text-[1.25rem] font-victor-serif flex items-center hover:text-customHover"
              >
                Pots
                <FaChevronDown
                  className={`ml-1 text-[0.875rem] transition-transform duration-300 ${activeDropdown === 'dropdown2' ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </a>

              {activeDropdown === 'dropdown2' && (
                <div
                  className="absolute left-0 right-0 top-full h-[21rem] mt-2 bg-customBG shadow-lg p-6 flex justify-between w-screen z-50 -ml-[calc((35vw-100%)/2)]"
                  ref={dropdownRef}
                >
                  <div className="grid grid-cols-4 gap-4 w-full text-lg text-black px-14">
                    <div>
                      <h3 className="font-bold text-[1rem] mb-4">By size</h3>
                      <ul className="space-y-2">
                        <li className="list-none text-[1rem] hover:text-customHover hover:border-b w-[6rem] hover:border-customHover whitespace-nowrap">
                          <span className="text-pink-500 text-[0.9rem]">Baby pots (S)</span>
                        </li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8.5rem] hover:border-customHover whitespace-nowrap">Medium pots (M, L)</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[9rem] hover:border-customHover whitespace-nowrap">Large pots (XL, XXL)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">By style</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[2.5rem] hover:border-customHover whitespace-nowrap">Basic</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[3rem] hover:border-customHover whitespace-nowrap">Nature</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.7rem] hover:border-customHover whitespace-nowrap">Handmade</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[1.7rem] hover:border-customHover whitespace-nowrap">Fun</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">By material</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Ceramic pots</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7rem] hover:border-customHover whitespace-nowrap">Braided baskets</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.7rem] hover:border-customHover whitespace-nowrap">Terracotta pots</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7rem] hover:border-customHover whitespace-nowrap">Eco-plastic pots</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Nursery pots</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Pot accessories</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.3rem] hover:border-customHover whitespace-nowrap">Plant stands</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Plant hangers</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6rem] hover:border-customHover whitespace-nowrap">Plant plateaus</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5rem] hover:border-customHover whitespace-nowrap">Pot saucers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[27rem] h-[262px] pr-10">
                    <img
                      src="https://plnts.com/_next/image?url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fplnts-api%2Fmain%2FPots_f29ab6fe55.jpg&w=640&q=75"
                      alt=""
                      className="w-full h-auto"
                    />
                    <h2 className="text-black text-[0.9rem] mt-2">Shop the newest pots</h2>
                    <hr className="border-black w-[10.3rem] mb-6" />
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onClick={() => toggleDropdown('dropdown3')}
                className="text-customText text-[1.25rem] font-victor-serif flex items-center hover:text-customHover"
              >
                Care
                <FaChevronDown
                  className={`ml-1 text-[0.875rem] transition-transform duration-300 ${activeDropdown === 'dropdown3' ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </a>

              {activeDropdown === 'dropdown3' && (
                <div
                  className="absolute left-0 right-0 top-full mt-2 h-[21rem] bg-customBG shadow-lg p-6 flex justify-between w-screen z-50 -ml-[calc((46vw-100%)/2)]"
                  ref={dropdownRef}
                >
                  <div className="grid grid-cols-4 gap-4 w-full text-lg text-black px-14">
                    <div>
                      <h3 className="font-bold text-[1rem] mb-4">Watering</h3>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.1rem] hover:border-customHover whitespace-nowrap">Watering cans</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Spray bottles</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.7rem] hover:border-customHover whitespace-nowrap">Water meters</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.3rem] hover:border-customHover whitespace-nowrap">Plant irrigators</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Potting soil</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.9rem] hover:border-customHover whitespace-nowrap">Potting soil</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.7rem] hover:border-customHover whitespace-nowrap">Substrates</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.8rem] hover:border-customHover whitespace-nowrap">Potting mix</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Propagation</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8.7rem] hover:border-customHover whitespace-nowrap">Propagation stations</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.5rem] hover:border-customHover whitespace-nowrap">Cutting tools</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Pot accessories</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[3.7rem] hover:border-customHover whitespace-nowrap">Nutrition</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.9rem] hover:border-customHover whitespace-nowrap">Grow lights</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.5rem] hover:border-customHover whitespace-nowrap">Moss pole</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.3rem] hover:border-customHover whitespace-nowrap">Plant stakes</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[9.5rem] hover:border-customHover whitespace-nowrap">Biological pest control</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[2.3rem] hover:border-customHover whitespace-nowrap">Tools</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[27rem] h-[262px] pr-10">
                    <img
                      src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FCare_menu_a9d7ef6b96.jpg&w=640&q=75"
                      alt=""
                      className="w-full h-auto"
                    />
                    <h2 className="text-black text-[0.9rem] mt-2">Shop the newest care products</h2>
                    <hr className="border-black w-[13.3rem] mb-6" />
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onClick={() => toggleDropdown('dropdown4')}
                className="text-customText text-[1.25rem] font-victor-serif flex items-center hover:text-customHover"
              >
                Accessories
                <FaChevronDown
                  className={`ml-1 text-[0.875rem] transition-transform duration-300 ${activeDropdown === 'dropdown4' ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </a>
              {activeDropdown === 'dropdown4' && (
                <div
                  className="absolute left-0 right-0 top-full mt-2 h-[21rem] bg-customBG shadow-lg p-6 flex justify-between w-screen z-50 -ml-[calc((63vw-100%)/2)]"
                  ref={dropdownRef}
                >
                  <div className="grid grid-cols-4 gap-4 w-full text-lg text-black px-14">
                    <div>
                      <h3 className="font-bold text-[1rem] mb-4">Interior</h3>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[2.9rem] hover:border-customHover whitespace-nowrap">Tables</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.8rem] hover:border-customHover whitespace-nowrap">Wall decoration</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Terrariums</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[4.7rem] hover:border-customHover whitespace-nowrap">Terrariums</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6rem] hover:border-customHover whitespace-nowrap">Terrarium kits</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8rem] hover:border-customHover whitespace-nowrap">DIY terrarium tools</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Candles</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[7.3rem] hover:border-customHover whitespace-nowrap">Scented Candles</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.5rem] hover:border-customHover whitespace-nowrap">Dinner Candles</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6rem] hover:border-customHover whitespace-nowrap">Pillar Candles</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.5rem] hover:border-customHover whitespace-nowrap">Fun Candles</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[6.5rem] hover:border-customHover whitespace-nowrap">Candle Holders</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[13.5rem] hover:border-customHover whitespace-nowrap">All Candles and Candle Holders</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[1rem] mb-4">Others</h4>
                      <ul className="space-y-2">
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[2.7rem] hover:border-customHover whitespace-nowrap">Books</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[5.5rem] hover:border-customHover whitespace-nowrap">Plantbuddies</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[1.5rem] hover:border-customHover whitespace-nowrap">DIY</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8.7rem] hover:border-customHover whitespace-nowrap">PLNTS merchandise</li>
                        <li className="list-none text-[0.9rem] hover:text-customHover hover:border-b w-[8.9rem] hover:border-customHover whitespace-nowrap">Greenhouse Cabinet</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[27rem] h-[262px] pr-10">
                    <img
                      src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FAccessories_9973f9db40.jpg&w=640&q=75"
                      alt=""
                      className="w-full h-auto"
                    />
                    <h2 className="text-black text-[0.9rem] mt-2">Shop the newest accessories</h2>
                    <hr className="border-black w-[13.3rem] mb-6" />
                  </div>
                </div>
              )}
            </div>
            <Link href="/gifts" className="text-customText text-[1.25rem] font-victor-serif hover:text-customHover">
              Gifts
            </Link>
            <a href="#" className="text-customPLNTS text-[1.25rem] font-victor-serif hover:text-customHoverPLNTS">
              PLNTS Week
            </a>
          </div>

          <div className="flex space-x-6 items-center">
            <a href="#" className="text-customText text-[1.25rem] font-victor-serif hover:text-customHover">
              Inspiration
            </a>
            <a href="#" className="text-customText text-[1.25rem] font-victor-serif hover:text-customHover">
              PLNTS Doctor
            </a>
            <span
              className="text-customText text-[1.25rem] font-victor-serif flex items-center cursor-pointer hover:text-customHover"
              onClick={() => toggleDropdown('languageDropdown')}
            >
              {selectedLanguage === 'en' ? 'English (EN)' : 'Deutsch (DE)'}
              <FaChevronDown
                className={`ml-1 text-[0.875rem] transition-transform duration-300 ${activeDropdown === 'languageDropdown' ? 'rotate-180' : 'rotate-0'
                  }`}
              />
            </span>
            {activeDropdown === 'languageDropdown' && (
              <div
                ref={dropdownRef}
                className="absolute right-8 top-[7rem] z-[60] overflow-auto rounded-lg bg-main-menu shadow-lg ring-1 ring-black/5 focus:outline-none bg-customBG"
              >
                {[
                  { label: 'English (EN)', code: 'en' },
                  { label: 'Deutsch (DE)', code: 'de' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleLanguageChange(item.code)}
                  >
                    <span className="flex-grow">{item.label}</span>
                    {selectedLanguage === item.code && <span className="text-customText">✓</span>}
                  </div>
                ))}
              </div>
            )}

            <h1>{translations.greeting}</h1>
            <a
              href="#"
              className="text-customText text-[1.25rem] font-victor-serif hover:text-customHover"
            >
              {translations.gifts}
            </a>
          </div>
        </nav>
      </header>
      {isAddCartOpen && <AddCart toggleSidebar={toggleAddCart} />}

      {isMobileSidebarOpen && <CartSidebar toggleSidebar={toggleMobileSidebar} />}

      {isDesktopSidebarOpen && <Sidebar toggleSidebar={toggleDesktopSidebar} />}
    </>
  );
};