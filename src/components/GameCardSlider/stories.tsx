import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'
import gameCardSliderMock from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items: gameCardSliderMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = (args: GameCardSliderProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)

Default.args = {
  items: gameCardSliderMock
}
