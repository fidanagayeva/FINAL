const Salecard = require('../models/salecards');

exports.createSalecard = async (req, res) => {
  const { title, description, image, text1, price, price2, size, sale } = req.body;

  if (!title || !image || !text1 || price === undefined || !size || sale === undefined) {
    return res.status(400).json({ 
      message: 'Title, image, text1, price, size, və sale daxil edilməlidir.' 
    });
  }

  try {
    const newSalecard = new Salecard({
      title,
      description,
      image,
      text1,
      price,
      price2,
      size,
      sale,
      ...req.body, 
    });

    const savedSalecard = await newSalecard.save();
    res.status(201).json(savedSalecard); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.getSalecards = async (req, res) => {
  try {
    const salecards = await Salecard.find(); 
    res.status(200).json(salecards); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.getSalecardById = async (req, res) => {
  try {
    const { id } = req.params; 
    const salecard = await Salecard.findById(id); 

    if (!salecard) {
      return res.status(404).json({ message: 'Salecard tapılmadı.' });
    }

    res.status(200).json(salecard); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.deleteSalecard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSalecard = await Salecard.findByIdAndDelete(id);

    if (!deletedSalecard) {
      return res.status(404).json({ message: 'Salecard tapılmadı.' });
    }

    res.status(200).json({ message: 'Salecard uğurla silindi.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
