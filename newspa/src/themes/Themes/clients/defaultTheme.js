const genericDesign = {
  fonts: {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  sizes: {
    maxWidth: '1100px',
  },
}

const darkLight = {
  dark: {
    colors: {
      primary: '#CCCCCC',
      secundary: '#7F7F7F',
      background: '#333333',
      text: '#F2F2F2',
    },
  },
  light: {
    colors: {
      primary: '#7F7F7F',
      secundary: '#CCCCCC',
      background: '#F2F2F2',
      text: '#33333',
    },
  },
}

export default (
  {
    dark: {
      ...darkLight.dark,
      ...genericDesign,
    },
    light: {
      ...darkLight.light,
      ...genericDesign,
    },
  }
)
