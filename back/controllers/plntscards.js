const Plnt = require('../models/plntscards');

exports.createPlnt = async (req, res) => {
    const { title, image } = req.body;

    if (!title || !image) {
        return res.status(400).json({ message: 'Title and image are required.' });
    }

    const newPlnt = new Plnt({
        title,
        image
    });

    try {
        const savedPlnt = await newPlnt.save();
        res.status(201).json(savedPlnt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPlnts = async (req, res) => {
    try {
        const plnts = await Plnt.find();
        res.status(200).json(plnts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePlnt = async (req, res) => {
    try {
        const deletedPlnt = await Plnt.findByIdAndDelete(req.params.id);
        if (!deletedPlnt) {
            return res.status(404).json({ message: 'Plnt not found' });
        }
        res.status(200).json({ message: 'Plnt deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
