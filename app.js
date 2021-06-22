var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require("cors");


var indexRouter = require('./routes/index');

var app = express();

app.use(cors(
  {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
  }
  )
);
// app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);


//express sessions for cookie storage
const session = require('express-session');
app.use(session({
  key: 'cookiename',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
  })
);



// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send("error");
  });
  
  module.exports = app;
