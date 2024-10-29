const express = require('express');
const router = express.Router();
const { 
  getInspirations, 
  getInspirationById,  
  createInspiration, 
  deleteInspiration 
} = require('../controllers/inspiration');

router.get('/', getInspirations);

router.get('/:id', getInspirationById);

router.post('/', createInspiration);

router.delete('/:id', deleteInspiration);

module.exports = router;
