'use strict'

const Story = require('app/model/Story')

class NewsRepository {

  constructor (api) {
    if (!api) {
      throw new TypeError('News API is required')
    }
    this.api = api
  }

  lookup (stock) {
    return new Promise((resolve, reject) => {
      this.api.get(stock.storyFeedUrl)
        .then(storyData => {
          const updatedStock = storyData.reduce((stock, data) => {
            return stock.addStory(new Story({
              headline: data.headline,
              body: data.body
            }))
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

module.exports = NewsRepository
