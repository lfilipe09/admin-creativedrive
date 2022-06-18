import { Story, Meta } from '@storybook/react'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  numberOfPages: 10,
  onPageChange: (value) => console.log(value)
}
