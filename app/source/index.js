'use strict'

const MongoSource = require('./MongoSource')
const mongo = require('app/mongo')

const COMPANY_COLLECTION = 'company'
const companyData = new MongoSource(mongo.mmDB, COMPANY_COLLECTION)

// exposed services
module.exports = {
  companyData
}
