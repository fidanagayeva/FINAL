const Giftcard = require('../models/giftcards');
const path = require('path');

exports.createGiftcard = async (req, res) => {
  try {
    const { title, description, price, size } = req.body;

    const image = req.file
      ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
      : null;

    if (!title || !price || !image) {
      return res.status(400).json({ message: 'Title, price və image daxil edin.' });
    }

    const giftcard = new Giftcard({
      title,
      description,
      image,
      price,
      size,
    });

    await giftcard.save();
    res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
  } catch (error) {
    console.error('Error creating giftcard:', error);
    res.status(500).json({ message: 'Error creating giftcard', error });
  }
};

exports.updateGiftcard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, size } = req.body;

    let image = req.body.image;
    if (req.file) {
      image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    const updatedGiftcard = await Giftcard.findByIdAndUpdate(
      id,
      { title, description, price, size, image },
      { new: true }
    );

    if (!updatedGiftcard) {
      return res.status(404).json({ message: 'Giftcard not found' });
    }

    res.status(200).json({ message: 'Giftcard updated successfully!', giftcard: updatedGiftcard });
  } catch (error) {
    console.error('Error updating giftcard:', error);
    res.status(500).json({ message: 'Error updating giftcard', error });
  }
};

exports.getGiftcards = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const limitNumber = 20;
    const skip = (page - 1) * limitNumber;

    const giftcards = await Giftcard.find().skip(skip).limit(limitNumber);
    const totalGiftcards = await Giftcard.countDocuments();
    const totalPages = Math.ceil(totalGiftcards / limitNumber);

    res.status(200).json({ totalPages, currentPage: page, giftcards });
  } catch (error) {
    console.error('Error fetching giftcards:', error);
    res.status(500).json({ message: 'Error fetching giftcards', error });
  }
};

exports.getGiftcardById = async (req, res) => {
  try {
    const { id } = req.params;
    const giftcard = await Giftcard.findById(id);

    if (!giftcard) {
      return res.status(404).json({ message: 'Giftcard not found' });
    }

    res.status(200).json(giftcard);
  } catch (error) {
    console.error('Error fetching giftcard:', error);
    res.status(500).json({ message: 'Error fetching giftcard', error });
  }
};

exports.deleteGiftcard = async (req, res) => {
  try {
    const { id } = req.params;
    await Giftcard.findByIdAndDelete(id);
    res.status(200).json({ message: 'Giftcard deleted successfully!' });
  } catch (error) {
    console.error('Error deleting giftcard:', error);
    res.status(500).json({ message: 'Error deleting giftcard', error });
  }
};
