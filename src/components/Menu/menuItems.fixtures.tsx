import { Home, LogOut, User } from '@styled-icons/feather'
import { MenuItem } from '.'

export const menuItems: MenuItem[] = [
  {
    icon: <Home size={'1.2rem'} strokeWidth={0.5} />,
    label: 'Home',
    url: '/dashboard'
  },
  {
    icon: <User size={'1.2rem'} strokeWidth={0.5} />,
    label: 'Usuários',
    url: '/users'
  },
  {
    icon: <LogOut size={'1.2rem'} strokeWidth={0.5} />,
    label: 'Logout',
    url: '/'
  }
]
