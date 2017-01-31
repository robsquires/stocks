'use strict'

const Stock = require('app/model/Stock')
const CompanyLookupService = require('app/data-service/CompanyLookupService')
const UnknownStockError = require('app/error/UnknownStockError')

const stock = new Stock({ ticker: 'AAPL' })

describe('Company Lookup Service', () => {
  let mongoProvider
  let service
  beforeEach(() => {
    mongoProvider = {
      find: sinon.stub()
    }
    service = new CompanyLookupService(mongoProvider)
  })
  it('should be instantiable', () => {
    expect(service).to.exist
  })

  it('should find a stock with data when the ticker is recognised by the provider', () => {
    mongoProvider.find.returns(Promise.resolve({ name: 'Apple Computer Inc.' }))
    return service.find(stock)
      .then(updatedStock => {
        expect(updatedStock.name).to.equal('Apple Computer Inc.')
      })
  })

  it('should return an Error when the provider fails', () => {
    mongoProvider.find.returns(Promise.reject())
    return service.find(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(Error)
      })
  })

  it('should return an UnknownStockError when the stock is not recognised by the provider', () => {
    mongoProvider.find.returns(Promise.resolve(null))
    return service.find(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(UnknownStockError)
      })
  })
})
