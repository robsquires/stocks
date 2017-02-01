'use strict'

class MongoProvider {
  constructor (mongoClient, collectionName) {
    this.mongoClient = mongoClient
    this.collectionName = collectionName
  }

  find (query) {
    return new Promise((resolve, reject) => {
      this.mongoClient.get()
        .then(db => {
          db.collection(this.collectionName)
            .findOne(query, (err, doc) => {
              if (err) {
                return reject(new Error(`Could not lookup against ${this.collectionName}`))
              }
              resolve(doc)
            })
        })
        .catch(err => {
          logger.error(err)
          reject(new Error(`Could not lookup against ${this.collectionName}`))
        })
    })
  }
}

module.exports = MongoProvider
