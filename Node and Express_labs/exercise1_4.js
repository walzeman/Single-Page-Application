
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
 //app.use(multer({ dest: '/tmp/'}));

app.get(['/','/fileupload.html'], function (req, res) {
   res.sendFile( __dirname + "/" + "fileupload.html" );
})

app.post('/file_upload', upload.single('upl'), function (req, res) {

   console.log(req.body); //form fields
   console.log(req.file); //form files
   console.log(req.files)

//    console.log(req.file.filename);
//    console.log(req.file.path);

//    console.log(req.files.file.name);
//    console.log(req.files.file.path);
//    console.log(req.files.file.type);

   var fileName = __dirname + "/" + req.file.originalname;
   
   fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(fileName, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.file.originalname
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})