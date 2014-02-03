// web.js
var express = require("express"),
    logfmt = require("logfmt"),
    flash 	 = require('connect-flash'),
    passport = require('passport'),
    app = express(),
    Edison = require("./app/edison.js");

module.exports = app;
//var port = process.env.PORT || 5000;
require('./config/passport.js')(passport); // pass passport for configuration

app.configure(function()	{
	//app.use(logfmt.requestLogger()); //log requests
	app.use(express.cookieParser()); //read cookies needed for auth
	app.use(express.bodyParser()); //get information from html forms

	app.set('view engine', 'ejs'); //set up ejs templating

	//required for passort
	app.use(express.session({secret: 'benleftlabsandwenttothehometeamnowwehaveboyne'}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.set('port', process.env.PORT || 5000);
	app.use(flash()); 
})


require('./app/routes.js')(app, passport, Edison);






app.listen(app.get('port'), function() {
  //console.log("Listening on " + app.get('port'));
});

