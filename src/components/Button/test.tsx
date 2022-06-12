import { render, screen } from '../../utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button>Criar uma conta</Button>)

    expect(
      screen.getByRole('button', { name: /Criar uma conta/i })
    ).toBeInTheDocument()
  })
})
