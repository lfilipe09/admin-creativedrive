import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type SizeProps = { size: 'small' | 'big' }

export type WrapperProps = { isText: boolean }

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isText }) => css`
    margin-top: ${isText ? '0' : '1.3rem'};
    height: 100%;
    background: ${theme.gradients.grayGradient};
    padding: 0.7rem 0.5rem;
    border-radius: ${theme.border.radius};
  `}
`

export const ChildrenWrapper = styled.main<SizeProps>`
  ${({ size }) => css`
    padding: ${size === 'big' ? '1rem 0' : '0'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-transform: uppercase;
    font-weight: ${theme.font.semiBold};
    letter-spacing: 0.05rem;
    font-size: ${theme.font.sizes.small};
    margin-bottom: 0.5rem;
    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Icon = styled.div<SizeProps>`
  ${({ theme, size }) => css`
    padding: ${size === 'big' ? '0.5rem 1rem' : '0 1rem'};
    > svg {
      color: ${theme.colors.white};
    }
    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const ButtonGroup = styled.div<SizeProps>`
  ${({ size }) => css`
    padding: ${size === 'big' ? '0.5rem 1rem' : '0 1rem'};
    display: flex;
    justify-content: flex-end;
    grid-gap: 3rem;
    ${media.lessThan('medium')`
      padding-right: 0.5rem;
    `}
  `}
`
