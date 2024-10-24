const express = require('express');
const router = express.Router();
const { createPlnt, getPlnts, deletePlnt } = require('../controllers/plntscards');

router.post('/', createPlnt);

router.get('/', getPlnts);

router.delete('/:id', deletePlnt);

module.exports = router;
