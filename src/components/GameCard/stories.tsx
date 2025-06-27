import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: '/img/rd2-background.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: StoryObj = (args: GameCardProps) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: StoryObj = (args: GameCardProps) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

Default.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: '/img/rd2-background.png',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00',
  favorite: false
}

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
