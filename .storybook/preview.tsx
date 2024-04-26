import React from 'react'
import GlobalStyles from '../src/app/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
