import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = (args: RibbonProps) => (
  <div
    style={{
      width: '40rem',
      height: '20rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

Default.args = {
  children: 'Best Seller',
  color: 'primary',
  size: 'normal'
}
