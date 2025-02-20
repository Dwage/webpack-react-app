import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from './Button'

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
    theme: ThemeButton.CLEAR,
  },
}

export const Outlined: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
