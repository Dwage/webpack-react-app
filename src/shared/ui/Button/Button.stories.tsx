import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'text',
  },
}

export const Clear: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR,
  },
}

export const Outlined: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
