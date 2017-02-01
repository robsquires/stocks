'use strict'

const React = require('react')
const {POSITIVE, NEGATIVE} = require('app/model/Story')

const getBadge = score => (
  score === POSITIVE ? 'success' : score === NEGATIVE ? 'danger' : 'info'
)
const SentimentIcon = ({ score }) => (
  <span
    className={`badge badge-${getBadge(score)}`}
    >
  {score}
  </span>
)

SentimentIcon.propTypes = {
  score: React.PropTypes.string.isRequired
}

module.exports = SentimentIcon
