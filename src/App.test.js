import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import './setupTests'


describe('App Component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })
})