import React from 'react'
import { mount, shallow } from 'enzyme'
import { Themes } from 'themes'
import GenericTemplate from '.'


const wrap = (props = {}) => shallow(<GenericTemplate {...props}>test</GenericTemplate>)

it('mounts', () => {
  mount(<GenericTemplate theme={Themes.default.dark}>test</GenericTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
