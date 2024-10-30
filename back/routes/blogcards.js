const express = require('express');
const router = express.Router();
const { getBlogCards, addBlogCard, deleteBlogCard } = require('../controllers/blogcards');

router.get('/', getBlogCards);

router.post('/', addBlogCard);

router.delete('/:id', deleteBlogCard);

module.exports = router;
