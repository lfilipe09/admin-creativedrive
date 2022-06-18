import { render, screen } from '../../utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    render(<FormSignUp onSubmit={() => console.log('ola')} />)

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
  })
})
