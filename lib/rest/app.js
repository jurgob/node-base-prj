const app = require('express')();

app.use('/ping', require('./ping'));

module.exports = app;
