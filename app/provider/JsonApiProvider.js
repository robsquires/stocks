'use strict'

class JsonApiProvider {
  constructor (fetch, baseUrl = '') {
    this.fetch = fetch
    this.baseUrl = baseUrl
  }

  get (uri) {
    const url = `${this.baseUrl}${uri}`
    logger.debug('Fetching %s', url)
    return new Promise((resolve, reject) => {
      this.fetch(url)
        .then(res => res.json())
        .then(resolve)
        .catch(err => {
          logger.error(err)
          reject(new Error(`Error requesting ${url}`))
        })
    })
  }
}

module.exports = JsonApiProvider
