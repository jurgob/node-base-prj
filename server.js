const app = require('./lib/rest')
const logger = require('pino')()


app.listen(3000, function (err, address) {
	logger.info("app instance", Object.keys(app))
	if (err) {
		logger.error(err)
		process.exit(1)
	}
	logger.info(`server listening on ${address}`)
})