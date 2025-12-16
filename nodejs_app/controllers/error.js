const path= require('path');

exports.getError=((req,res,next) => {
   res.render('404', {pageTitle:'Sayfa Yoookk!!!'});
    //res.sendFile(path.join(rootDir, 'views', 'index.html'));
});