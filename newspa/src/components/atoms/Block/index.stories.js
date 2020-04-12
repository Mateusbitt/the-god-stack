import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import Block from '.'
import themes from '../../../themes/Themes'
import { CLIENT } from '../../../environment'

const clientTheme = themes[CLIENT] ? themes[CLIENT] : themes.default
addParameters({
  backgrounds: [
    { name: 'Light', value: clientTheme.light.colors.background[0], default: true },
    { name: 'Dark', value: clientTheme.dark.colors.background[0] },
  ],
})

storiesOf('Block', module)
  .add('default', () => (
    <Block>This is a block, it represents a div!</Block>
  ))
