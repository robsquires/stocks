'use strict'

const React = require('react')

const Stock = require('app/model/Stock')
const NewsStory = require('./NewsStory')

const StockCard = ({ stock }) => (
  <div className='card'>
    <div className='card-block'>
      <h1 className='card-title'>{stock.name} ({stock.ticker})</h1>
      { stock.price &&
        <div className='card-subtitle mb-2 text-muted'>
          <p>{stock.price.value} {stock.price.units} (Last updated: {stock.price.asOf.toJSON()})</p>
        </div>
      }
      <ul className='list-unstyled'>
      {stock.stories.toArray().map((story, idx) => (
        <li key={idx}>
          <NewsStory story={story} />
        </li>
      ))}
      </ul>
    </div>
  </div>
)

StockCard.propTypes = {
  stock: React.PropTypes.instanceOf(Stock).isRequired
}

module.exports = StockCard
