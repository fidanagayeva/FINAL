// const express = require('express');
// const router = express.Router();
// const salecardController = require('../controllers/salecards');

// router.post('/', salecardController.createSalecard);

// router.get('/', salecardController.getSalecards);

// router.delete('/:id', salecardController.deleteSalecard);

// module.exports = router;






const express = require('express');
const router = express.Router();
const salecardController = require('../controllers/salecards');

// Yeni salecard yaratmaq
router.post('/', salecardController.createSalecard);

// Bütün salecard-ları əldə etmək
router.get('/', salecardController.getSalecards);

// Tək salecard-i ID-yə görə əldə etmək
router.get('/:id', salecardController.getSalecardById); // Bu marşrut əhəmiyyətlidir

// Salecard silmək
router.delete('/:id', salecardController.deleteSalecard);

module.exports = router;
