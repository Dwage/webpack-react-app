import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [RouterDecorator],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {}

export const DarkTheme: Story = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
