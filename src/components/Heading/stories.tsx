import { Meta } from '@storybook/react'
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

const HeadingTemplate = (args: HeadingProps) => <Heading {...args} />

// Usado any apenas para tirar o erro de tipagem do args
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default = HeadingTemplate.bind({}) as any
Default.args = {
  children: 'Most Populars',
  color: 'black',
  lineLeft: true,
  lineBottom: false
}
