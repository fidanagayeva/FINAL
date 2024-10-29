"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Layout from "../../_featured/layout/layout";
import Info from "../../_components/Info/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Inspiration {
  _id: string;
  titles: string[];
  texts: string[];
  mainImage: string;
  optionalImages: string[];
}

export default function InspirationDetail() {
  const { slug } = useParams();
  const [inspiration, setInspiration] = useState<Inspiration | null>(null);

  useEffect(() => {
    console.log('Slug:', slug);
    if (slug) {
      fetch(`http://localhost:3001/api/inspirations/${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          return response.json();
        })
        .then((data) => setInspiration(data))
        .catch((error) => console.error('Error fetching inspiration:', error));
    }
  }, [slug]);

  if (!inspiration) {
    return null;
  }

  const repeatedItems = inspiration.titles.map((title, index) => ({
    title,
    text: inspiration.texts[index],
    optionalImages: inspiration.optionalImages.slice(index * 2, index * 2 + 2),
  }));

  return (
    <Layout>
      <Info />

      <div className="bg-customBG">
        <div className="w-full">
          <img
            src={inspiration.mainImage}
            alt="Main Image"
            className="w-full h-[22rem] object-cover"
          />
        </div>

        <div className="relative px-[2rem] lg:px-[10rem] mt-[-5rem] lg:mt-[-12.5rem]">
          <div className="bg-customBG px-5 lg:px-10 mt-10 mx-2 lg:mx-5 z-10 relative">
            <div>
              <p className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 py-7 text-customText">
                <span>Inspiration</span>
                <span>5 minute read</span>
              </p>
            </div>
            {repeatedItems.map((item, index) => (
              <div key={index} className="px-5 lg:px-20 py-5 lg:py-10 text-customText">
                <h1 className="text-3xl lg:text-5xl font-victor-serif font-semibold mb-5">
                  {item.title}
                </h1>
                <p className="mt-2 mb-5">{item.text}</p>

                <div className="flex flex-col gap-4 items-center">
                  {item.optionalImages.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full flex justify-center">
                      <img
                        src={image}
                        alt={`Optional ${imgIndex + 1}`}
                        className="w-full lg:w-[47rem] h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-10">
          <div className="text-center mb-5">
            <h2 className="text-3xl lg:text-5xl font-semibold font-victor-serif text-customText">
              More about Inspiration
            </h2>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className="flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-0"
          >
            {inspiration.optionalImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-full max-w-[20rem] sm:max-w-[30rem] h-auto object-cover mb-10"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
