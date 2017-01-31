'use strict'
// so the tests can support jsx
require('babel-register')()

// to match the absolute paths used in the /app
require('app-module-path').addPath(`${__dirname}/../`)

// test apparatus
const chai = require('chai')
const sinon = require('sinon')
chai.use(require('sinon-chai'))
global.expect = chai.expect
global.sinon = sinon

// dom for component rendering
const {jsdom} = require('jsdom')

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
