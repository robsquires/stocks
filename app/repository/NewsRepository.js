'use strict'

const Story = require('app/model/Story')

class NewsService {

  constructor (api, positivityCalculator) {
    if (!api) {
      throw new TypeError('News API is required')
    }

    if (!positivityCalculator) {
      throw new TypeError('PositivityCalculator is required')
    }
    this.api = api
    this.positivityCalculator = positivityCalculator
  }

  lookup (stock) {
    return new Promise((resolve, reject) => {
      this.api.get(stock.storyFeedUrl)
        .then(storyData => {
          const updatedStock = storyData.reduce((stock, data) => {
            const story = new Story({
              headline: data.headline,
              body: data.body
            })
            // calculate score before adding it to the stock
            return stock.addStory(this.positivityCalculator.calculateScore(story))
          }, stock)

          resolve(updatedStock)
        })
        .catch(err => {
          logger.error(err)
          reject(new Error(`Could not lookup news for ${stock.ticker}`))
        })
    })
  }
}

module.exports = NewsService
