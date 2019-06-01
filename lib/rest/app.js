
const app = require('express')()
const logger = require('pino')()

// app.use(())
// app.register()
app.use('/ping', require('./ping'))


module.exports = app;