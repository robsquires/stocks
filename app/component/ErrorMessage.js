'use strict'

const React = require('react')
const UnknownStockError = require('app/error/UnknownStockError')

const ErrorMessage = ({ error }) => (
  <div>
    {(error instanceof UnknownStockError) ? (
      <div className='alert alert-warning'>
        {`Sorry, we were unable to find a matching stock for ${error.ticker}`}
      </div>
    ) : (
      <div className='alert alert-danger'>
        Sorry, and error has occured
      </div>
    )}
  </div>
)

ErrorMessage.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
}

module.exports = ErrorMessage
