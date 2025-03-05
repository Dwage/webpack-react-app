import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

const meta = {
  title: 'widgets/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {}

export const DarkTheme: Story = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
