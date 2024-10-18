const mongoose = require('mongoose');

const giftcardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  text1: {
    type: String,
    required: false,
  },
  text2: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false, 
  },
  characteristics: {
    type: String,
    required: false, 
  },
  color: {
    type: String,
    required: false, 
  },
  location: {
    type: String,
    required: false, 
  },
  material: {
    type: String,
    required: false, 
  },
  plantFamily: {
    type: String,
    required: false, 
  },
  diameter: {
    type: String,
    required: false, 
  },
  height: {
    type: String,
    required: false, 
  },
  room: {
    type: String,
    required: false, 
  },
  shape: {
    type: String,
    required: false, 
  },
  standing: {
    type: String,
    required: false, 
  },
  style: {
    type: String,
    required: false, 
  },
  waterCare: {
    type: String,
    required: false, 
  },
}, { timestamps: true });

module.exports = mongoose.model('Giftcard', giftcardSchema);
