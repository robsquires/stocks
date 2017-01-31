'use strict'

const MongoClient = require('./MongoClient')

const MM_DB = 'mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment'

// exposed services
module.exports = {
  mmDB: new MongoClient(MM_DB)
}
