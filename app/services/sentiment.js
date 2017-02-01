'use strict'

const WordSearch = require('app/sentiment/WordSearch')
const PositivityCalculator = require('app/sentiment/PositivityCalculator')

const POSITIVE_WORDS = ['positive', 'success', 'grow', 'gains', 'happy', 'healthy']
const NEGATIVE_WORDS = ['disappointing', 'concerns', 'decline', 'drag', 'slump', 'feared']

const positiveSearch = new WordSearch(POSITIVE_WORDS)
const negativeSearch = new WordSearch(NEGATIVE_WORDS)

/**
 * public services
 */
module.exports = {
  positivityCalculator: new PositivityCalculator(positiveSearch, negativeSearch)
}
