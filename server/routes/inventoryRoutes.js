const express = require('express');
const multer = require('multer');
const {addCar, viewCars, editCar, deleteCars} = require('../controllers/marketplaceController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename:(req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
  
  const upload = multer({storage: storage});

router.post('/addCar', upload.single('file'), addCar);
router.get('/viewCars', viewCars);
router.put('/editCar/:id', editCar);
router.post('/deleteCars', deleteCars);

module.exports = router;