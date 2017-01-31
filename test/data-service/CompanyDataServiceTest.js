'use strict'

const Stock = require('app/model/Stock')
const CompanyDataService = require('app/data-service/CompanyDataService')
const UnknownStockError = require('app/error/UnknownStockError')

const stock = new Stock({ ticker: 'AAPL' })

describe('Company Data Service', () => {
  let mongoSource
  let service
  beforeEach(() => {
    mongoSource = {
      find: sinon.stub()
    }
    service = new CompanyDataService(mongoSource)
  })
  it('should be instantiable', () => {
    expect(service).to.exist
  })

  it('should populate a stock with data when the ticker is recognised by the source', () => {
    mongoSource.find.returns(Promise.resolve({ name: 'Apple Computer Inc.' }))
    return service.populate(stock)
      .then(updatedStock => {
        expect(updatedStock.name).to.equal('Apple Computer Inc.')
      })
      .catch(() => {
        throw new Error('Expected promise to resolve')
      })
  })

  it('should return an Error when the source fails', () => {
    mongoSource.find.returns(Promise.reject())
    return service.populate(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(Error)
      })
  })

  it('should return an UnknownStockError when the stock is not recognised by the source', () => {
    mongoSource.find.returns(Promise.resolve(null))
    return service.populate(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(UnknownStockError)
      })
  })
})
