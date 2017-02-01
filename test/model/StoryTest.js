'use strict'

const Story = require('app/model/Story')
const immutable = require('immutable')

describe('Story Model', () => {
  it('should be instantiable', () => {
    expect(new Story()).to.exist
    expect(new Story()).to.instanceof(immutable.Record)
  })

  it('should hold the headline', () => {
    const headline = 'Ad revenues still primary source of Google revenue'
    const story = new Story({ headline })
    expect(story.headline).to.equal(headline)
  })

  it('should hold the body', () => {
    const body = 'Investors were encouraged by a healthy...'
    const story = new Story({ body })
    expect(story.body).to.equal(body)
  })

  describe('sentiment analysis', () => {
    it('should have a *neutral* rating when 0 <= positivity < 2', () => {
      expect(new Story({ positivity: 0 }).calculateSentiment()).to.equal(Story.NEUTRAL)
      expect(new Story({ positivity: 1 }).calculateSentiment()).to.equal(Story.NEUTRAL)
    })
    it('should have a *negative* rating when positivity < 0', () => {
      expect(new Story({ positivity: -1 }).calculateSentiment()).to.equal(Story.NEGATIVE)
      expect(new Story({ positivity: -100 }).calculateSentiment()).to.equal(Story.NEGATIVE)
    })

    it('should have a *positive* rating when positivity >= 2', () => {
      expect(new Story({ positivity: 2 }).calculateSentiment()).to.equal(Story.POSITIVE)
      expect(new Story({ positivity: 100 }).calculateSentiment()).to.equal(Story.POSITIVE)
    })
  })
})
