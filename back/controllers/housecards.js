const HouseCard = require('../models/housecards');

exports.getAllHouseCards = async (req, res) => {
    try {
        const houseCards = await HouseCard.find();
        res.status(200).json(houseCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createHouseCard = async (req, res) => {
    const { title, description, image, price, price2, size, sale } = req.body;

    const newHouseCard = new HouseCard({ title, description, image, price, price2, size, sale });

    try {
        const savedHouseCard = await newHouseCard.save();
        res.status(201).json(savedHouseCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateHouseCard = async (req, res) => {
    try {
        const updatedHouseCard = await HouseCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedHouseCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteHouseCard = async (req, res) => {
    try {
        await HouseCard.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
