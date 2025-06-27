import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: '/img/banner-won.png',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = (args: BannerProps) => <Banner {...args} />

Default.args = {
  img: '/img/banner-won.png',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>'
}

export const WithRibbon: StoryObj = (args: BannerProps) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
