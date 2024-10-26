const express = require('express');
const router = express.Router();
const instcardController = require('../controllers/instcards');

router.get('/', instcardController.getCards);

router.post('/', instcardController.createCard);

router.delete('/:id', instcardController.deleteCard);

module.exports = router;
