import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import themes from '../../../themes/Themes'
import { CLIENT } from '../../../environment'
import Block from '.'

const clientTheme = themes[CLIENT] ? themes[CLIENT] : themes.default
addParameters({
  backgrounds: [
    { name: 'Light', value: clientTheme.light.colors.background, default: true },
    { name: 'Dark', value: clientTheme.dark.colors.background },
  ],
})

storiesOf('Block', module)
  .add('default', () => (
    <Block>This is a block, it represents a div!</Block>
  ))
