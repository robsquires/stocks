'use strict'

const Stock = require('app/model/Stock')
const immutable = require('immutable')

describe('Stock Model', () => {
  it('should be instantiable', () => {
    expect(new Stock()).to.exist
    expect(new Stock()).to.instanceof(immutable.Record)
  })
})
