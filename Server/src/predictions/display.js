// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + './'));
// app.listen(3500, function () {
//     console.log('Express server is listening, use this url - localhost:3500/default.png');
// });

// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// //Serves all the request which includes /images in the url from Images folder
// app.use('./', express.static(__dirname + './'));

// var server = app.listen(5000);

var { final } = require('./qr/test')

console.log(final)

module.exports = final