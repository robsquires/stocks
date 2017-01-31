'use strict'
const React = require('react')
const {mount} = require('enzyme')

const StockCard = require('app/component/StockCard')

const Stock = require('app/model/Stock')
const StockSearch = require('app/container/StockSearch')

const stock = new Stock({ ticker: 'AAPL', name: 'Apple Computer Inc' })

describe('Stock Search Container', () => {
  it('should render the stock card when a stock is present', () => {
    const wrapper = mount(<StockSearch stock={stock} />)
    expect(wrapper.find(StockCard).length).to.be.ok
  })
  it('should not render the stock card without a stock', () => {
    const wrapper = mount(<StockSearch />)
    expect(wrapper.find(StockCard).length).not.to.be.ok
  })
})
