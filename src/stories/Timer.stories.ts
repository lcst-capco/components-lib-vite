import { Meta, StoryObj } from '@storybook/react'
import { Timer } from '../components/Timer'

const meta = {
    title: 'Components/Timer',
    component: Timer,
    parameters: {
      layout: 'centered',
    },
  } satisfies Meta<typeof Timer>
  
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
      },
}