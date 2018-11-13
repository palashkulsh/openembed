/* jslint node: true */
"use strict";

var http = require('http');
var https = require('https');
var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var socketsCount = 1500;
http.globalAgent.maxSockets = socketsCount;
https.globalAgent.maxSockets = socketsCount;
app.set('port', process.env.PORT || 2005);
app.use(require('./routes/lib/corsheaders'));
app.use('/public',express.static(__dirname +'/public'));

require('./routes/')(app);


http.createServer(app)
  .on('error', function (err) {
    util.log(err);
    process.exit(1);
  })
  .listen(app.get('port'), function () {
    util.log("openembed is listening on port: " + app.get('port') + ' in ' + app.get('env'));
  });

