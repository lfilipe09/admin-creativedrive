import styled, { css, DefaultTheme } from 'styled-components'

export const DropdownParentWrapper = styled.div`
  position: relative;
`

const DropdownLabelWrapperModifier = {
  minimal: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    border: 1px solid ${theme.colors.darkGray};
  `
}

type DropdownLabelWrapperProps = {
  minimal?: boolean
  dropdownHeight: string
  isOpen: boolean
}

export const DropdownLabelWrapper = styled.button<DropdownLabelWrapperProps>`
  ${({ theme, minimal, dropdownHeight, isOpen }) => css`
    display: flex;
    z-index: 20;
    align-items: center;
    width: 100%;
    grid-gap: 3rem;
    cursor: pointer;
    justify-content: space-between;
    background: ${theme.gradients.grayGradient};
    border-top-left-radius: ${dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border-top-right-radius: ${dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border-bottom-left-radius: ${isOpen
      ? '0'
      : dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border-bottom-right-radius: ${isOpen
      ? '0'
      : dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border: 0;
    border-bottom: ${isOpen ? `0.5px solid ${theme.colors.gray}` : 0};
    margin-bottom: ${isOpen ? '-0.5px' : 0};
    transition: border-bottom-right-radius 0.5s ease,
      border-bottom-left-radius 0.5s ease, border-bottom 0.5s ease;
    padding: ${dropdownHeight == 'big' ? '0.6rem' : '0'}
      ${dropdownHeight == 'big' ? theme.spacings.xsmall : '0.5rem'};
    ${minimal && DropdownLabelWrapperModifier.minimal(theme)}
  `}
`

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
type DropdownTextWrapperProps = { dropdownHeight: string }
export const DropdownTextWrapper = styled.div<DropdownTextWrapperProps>`
  ${({ theme, dropdownHeight }) => css`
    color: ${theme.colors.white};
    display: flex;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${dropdownHeight == 'big' ? theme.spacings.xxsmall : '0.3rem'} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    cursor: pointer;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    color: ${theme.colors.gray};
    & > svg {
      width: 100%;
    }
  `}
`

export const ArrowIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    color: ${theme.colors.gray};
    & > svg {
      width: 100%;
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    & > svg {
      color: ${theme.colors.primary};
    }
  `}
`

type DropdownPanelProps = {
  minimal?: boolean
  dropdownHeight: string
  isOpen: boolean
}

export const DropdownPanel = styled.div<DropdownPanelProps>`
  ${({ theme, minimal, dropdownHeight, isOpen }) => css`
    position: absolute;
    z-index: ${theme.layers.overlay};
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    cursor: pointer;
    background: ${theme.gradients.grayGradient};
    border-bottom-left-radius: ${dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border-bottom-right-radius: ${dropdownHeight == 'big'
      ? theme.border.radius
      : '0.3rem'};
    border: 0;
    transform: ${isOpen
      ? 'translateY(0)'
      : dropdownHeight === 'big'
      ? 'translateY(-4rem)'
      : 'translateY(-1rem)'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    opacity: ${isOpen ? '100%' : '0%'};
    transition: transform 0.5s ease, visibility 0.5s ease, opacity 0.5s ease;
    ${minimal && DropdownLabelWrapperModifier.minimal(theme)}
  `}
`

type OptionLineProps = { dropdownHeight: string }

export const OptionLine = styled.button<OptionLineProps>`
  ${({ theme, dropdownHeight }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding: ${dropdownHeight == 'big' ? '1.5rem' : '0.3rem'}
      ${dropdownHeight == 'big' ? theme.spacings.xsmall : '0.5rem'};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    :not(:first-child) {
      border-top: 0.5px solid ${theme.colors.gray};
    }
    :hover {
      color: ${theme.colors.primary};
    }
    width: 100%;
    outline: none;
    background: transparent;
  `}
`
