import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`
      flex-direction: row;
      grid-gap: 1.5rem;
    `}
`
export type BigNumberProps = { isActive: boolean }
export const BigNumber = styled.h2<BigNumberProps>`
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.primary : theme.colors.lightGray};
    font-weight: ${theme.font.light};
    font-size: 6rem;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    > svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
  `}
`
export const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`
      align-items: flex-start;
      grid-gap: 0.2rem;
    `}
`
