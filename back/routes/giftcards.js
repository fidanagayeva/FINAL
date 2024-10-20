// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const router = express.Router();
// const {
//   createGiftcard,
//   getGiftcards,
//   getGiftcardById, 
//   deleteGiftcard,
// } = require('../controllers/giftcards');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// router.post('/', upload.single('image'), createGiftcard);
// router.get('/', getGiftcards);
// router.get('/:id', getGiftcardById); 
// router.delete('/:id', deleteGiftcard);

// module.exports = router;


















const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {
  createGiftcard,
  getGiftcards,
  getGiftcardById,
  updateGiftcard, // Yeniləmə funksiyasını əlavə etdik
  deleteGiftcard,
} = require('../controllers/giftcards');

// Multer konfiqurasiyası
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoints
router.post('/', upload.single('image'), createGiftcard);
router.get('/', getGiftcards);
router.get('/:id', getGiftcardById);
router.put('/:id', upload.single('image'), updateGiftcard); // PUT endpoint əlavə edildi
router.delete('/:id', deleteGiftcard);

module.exports = router;
