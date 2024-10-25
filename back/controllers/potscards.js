const PotsCard = require('../models/potscards');

exports.getAllPotsCards = async (req, res) => {
    try {
        const potsCards = await PotsCard.find();
        res.status(200).json(potsCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPotsCard = async (req, res) => {
    const { title, description, image, price, price2, size, sale } = req.body;

    const newPotsCard = new PotsCard({ title, description, image, price, price2, size, sale });

    try {
        const savedPotsCard = await newPotsCard.save();
        res.status(201).json(savedPotsCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePotsCard = async (req, res) => {
    try {
        const updatedPotsCard = await PotsCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPotsCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePotsCard = async (req, res) => {
    try {
        await PotsCard.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
