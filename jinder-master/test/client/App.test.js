import React from 'react'
import { shallow, render } from 'enzyme'

import App from '../../client/components/App'
import Favs from '../../client/components/Favs'
import './setup-dom'

// test('App contains an <input> element', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('input').text()).toBe('Jinder')
// })


test('App reading .title text', () => {
  //arrange
  let expected = 'Job Type:'
  const wrapper = shallow(<App />)

  //act
  const actual = wrapper.find('.title').text()

  //assert
  expect(actual).toEqual(expected)

  // const input = shallow(<App searchTerm="search" location="location"/>)
  // expect(input.text()).toEqual('search');
  // input.find('input').simulate('change');
  // expect(input.text()).toEqual('location');
})

test('Input equals true', () => {

  // let expected = 

  const wrapper = shallow(<App />)

  expect(wrapper.containsMatchingElement(<input/>)).toEqual(true)

  // expect(wrapper.find('.searchInput'))
})

test('App contains JobDetail component', () => {
  // Arrange
  // const jobs = ['kjnkjn']
  const expected = 'Your Favourites are :'

  // Act
  const wrapper = shallow(<Favs  />)
  const actual = wrapper.find('.Favs h4').text()

  // Assert
  expect(actual).toMatch(expected)
})


