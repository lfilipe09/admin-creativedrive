import { render, screen } from '../../utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    render(<FormSignIn onSubmit={() => console.log('ola')} />)

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
  })
})
