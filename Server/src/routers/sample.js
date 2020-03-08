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
  var dir = path.join(__dirname, '../Server/src/predictions/WiSP2c8y.png')
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

          var val = check_validity(car[5], car[2])
          var stat = check_station(car[2], car[3])
          var reday = check_day(car[1], car[4])
          
          if(val == 1 && stat == 1 && reday == 1){
              console.log("Accepted!!!")
          }
          else{
              console.log("Rejected!!!")
          }
      };
      qr.decode(image.bitmap);
  });