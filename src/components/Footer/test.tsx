import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from '../../app/utils/test/helpers'

describe('<Footer />', () => {
  it('should render the footer columns', () => {
    renderWithTheme(<Footer />)

    // Se a coluna de contato está sendo renderizada
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    // Se a coluna do follow us está sendo renderizada
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    // Se a coluna de links está sendo renderizada
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    // Se coluna do localiza;áo esta sendo renderizada
    expect(screen.getByRole('heading', { name: /location/i })).toBeInTheDocument
  })
})
