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

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = __dirname + '/images'+files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);


