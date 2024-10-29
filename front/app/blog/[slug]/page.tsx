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

  return (
    <Layout>
      <Info />
      <div className="p-10">
        <h1 className="text-4xl font-bold">{inspiration.titles[0]}</h1>
        <img src={inspiration.mainImage} alt={inspiration.titles[0]} className="mt-5 w-full h-auto object-cover" />
        <div className="mt-5">
          {inspiration.texts.map((text, index) => (
            <p key={index} className="mb-3">{text}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {inspiration.optionalImages.map((image, index) => (
            <img key={index} src={image} alt={`Optional ${index + 1}`} className="w-full h-auto object-cover" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
