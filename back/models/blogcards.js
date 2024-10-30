const mongoose = require('mongoose');

const blogCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true, enum: ['all', 'inspiration', 'tips'] },
});

module.exports = mongoose.model('BlogCard', blogCardSchema);
