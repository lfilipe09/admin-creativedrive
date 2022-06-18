import { Story, Meta } from '@storybook/react'
import HeroHeading, { HeroHeadingProps } from '.'

export default {
  title: 'HeroHeading',
  component: HeroHeading
} as Meta

export const Default: Story<HeroHeadingProps> = (args) => (
  <HeroHeading {...args} />
)

Default.args = {
  title: 'C*ri*e a s*ua* c*o*n*t*a'
}
