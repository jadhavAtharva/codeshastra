var QrcodeDecoder = require('qrcode-decoder')


var qr = new QrcodeDecoder();

qr.decodeFromImage('sample.png').then((res) => {
    console.log(res);   
});
