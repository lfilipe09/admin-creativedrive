import { render, screen } from '../../utils/test-utils'

import ContentWrapper from '.'

describe('<ContentWrapper />', () => {
  it('should render the heading', () => {
    render(<ContentWrapper>teste</ContentWrapper>)

    expect(screen.getByText('teste')).toBeInTheDocument()
  })
})
