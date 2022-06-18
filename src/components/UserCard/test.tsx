import { render, screen } from '../../utils/test-utils'

import UserCard from '.'

const props = {
  activity: 'Ativo',
  creationDate: new Date().toString(),
  name: 'Fulano Ciclano',
  email: 'example@gmail.com',
  role: 'Administrador',
  imgAlt: 'Empty Photo',
  imgUrl: '/img/empty-profile-pic.png',
  onDeleteData: (email: string) => console.log(email),
  onEditData: (email: string) => console.log(email)
}

describe('<UserCard />', () => {
  it('should render the heading', () => {
    render(<UserCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Fulano Ciclano/i })
    ).toBeInTheDocument()
  })
})
