'use strict'

const {Record} = require('immutable')

const Stock = Record({
  /**
   * name
   * @type string
   */

  name: '',

  /**
   * ticker
   * @type string
   */
  ticker: '',

  /**
   * price
   * @type Price
   */
  price: null,

  /**
   * storyFeedUrl
   * @type string
   */
  storyFeedUrl: null
})

module.exports = Stock
