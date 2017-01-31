'use strict'

const {Record} = require('immutable')

const Story = Record({

  /**
   * headline
   * @type string
   */
  headline: '',

  /**
   * body
   * @type string
   */
  body: ''
})

module.exports = Story
