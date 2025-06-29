import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'

const items = [
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-img.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 195,00'
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-background.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 190,00'
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-img.png',
    price: 'R$ 225,00',
    promotionalPrice: 'R$ 180,00'
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-background.png',
    price: 'R$ 220,00',
    promotionalPrice: 'R$ 170,00'
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-background.png',
    price: 'R$ 220,00',
    promotionalPrice: 'R$ 170,00'
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    image: 'img/rd2-background.png',
    price: 'R$ 220,00',
    promotionalPrice: 'R$ 170,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items
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
  items
}
