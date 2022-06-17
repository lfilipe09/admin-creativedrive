import { Story, Meta } from '@storybook/react'
import { UserCheck } from '@styled-icons/feather'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

export const Default: Story<DropdownProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Dropdown {...args} />
  </div>
)

Default.args = {
  initialValue: 'Administrador',
  label: 'Perfil',
  icon: <UserCheck size={'1.5rem'} />,
  options: ['Administrador', 'Usuario']
}

export const Minimal: Story<DropdownProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Dropdown {...args} />
  </div>
)

Minimal.args = {
  initialValue: 'Administrador',
  label: 'Perfil',
  icon: <UserCheck size={'1.5rem'} />,
  options: ['Administrador', 'Usuario'],
  minimal: true,
  onDropdownChange: (value) => {
    console.log(value)
  }
}

export const Small: Story<DropdownProps> = (args) => (
  <div style={{ maxWidth: 180, padding: 15 }}>
    <Dropdown {...args} />
  </div>
)

Small.args = {
  initialValue: 'Administrador',
  options: ['Administrador', 'Usuario'],
  minimal: true,
  dropdownHeight: 'small'
}
