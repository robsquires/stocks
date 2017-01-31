'use strict'

const Price = require('app/model/Price')

class PriceRepository {

  constructor (api) {
    if (!api) {
      throw new TypeError('Price API is required')
    }
    this.api = api
  }

  lookup (stock) {
    return new Promise((resolve, reject) => {
      this.api.get(stock.ticker)
        .then(data => {
          // map external data structure to our model
          const price = new Price({
            value: data.latestPrice,
            units: data.priceUnits,
            asOf: data.asOf
          })

          const updatedStock = stock.merge({
            price,
            storyFeedUrl: data.storyFeedUrl
          })

          resolve(updatedStock)
        })
        .catch(err => {
          logger.error(err)
          reject(new Error(`Could not lookup price for ${stock.ticker}`))
        })
    })
  }
}

module.exports = PriceRepository
