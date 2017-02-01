'use strict'

class PositivityCalculator {

  constructor (positiveSearch, negativeSearch) {
    if (!positiveSearch) {
      throw new TypeError('A positive search engine is required')
    }
    if (!negativeSearch) {
      throw new TypeError('A negative search engine is required')
    }

    this.positiveSearch = positiveSearch
    this.negativeSearch = negativeSearch
  }

  calculateScore (story) {
    const positiveScore = this.positiveSearch.search(story.body)
    const negativeScore = this.negativeSearch.search(story.body)
    return story.merge({
      positivity: positiveScore - negativeScore
    })
  }
}

module.exports = PositivityCalculator
