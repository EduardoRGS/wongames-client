import { Meta, StoryObj } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      description: 'Colors of the logo',
      control: { type: 'select' },
      options: ['black', 'white']
    }
  }
} as Meta

type Story = StoryObj<typeof Logo>
export const Default: Story = (args: LogoProps) => <Logo {...args} />
Default.args = {
  color: 'white',
  $hideOnMobile: false
}
