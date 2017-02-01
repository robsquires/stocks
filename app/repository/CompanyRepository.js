'use strict'

const UnknownStockError = require('app/error/UnknownStockError')

class CompanyRepository {

  constructor (mongoProvider) {
    this.mongoProvider = mongoProvider
  }

  find (stock) {
    return new Promise((resolve, reject) => {
      this.mongoProvider.find({ tickerCode: stock.ticker })
        .then(doc => {
          if (!doc) {
            return reject(new UnknownStockError(stock.ticker))
          }
          resolve(stock.set('name', doc.name))
        })
        .catch(err => {
          logger.error(err)
          reject(new Error(`Could not lookup ${stock.ticker}`))
        })
    })
  }
}

module.exports = CompanyRepository
