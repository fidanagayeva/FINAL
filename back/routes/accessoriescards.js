const express = require('express');
const router = express.Router();
const accessoriesCardController = require('../controllers/accessoriescards');

router.get('/', accessoriesCardController.getAllAccessoriesCards);

router.post('/', accessoriesCardController.createAccessoriesCard);

router.put('/:id', accessoriesCardController.updateAccessoriesCard);

router.delete('/:id', accessoriesCardController.deleteAccessoriesCard);

module.exports = router;