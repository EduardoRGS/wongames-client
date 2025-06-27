import { Meta, StoryObj } from '@storybook/react'
import Slider, { SliderSettings } from '.'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: StoryObj = {
  render: (args) => (
    <Slider {...args} settings={settings}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
      <Slide>Slide 5</Slide>
    </Slider>
  )
}

export const Vertical: StoryObj = {
  render: (args) => (
    <Slider {...args} settings={verticalSettings}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
      <Slide>Slide 5</Slide>
    </Slider>
  )
}
