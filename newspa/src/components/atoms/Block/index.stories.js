import React from 'react'
import { storiesOf, addParameters } from '@storybook/react'
import Block from '.'


addParameters({
  backgrounds: [
    { name: 'Light', value: '#00aced', default: true },
    { name: 'Dark', value: '#3b5998' },
  ],
})

storiesOf('Block', module)
  .add('default', () => (
    <Block>This is a block, it represents a div!</Block>
  ))
