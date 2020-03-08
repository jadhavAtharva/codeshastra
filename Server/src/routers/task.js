const express = require('express')
const tasks = require('../models/task')
const auth = require('../middleware/auth')

var Jimp = require("jimp");
var QrCode = require('qrcode-reader');
var fs = require('fs');
var path = require('path')
var qr = new QrCode();
var inter = ''
var rutu = ''
// const { final } = require('../predictions/test')
const routers = new express.Router()


// qr.callback = function(error, result) {
//   if(error) {
//     console.log(error)
//     return;
//   }
//   console.log(result)
// }

// var Jimp = require("jimp");
// var dir = path.join(__dirname, '../predictions/qr/hey.png')
// var buffer = fs.readFileSync(dir);
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//             // TODO handle error
//         }
//         console.log(value.result);
//          inter = value.result
//          rutu = inter.split(",")
//     };
//     qr.decode(image.bitmap);
// });

// routers.post('/ticket', async (req, res)=>{

//   var newObj = Object.assign({
//     'src': rutu[2],
//     'dest': rutu[3],
//     'date': rutu[1],
//     'time': rutu[5],
//     'ret': rutu[4],
//     'AFB': rutu[0]
//   })
//   console.log(newObj)
//     const task = new tasks(newObj)     

//     try {
//       await task.save()
//       res.status(201).send(task)
//     } catch(e) {
//       res.status(400).send(e)
//     }
//   })


  module.exports = routers