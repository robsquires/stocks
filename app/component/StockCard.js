'use strict'

const React = require('react')

const Stock = require('app/model/Stock')
const NewsStory = require('./NewsStory')

const StockCard = ({ stock }) => (
  <div>
    <h1>{stock.name} ({stock.ticker})</h1>
    { stock.price &&
      <div>
        <p>{stock.price.value} {stock.price.units} (Last updated: {stock.price.asOf.toJSON()})</p>
      </div>
    }
    <ul>
    {stock.stories.toArray().map((story, idx) => (
      <li key={idx}>
        <NewsStory story={story} />
      </li>
    ))}
    </ul>

  </div>
)

StockCard.propTypes = {
  stock: React.PropTypes.instanceOf(Stock).isRequired
}

module.exports = StockCard
