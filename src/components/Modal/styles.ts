import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    z-index: ${theme.layers.modal};
    position: relative;
    background: ${theme.gradients.grayGradient};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xsmall}; ;
  `}
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.15rem;
    font-weight: ${theme.font.semiBold};
    text-transform: uppercase;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Alert = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    z-index: ${theme.layers.base};
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  max-width: 20rem;
  padding-right: 2rem;
`
