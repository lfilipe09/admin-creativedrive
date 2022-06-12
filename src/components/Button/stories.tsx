import { Story, Meta } from '@storybook/react'
import { ChevronRight, Trash2 } from '@styled-icons/feather'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}
  >
    <Button {...args} />
  </div>
)

Default.args = {
  children: 'Criar uma conta',
  icon: <ChevronRight strokeWidth={4} width={'1rem'} />
}

export const OnlyIcon: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}
  >
    <Button {...args} />
  </div>
)

OnlyIcon.args = {
  icon: <ChevronRight strokeWidth={4} width={'1rem'} />
}

export const OnlyIconGray: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}
  >
    <Button {...args} />
  </div>
)

OnlyIconGray.args = {
  icon: <Trash2 strokeWidth={1} width={'2rem'} />,
  iconGrey: true
}

export const Minimal: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}
  >
    <Button {...args} />
  </div>
)

Minimal.args = {
  children: 'Deletar',
  minimalButton: true
}

export const Border: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}
  >
    <Button {...args} />
  </div>
)

Border.args = {
  children: 'Fazer upload',
  borderButton: true
}
