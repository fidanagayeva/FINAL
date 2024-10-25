const CareCard = require('../models/carecards');

exports.getAllCareCards = async (req, res) => {
    try {
        const careCards = await CareCard.find();
        res.status(200).json(careCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCareCard = async (req, res) => {
    const { title, description, image, price, price2, size, sale } = req.body;

    const newCareCard = new CareCard({ title, description, image, price, price2, size, sale });

    try {
        const savedCareCard = await newCareCard.save();
        res.status(201).json(savedCareCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCareCard = async (req, res) => {
    try {
        const updatedCareCard = await CareCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCareCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCareCard = async (req, res) => {
    try {
        await CareCard.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
