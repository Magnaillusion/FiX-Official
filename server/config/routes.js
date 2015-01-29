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
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};