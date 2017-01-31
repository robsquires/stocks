'use strict'

const mongodb = require('mongodb')

class MongoClient {
  constructor (url) {
    this.url = url
    this.db = null
  }

  connect () {
    if (this.db) {
      return Promise.resolve(this.db)
    }

    return new Promise((resolve, reject) => {
      mongodb.MongoClient.connect(this.url, (err, db) => {
        if (err) {
          return reject(err)
        }
        this.db = db
        resolve(this.db)
      })
    })
  }

  close () {
    if (!this.db) {
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    })
  }

  get () {
    if (this.db) {
      return Promise.resolve(this.db)
    }

    return this.connect()
  }
}

module.exports = MongoClient
