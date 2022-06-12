import { Story, Meta } from '@storybook/react'
import { Lock, Search, User } from '@styled-icons/feather'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'1.5rem'} />,
  placeholder: 'john.cage@gmail.com'
}

export const Minimal: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Minimal.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'1.5rem'} />,
  placeholder: 'john.cage@gmail.com',
  minimal: true
}

export const Password: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Password.args = {
  label: 'Senha',
  name: 'senha',
  icon: <Lock size={'1.5rem'} />,
  placeholder: 'Insira sua senha',
  password: true
}

export const Small: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 197, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Small.args = {
  placeholder: 'example@gmail.com',
  inputHeight: 'small',
  minimal: true
}

export const OutsideIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 250, padding: 15 }}>
    <TextField {...args} />
  </div>
)

OutsideIcon.args = {
  icon: <Search size={'1rem'} strokeWidth={2} />,
  placeholder: 'Buscar usuários',
  inputHeight: 'small',
  minimal: true,
  outsideIcon: true
}
