const mongoose = require('mongoose');

const inspirationSchema = new mongoose.Schema({
    titles: [{ type: String }],  
    texts: [{ type: String }], 
    mainImage: { type: String, required: true }, 
    optionalImages: [{ type: String }]  
});

module.exports = mongoose.model('Inspiration', inspirationSchema);
