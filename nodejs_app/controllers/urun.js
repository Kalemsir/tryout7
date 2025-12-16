const path= require('path');
const Urun=require('../models/urun');

exports.get_urun_ekle=(req,res,next) => {
    res.render ('urun-ekle', {
        pageTitle:'Ürün Ekle'
    });
};

exports.post_urun_ekle=(req,res,next) => {
    //urunler.push({urun_adi:req.body.urun_adi});
    const urun_adi=req.body.urun_adi;
    const fiyat=req.body.fiyat;
    const aciklama=req.body.aciklama;

    const urun= new Urun({urun_adi:urun_adi, fiyat:fiyat,aciklama:aciklama})
    //const urun=new Urun(urun_adi,fiyat,aciklama);
    urun.save()
    .then(result => {
      console.log(result);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    })
};

/*
exports.get_urunler=(req,res,next) => {
    const urunler = Urun.fetchAll();
    res.render ('index', {
       urunler:urunler,
       pageTitle:'Anasayfa'
    });
};
*/

exports.get_urunler = (req, res, next) => {
  Urun.find()
  .then(urunler => {
     res.render('index', {
      urunler:urunler,
      pageTitle:'Anasayfa'
    });
  })
  .catch(err => {
    console.log(err);
  })
};

exports.get_urun = (req, res, next) => {
  const urun_id = req.params.urun_id;
  Urun.findById(urun_id)
  .then(urun => {
     res.render('urun_detay', {
      urun:urun,
      pageTitle:'Ürün Detayı'
    });
  })
  .catch(err => {
    console.log(err);
  })
};


exports.post_urun_sil = (req, res, next) => {
  const urun_id = req.body.urun_id;
  Urun.findByIdAndDelete(urun_id)
  .then(() => {
      console.log('ürün silindi!');
      res.redirect('/');
  })
  .catch(err => {
    console.log(err);
  })
};


