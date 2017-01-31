'use strict'

const React = require('react')

const Search = ({ action }) => (
  <form method='GET' action={action} >
    <input type='text' name='ticker' />
    <submit />
  </form>
)

Search.propTypes = {
  action: React.PropTypes.string.isRequired
}

module.exports = Search
