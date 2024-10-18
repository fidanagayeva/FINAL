const Giftcard = require('../models/giftcards');

exports.createGiftcard = async (req, res) => {
    try {
      const { title, 
      description, 
      image, 
      price, 
      text1, 
      text2, 
      size, 
      characteristics, 
      color, 
      location, 
      material, 
      plantFamily, 
      diameter, 
      height, 
      room, 
      shape, 
      standing, 
      style, 
      waterCare } = req.body;
  
      if (!title || !image) {
        return res.status(400).json({ message: 'Bütün tələb olunan sahələri doldurun: title, image.' });
      }
  
      const giftcard = new Giftcard({ title, 
      description, 
      image, 
      price, 
      text1, 
      text2, 
      size, 
      characteristics, 
      color, 
      location, 
      material, 
      plantFamily, 
      diameter, 
      height, 
      room, 
      shape, 
      standing, 
      style, 
      waterCare });
      await giftcard.save();
  
      res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Error creating giftcard', error });
    }
  };

exports.getGiftcards = async (req, res) => {
  try {
    const giftcards = await Giftcard.find();
    res.status(200).json(giftcards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching giftcards', error });
  }
};


exports.deleteGiftcard = async (req, res) => {
  try {
    const { id } = req.params;
    await Giftcard.findByIdAndDelete(id);
    res.status(200).json({ message: 'Giftcard deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting giftcard', error });
  }
};


exports.getGiftcards = async (req, res) => {
    try {
      const { page = 1 } = req.query;
      const limitNumber = 20; 
  
      const pageNumber = parseInt(page, 10);
  
      const skip = (pageNumber - 1) * limitNumber;
  
      const giftcards = await Giftcard.find()
        .skip(skip) 
        .limit(limitNumber); 

      const totalGiftcards = await Giftcard.countDocuments();
  
      const totalPages = Math.ceil(totalGiftcards / limitNumber);
  
      res.status(200).json({ 
        totalPages, 
        currentPage: pageNumber, 
        giftcards 
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching giftcards', error });
    }
  };
  

// controllers/giftcards.js
exports.getGiftcardById = async (req, res) => {
    try {
        const giftcard = await Giftcard.findById(req.params.id); // ID ilə kartı tapın
        if (!giftcard) {
            return res.status(404).json({ message: "Gift card not found" });
        }
        res.status(200).json(giftcard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching giftcard', error });
    }
};