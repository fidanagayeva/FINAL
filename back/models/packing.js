const mongoose = require('mongoose');

const packingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Packing = mongoose.model('Packing', packingSchema);

module.exports = Packing;
