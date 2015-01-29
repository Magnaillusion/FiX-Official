var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var passport = require('passport');

require('./server/config/passport')(passport);

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config, passport);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app, passport);

process.on('uncaughtException', function(err) {
	console.log('Error server');
    console.log(err);
});

app.listen(config.port);

console.log('Listening on port: ' + config.port + ' ...');