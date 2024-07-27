import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

type Story = StoryObj<typeof Heading>
export const Default: Story = (args: HeadingProps) => <Heading {...args} />
Default.args = {
  children: 'Most Populars',
  color: 'black',
  $lineLeft: true,
  $lineBottom: false
}
