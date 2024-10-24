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
    });

    const savedSalecard = await newSalecard.save();
    res.status(201).json(savedSalecard); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.getSalecards = async (req, res) => {
  try {
    const { page = 1, size, characteristics, color, location, material, plantFamily, room, shape, standing, style, waterCare } = req.query;
    const limitNumber = 20;
    const skip = (page - 1) * limitNumber;

    const query = {};
    if (size) {
      query.size = { $in: size.split(',') }; 
    }
    if (characteristics) {
      query.characteristics = { $in: characteristics.split(',') };
    }
    if (color) {
      query.color = { $in: color.split(',') };
    }
    if (location) {
      query.location = { $in: location.split(',') };
    }
    if (material) {
      query.material = { $in: material.split(',') };
    }
    if (plantFamily) {
      query.plantFamily = { $in: plantFamily.split(',') };
    }
    if (room) {
      query.room = { $in: room.split(',') };
    }
    if (shape) {
      query.shape = { $in: shape.split(',') };
    }
    if (standing) {
      query.standing = { $in: standing.split(',') };
    }
    if (style) {
      query.style = { $in: style.split(',') };
    }
    if (waterCare) {
      query.waterCare = { $in: waterCare.split(',') };
    }

    const salecards = await Salecard.find(query).skip(skip).limit(limitNumber);
    const totalSalecards = await Salecard.countDocuments(query); // Filtrə uyğun say
    const totalPages = Math.ceil(totalSalecards / limitNumber);

    res.status(200).json({ totalPages, currentPage: page, salecards });
  } catch (error) {
    console.error('Error fetching salecards:', error);
    res.status(500).json({ message: 'Error fetching salecards', error });
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


// const Salecard = require('../models/salecards');

// exports.createSalecard = async (req, res) => {
//   const { title, description, image, text1, price, price2, size, sale } = req.body;

//   if (!title || !image || !text1 || price === undefined || !size || sale === undefined) {
//     return res.status(400).json({ 
//       message: 'Title, image, text1, price, size, və sale daxil edilməlidir.' 
//     });
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
//     });

//     const savedSalecard = await newSalecard.save();
//     res.status(201).json(savedSalecard); 
//   } catch (error) {
//     res.status(500).json({ message: error.message }); 
//   }
// };

// exports.getSalecards = async (req, res) => {
//   try {
//     const { page = 1, size, characteristics, color, location, material, plantFamily, room, shape, standing, style, waterCare } = req.query;
//     const limitNumber = 20; 
//     const skip = (page - 1) * limitNumber;

//     const query = {};
//     if (size) {
//       query.size = { $in: size.split(',') }; 
//     }
//     if (characteristics) {
//       query.characteristics = { $in: characteristics.split(',') };
//     }
//     if (color) {
//       query.color = { $in: color.split(',') };
//     }
//     if (location) {
//       query.location = { $in: location.split(',') };
//     }
//     if (material) {
//       query.material = { $in: material.split(',') };
//     }
//     if (plantFamily) {
//       query.plantFamily = { $in: plantFamily.split(',') };
//     }
//     if (room) {
//       query.room = { $in: room.split(',') };
//     }
//     if (shape) {
//       query.shape = { $in: shape.split(',') };
//     }
//     if (standing) {
//       query.standing = { $in: standing.split(',') };
//     }
//     if (style) {
//       query.style = { $in: style.split(',') };
//     }
//     if (waterCare) {
//       query.waterCare = { $in: waterCare.split(',') };
//     }

//     const salecards = await Salecard.find(query).skip(skip).limit(limitNumber);
//     const totalSalecards = await Salecard.countDocuments(query);
//     const totalPages = Math.ceil(totalSalecards / limitNumber);

//     res.status(200).json({ totalPages, currentPage: page, salecards });
//   } catch (error) {
//     console.error('Error fetching salecards:', error);
//     res.status(500).json({ message: 'Error fetching salecards', error });
//   }
// };

// exports.getSalecardById = async (req, res) => {
//   try {
//     const { id } = req.params; 
//     const salecard = await Salecard.findById(id); 

//     if (!salecard) {
//       return res.status(404).json({ message: 'Salecard tapılmadı.' });
//     }

//     res.status(200).json(salecard); 
//   } catch (error) {
//     res.status(500).json({ message: error.message }); 
//   }
// };

// exports.deleteSalecard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedSalecard = await Salecard.findByIdAndDelete(id);

//     if (!deletedSalecard) {
//       return res.status(404).json({ message: 'Salecard tapılmadı.' });
//     }

//     res.status(200).json({ message: 'Salecard uğurla silindi.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
