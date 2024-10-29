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

        <div className="px-[10rem] mt-[-12.5rem] relative">
          <div className="bg-customBG px-10 mt-10 mx-5 z-10 relative">
            <div>
              <p className="flex justify-between items-center w-full px-20 py-7 text-customText">
                <span>Inspiration</span>
                <span>5 minute read</span>
              </p>
            </div>
            {repeatedItems.map((item, index) => (
              <div key={index} className="px-20 py-10 text-customText">
                <h1 className="text-5xl font-victor-serif font-semibold mb-5">
                  {item.title}
                </h1>
                <p className="mt-2 mb-5">{item.text}</p>

                <div className="flex flex-col gap-4 items-center">
                  {item.optionalImages.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full flex justify-center">
                      <img
                        src={image}
                        alt={`Optional ${imgIndex + 1}`}
                        className="w-[47rem] h-[27rem] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-10">
          <div className="text-center mb-5 mr-[17rem]">
            <h2 className="text-5xl font-semibold font-victor-serif text-customText">More about Inspiration</h2>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className="flex justify-center items-center"
          >
            {inspiration.optionalImages.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-[47rem] h-[20rem] object-cover mb-10"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
