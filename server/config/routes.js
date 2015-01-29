var auth = require("./auth");
var topics = require("../controllers/topicController");
var quiz = require("../controllers/quizController");


module.exports = function(app, passport) {

	app.get('/api/topics/practices', quiz.getQuices);
	app.get('/api/topics/practices/:topic', quiz.getQuizByTopic);
	app.get('/api/topics', topics.getTopics);
	app.get('/api/topics/:id', topics.getTopicsById);
	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});
	app.all('/api/*', function(req, res){
		res.sendStatus(404);
	});
	app.get('*', function(req, res) {
		res.render('index');
	});

    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    }));

	app.get('/profile', auth.isLoggedIn, function(req, res) {
		res.render('../../public/app/' + req.params[0], {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

};