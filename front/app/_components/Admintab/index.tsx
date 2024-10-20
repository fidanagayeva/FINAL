'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TbEditCircle } from 'react-icons/tb'; 
import { AiOutlineDelete } from 'react-icons/ai'; 
import { FiX } from 'react-icons/fi'; 

export default function Admintab() {
  const [giftcards, setGiftcards] = useState([]); // State-də saxlanılan məlumatlar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGiftcard, setEditingGiftcard] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    price: '',
    size: '',
  });

  // **Backend-dən məlumatları gətir və setGiftcards ilə state-ə yaz**
  const fetchGiftcards = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/giftcards');
      console.log('Fetched Giftcards:', response.data.giftcards); // Gələn datanı yoxlayırıq
      setGiftcards(response.data.giftcards);
    } catch (error) {
      console.error('Error fetching giftcards:', error);
    }
  };

  // **Səhifə hər yenilənəndə backend-dən data gətir**
  useEffect(() => {
    fetchGiftcards();
  }, []); // Komponent yükləndikdə bir dəfə işləyir

  const openModal = (giftcard = null) => {
    setEditingGiftcard(giftcard);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    setFormData(
      giftcard || { title: '', description: '', image: null, price: '', size: '' }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingGiftcard(null);
    document.body.style.overflow = 'auto';
    setFormData({
      title: '',
      description: '',
      image: null,
      price: '',
      size: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleCreateOrUpdate = async () => {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      let response;
      if (editingGiftcard) {
        response = await axios.put(
          `http://localhost:3001/api/giftcards/${editingGiftcard._id}`,
          form
        );
        setGiftcards((prev) =>
          prev.map((gift) =>
            gift._id === response.data.giftcard._id ? response.data.giftcard : gift
          )
        );
      } else {
        response = await axios.post('http://localhost:3001/api/giftcards', form);
        setGiftcards((prev) => [...prev, response.data.giftcard]); 
      }
      closeModal();
    } catch (error) {
      console.error('Error during operation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/giftcards/${id}`);
      setGiftcards((prev) => prev.filter((giftcard) => giftcard._id !== id));
    } catch (error) {
      console.error('Error deleting giftcard:', error);
    }
  };

  return (
    <div className="p-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => openModal()}
      >
        + Create Giftcard
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Size</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {giftcards.map((giftcard) => (
            <tr key={giftcard._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{giftcard.title}</td>
              <td className="border border-gray-300 p-2">{giftcard.description}</td>
              <td className="border border-gray-300 p-2">
  <img
    src={giftcard.image}
    alt="Giftcard"
    className="w-16 h-16 object-cover"
    onError={(e) => (e.target.src = '/fallback-image.jpg')}
  />
</td>
              <td className="border border-gray-300 p-2">{giftcard.price}</td>
              <td className="border border-gray-300 p-2">{giftcard.size}</td>
              <td className="border border-gray-300 p-2 flex items-center space-x-2">
                <TbEditCircle
                  className="text-blue-500 cursor-pointer"
                  size={24}
                  onClick={() => openModal(giftcard)}
                />
                <AiOutlineDelete
                  className="text-red-500 cursor-pointer"
                  size={24}
                  onClick={() => handleDelete(giftcard._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-customBackground p-8 rounded-lg shadow-lg w-96 border-2 border-customText relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">
                {editingGiftcard ? 'Edit Giftcard' : 'Create Giftcard'}
              </h2>
              <FiX
                className="text-red-500 cursor-pointer"
                size={24}
                onClick={closeModal}
              />
            </div>
            <input
              className="w-full mb-2 p-2 border rounded"
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <textarea
              className="w-full mb-2 p-2 border rounded"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              type="file"
              onChange={handleFileChange}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              type="text"
              name="size"
              placeholder="Size"
              value={formData.size}
              onChange={handleChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              onClick={handleCreateOrUpdate}
            >
              {editingGiftcard ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
