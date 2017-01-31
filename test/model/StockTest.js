'use strict'

const Stock = require('app/model/Stock')
const Story = require('app/model/Story')
const immutable = require('immutable')

describe('Stock Model', () => {
  it('should be instantiable', () => {
    expect(new Stock()).to.exist
    expect(new Stock()).to.instanceof(immutable.Record)
  })

  it('should hold the company name', () => {
    const stock = new Stock({ name: 'Apple' })
    expect(stock.name).to.equal('Apple')
  })

  it('should hold the ticker', () => {
    const stock = new Stock({ ticker: 'AAPL' })
    expect(stock.ticker).to.equal('AAPL')
  })

  it('should hold a url to the story feed', () => {
    const stock = new Stock({ storyFeedUrl: 'http://news.api.com' })
    expect(stock.storyFeedUrl).to.equal('http://news.api.com')
  })

  it('should have an empty collection of stories by default', () => {
    const stock = new Stock({ ticker: 'AAPL' })
    expect(stock.stories.toJS()).to.eql([])
  })
  it('should allow a Story to be added to its collection', () => {
    const stock = new Stock({ ticker: 'AAPL' })
    const story = new Story({ headline: 'headline' })
    expect(stock.addStory(story).stories.toJS()).to.eql([ story.toJS() ])
  })
})
