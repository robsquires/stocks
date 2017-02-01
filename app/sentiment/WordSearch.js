'use strict'

class WordSearch {
  constructor (dictionary = []) {
    const characterClasses = dictionary.join('|')
    this.regex = new RegExp(`\\b(${characterClasses})\\b`, 'g')
  }

  search (text) {
    var count = 0
    while (this.regex.exec(text) !== null) {
      count++
    }
    return count
  }
}

module.exports = WordSearch
