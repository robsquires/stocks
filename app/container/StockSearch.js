'use strict'

const React = require('react')

const Stock = require('app/model/Stock')
const StockCard = require('app/component/StockCard')
const Search = require('app/component/Search')
const UnknownStockError = require('app/error/UnknownStockError')

const StockSearch = ({ stock, error }) => (
  <div>

    { error &&
      <div className='error'>{`Sorry, we were unable to find a matching stock for ${error.ticker}`}</div>
    }

    {stock ? (
      <StockCard stock={stock}/>
    ) : (
      <div>Search for a stock below</div>
    )}

    <Search action='/'/>

  </div>
)

StockSearch.propTypes = {
  stock: React.PropTypes.instanceOf(Stock),
  error: React.PropTypes.instanceOf(UnknownStockError)
}

module.exports = StockSearch
