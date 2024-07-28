import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../app/utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the the open/close menu', () => {
    renderWithTheme(<Menu />)

    // Selecionar o menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/login now/i)).toBeInTheDocument()
    expect(screen.queryByText(/sing up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Eduardo" />)

    expect(screen.queryByText(/my account/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/login now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sing up/i)).not.toBeInTheDocument()
  })
})
