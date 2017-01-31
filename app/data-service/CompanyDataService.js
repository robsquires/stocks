'use strict'

const Stock = require('app/model/Stock')
const UnknownStockError = require('app/error/UnknownStockError')

class CompanyDataService {

  constructor (mongoSource) {
    this.mongoSource = mongoSource
  }

  populate (stock) {
    return new Promise((resolve, reject) => {
      this.mongoSource.find({ tickerCode: stock.ticker })
        .then(doc => {
          if (!doc) {
            return reject(new UnknownStockError(stock.ticker))
          }
          resolve(stock.set('name', doc.name))
        })
        .catch(err => {
          console.log(err)
          reject(new Error(`Could not lookup ${stock.ticker}`))
        })
    })
  }
}

module.exports = CompanyDataService
