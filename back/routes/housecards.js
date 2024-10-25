const express = require('express');
const router = express.Router();
const houseCardController = require('../controllers/housecards');

router.get('/', houseCardController.getAllHouseCards);

router.post('/', houseCardController.createHouseCard);

router.put('/:id', houseCardController.updateHouseCard);

router.delete('/:id', houseCardController.deleteHouseCard);

module.exports = router;
