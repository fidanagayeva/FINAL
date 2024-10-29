const Inspiration = require('../models/inspiration');

const getInspirations = async (req, res) => {
    try {
        const inspirations = await Inspiration.find();
        res.status(200).json(inspirations);
    } catch (error) {
        res.status(500).json({ message: 'Məlumatları gətirərkən səhv baş verdi' });
    }
};

const getInspirationById = async (req, res) => {
    const { id } = req.params;

    try {
        const inspiration = await Inspiration.findById(id);
        if (!inspiration) {
            return res.status(404).json({ message: 'Məlumat tapılmadı' });
        }
        res.status(200).json(inspiration);
    } catch (error) {
        res.status(500).json({ message: 'Məlumatı gətirərkən səhv baş verdi' });
    }
};

const createInspiration = async (req, res) => {
    const { titles = [], texts = [], mainImage, optionalImages = [] } = req.body;

    if (!mainImage) {
        return res.status(400).json({ message: 'Əsas şəkil tələb olunur' });
    }

    try {
        const newInspiration = new Inspiration({
            titles: titles.slice(0, 7), 
            texts: texts.slice(0, 7),  
            mainImage,
            optionalImages: optionalImages.slice(0, 12)  
        });
        await newInspiration.save();
        res.status(201).json(newInspiration);
    } catch (error) {
        res.status(500).json({ message: 'Yeni məlumat əlavə edilərkən səhv baş verdi' });
    }
};

const deleteInspiration = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedInspiration = await Inspiration.findByIdAndDelete(id);
        if (!deletedInspiration) {
            return res.status(404).json({ message: 'Məlumat tapılmadı' });
        }
        res.status(200).json({ message: 'Məlumat uğurla silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Silərkən səhv baş verdi' });
    }
};

module.exports = { 
    getInspirations, 
    getInspirationById,
    createInspiration, 
    deleteInspiration 
};
