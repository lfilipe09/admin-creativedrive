import { render, screen } from '../../utils/test-utils'

import WarningAlert from '.'

describe('<Warning />', () => {
  it('should render the heading', () => {
    render(<WarningAlert title={'Olá'} />)

    expect(screen.getByText('Olá')).toBeInTheDocument()
  })
})
