export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    semiBold: 600,
    bold: 700,
    sizes: {
      xsmall: '0.5rem',
      small: '0.688rem',
      medium: '0.875rem',
      large: '1rem',
      xlarge: '1.5rem',
      xxlarge: '1.75rem',
      huge: '3rem'
    }
  },
  colors: {
    primary: '#FF7A19',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#A8A8A8',
    gray: '#797979',
    darkGray: '#5F5F5F'
  },
  gradients: {
    grayGradient:
      'linear-gradient(50deg, rgba(70,72,79,1) 0%, rgba(52,53,60,1) 100%)',
    blackMainDesktopGradient:
      'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
    blackSecondaryDesktopGradient:
      'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
    blackMobileGradient:
      'linear-gradient(8deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
