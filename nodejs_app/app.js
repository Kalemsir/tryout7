const path = require('path');
const http = require('http');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const errorController=require('./controllers/error');

app.set('view engine', 'ejs'); //view engine ejs olarak tanımlanıyor.
app.set('views', 'views'); // ejs klasörü veriliyor.

rootDir = require('./util/path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'public'))); // public klasörünü html içinde tanır

const adminRoutes = require ('./routes/admin');
const publicRoutes = require ('./routes/public');

app.use('/admin', adminRoutes);
app.use(publicRoutes);

app.use(errorController.getError);


mongoose.connect('mongodb+srv://elvan:Yazilim1515@cluster0.2btsea5.mongodb.net/?appName=Cluster0')
.then(result => {
    console.log("Bağlandı!!!");
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})





