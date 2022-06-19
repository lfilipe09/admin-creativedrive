import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    grid-gap: 1rem;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
