'use strict'

const MongoProvider = require('app/provider/MongoProvider')

describe('Mongo Provider', () => {
  let source
  let mongoClient
  let mongoDb
  let mongoCollection
  const COLLECTION_NAME = 'collection'
  beforeEach(() => {
    // these need to be in reverse order for the stubbing to work correctly
    mongoCollection = {
      findOne: sinon.stub()
    }
    mongoDb = {
      collection: sinon.stub().returns(mongoCollection)
    }
    mongoClient = {
      get: sinon.stub().returns(Promise.resolve(mongoDb))
    }

    source = new MongoProvider(mongoClient, COLLECTION_NAME)
  })
  it('should be instantiable', () => {
    expect(source).to.exist
  })

  it('should execute the query against the collection', () => {
    const query = { tickerCode: 'AAPL' }
    const document = { tickerCode: 'AAPL', name: 'Apple Inc.' }
    mongoCollection.findOne.callsArgWith(1, null, document)
    return source.find(query)
      .then(doc => {
        expect(doc).to.be.ok
        expect(doc).to.equal(document)
      })
  })
  it('should return an error if the db could not be connected to', () => {
    const query = { tickerCode: 'AAPL' }
    mongoClient.get.returns(Promise.reject('Could not connect'))
    return source.find(query)
      .then(() => {
        throw new Error('Promise should be rejected')
      })
      .catch(err => {
        expect(err).to.be.ok
      })
  })

  it('should return an error if the collection could not be queried', () => {
    const query = { tickerCode: 'AAPL' }
    mongoCollection.findOne.callsArgWith(1, Error('Query failed'))
    return source.find(query)
      .then(() => {
        throw new Error('Promise should be rejected')
      })
      .catch(err => {
        expect(err).to.be.ok
      })
  })
})
