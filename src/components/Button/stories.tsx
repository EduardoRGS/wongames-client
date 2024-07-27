import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

type Story = StoryObj<typeof Button>
export const Default: Story = (args: ButtonProps) => <Button {...args} />

Default.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false
}

type StoryWitthIcon = StoryObj<typeof Button>
export const withIcon: StoryWitthIcon = (args: ButtonProps) => (
  <Button {...args} />
)

withIcon.args = {
  children: 'Buy now',
  size: 'small',
  fullWidth: false,
  icon: <AddShoppingCart />
}
