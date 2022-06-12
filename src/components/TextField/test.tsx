import { render, screen } from '../../utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    render(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })
})
