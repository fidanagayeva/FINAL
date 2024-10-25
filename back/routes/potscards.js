const express = require('express');
const router = express.Router();
const potsCardController = require('../controllers/potscards');

router.get('/', potsCardController.getAllPotsCards);

router.post('/', potsCardController.createPotsCard);

router.put('/:id', potsCardController.updatePotsCard);

router.delete('/:id', potsCardController.deletePotsCard);

module.exports = router;
