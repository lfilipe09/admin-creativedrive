import { Story, Meta } from '@storybook/react'
import { MinusCircle, Users } from '@styled-icons/feather'
import DashboardData, { DashboardDataProps } from '.'

export default {
  title: 'DashboardData',
  component: DashboardData
} as Meta

export const Default: Story<DashboardDataProps> = (args) => (
  <DashboardData {...args} />
)

Default.args = {
  dataNumber: 13,
  title: 'Colaboradores',
  icon: <Users strokeWidth={1} width={'1.2rem'} />,
  isActive: true
}

export const Inactive: Story<DashboardDataProps> = (args) => (
  <DashboardData {...args} />
)

Inactive.args = {
  dataNumber: 7,
  title: 'Perfis inativos',
  icon: <MinusCircle strokeWidth={1} width={'1.2rem'} />,
  isActive: false
}

export const Empty: Story<DashboardDataProps> = (args) => (
  <DashboardData {...args} />
)

Empty.args = {
  title: 'Nenhum colaborador cadastrado',
  icon: <Users strokeWidth={1} width={'1.2rem'} />,
  isActive: false
}
