import type { Meta, StoryObj } from "@storybook/react"

import { Button, ThemeButtom } from "./Button"

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "text",
  },
}

export const Clear: Story = {
  args: {
    children: "text",
    theme: ThemeButtom.CLEAR,
  },
}

export const Outlined: Story = {
  args: {
    children: "text",
    theme: ThemeButtom.OUTLINE,
  },
}
