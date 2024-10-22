// const Salecard = require('../models/salecards');

// exports.createSalecard = async (req, res) => {
//   const { title, description, image, text1, price, price2, size, sale } = req.body;

//   if (!title || !image || !text1 || price === undefined || !size || sale === undefined) {
//     return res.status(400).json({ message: 'Title, image, text1, price, size, and sale are required.' });
//   }

//   try {
//     const newSalecard = new Salecard({
//       title,
//       description,
//       image,
//       text1,
//       price,
//       price2,
//       size,
//       sale,
//       ...req.body, 
//     });

//     const savedSalecard = await newSalecard.save();
//     res.status(201).json(savedSalecard);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getSalecards = async (req, res) => {
//   try {
//     const salecards = await Salecard.find();
//     res.status(200).json(salecards);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteSalecard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedSalecard = await Salecard.findByIdAndDelete(id);

//     if (!deletedSalecard) {
//       return res.status(404).json({ message: 'Salecard not found.' });
//     }

//     res.status(200).json({ message: 'Salecard deleted successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };







const Salecard = require('../models/salecards');

// Yeni Salecard yaratmaq üçün controller
exports.createSalecard = async (req, res) => {
  const { title, description, image, text1, price, price2, size, sale } = req.body;

  // Bütün lazım olan məlumatların olub olmadığını yoxlayır
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
      ...req.body, // Əlavə məlumatları daxil etmək üçün yayma operatoru
    });

    const savedSalecard = await newSalecard.save();
    res.status(201).json(savedSalecard); // Uğurlu əməliyyat zamanı JSON qaytarır
  } catch (error) {
    res.status(500).json({ message: error.message }); // Xəta mesajını qaytarır
  }
};

// Bütün Salecard-ları əldə etmək üçün controller
exports.getSalecards = async (req, res) => {
  try {
    const salecards = await Salecard.find(); // Bütün kartları bazadan gətirir
    res.status(200).json(salecards); // JSON formatında qaytarır
  } catch (error) {
    res.status(500).json({ message: error.message }); // Xəta mesajını qaytarır
  }
};

// ID ilə tək Salecard-ı əldə etmək üçün controller
exports.getSalecardById = async (req, res) => {
  try {
    const { id } = req.params; // ID-ni URL-dən götürür
    const salecard = await Salecard.findById(id); // Verilən ID-yə görə məlumatları gətirir

    if (!salecard) {
      return res.status(404).json({ message: 'Salecard tapılmadı.' });
    }

    res.status(200).json(salecard); // Tapılan kartı JSON formatında qaytarır
  } catch (error) {
    res.status(500).json({ message: error.message }); // Xəta mesajını qaytarır
  }
};

// Salecard silmək üçün controller
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
