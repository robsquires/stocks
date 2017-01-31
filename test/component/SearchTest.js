'use strict'
const React = require('react')
const {shallow} = require('enzyme')

const Search = require('app/component/Search')

describe('Search component', () => {
  it('should set the action of the form', () => {
    const wrapper = shallow(<Search action='/' />)
    expect(wrapper.find('form').prop('action')).to.equal('/')
  })
})
