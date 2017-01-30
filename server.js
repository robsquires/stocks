'use strict'

const express = require('express')
const app = express()
const PORT = 3000

// pass express runtime to our app
require('./app')(app)

// start listening
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
