// const Giftcard = require('../models/giftcards');
// const path = require('path');

// exports.createGiftcard = async (req, res) => {
//   try {
//     const {
//       title, description, price, text1, text2, size, characteristics, color,
//       location, material, plantFamily, diameter, height, room, shape,
//       standing, style, waterCare
//     } = req.body;

//     const image = req.file
//       ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
//       : null;

//     if (!title || !price || !image) {
//       return res.status(400).json({ message: 'Bütün tələb olunan sahələri doldurun: title, price və image.' });
//     }

//     const giftcard = new Giftcard({
//       title, description, image, price, text1, text2, size, characteristics, color,
//       location, material, plantFamily, diameter, height, room, shape,
//       standing, style, waterCare
//     });

//     await giftcard.save();
//     res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
//   } catch (error) {
//     console.error('Error creating giftcard:', error);
//     res.status(500).json({ message: 'Error creating giftcard', error });
//   }
// };

// exports.getGiftcards = async (req, res) => {
//   try {
//     const { page = 1, price, size, characteristics, color, location, material, 
//       plantFamily, room, shape, standing, style, waterCare } = req.query;

//     const limitNumber = 20;
//     const pageNumber = parseInt(page, 10);
//     const skip = (pageNumber - 1) * limitNumber;

//     const filter = {};
//     if (price) filter.price = price;
//     if (size) filter.size = { $in: size.split(',') };
//     if (characteristics) filter.characteristics = { $in: characteristics.split(',') };
//     if (color) filter.color = { $in: color.split(',') };
//     if (location) filter.location = { $in: location.split(',') };
//     if (material) filter.material = { $in: material.split(',') };
//     if (plantFamily) filter.plantFamily = { $in: plantFamily.split(',') };
//     if (room) filter.room = { $in: room.split(',') };
//     if (shape) filter.shape = { $in: shape.split(',') };
//     if (standing) filter.standing = { $in: standing.split(',') };
//     if (style) filter.style = { $in: style.split(',') };
//     if (waterCare) filter.waterCare = { $in: waterCare.split(',') };

//     const giftcards = await Giftcard.find(filter).skip(skip).limit(limitNumber);
//     const totalGiftcards = await Giftcard.countDocuments(filter);
//     const totalPages = Math.ceil(totalGiftcards / limitNumber);

//     res.status(200).json({ totalPages, currentPage: pageNumber, giftcards });
//   } catch (error) {
//     console.error('Error fetching giftcards:', error);
//     res.status(500).json({ message: 'Error fetching giftcards', error });
//   }
// };

// exports.getGiftcardById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const giftcard = await Giftcard.findById(id);

//     if (!giftcard) {
//       return res.status(404).json({ message: 'Giftcard not found' });
//     }

//     res.status(200).json(giftcard);
//   } catch (error) {
//     console.error('Error fetching giftcard:', error);
//     res.status(500).json({ message: 'Error fetching giftcard', error });
//   }
// };

// exports.deleteGiftcard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Giftcard.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Giftcard deleted successfully!' });
//   } catch (error) {
//     console.error('Error deleting giftcard:', error);
//     res.status(500).json({ message: 'Error deleting giftcard', error });
//   }
// };






















const Giftcard = require('../models/giftcards');
const path = require('path');

// Yeni giftcard yaratmaq
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

// Mövcud giftcard-ı yeniləmək (PUT metodu)
exports.updateGiftcard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, size } = req.body;

    let image = req.body.image; // Mövcud image
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

// Bütün giftcard-ları əldə etmək
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

// İD ilə bir giftcard əldə etmək
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

// Giftcard silmək
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
