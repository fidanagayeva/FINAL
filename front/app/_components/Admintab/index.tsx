'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admintab() {
  const [giftcards, setGiftcards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGiftcard, setEditingGiftcard] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null, 
    price: '',
    size: '',
  });

  const fetchGiftcards = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/giftcards');
      setGiftcards(response.data.giftcards);
    } catch (error) {
      console.error('Error fetching giftcards:', error);
    }
  };

  useEffect(() => {
    fetchGiftcards();
  }, []);

  const openModal = (giftcard = null) => {
    setEditingGiftcard(giftcard);
    setIsModalOpen(true);
    setFormData(
      giftcard || { title: '', description: '', image: null, price: '', size: '' }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingGiftcard(null);
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
                <img src={giftcard.image} alt="Giftcard" className="w-16 h-16" />
              </td>
              <td className="border border-gray-300 p-2">{giftcard.price}</td>
              <td className="border border-gray-300 p-2">{giftcard.size}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => openModal(giftcard)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(giftcard._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">
              {editingGiftcard ? 'Edit Giftcard' : 'Create Giftcard'}
            </h2>
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
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleCreateOrUpdate}
              >
                {editingGiftcard ? 'Update' : 'Create'}
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
