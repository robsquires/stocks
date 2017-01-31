'use strict'

const Stock = require('app/model/Stock')

class CompanyDataService {

  constructor (mongoSource) {
    this.mongoSource = mongoSource
  }

  populate (stock) {
    return new Promise((resolve, reject) => {
      this.mongoSource.find({ tickerCode: stock.ticker })
        .then(doc => {
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
