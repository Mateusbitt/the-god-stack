import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import Button from '.'
import themes from '../../../themes/Themes'
import { CLIENT } from '../../../environment'

const clientTheme = themes[CLIENT] ? themes[CLIENT] : themes.default
addParameters({
  backgrounds: [
    { name: 'Light', value: clientTheme.light.colors.background[0], default: true },
    { name: 'Dark', value: clientTheme.dark.colors.background[0] },
  ],
})
storiesOf('Button', module)
  .add('default', () => (
    <Button>Hello</Button>
  ))
  .add('reverse', () => (
    <Button reverse>Hello</Button>
  ))
  .add('another palette', () => (
    <Button palette="secondary">Hello</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Hello</Button>
  ))
  .add('transparent', () => (
    <Button transparent>Hello</Button>
  ))
  .add('height', () => (
    <Button height={100}>Hello</Button>
  ))
  .add('link', () => (
    <Button href="https://github.com/diegohaz/arc">ARc repository</Button>
  ))
