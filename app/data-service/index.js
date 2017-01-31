'use strict'

const CompanyLookupService = require('./CompanyLookupService')
const provider = require('app/provider')

const companyLookup = new CompanyLookupService(provider.companyData)

// exposed services
module.exports = {
  companyLookup
}
