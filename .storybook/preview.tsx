import React from 'react'
import GlobalStyles from '../src/app/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/app/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
