import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      grid-template-columns: unset
    `}
`

export const ButtonWrapper = styled.div`
  padding: 1rem 0;
`
