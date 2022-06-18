import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 22rem;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid ${theme.colors.lightGray};
  `}
`

export const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.2rem;
`

export const Image = styled.img`
  width: 4rem;
`

export const Date = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
    padding: 1rem;
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
  `}
`

export const Role = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
`

export const Email = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Activity = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
`
