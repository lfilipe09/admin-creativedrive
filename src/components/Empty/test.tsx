import { render, screen } from '../../utils/test-utils'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the heading', () => {
    render(<Empty imgAlt="test" imgSrc="/" text="Test" />)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
