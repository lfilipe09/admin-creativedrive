import { render, screen } from '../../utils/test-utils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    render(<Dropdown options={['Admin', 'User']} label={'Perfil'} />)

    expect(screen.getByText('Perfil')).toBeInTheDocument()
  })
})
