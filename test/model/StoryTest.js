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
    const price = new Story({ headline })
    expect(price.headline).to.equal(headline)
  })

  it('should hold the body', () => {
    const body = 'Investors were encouraged by a healthy...'
    const price = new Story({ body })
    expect(price.body).to.equal(body)
  })
})
