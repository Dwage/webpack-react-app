import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LanguageSwitcher } from './LanguageSwitcher'

const meta = {
  title: 'widgets/LanguageSwitcher',
  component: LanguageSwitcher,
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {}

export const DarkTheme: Story = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
