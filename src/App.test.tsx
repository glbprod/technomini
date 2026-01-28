import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders main heading', () => {
    render(<App />)
    expect(screen.getByText(/Déployez vos idées/i)).toBeInTheDocument()
  })
})
