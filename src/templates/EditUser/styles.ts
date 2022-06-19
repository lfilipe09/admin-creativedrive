import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    grid-gap: 10rem;
    padding: ${theme.spacings.medium} 0;
    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: center;
      grid-gap: 2rem;
    `}
  `}
`
