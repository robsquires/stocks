'use strict'

const CompanyRepository = require('app/repository/CompanyRepository')
const PriceRepository = require('app/repository/PriceRepository')
const NewsRepository = require('app/repository/NewsRepository')
const provider = require('./provider')
const sentiment = require('./sentiment')

/**
 * public services
 */
module.exports = {
  companyLookup: new CompanyRepository(provider.companyData),
  price: new PriceRepository(provider.priceApi),
  news: new NewsRepository(provider.newsApi, sentiment.positivityCalculator)
}
