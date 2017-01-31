'use strict'

const React = require('react')

const Stock = require('app/model/Stock')

const StockCard = ({ stock }) => (
  <div>
    <div>{stock.name}</div>
    <div>{stock.ticker}</div>
  </div>
)

StockCard.propTypes = {
  stock: React.PropTypes.instanceOf(Stock).isRequired
}

module.exports = StockCard
