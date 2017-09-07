var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // used for session cookie
var bodyParser = require('body-parser');
// simple in-memory session is used here. use connect-redis for production!!
var session = require('express-session');
var index = require('./routes/index');

// if running locally, we need to set up the proxy from local config file:
var node_env = process.env.node_env || 'development';
if (node_env === 'development') {
  const devConfig = require('./localConfig.json')[node_env];
  for(let key in devConfig) {
    process.env[key] = devConfig[key];
  }
}

console.log('************'+node_env+'******************');

/**********************************************************************
       SETTING UP EXRESS SERVER
***********************************************************************/
var app = express();

app.set('trust proxy', 1);
app.use(cookieParser('rashional'));
// Initializing default session store
// *** Use this in-memory session store for development only. Use redis for prod. **
app.use(session({
	secret: 'rashional',
	name: 'cookie_name',
	proxy: true,
	resave: true,
  saveUninitialized: true}));
  
//Initializing application modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(process.env.VCAP_APP_PORT || 5000, function () {
	console.log ('Server started on port: ' + server.address().port);
});

/****************************************************************************
	SET UP EXPRESS ROUTES
*****************************************************************************/

//route to retrieve learningpath info which drives what is displayed

app.use(express.static(path.join(__dirname, process.env['base-dir'] ? process.env['base-dir'] : '../public')));


app.get('/favicon.ico', function (req, res) {
	res.send('favicon.ico');
});

app.use('/', index); //Main router

////// error handlers //////
// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
	err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// development error handler - prints stacktrace
if (node_env === 'development') {
	app.use(function(err, req, res, next) {
		if (!res.headersSent) {
			res.status(err.status || 500);
			res.send({
				message: err.message,
				error: err
			});
		}
	});
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	if (!res.headersSent) {
		res.status(err.status || 500);
		res.send({
			message: err.message,
			error: {}
		});
	}
});

module.exports = app;
