import { render, screen } from '../../utils/test-utils'

import Pagination from '.'

describe('<Pagination />', () => {
  it('should render the heading', () => {
    render(<Pagination numberOfPages={10} />)

    expect(screen.getByText('Carregar mais')).toBeInTheDocument()
  })
})
