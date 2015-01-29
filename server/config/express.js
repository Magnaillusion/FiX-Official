var express = require("express");
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');

var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

module.exports = function(app, config, passport) {

	function compile(str, path) {
		return stylus(str).set('filename', path);
	};


	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');

	app.use(morgan('dev')); // log every request to the console
	app.use(logger('dev'));

	// parse application/json
	app.use(bodyParser.json());

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// parse multipart/form-data
	app.use(multer());

	app.use(stylus.middleware({
		src: config.rootPath + '/public',
		compile: compile
	}));

	app.use(express.static(config.rootPath + '/public'));

	// required for passport
	app.use(session({
	  secret: 'fix-app',
	  resave: false,
	  saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

};