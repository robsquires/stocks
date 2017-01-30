'use strict'

const Price = require('app/model/Price')
const immutable = require('immutable')

describe('Price Model', () => {
  it('should be instantiable', () => {
    expect(new Price()).to.exist
    expect(new Price()).to.instanceof(immutable.Record)
  })

  it('should hold the value', () => {
    const price = new Price({ value: 54407 })
    expect(price.value).to.equal(54407)
  })

  it('should hold the units', () => {
    const price = new Price({ units: 'GBP:pence' })
    expect(price.units).to.equal('GBP:pence')
  })

  it('should the asOf date', () => {
    const date = new Date('2015-05-06T15:05:59.912Z')
    const price = new Price({ asOf: date })
    expect(price.asOf).to.equal(date)
  })
})
