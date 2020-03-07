//var NodeWebcam = require( "node-webcam" );
var Jimp = require("jimp");
var QrCode = require('qrcode-reader');
var fs = require('fs');
var path = require('path')
var qr = new QrCode();

qr.callback = function(error, result) {
    if(error) {
      console.log(error)
      return;
    }
    console.log(result)
  }

  var Jimp = require("jimp");
  var dir = path.join(__dirname, '../Server/src/predictions/87541203.png')
  console.log(dir)
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
          
      };
      qr.decode(image.bitmap);
  });