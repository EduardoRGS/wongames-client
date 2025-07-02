import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import highlightMock from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...highlightMock }
} as Meta

export const Default: StoryObj = (args: HighlightProps) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Default.args = { ...highlightMock }
