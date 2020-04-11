import React from 'react';
import { Themes } from 'styles'
import { CLIENT } from 'environment'

const setTheme = () => {
  return Themes[CLIENT] ? Themes[CLIENT]['light'] : Themes['default']['dark']
}

export default setTheme
