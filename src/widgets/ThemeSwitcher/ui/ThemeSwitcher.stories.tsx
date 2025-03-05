import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {}

export const DarkTheme: Story = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
