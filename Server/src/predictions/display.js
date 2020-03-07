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

var path = require('path')
var fs = require('fs')


var dir = path.join(__dirname, './87541203.png')
var buffer = fs.readFileSync(dir);

console.log(buffer)