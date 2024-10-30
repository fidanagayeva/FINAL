const BlogCard = require('../models/blogcards');

exports.getBlogCards = async (req, res) => {
    const category = req.query.category;
    try {
        const query = category && category !== 'all' ? { category } : {};
        const blogCards = await BlogCard.find(query);
        res.status(200).json(blogCards);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog cards', error });
    }
};

exports.addBlogCard = async (req, res) => {
    const { title, img, category } = req.body;
    try {
        const newBlogCard = new BlogCard({ title, img, category });
        await newBlogCard.save();
        res.status(201).json(newBlogCard);
    } catch (error) {
        res.status(400).json({ message: 'Error adding blog card', error });
    }
};

exports.deleteBlogCard = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogCard.findByIdAndDelete(id);
        res.status(200).json({ message: 'Blog card deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog card', error });
    }
};
