import { Story, Meta } from '@storybook/react'
import { Home, User } from '@styled-icons/feather'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div style={{ height: '86vh', width: '100%' }}>
    <Menu {...args} />
  </div>
)

Default.args = {
  menuItems: [
    {
      icon: <Home size={'1.2rem'} strokeWidth={0.5} />,
      label: 'Home',
      url: '/dashboard'
    },
    {
      icon: <User size={'1.2rem'} strokeWidth={0.5} />,
      label: 'Usuários',
      url: '/users'
    }
  ],
  logoImageUrl: '/img/creativedrive.png'
}
