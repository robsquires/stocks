'use strict'

const {Record} = require('immutable')

const Stock = Record({
  /**
   * value of the price
   * @type number
   */

  value: 0,

  /**
   * units of the price
   * @type string
   */
  units: '',

  /**
   * timestamp
   * @type Date
   */
  asOf: null
})

module.exports = Stock
