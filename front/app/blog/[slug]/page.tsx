"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Layout from "../../_featured/layout/layout";
import Info from "../../_components/Info/index";

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
      <div className="p-10">
        {repeatedItems.map((item, index) => (
          <div key={index} className="mb-10"> 
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <p className="mt-2 mb-5">{item.text}</p>
            <div className="grid grid-cols-2 gap-4">
              {item.optionalImages.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Optional ${imgIndex + 1}`} className="w-full h-auto object-cover" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
