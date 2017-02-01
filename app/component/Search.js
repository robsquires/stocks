'use strict'

const React = require('react')

const Search = ({ action }) => (
  <form
    method='GET'
    action={action}
    className='form-inline'
    >
    <div className="form-group">
      <input
        style={{ width: '300px' }}
        className="form-control"
        type='text'
        name='ticker'
        placeholder='Enter a stock ticker e.g. GOOG'
      />
      <button
        type='submit'
        className='btn btn-primary'>
        Search
      </button>
    </div>
  </form>
)

Search.propTypes = {
  action: React.PropTypes.string.isRequired
}

module.exports = Search
