import { Home, User } from '@styled-icons/feather'
import { render, screen } from '../../utils/test-utils'

import Menu from '.'

const props = {
  menuItems: [
    {
      icon: <Home size={'1.5rem'} strokeWidth={0.5} />,
      label: 'Home',
      url: '/dashboard'
    },
    {
      icon: <User size={'1.5rem'} strokeWidth={0.5} />,
      label: 'Usuários',
      url: '/users'
    }
  ],
  logoImageUrl: '/img/creativedrive.png'
}

describe('<Menu />', () => {
  it('should render the heading', () => {
    render(<Menu {...props} />)

    expect(screen.getAllByText('Home')).toHaveLength(2)
  })
})
