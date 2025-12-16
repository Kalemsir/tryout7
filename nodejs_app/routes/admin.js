const path= require('path');
const express = require('express');
const router = express.Router(); // Büyük 'R' harfli!

const urunController = require('../controllers/urun');

router.get('/urun-ekle', urunController.get_urun_ekle);
router.post('/urun-ekle', urunController.post_urun_ekle);

//router.get('/sil/:urun_id', urunController.get_urun_sil);
router.post('/sil', urunController.post_urun_sil);

module.exports = router;
//exports.routes=router;



