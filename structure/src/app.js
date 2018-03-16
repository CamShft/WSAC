const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

// error handler
if (app.get('env') === 'development') { // <-- change to config in yaml
    app.use(function (err, req, res, next) {
        res.status(err.statusCode || 500);
        res.send({
            'code': err.errorCode,
            'message': err.message,
            'err': err
        });
        res.end();
    });
}


app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500);
    res.send({
        'code': err.errorCode,
        'message': err.message,
        'err': {}
    });
    res.end();
});

module.exports = app;