import { render, screen } from '../../utils/test-utils'

import FormSignEditUser from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    render(<FormSignEditUser onSubmit={() => console.log('ola')} />)

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
  })
})
