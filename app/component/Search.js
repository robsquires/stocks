'use strict'

const React = require('react')

const Search = ({ action }) => (
  <form method='GET' action={action} >
    <input
      type='text'
      name='ticker'
      placeholder='Enter a stock ticker e.g. GOOG'
    />
    <button type='submit'>Search</button>
  </form>
)

Search.propTypes = {
  action: React.PropTypes.string.isRequired
}

module.exports = Search
