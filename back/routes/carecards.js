const express = require('express');
const router = express.Router();
const careCardController = require('../controllers/carecards');

router.get('/', careCardController.getAllCareCards);

router.post('/', careCardController.createCareCard);

router.put('/:id', careCardController.updateCareCard);

router.delete('/:id', careCardController.deleteCareCard);

module.exports = router;
