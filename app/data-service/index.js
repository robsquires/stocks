'use strict'

const CompanyLookupService = require('./CompanyLookupService')
const PriceService = require('./PriceService')
const provider = require('app/provider')

const companyLookup = new CompanyLookupService(provider.companyData)
const price = new PriceService(provider.priceApi)

// exposed services
module.exports = {
  companyLookup,
  price
}
