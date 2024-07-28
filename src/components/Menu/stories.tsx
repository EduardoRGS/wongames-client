import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

type Story = StoryObj<typeof Menu>
export const Default: Story = (args: MenuProps) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
