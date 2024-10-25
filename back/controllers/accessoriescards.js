const AccessoriesCard = require('../models/accessoriescards');

exports.getAllAccessoriesCards = async (req, res) => {
    try {
        const accessoriesCards = await AccessoriesCard.find();
        res.status(200).json(accessoriesCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAccessoriesCard = async (req, res) => {
    const { title, description, image, price, price2, size, sale } = req.body;

    const newAccessoriesCard = new AccessoriesCard({ title, description, image, price, price2, size, sale });

    try {
        const savedAccessoriesCard = await newAccessoriesCard.save();
        res.status(201).json(savedAccessoriesCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateAccessoriesCard = async (req, res) => {
    try {
        const updatedAccessoriesCard = await AccessoriesCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedAccessoriesCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAccessoriesCard = async (req, res) => {
    try {
        await AccessoriesCard.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
