'use strict'

const React = require('react')

const Stock = require('app/model/Stock')
const StockCard = require('app/component/StockCard')
const Search = require('app/component/Search')
const ErrorMessage = require('app/component/ErrorMessage')

const StockSearch = ({ stock, error }) => (
  <div className="container">
    <div className="row">
      <div className="col" style={{ margin: '30px 0' }}>
        <Search action='/'/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        { error &&
          <ErrorMessage error={error}/>
        }

        { stock &&
          <StockCard stock={stock}/>
        }
      </div>
    </div>
  </div>
)

StockSearch.propTypes = {
  stock: React.PropTypes.instanceOf(Stock),
  error: React.PropTypes.instanceOf(Error)
}

module.exports = StockSearch
