'use strict'

const Stock = require('app/model/Stock')
const CompanyRepository = require('app/repository/CompanyRepository')
const UnknownStockError = require('app/error/UnknownStockError')

const stock = new Stock({ ticker: 'AAPL' })

describe('Company Repsitory', () => {
  let mongoProvider
  let repository
  beforeEach(() => {
    mongoProvider = {
      find: sinon.stub()
    }
    repository = new CompanyRepository(mongoProvider)
  })
  it('should be instantiable', () => {
    expect(repository).to.exist
  })

  it('should find a stock with data when the ticker is recognised by the provider', () => {
    mongoProvider.find.returns(Promise.resolve({ name: 'Apple Computer Inc.' }))
    return repository.find(stock)
      .then(updatedStock => {
        expect(updatedStock.name).to.equal('Apple Computer Inc.')
      })
  })

  it('should return an Error when the provider fails', () => {
    mongoProvider.find.returns(Promise.reject())
    return repository.find(stock)
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
    return repository.find(stock)
      .then(() => {
        throw new Error('Expected promise to reject')
      })
      .catch((err) => {
        expect(err).to.be.ok
        expect(err).to.be.instanceOf(UnknownStockError)
      })
  })
})
