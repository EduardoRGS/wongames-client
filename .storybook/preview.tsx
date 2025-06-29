import React from 'react'
import GlobalStyles from '../src/app/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/app/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      { name: 'won-light', value: theme.colors.white },
      { name: 'won-dark', value: theme.colors.black }
    ]
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
