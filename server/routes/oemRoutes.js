const express = require('express');
const {getOEMCount, getOEMSpecs, getAllOEMSpecs} = require('../controllers/oemController');
const router = express.Router();

router.get('/getOEMCount', getOEMCount);
router.get('/getOEMSpecs/:model_name/:model_year', getOEMSpecs);
router.get('/getAllOEMSpecs', getAllOEMSpecs);

module.exports = router;