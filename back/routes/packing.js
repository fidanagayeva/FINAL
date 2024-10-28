const express = require('express');
const router = express.Router();
const packingController = require('../controllers/packing');

router.get('/', packingController.getAllPacking);
router.post('/', packingController.createPacking);
router.delete('/:id', packingController.deletePacking);

module.exports = router;
