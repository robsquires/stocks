'use strict'
const React = require('react')
const {mount} = require('enzyme')

const StockCard = require('app/component/StockCard')
const Search = require('app/component/Search')

const Stock = require('app/model/Stock')
const UnknownStockError = require('app/error/UnknownStockError')
const StockSearch = require('app/container/StockSearch')

const stock = new Stock({ ticker: 'AAPL', name: 'Apple Computer Inc' })

describe('Stock Search Container', () => {
  it('should always render the search component', () => {
    const wrapper = mount(<StockSearch />)
    expect(wrapper.find(Search).length).to.be.ok
  })

  it('should render the stock card when a stock is present', () => {
    const wrapper = mount(<StockSearch stock={stock} />)
    expect(wrapper.find(StockCard).length).to.be.ok
  })

  it('should not render the stock card without a stock', () => {
    const wrapper = mount(<StockSearch />)
    expect(wrapper.find(StockCard).length).not.to.be.ok
  })

  it('should render a message when the stock could not be found', () => {
    const wrapper = mount(<StockSearch error={new UnknownStockError('GOO')}/>)
    const error = wrapper.find('.error')
    expect(error.length).to.be.ok
    expect(error.html()).to.match(/GOO/)
  })
})
