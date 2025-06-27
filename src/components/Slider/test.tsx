import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../app/utils/test/helpers'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Slide 1</p>
        <p>Slide 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/slide 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/slide 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })
})
