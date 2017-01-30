'use strict'

const React = require('react')

const Stock = require('model/Stock')

const StockComponent = (props) => (
  <div>
    {props.stock.ticker}
  </div>
)

StockComponent.propTypes = {
  stock: React.PropTypes.instanceOf(Stock)
}

module.exports = StockComponent
