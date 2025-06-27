import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from '../../app/utils/test/helpers'

const props = {
  img: 'img.jpg',
  title: 'Defy death',
  subtitle: 'Play the new CrashLands season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Defy death/i })).toHaveAttribute(
      'src',
      'img.jpg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Banner with Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    expect(screen.getByText(/My Ribbon/i)).toBeInTheDocument()
    expect(screen.getByText(/My Ribbon/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(screen.getByText(/My Ribbon/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.6rem'
    })
  })
})
