import { render, screen } from '@testing-library/react'
import { Button, ThemeButtom } from './Button'

describe('button', () => {
  test('with only first param', () => {
    render(<Button>click</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  test('clear class for test', () => {
    render(<Button theme={ThemeButtom.CLEAR}>click</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('clear')
  })
})
