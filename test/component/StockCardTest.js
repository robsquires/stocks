'use strict'
const React = require('react')
const {shallow} = require('enzyme')

const StockCard = require('app/component/StockCard')
const Stock = require('app/model/Stock')

const stock = new Stock({ ticker: 'AAPL', name: 'Apple Computer Inc' })

describe('Stock Card', () => {
  it('should display the stock ticker', () => {
    const wrapper = shallow(<StockCard stock={stock} />)
    expect(wrapper.html()).to.match(/AAPL/)
  })
  it('should display the company name', () => {
    const wrapper = shallow(<StockCard stock={stock} />)
    expect(wrapper.html()).to.match(/Apple Computer Inc/)
  })
})
