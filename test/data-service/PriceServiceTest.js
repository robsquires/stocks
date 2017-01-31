'use strict'

const Stock = require('app/model/Stock')
const Price = require('app/model/Price')
const PriceService = require('app/data-service/PriceService')

const stock = new Stock({ ticker: 'GOOG' })

const API_DATA = {
  tickerCode: 'GOOG',
  latestPrice: 54407,
  priceUnits: 'GBP:pence',
  asOf: '2017-01-31T22:33:28.052Z',
  storyFeedUrl: 'http://mm-recruitment-story-feed-api.herokuapp.com/8271'
}

describe('Price Service', () => {
  let apiProvider
  let service
  beforeEach(() => {
    apiProvider = {
      get: sinon.stub()
    }
    service = new PriceService(apiProvider)
  })
  it('should be instantiable', () => {
    expect(service).to.exist
  })

  it('should set a Price against the stock when the lookup was successful', () => {
    apiProvider.get.returns(Promise.resolve(API_DATA))
    return service.lookup(stock)
      .then(updatedStock => {
        expect(updatedStock).to.be.ok
        expect(updatedStock.storyFeedUrl).to.equal(API_DATA.storyFeedUrl)

        expect(updatedStock.price).to.be.instanceOf(Price)
        expect(updatedStock.price.toJSON()).to.eql({
          value: API_DATA.latestPrice,
          units: API_DATA.priceUnits,
          asOf: API_DATA.asOf
        })
      })
  })

  it('should return an Error when the provider fails', () => {
    apiProvider.get.returns(Promise.reject())
    return service.lookup(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(Error)
      })
  })
})
