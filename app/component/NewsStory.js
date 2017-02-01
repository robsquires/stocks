'use strict'

const React = require('react')

const Story = require('app/model/Story')
const SentimentIcon = require('./SentimentIcon')

const NewsStory = ({ story }) => (
  <div>
    <h3>
      {story.headline} - <SentimentIcon score={story.calculateSentiment()} />
    </h3>
    <p>{story.body}</p>

  </div>
)

NewsStory.propTypes = {
  story: React.PropTypes.instanceOf(Story).isRequired
}

module.exports = NewsStory
