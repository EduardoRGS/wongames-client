import { Meta } from '@storybook/react'
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

const LogoTemplate = (args: LogoProps) => <Logo {...args} />

// Usado any apenas para tirar o erro de tipagem do args
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default = LogoTemplate.bind({}) as any
Default.args = {
  color: 'white',
  $hideOnMobile: false
}
