'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TbEditCircle } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';
import { LiaEye } from 'react-icons/lia';
import { FiX } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admintab() {
  const [giftcards, setGiftcards] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedGiftcard, setSelectedGiftcard] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
      localStorage.setItem('giftcards', JSON.stringify(response.data.giftcards));
    } catch (error) {
      console.error('Error fetching giftcards:', error);
    }
  };

  useEffect(() => {
    const storedGiftcards = JSON.parse(localStorage.getItem('giftcards'));
    if (storedGiftcards) {
      setGiftcards(storedGiftcards);
    } else {
      fetchGiftcards();
    }
  }, []);

  const openViewModal = (giftcard) => {
    setSelectedGiftcard(giftcard);
    setIsViewModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedGiftcard(null);
    document.body.style.overflow = 'auto';
  };

  const openEditModal = (giftcard) => {
    setSelectedGiftcard(giftcard);
    setIsEditModalOpen(true);
    document.body.style.overflow = 'hidden';
    setFormData({
      title: giftcard?.title || '',
      description: giftcard?.description || '',
      image: null,
      price: giftcard?.price || '',
      size: giftcard?.size || '',
    });
    setPreviewImage(giftcard?.image || null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedGiftcard(null);
    setPreviewImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleCreateOrUpdate = async () => {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      let response;
      if (selectedGiftcard) {
        response = await axios.put(
          `http://localhost:3001/api/giftcards/${selectedGiftcard._id}`,
          form
        );
        setGiftcards((prev) =>
          prev.map((gift) =>
            gift._id === response.data.giftcard._id ? response.data.giftcard : gift
          )
        );
        toast.success("Giftcard successfully updated!"); 
      } else {
        response = await axios.post('http://localhost:3001/api/giftcards', form);
        const newGiftcard = response.data.giftcard;

        setGiftcards((prev) => [...prev, newGiftcard]);
        const updatedGiftcards = [...giftcards, newGiftcard];
        localStorage.setItem('giftcards', JSON.stringify(updatedGiftcards));
        toast.success("Giftcard successfully added!"); 
      }
      closeEditModal();
    } catch (error) {
      console.error('Error during operation:', error);
      toast.error("An error occurred while saving the giftcard."); 
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/giftcards/${id}`);
      setGiftcards((prev) => {
        const updatedGiftcards = prev.filter((giftcard) => giftcard._id !== id);
        localStorage.setItem('giftcards', JSON.stringify(updatedGiftcards));
        toast.success("Giftcard successfully deleted!"); 
        return updatedGiftcards;
      });
    } catch (error) {
      console.error('Error deleting giftcard:', error);
      toast.error("An error occurred while deleting the giftcard.");
    }
  };

  return (
    <div className="p-8">
      <ToastContainer />
      <button
        className="bg-[#EADAC4] text-white px-4 py-2 mb-4"
        onClick={() => openEditModal()}
      >
        + Create
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
              <td className="border border-gray-300 p-2">
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <LiaEye
                    className="text-black cursor-pointer"
                    size={24}
                    onClick={() => openViewModal(giftcard)}
                  />
                  <TbEditCircle
                    className="text-black cursor-pointer"
                    size={24}
                    onClick={() => openEditModal(giftcard)}
                  />
                  <AiOutlineDelete
                    className="text-black cursor-pointer"
                    size={24}
                    onClick={() => handleDelete(giftcard._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isViewModalOpen && selectedGiftcard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-customBackground p-8 rounded-lg shadow-lg w-96 border-2 border-customText bg-background relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Giftcard Details</h2>
              <FiX className="cursor-pointer" size={24} onClick={closeViewModal} />
            </div>
            <p><strong>Title:</strong> {selectedGiftcard.title}</p>
            <p><strong>Description:</strong> {selectedGiftcard.description}</p>
            <p><strong>Price:</strong> €{selectedGiftcard.price}</p>
            <p><strong>Size:</strong> {selectedGiftcard.size}</p>
            <img
              src={selectedGiftcard.image}
              alt="Giftcard"
              className="w-full h-32 object-cover mt-2"
            />
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-customBackground p-8 rounded-lg shadow-lg w-96 border-2 border-customText bg-background relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">
                {selectedGiftcard ? 'Edit Giftcard' : 'Create Giftcard'}
              </h2>
              <FiX className="cursor-pointer" size={24} onClick={closeEditModal} />
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
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-32 object-cover mb-2"
              />
            )}
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
              className="bg-[#EADAC4] text-white px-4 py-2 rounded w-full"
              onClick={handleCreateOrUpdate}
            >
              {selectedGiftcard ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
