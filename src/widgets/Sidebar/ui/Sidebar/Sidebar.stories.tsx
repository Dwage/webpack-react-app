import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [RouterDecorator],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {}

export const DarkTheme: Story = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
