import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import Button, {
  StyledButton,
  Anchor,
  StyledLink,
  fontSize,
} from '.'

const wrap = (props = {}) => shallow(<Button {...props} />)

const mockDark = Themes.default.dark
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useContext: () => mockDark,
  }
})

it('renders with different combination of props', () => {
  wrap({ disabled: true })
  wrap({ transparent: true })
  wrap({ disabled: true, transparent: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find(StyledButton)).toHaveLength(1)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find(Anchor)).toHaveLength(1)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find(StyledLink)).toHaveLength(1)
})

it('execute fontSizeFunction', () => {
  expect(fontSize({ height: 40 })).toBe('0.8rem')
})

it('execute hoverForegroundColor Function with transparency', () => {
  expect(StyledLink).toBeInstanceOf(Object)
})
