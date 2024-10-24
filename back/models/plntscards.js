const mongoose = require('mongoose');

const plntSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Plnt', plntSchema);
