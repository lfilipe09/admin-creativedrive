import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    letter-spacing: 0.1rem;
  `}
`
