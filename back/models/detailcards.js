const mongoose = require('mongoose');

const detailCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    price2: { type: Number, required: true },
    size: { type: String, required: true },
    sale: { type: String, required: true },
});

module.exports = mongoose.model('DetailCard', detailCardSchema);
