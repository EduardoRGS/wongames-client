import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/games/rd2',
    backgroundImage: '/img/rd2-background.png',
    floatImage: '/img/rd2-img.png',
    alignment: 'right'
  }
} as Meta

export const Default: StoryObj = (args: HighlightProps) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Default.args = {
  title: 'Read Dead is back!',
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/games/rd2',
  backgroundImage: '/img/rd2-background.png',
  floatImage: '/img/rd2-img.png',
  alignment: 'right'
}
