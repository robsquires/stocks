'use strict'

const CompanyLookupService = require('app/data-service/CompanyLookupService')
const PriceService = require('app/data-service/PriceService')
const NewsService = require('app/data-service/NewsService')
const provider = require('./provider')

/**
 * public services
 */
module.exports = {
  companyLookup: new CompanyLookupService(provider.companyData),
  price: new PriceService(provider.priceApi),
  news: new NewsService(provider.newsApi)
}
