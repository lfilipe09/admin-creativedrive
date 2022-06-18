import { render, screen } from '../../utils/test-utils'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(
      <Modal
        onDelete={() => console.log('ola')}
        onReturn={() => console.log('ola')}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Deleção de usuário/i })
    ).toBeInTheDocument()
  })
})
