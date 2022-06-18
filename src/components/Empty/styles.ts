import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 18rem;
`

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    text-align: center;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`

export const Image = styled.img`
  width: 11rem;
`
