const genericDesign = {
  fonts: {
    primary: 'Montserrat, sans-serif',
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
      primary: ['#1D223B', '#554971', '#8C6FF1', '#6B6CED', '#B8F3FF'],
      secundary: ['#FABB61', '#FC9777', '#7A606F', '#5BA7D9', '#56E39F'],
      background: ['#1E243D', '#16192F', '#291E38'],
      text: ['#E1E1E7', '#8B95B5'],
      actions: ['#1890ff', '#52c41a', '#fadb14', '#f5222d'],
    },
  },
  light: {
    colors: {
      primary: '#7F7F7F',
      secundary: '#CCCCCC',
      background: ['#DDDDDD', '#E1E1E7', '#C4A9F2'],
      text: '#1D223B',
      actions: ['#1890ff', '#52c41a', '#fadb14', '#f5222d'],
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
