'use strict'

const MongoProvider = require('./MongoProvider')
const JsonApiProvider = require('./JsonApiProvider')
const mongo = require('app/mongo')
const fetch = require('node-fetch')

const COMPANY_COLLECTION = 'company'
const companyData = new MongoProvider(mongo.mmDB, COMPANY_COLLECTION)

const BASE_URL = 'http://mm-recruitment-stock-price-api.herokuapp.com/company/'
const priceApi = new JsonApiProvider(fetch, BASE_URL)

// exposed services
module.exports = {
  companyData,
  priceApi
}
