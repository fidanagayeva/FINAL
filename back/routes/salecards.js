const express = require('express');
const router = express.Router();
const salecardController = require('../controllers/salecards');

router.post('/', salecardController.createSalecard);

router.get('/', salecardController.getSalecards);

router.get('/:id', salecardController.getSalecardById); 

router.delete('/:id', salecardController.deleteSalecard);

module.exports = router;
