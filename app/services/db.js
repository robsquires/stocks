'use strict'

const MongoClient = require('app/mongo/MongoClient')

const MM_DB = 'mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment'

/**
 * public services
 */
module.exports = {
  mmDB: new MongoClient(MM_DB)
}
