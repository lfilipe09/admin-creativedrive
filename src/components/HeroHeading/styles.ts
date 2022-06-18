import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    letter-spacing: 0.6rem;
    > span {
      color: ${theme.colors.gray};
    }
    ${media.lessThan('medium')`
      text-align: center;
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
