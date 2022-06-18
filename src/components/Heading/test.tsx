import { render, screen } from '../../utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading title={'Heading'} />)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
