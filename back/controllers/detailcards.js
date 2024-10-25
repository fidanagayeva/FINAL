const DetailCard = require('../models/detailcards');

exports.getAllDetailCards = async (req, res) => {
    try {
        const detailCards = await DetailCard.find();
        res.status(200).json(detailCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createDetailCard = async (req, res) => {
    const { title, description, image, price, price2, size, sale } = req.body;

    const newDetailCard = new DetailCard({ title, description, image, price, price2, size, sale });

    try {
        const savedDetailCard = await newDetailCard.save();
        res.status(201).json(savedDetailCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateDetailCard = async (req, res) => {
    try {
        const updatedDetailCard = await DetailCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDetailCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteDetailCard = async (req, res) => {
    try {
        await DetailCard.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
