import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'creativedrive-dark',
    values: [
      {
        name: 'creativedrive-light',
        value: theme.colors.white
      },
      {
        name: 'creativedrive-dark',
        value: theme.colors.black
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
