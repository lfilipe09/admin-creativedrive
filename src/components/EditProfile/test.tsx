import { render, screen } from '../../utils/test-utils'

import EditProfile from '.'

describe('<EditProfile />', () => {
  it('should render the heading', () => {
    render(<EditProfile onDisable={() => console.log('desabilitar')} />)

    expect(
      screen.getByRole('button', { name: /Desativar usuario/i })
    ).toBeInTheDocument()
  })
})
