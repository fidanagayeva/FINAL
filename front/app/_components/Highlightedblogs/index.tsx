'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Inspiration {
  _id: string;
  titles: string[];
  mainImage: string;
}

export default function HighlightedBlogs() {
  const [data, setData] = useState<Inspiration[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    fetch('http://localhost:3001/api/inspirations')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching inspirations:', error));
  }, []);

  const handleImageClick = (id: string) => {
    router.push(`/blog/${id}`); 
  };

  return (
    <div className="flex flex-col items-center p-10 space-y-10">
      <h1 className="text-4xl md:text-7xl font-serif text-customText text-center">
        Growing happiness
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.slice(0, 2).map((item) => (
          <div
            key={item._id}
            className="relative overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleImageClick(item._id)}
          >
            <img
              src={item.mainImage}
              alt={item.titles[0]}
              className="w-[23rem] h-[20rem] object-cover"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded">
              <h2 className="text-white text-sm md:text-xl font-bold">
                {item.titles[0]}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
