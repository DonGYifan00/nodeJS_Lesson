/**
 * 引入模块
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexLogin = require('./routes/login');

/**得到express的实例 */
var app = express();

// view engine setup
/**
 * set('views')指明视图文件所在的目录
 */
app.set('views', path.join(__dirname, 'views'));
/**指明视图模板的类型 ejs */
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/**
 * 中间件，指明静态资源的路径，所有的静态资源请求
 * 
 */
app.use(express.static(path.join(__dirname, 'public')));


/**
 * 如果请求的资源路径包含了use方法的第一个参数
 * 实际的请求路径 = use的第一个参数 + 路由文件中处理请求路径
 */
app.use('/', indexLogin);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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





