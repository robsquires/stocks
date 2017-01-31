'use strict'

const CompanyDataService = require('./CompanyDataService')
const source = require('app/source')

const companyData = new CompanyDataService(source.companyData)

// exposed services
module.exports = {
  companyData
}
