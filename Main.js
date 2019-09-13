// const app = require('express')();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const mongo = require('mongodb')
// const mongoUrl = 'mongodb://localhost/';
// server.listen(process.env.PORT ||3000);


// io.on('connection', function (socket) {

//     socket.on('new ad', function (x) {
//         mongo.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (mongoErr, mongoRes) {
//             if (mongoErr) {

//             }
//             else {
//                 const ref = mongoRes.db('App').collection('Ads')

//                 ref.insertOne(x, function (insertErr, insertRes) {
//                     if (insertErr) {
//                         throw insertErr;

//                     }
//                     else {
//                         socket.broadcast.emit('new ad', x);
//                     }

//                 })

//             }


//         })
//     })
// })














// const bodyparser = require('body-parser')
// app.use(bodyparser.text())
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
//
//
//
// app.get('/', function (serverReq, serverRes) {
//     serverRes.setHeader("Content-Type", "application/json; charset=utf-8");
//     mongo.connect('mongodb://localhost/', { useNewUrlParser: true, useUnifiedTopology: true }, function (mongoError, mongoRes) {
//         if (mongoError) {
//             serverRes.end(mongoError)
//         }
//         else {
//             const ref = mongoRes.db('App').collection('Ads')
//             ref.aggregate([
//                 {
//                     $lookup: {
//                         from: 'Users',
//                         foreignField: '_id',
//                         localField: 'uploader',
//                         as: 'user_info'
//                     },
//
//                 },
//                 {
//
//                     $project: { text: 1, 'user_info.name': 1, 'user_info.pp': 1, image: 1 }
//                 }
//
//             ], function (agrregateError, aggregateSucess) {
//
//
//                 if (agrregateError) {
//                     serverRes.end(agrregateError)
//                 }
//                 else {
//                     aggregateSucess.toArray(function (arrayEroor, arrayRes) { serverRes.end(JSON.stringify(arrayRes)) })
//
//                 }
//
//             })
//         }
//
//     })
//
//
// })
/*
  Aman Kharbanda
  Subscribe my channel for more videos
  https://goo.gl/H91NRo
  Thanks!
*/

const express = require('express');
var app = express();
var upload = require('express-fileupload');
const http = require('http');
http.Server(app).listen(process.env.PORT ||80); // make server listen on port 80

app.use(upload()); // configure middleware

console.log("Server Started at port 80");

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})
app.post('/upload',function(req,res){
  console.log(req.files);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    var uploadpath = __dirname + '/uploads/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        res.send('Done! Uploading files')
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})
