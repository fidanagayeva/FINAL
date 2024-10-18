// const Giftcard = require('../models/giftcards');

// exports.createGiftcard = async (req, res) => {
//     try {
//       const { title, 
//       description, 
//       image, 
//       price, 
//       text1, 
//       text2, 
//       size, 
//       characteristics, 
//       color, 
//       location, 
//       material, 
//       plantFamily, 
//       diameter, 
//       height, 
//       room, 
//       shape, 
//       standing, 
//       style, 
//       waterCare } = req.body;
  
//       if (!title || !image) {
//         return res.status(400).json({ message: 'Bütün tələb olunan sahələri doldurun: title, image.' });
//       }
  
//       const giftcard = new Giftcard({ title, 
//       description, 
//       image, 
//       price, 
//       text1, 
//       text2, 
//       size, 
//       characteristics, 
//       color, 
//       location, 
//       material, 
//       plantFamily, 
//       diameter, 
//       height, 
//       room, 
//       shape, 
//       standing, 
//       style, 
//       waterCare });
//       await giftcard.save();
  
//       res.status(201).json({ message: 'Giftcard created successfully!', giftcard });
//     } catch (error) {
//       console.error(error); 
//       res.status(500).json({ message: 'Error creating giftcard', error });
//     }
//   };

// exports.getGiftcards = async (req, res) => {
//   try {
//     const giftcards = await Giftcard.find();
//     res.status(200).json(giftcards);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching giftcards', error });
//   }
// };


// exports.deleteGiftcard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Giftcard.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Giftcard deleted successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting giftcard', error });
//   }
// };


// exports.getGiftcards = async (req, res) => {
//     try {
//       const { page = 1 } = req.query;
//       const limitNumber = 20; 
  
//       const pageNumber = parseInt(page, 10);
  
//       const skip = (pageNumber - 1) * limitNumber;
  
//       const giftcards = await Giftcard.find()
//         .skip(skip) 
//         .limit(limitNumber); 

//       const totalGiftcards = await Giftcard.countDocuments();
  
//       const totalPages = Math.ceil(totalGiftcards / limitNumber);
  
//       res.status(200).json({ 
//         totalPages, 
//         currentPage: pageNumber, 
//         giftcards 
//       });
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching giftcards', error });
//     }
//   };
  

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
        } = req.body;

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
        console.error(error);
        res.status(500).json({ message: 'Error creating giftcard', error });
    }
};

exports.getGiftcards = async (req, res) => {
    try {
        const { page = 1, price, size, characteristics, color, location, material, plantFamily, room, shape, standing, style, waterCare } = req.query;
        const limitNumber = 20;

        const pageNumber = parseInt(page, 10);
        const skip = (pageNumber - 1) * limitNumber;

        // Build a filter object based on the query parameters
        const filter = {};

        // Add filters with multiple options
        if (price) filter.price = price;
        if (size) filter.size = { $in: size.split(',') }; // e.g., size=S,M
        if (characteristics) filter.characteristics = { $in: characteristics.split(',') }; // e.g., characteristics=Easy,Air purifying
        if (color) filter.color = { $in: color.split(',') }; // e.g., color=Orange,Black
        if (location) filter.location = { $in: location.split(',') }; // e.g., location=Sun,Partial sun
        if (material) filter.material = { $in: material.split(',') }; // e.g., material=Terracotta,Eco
        if (plantFamily) filter.plantFamily = { $in: plantFamily.split(',') }; // e.g., plantFamily=Caladium,Calathea
        if (room) filter.room = { $in: room.split(',') }; // e.g., room=Bathroom,Bedroom
        if (shape) filter.shape = { $in: shape.split(',') }; // e.g., shape=Round
        if (standing) filter.standing = { $in: standing.split(',') }; // e.g., standing=standing
        if (style) filter.style = { $in: style.split(',') }; // e.g., style=Nature,Basic
        if (waterCare) filter.waterCare = { $in: waterCare.split(',') }; // e.g., waterCare=Weekly,Be-weekly

        const giftcards = await Giftcard.find(filter)
            .skip(skip)
            .limit(limitNumber);

        const totalGiftcards = await Giftcard.countDocuments(filter);

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

exports.deleteGiftcard = async (req, res) => {
    try {
        const { id } = req.params;
        await Giftcard.findByIdAndDelete(id);
        res.status(200).json({ message: 'Giftcard deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting giftcard', error });
    }
};

exports.getGiftcardById = async (req, res) => {
    try {
        const giftcard = await Giftcard.findById(req.params.id);
        if (!giftcard) {
            return res.status(404).json({ message: "Gift card not found" });
        }
        res.status(200).json(giftcard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching giftcard', error });
    }
};
