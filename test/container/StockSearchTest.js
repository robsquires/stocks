'use strict'
const React = require('react')
const {mount} = require('enzyme')

const StockCard = require('app/component/StockCard')
const Search = require('app/component/Search')
const ErrorMessage = require('app/component/ErrorMessage')

const Stock = require('app/model/Stock')
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

  it('should render an error message when an error is present', () => {
    const wrapper = mount(<StockSearch error={new Error()}/>)
    expect(wrapper.find(ErrorMessage).length).to.be.ok
  })
})
