var NodeWebcam = require( "node-webcam" );
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
  var buffer = fs.readFileSync(__dirname + '/86855748.png');
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

module.exports = function (RED) {
    function QRDecodeNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            console.log(`decoding QR data from ${msg.payload}`);
            var buf = msg.payload;
            var buffer = fs.readFileSync(__dirname + '/86855748.png');
            var buffer = fs.readFileSync(msg.payload);
            if (buf instanceof Buffer) {
                Jimp.read(buf, function (err, image) {
                    if (err) {
                        node.warn(`error when reading image: ${err}`, {});
                        msg.payload = {status : 1, message: `error when reading image: ${err}`};
                        node.send(msg);
                        // TODO handle error
                    } else {
                        var qr = new QrCode();
                        qr.callback = function (err, value) {
                            if (err) {
                                node.warn(`error when decoding: ${err}`, {});
                                msg.payload = {status : 1, message: `error when decoding image: ${err}`};
                                node.send(msg);
                            } else {
                                node.debug(value.result);
                                msg.payload = {status : 0, message: `success`, value: `${value.result}`};
                                //msg.payload = value.result;
                                node.send(msg);
                            }
                        }
                        qr.decode(image.bitmap);
                    }
                });
            } else {
                node.warn("invalid input", {});
                msg.payload = {status : 1, message: `invalid input`};
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("qrdecode", QRDecodeNode);
}
