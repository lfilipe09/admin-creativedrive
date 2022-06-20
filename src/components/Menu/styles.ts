import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuListWrapper = styled.ul`
  display: flex;
  grid-gap: 4rem;
`

export const MenuList = styled.li``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.primary};
      &::after {
        content: '';
        position: absolute;
        top: 2rem;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
export type MenuLinkButtonProps = { isPrimary: boolean }
export const MenuLinkButton = styled.button<MenuLinkButtonProps>`
  ${({ theme, isPrimary }) => css`
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: ${theme.font.family};
    cursor: pointer;
    border: 0;
    background: transparent;
    color: ${isPrimary ? theme.colors.primary : theme.colors.white};
    &:hover {
      color: ${theme.colors.primary};
      &::after {
        content: '';
        position: absolute;
        top: 2rem;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const Logo = styled.img`
  width: 10rem;
`

export const FixedMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;
  position: fixed;
  bottom: 1.5rem;
  width: 100%;
  left: 0;
`

export const FixedMenuItem = styled.nav`
  ${({ theme }) => css`
    display: flex;
    grid-gap: 2rem;
    background: ${theme.gradients.grayGradient};
    border-radius: ${theme.border.radius};
    padding: 0.6rem 2rem;
  `}
`

export const FixedMenuLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 0.4rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const FixedMenuButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    border: 0;
    background: transparent;
    font-family: ${theme.font.family};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 0.4rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const PlusIcon = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: 1rem;
    background-color: ${theme.colors.primary};
    border-radius: 100%;
  `}
`
