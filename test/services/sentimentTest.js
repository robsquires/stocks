'use strict'

const {positivityCalculator} = require('app/services/sentiment')
const Story = require('app/model/Story')

const BODY = "Investors were encouraged by a healthy gain in the number of people looking at Google's ads, even as the average prices for those marketing messages extended a three-and-half year slump. The market also had been bracing for more disappointing numbers, triggering a 'relief rally' when the results weren't as bad as feared, BGC Partners analyst Colin Gillis said."
const story = new Story({ body: BODY })

describe('Sentiment Services **Integration test**', () => {
  describe('Positivity Calculator', () => {
    it('should calculate the score correctly when using real life data', () => {
      expect(positivityCalculator.calculateScore(story).positivity).to.equal(-2)
    })
  })
})
