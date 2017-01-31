'use strict'

const React = require('react')

const Stock = require('app/model/Stock')
const StockCard = require('app/component/StockCard')

const StockSearch = ({ stock }) => (
  <div>
    {stock ? (
      <StockCard stock={stock}/>
    ) : (
      <div>Search for a stock below</div>
    )}
  </div>
)

StockSearch.propTypes = {
  stock: React.PropTypes.instanceOf(Stock)
}

module.exports = StockSearch
