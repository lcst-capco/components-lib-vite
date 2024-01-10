import { Meta, StoryObj } from '@storybook/react'
import { WeatherChecker } from '../components/WeatherChecker'

const meta = {
    title: 'Components/WeatherChecker',
    component: WeatherChecker,
    parameters: {
      layout: 'centered',
    },
  } satisfies Meta<typeof WeatherChecker>
  
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
      },
}