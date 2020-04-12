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
      primary: ['#1D223B', '#554971', '#8C6ff1', '#8AC6D0', '#B8F3FF'],
      secundary: ['#FABB61', '#FC9777', '#7A606F', '#5BA7D9','#56E39F'],
      background: ['#1e243d', '#16192f', '#291e38'],
      text: '#F2F2F2',
    },
  },
  light: {
    colors: {
      primary: '#7F7F7F',
      secundary: '#CCCCCC',
      background: ['#CCCCCC', '#EEEEEE', '#BDA1EC'],
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
