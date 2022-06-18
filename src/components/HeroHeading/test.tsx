import { render, screen } from '../../utils/test-utils'

import HeroHeading from '.'

describe('<HeroHeading />', () => {
  it('should render the heading', () => {
    render(<HeroHeading title={'Hey'} />)

    expect(screen.getByText('Hey')).toBeInTheDocument()
  })
})
