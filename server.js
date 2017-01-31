'use strict'

const express = require('express')
const app = express()
const PORT = 3000

global.logger = require('winston')
global.logger.level = 'debug'

// pass express runtime to our app
require('./app')(app)

// start listening
app.listen(PORT, () => {
  logger.info('Listening on %s', PORT)
})
