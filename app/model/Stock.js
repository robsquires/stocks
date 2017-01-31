'use strict'

const {Record, List} = require('immutable')

const StockRecord = Record({
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
  storyFeedUrl: null,

  /**
   * stories
   * @type immutable.List
   */
  stories: List()
})

class Stock extends StockRecord {
  addStory (story) {
    return this.update('stories', stories => stories.push(story))
  }
}

module.exports = Stock
