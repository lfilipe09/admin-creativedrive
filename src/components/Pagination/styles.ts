import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  grid-gap: 0.4rem;
`

export const Icon = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0.5px solid ${theme.colors.lightGray};
    background: transparent;
    max-width: 1.5rem;
    color: ${theme.colors.white};
    border-radius: 0.2rem;
    text-align: center;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const WrapperMobile = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 0.4rem;
`

export const TextMobile = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  `}
`

export const IconMobile = styled.div`
  ${({ theme }) => css`
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
