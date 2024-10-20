const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {
  createGiftcard,
  getGiftcards,
  getGiftcardById,
  updateGiftcard, 
  deleteGiftcard,
} = require('../controllers/giftcards');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), createGiftcard);
router.get('/', getGiftcards);
router.get('/:id', getGiftcardById);
router.put('/:id', upload.single('image'), updateGiftcard); 
router.delete('/:id', deleteGiftcard);

module.exports = router;
