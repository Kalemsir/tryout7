const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urunSchema = new Schema({
  urun_adi: {
    type:String,
    required:true
  },
  fiyat: {
    type:Number,
    required:true
  },
  aciklama: {
    type:String,
    required:true
  },

});
module.exports = mongoose.model('Urun', urunSchema);


/*
const mongodb=require('mongodb');
const getDb=require('../util/database').getDb;

class Urun {

  constructor(urun_adi, fiyat, aciklama) {
    this.urun_adi=urun_adi;
    this.fiyat=fiyat;
    this.aciklama=aciklama
  }

  save() {
    const db=getDb();
    return db.collection('urun')
    .insertOne(this) // .insertOne({urun_adi : ....})
    .then(result => {
      console.log(result);
    })
    .catch( err => {
      console.log(err);
    });
  }

  static fetchAll() {
      const db=getDb();
      return db.collection('urun').find().toArray()
      .then(urunler => {
        console.log(urunler);
        return urunler;
      })
      .catch( err => {
        console.log(err);
      });
  }

}

module.exports=Urun;
*/