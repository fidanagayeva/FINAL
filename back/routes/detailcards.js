const express = require('express');
const router = express.Router();
const detailCardController = require('../controllers/detailcards');

router.get('/', detailCardController.getAllDetailCards);

router.post('/', detailCardController.createDetailCard);

router.put('/:id', detailCardController.updateDetailCard);

router.delete('/:id', detailCardController.deleteDetailCard);

module.exports = router;
