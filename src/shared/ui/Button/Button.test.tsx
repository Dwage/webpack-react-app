import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('button', () => {
  test('with only first param', () => {
    render(<Button>click</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  test('clear class for test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>click</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('clear')
  })
})
