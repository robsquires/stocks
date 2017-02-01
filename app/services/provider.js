'use strict'

const MongoProvider = require('app/provider/MongoProvider')
const JsonApiProvider = require('app/provider/JsonApiProvider')

const db = require('./db')
const fetch = require('node-fetch')

const COMPANY_COLLECTION = 'company'
const BASE_URL = 'http://mm-recruitment-stock-price-api.herokuapp.com/company/'

/**
 * public services
 */
module.exports = {
  companyData: new MongoProvider(db.mmDB, COMPANY_COLLECTION),
  priceApi: new JsonApiProvider(fetch, BASE_URL),
  newsApi: new JsonApiProvider(fetch)
}
