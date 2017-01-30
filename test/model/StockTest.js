'use strict'

const Stock = require('app/model/Stock')
const immutable = require('immutable')

describe('Stock Model', () => {
  it('should be instantiable', () => {
    expect(new Stock()).to.exist
    expect(new Stock()).to.instanceof(immutable.Record)
  })

  it('should hold the company name', () => {
    const stock = new Stock({ name: 'Apple'})
    expect(stock.name).to.equal('Apple')
  })
  it('should hold the ticker', () => {
    const stock = new Stock({ ticker: 'AAPL'})
    expect(stock.ticker).to.equal('AAPL')
  })
})
