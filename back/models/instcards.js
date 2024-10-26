const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    image: { type: String, required: true },  
    instagramLink: { type: String, required: true }, 
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
