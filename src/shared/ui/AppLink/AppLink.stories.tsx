import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link text',
  },
  decorators: [RouterDecorator],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
}

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
