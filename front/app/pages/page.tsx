import Layout from "../_featured/layout/layout";
import { Inter } from "next/font/google";
import Link from 'next/link';

const Car = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-customText"
    viewBox="0 0 74.84 74.84"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M50.92,34.93v-18.48c0-.9-.73-1.63-1.63-1.63H14.48c-.9,0-1.63.73-1.63,1.63v3.84" />
    <path d="M12.85,39.23v3.8c0,.9.73,1.64,1.64,1.64h56.53c.9,0,1.64-.73,1.64-1.64v-11.87c0-.5-.23-.98-.63-1.29l-10.22-7.99c-.29-.23-.64-.35-1.01-.35h-2.76c-.9,0-1.64.73-1.64,1.64v10.12c0,.9.73,1.64,1.64,1.64h9.13" />
    <line x1="4.6" y1="34.29" x2="20.85" y2="34.29"></line>
    <line x1="4.85" y1="25.34" x2="21.21" y2="25.34"></line>
    <line x1="2.18" y1="29.85" x2="18.44" y2="29.85"></line>
    <circle cx="21.62" cy="55.25" r="4.77"></circle>
    <circle cx="63.85" cy="54.83" r="4.77"></circle>
  </svg>
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-background ${inter.className}`}
      >
        <div className="relative w-full flex flex-col items-start my-[10rem]">
          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-customText rounded-full flex items-center justify-center"></div>
            </div>

            <div className="relative w-full h-0.5 bg-customText flex-grow">
              <div className="absolute left-1/2 top-[-3.1rem] transform -translate-x-1/2">
                <Car />
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-customText rounded-full flex items-center justify-center"></div>
            </div>

            <div className="w-full h-0.5 bg-customText flex-grow"></div>

            <div className="flex items-center">
              <div className="w-6 h-6 border-2 border-customText rounded-full flex items-center justify-center"></div>
            </div>
          </div>

          <Link href="/cart">
            <div className="flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-customText"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>

              <p className="text-customText text-[1rem]">Back to shopping cart</p>
            </div>
          </Link>
        </div>

        <a
          href="https://buy.stripe.com/test_fZe8xA16l4U09byaEE"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"  
        >
          Buy Now
        </a>
      </main>
    </Layout>
  );
}
