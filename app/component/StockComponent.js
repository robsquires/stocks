'use strict'

const React = require('react')

const Stock = require('app/model/Stock')

const StockComponent = ({ stock }) => (
  <div>
    <div>{stock.name}</div>
    <div>{stock.ticker}</div>
  </div>
)

StockComponent.propTypes = {
  stock: React.PropTypes.instanceOf(Stock)
}

module.exports = StockComponent
