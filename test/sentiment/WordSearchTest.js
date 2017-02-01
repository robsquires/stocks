'use strict'

const WordSearch = require('app/sentiment/WordSearch')

describe('Word Search', () => {
  it('should be instantiable', () => {
    expect(new WordSearch()).to.exist
  })

  it('should find whole words', () => {
    const dictionary = ['dog', 'cat']
    const wordSearch = new WordSearch(dictionary)
    expect(wordSearch.search('doggy dog')).to.equal(1)
  })
  it('should allow spaces and punctation', () => {
    const dictionary = ['dog', 'cat']
    const wordSearch = new WordSearch(dictionary)
    expect(wordSearch.search('dog dog.dog!')).to.equal(3)
  })
})
