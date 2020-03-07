//var NodeWebcam = require( "node-webcam" );
var sample = require('./sample.json')
var Jimp = require("jimp");
var QrCode = require('qrcode-reader');
var fs = require('fs');
var path = require('path')
var qr = new QrCode();

var {check_day, check_station, check_validity} = require('./functions')



qr.callback = function(error, result) {
    if(error) {
      console.log(error)
      return;
    }
    console.log(result)
  }

  var Jimp = require("jimp");
  var dir = path.join(__dirname, '../Server/src/predictions/87541203.png')
  var buffer = fs.readFileSync(dir);
  Jimp.read(buffer, function(err, image) {
      if (err) {
          console.error(err);
          // TODO handle error
      }
      var qr = new QrCode();
      qr.callback = function(err, value) {
          if (err) {
              console.error(err);
              // TODO handle error
          }
          console.log(value.result);
          var st = value.result
          var car = st.split(",")
          console.log(car)

          check_validity(car[5])
          check_station(car[2], car[3])
          check_day(car[1], 2)
      };
      qr.decode(image.bitmap);
  });