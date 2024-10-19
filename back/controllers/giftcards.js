// const Giftcard = require('../models/giftcards');

// exports.createGiftcard = async (req, res) => {
//     try {
//         const { 
//             title, 
//             description, 
//             image, 
//             price, 
//             text1, 
//             text2, 
//             size, 
//             characteristics, 
//             color, 
//             location, 
//             material, 
//             plantFamily, 
//             diameter, 
//             height, 
//             room, 
//             shape, 
//             standing, 
//             style, 
//             waterCare 
//         } = req.body;

//         if (!title || !image) {
//             return res.status(400).json({ message: 'Bütün tələb olunan sahələri doldurun: title, image.' });
//         }

//         const giftcard = new Giftcard({ 
//             title, 
//             description, 
//             image, 
//             price, 
//             text1, 
//             text2, 
//             size, 
//             characteristics, 
//             color, 
//             location, 
//             material, 
//             plantFamily, 
//             diameter, 
//             height, 
//             room, 
//             shape, 
//             standing, 
//             style, 
//             waterCare 
//         });
//         await giftcard.save();

//         res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error creating giftcard', error });
//     }
// };

// exports.getGiftcards = async (req, res) => {
//     try {
//         const { page = 1, price, size, characteristics, color, location, material, plantFamily, room, shape, standing, style, waterCare } = req.query;
//         const limitNumber = 20;

//         const pageNumber = parseInt(page, 10);
//         const skip = (pageNumber - 1) * limitNumber;

//         const filter = {};


//         if (price) filter.price = price;
//         if (size) filter.size = { $in: size.split(',') }; 
//         if (characteristics) filter.characteristics = { $in: characteristics.split(',') }; 
//         if (color) filter.color = { $in: color.split(',') }; 
//         if (location) filter.location = { $in: location.split(',') }; 
//         if (material) filter.material = { $in: material.split(',') }; 
//         if (plantFamily) filter.plantFamily = { $in: plantFamily.split(',') }; 
//         if (room) filter.room = { $in: room.split(',') }; 
//         if (shape) filter.shape = { $in: shape.split(',') }; 
//         if (standing) filter.standing = { $in: standing.split(',') }; 
//         if (style) filter.style = { $in: style.split(',') }; 
//         if (waterCare) filter.waterCare = { $in: waterCare.split(',') };

//         const giftcards = await Giftcard.find(filter)
//             .skip(skip)
//             .limit(limitNumber);

//         const totalGiftcards = await Giftcard.countDocuments(filter);

//         const totalPages = Math.ceil(totalGiftcards / limitNumber);

//         res.status(200).json({ 
//             totalPages, 
//             currentPage: pageNumber, 
//             giftcards 
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching giftcards', error });
//     }
// };

// exports.deleteGiftcard = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Giftcard.findByIdAndDelete(id);
//         res.status(200).json({ message: 'Giftcard deleted successfully!' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting giftcard', error });
//     }
// };

// exports.getGiftcardById = async (req, res) => {
//     try {
//         const giftcard = await Giftcard.findById(req.params.id);
//         if (!giftcard) {
//             return res.status(404).json({ message: "Gift card not found" });
//         }
//         res.status(200).json(giftcard);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching giftcard', error });
//     }
// };






















const Giftcard = require('../models/giftcards');


exports.createGiftcard = async (req, res) => {
  try {
    const { 
      title, 
      description, 
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
      waterCare 
    } = req.body;

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !image) {
      return res.status(400).json({ message: 'Bütün tələb olunan sahələri doldurun: title, image.' });
    }

    const giftcard = new Giftcard({
      title, 
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
      waterCare 
    });

    await giftcard.save();

    res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
  } catch (error) {
    console.error('Error creating giftcard:', error);
    res.status(500).json({ message: 'Error creating giftcard', error });
  }
};

exports.getGiftcards = async (req, res) => {
  try {
    const { 
      page = 1, 
      price, 
      size, 
      characteristics, 
      color, 
      location, 
      material, 
      plantFamily, 
      room, 
      shape, 
      standing, 
      style, 
      waterCare 
    } = req.query;

    const limitNumber = 20;
    const pageNumber = parseInt(page, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const filter = {};

    if (price) filter.price = price;
    if (size) filter.size = { $in: size.split(',') };
    if (characteristics) filter.characteristics = { $in: characteristics.split(',') };
    if (color) filter.color = { $in: color.split(',') };
    if (location) filter.location = { $in: location.split(',') };
    if (material) filter.material = { $in: material.split(',') };
    if (plantFamily) filter.plantFamily = { $in: plantFamily.split(',') };
    if (room) filter.room = { $in: room.split(',') };
    if (shape) filter.shape = { $in: shape.split(',') };
    if (standing) filter.standing = { $in: standing.split(',') };
    if (style) filter.style = { $in: style.split(',') };
    if (waterCare) filter.waterCare = { $in: waterCare.split(',') };

    const giftcards = await Giftcard.find(filter).skip(skip).limit(limitNumber);
    const totalGiftcards = await Giftcard.countDocuments(filter);
    const totalPages = Math.ceil(totalGiftcards / limitNumber);

    res.status(200).json({ totalPages, currentPage: pageNumber, giftcards });
  } catch (error) {
    console.error('Error fetching giftcards:', error);
    res.status(500).json({ message: 'Error fetching giftcards', error });
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

exports.getGiftcardById = async (req, res) => {
  try {
    const giftcard = await Giftcard.findById(req.params.id);
    if (!giftcard) {
      return res.status(404).json({ message: 'Gift card not found' });
    }
    res.status(200).json(giftcard);
  } catch (error) {
    console.error('Error fetching giftcard:', error);
    res.status(500).json({ message: 'Error fetching giftcard', error });
  }
};
