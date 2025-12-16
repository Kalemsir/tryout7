const path = require('path');
const express = require('express');
const router = express.Router(); // Büyük 'R' harfli!

const urunController = require('../controllers/urun');

router.get('/', urunController.get_urunler);
router.get('/:urun_id', urunController.get_urun);

module.exports = router;


