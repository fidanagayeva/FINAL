const express = require('express');
const router = express.Router();
const {
  createGiftcard,
  getGiftcards,
  getGiftcardById,
  deleteGiftcard,
} = require('../controllers/giftcards');

router.post('/', createGiftcard);

router.get('/', getGiftcards);

router.delete('/:id', deleteGiftcard);

module.exports = router;

router.get('/:id', getGiftcardById); 
