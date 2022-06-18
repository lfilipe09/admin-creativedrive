import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
  disabled: boolean
} & Pick<ButtonProps, 'minimalButton' | 'borderButton' | 'iconGrey'>

const wrapperModifiers = {
  minimalButton: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.lightGray};
  `,
  borderButton: (theme: DefaultTheme) => css`
    border: 1.5px solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  withIcon: (theme: DefaultTheme, iconGrey: boolean | undefined) => css`
    svg {
      color: ${iconGrey ? theme.colors.lightGray : theme.colors.primary};
      &:hover {
        color: ${darken(
          0.2,
          iconGrey ? theme.colors.lightGray : theme.colors.primary
        )};
      }
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    color: ${darken(0.5, theme.colors.white)};
    svg {
      color: ${darken(0.2, theme.colors.primary)};
    }
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    hasIcon,
    minimalButton,
    borderButton,
    iconGrey,
    disabled
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${theme.colors.white};
    font-weight: ${theme.font.semiBold};
    border: 0;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: ${theme.font.family};
    grid-gap: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${darken(0.5, theme.colors.white)};
      svg {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
    ${!!hasIcon && wrapperModifiers.withIcon(theme, iconGrey)};
    ${!!minimalButton && wrapperModifiers.minimalButton(theme)};
    ${!!borderButton && wrapperModifiers.borderButton(theme)};
    ${!!disabled && wrapperModifiers.disabled(theme)}
  `}
`
