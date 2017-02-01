'use strict'

const React = require('react')
const {POSITIVE, NEGATIVE} = require('app/model/Story')
const SentimentIcon = ({ score }) => (
  <span
    style={{
      fontWeight: 'bolder',
      color: score === POSITIVE ? 'green' : score === NEGATIVE ? 'red' : 'black'
    }}>
  {score}
  </span>
)


module.exports = SentimentIcon
