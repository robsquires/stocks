'use strict'

const {Record} = require('immutable')

const StoryRecord = Record({

  /**
   * headline
   * @type string
   */
  headline: '',

  /**
   * body
   * @type string
   */
  body: '',

  /**
   * positivity
   * @type integer
   */
  positivity: null
})

class Story extends StoryRecord {

  calculateSentiment () {
    const positivity = this.positivity
    if (positivity < 0) {
      return Story.NEGATIVE
    } else if (positivity >= 2) {
      return Story.POSITIVE
    } else {
      return Story.NEUTRAL
    }
  }
}

Story.NEUTRAL = 'neutral'
Story.POSITIVE = 'positive'
Story.NEGATIVE = 'negative'

module.exports = Story
