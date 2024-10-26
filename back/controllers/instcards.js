const Card = require('../models/instcards');

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCard = async (req, res) => {
    const { image, instagramLink } = req.body;
    const newCard = new Card({ image, instagramLink });

    try {
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCard = async (req, res) => {
    const { id } = req.params;

    try {
        const card = await Card.findByIdAndDelete(id);
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.status(200).json({ message: 'Card deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
