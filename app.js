var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var bodyParser = require('body-parser');

var expressHbs = require('express-handlebars');

var mongoose = require('mongoose');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
mongoose.connect('localhost:27017/pinIt');

var db = mongoose.connection;

// view enngine setup
// app.engine('hbs', hbs({
//     extname: 'hbs',
//     defaultLayout: 'layout',
//     layoutsDir: __dirname + '/views/layouts',
//     partialsDir  : [
//         //  path to partials
//         __dirname + '/views/partials',
//     ]
// }));
// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
	cookie: { maxAge: 60000 },
	secret: 'ZxcdVxcdvasdSsd',
	resave: false,
	saveUninitialized: false
}));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;