const Packing = require('../models/packing');

exports.getAllPacking = async (req, res) => {
  try {
    const packings = await Packing.find();
    res.status(200).json(packings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPacking = async (req, res) => {
  const packing = new Packing(req.body);
  try {
    const savedPacking = await packing.save();
    res.status(201).json(savedPacking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePacking = async (req, res) => {
  try {
    const removedPacking = await Packing.findByIdAndDelete(req.params.id);
    if (!removedPacking) return res.status(404).json({ message: 'Məlumat tapılmadı' });
    res.status(200).json(removedPacking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
